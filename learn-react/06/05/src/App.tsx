import { useState } from "react";
import Count from "./components/Count";
import CountOutSide from "./components/CountOutSide";

export default function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount((count) => count + 1);
  const handleDecrement = () => setCount((count) => count - 1);
  const handleReset = () => setCount(0);

  return (
    <>
      <Count
        count={count}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onReset={handleReset}
      />
      <CountOutSide count={count} />
    </>
  );
}
