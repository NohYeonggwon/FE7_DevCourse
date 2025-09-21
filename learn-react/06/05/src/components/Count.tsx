import CountButton from "./CountButton";
import CountDisplay from "./CountDisplay";

type CountProps = {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
  onReset: () => void;
};

export default function Count({
  count,
  onIncrement,
  onDecrement,
  onReset,
}: CountProps) {
  return (
    <>
      <CountDisplay count={count} />
      <CountButton
        onIncrement={onIncrement}
        onDecrement={onDecrement}
        onReset={onReset}
      />
    </>
  );
}
