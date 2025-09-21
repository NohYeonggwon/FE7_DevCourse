type CountButtonProps = {
  onIncrement: () => void;
  onDecrement: () => void;
  onReset: () => void;
};

export default function CountButton({
  onIncrement,
  onDecrement,
  onReset,
}: CountButtonProps) {
  return (
    <>
      <button onClick={onDecrement}>감소</button>
      <button onClick={onReset}>0</button>
      <button onClick={onIncrement}>증가</button>
    </>
  );
}
