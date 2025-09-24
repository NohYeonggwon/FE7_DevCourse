import { useCounterStore } from "../stores/counterStore";

export default function CountButtons() {
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);
  const reset = useCounterStore((state) => state.reset);
  const incrementByAmount = useCounterStore((state) => state.incrementByAmount);
  console.log("render");
  return (
    <>
      <button onClick={increment}>증가</button>
      <button onClick={reset}>리셋</button>
      <button onClick={decrement}>감소</button>
      <button onClick={() => incrementByAmount(10)}>10 증가</button>
    </>
  );
}
