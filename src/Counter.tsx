type Props = {
  value: number;
  onIncrement: () => void;
};

export default function Counter({ value, onIncrement }: Props) {
  return <button onClick={onIncrement}>{value}</button>;
}
