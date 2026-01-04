import { MiniPlayer } from "./MiniPlayer";

type RelaxationModalProps = {
  open: boolean;
  onClose: () => void;
};

export function RelaxationModal({ open, onClose }: RelaxationModalProps) {
  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.55)",
        display: "grid",
        placeItems: "center",
        padding: 20,
      }}
      onClick={onClose}
    >
      <div
        className="card"
        style={{ width: "min(520px, 100%)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 12,
          }}
        >
          <h2 style={{ margin: 0 }}>Relax</h2>

          <button className="btn" onClick={onClose}>
            Close
          </button>
        </div>

        <p className="muted" style={{ marginTop: 10 }}>
          This modal opens from App state. Click outside or press Close.
        </p>

        <MiniPlayer />
      </div>
    </div>
  );
}
