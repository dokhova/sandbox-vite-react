type DriverInfoProps = {
  name?: string;
  rating?: number;
  car?: string;
};

export function DriverInfo({
  name = "Alex",
  rating = 4.9,
  car = "Toyota Prius",
}: DriverInfoProps) {
  return (
    <section className="card">
      <h2>Driver</h2>
      <p className="muted">
        {name} · {rating} ★
      </p>
      <p className="muted">{car}</p>
    </section>
  );
}
