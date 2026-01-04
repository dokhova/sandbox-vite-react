type TripDetailsProps = {
  etaMin?: number;
  price?: number;
};

export function TripDetails({ etaMin = 12, price = 8.4 }: TripDetailsProps) {
  return (
    <section className="card">
      <h2>Trip details</h2>

      <p className="muted">ETA: {etaMin} min</p>
      <p className="muted">Price: €{price.toFixed(2)}</p>

      <p className="muted" style={{ marginTop: 10 }}>
        This is a separate block because details often update (time, price).
      </p>
    </section>
  );
}
