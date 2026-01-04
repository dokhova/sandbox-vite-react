import { useRef, useState } from "react";

export function MiniPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  function toggle() {
    const el = audioRef.current;
    if (!el) return;

    if (el.paused) {
      el.play();
      setIsPlaying(true);
    } else {
      el.pause();
      setIsPlaying(false);
    }
  }

  function stop() {
    const el = audioRef.current;
    if (!el) return;

    el.pause();
    el.currentTime = 0;
    setIsPlaying(false);
  }

  return (
    <div style={{ marginTop: 14 }}>
      <p className="muted" style={{ marginBottom: 10 }}>
        Mini player (public/mp3/relax.mp3)
      </p>

      <audio ref={audioRef} src="/mp3/relax.mp3" preload="none" />

      <div style={{ display: "flex", gap: 10 }}>
        <button className="btn" onClick={toggle}>
          {isPlaying ? "Pause" : "Play"}
        </button>

        <button className="btn" onClick={stop}>
          Stop
        </button>
      </div>
    </div>
  );
}
