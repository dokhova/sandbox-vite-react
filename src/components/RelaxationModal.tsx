import { MiniPlayer } from "./MiniPlayer";
import { useEscapeKey } from "../hooks/useEscapeKey";
import { useLockBodyScroll } from "../hooks/useLockBodyScroll";

type RelaxationModalProps = {
  open: boolean;
  onClose: () => void;
};

export function RelaxationModal({
  open,
  onClose,
}: RelaxationModalProps) {
  // Закрытие по ESC
  useEscapeKey(open, onClose);

  // Блокируем скролл фона, пока модалка открыта
  useLockBodyScroll(open);

  // Если модалка закрыта — её вообще нет в DOM
  if (!open) return null;

  return (
    <div
      className="modalOverlay"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="card modalCard"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Заголовок */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 12,
          }}
        >
          <h2 style={{ margin: 0 }}>Relax</h2>

          <button
            className="btn"
            onClick={onClose}
          >
            Close
          </button>
        </div>

        <p className="muted" style={{ marginTop: 10 }}>
          This modal is controlled by App state.
          You can close it by clicking outside, pressing ESC,
          or using the button.
        </p>

        {/* Аудио-плеер */}
        <MiniPlayer />
      </div>
    </div>
  );
}
