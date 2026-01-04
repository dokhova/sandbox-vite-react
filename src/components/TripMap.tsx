type TripMapProps = {
  from?: string;
  to?: string;
};

export function TripMap({ from = "City Center", to = "Airport" }: TripMapProps) {
  return (
    <section className="card">
      <h2>Trip map</h2>

      <div
        style={{
          height: 140,
          borderRadius: 12,
          border: "1px dashed rgba(255,255,255,0.25)",
          display: "grid",
          placeItems: "center",
        }}
      >
        <p className="muted">Map placeholder</p>
      </div>

      <p className="muted" style={{ marginTop: 10 }}>
        {from} → {to}
      </p>
    </section>
  );
}
