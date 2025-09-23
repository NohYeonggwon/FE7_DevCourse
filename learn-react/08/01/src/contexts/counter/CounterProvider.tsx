import { useMemo, useState } from "react";
import { CounterActionContext, CounterContext } from "./counterContext";

// ***Provider()
export default function CounterProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [count, setCount] = useState(0);
  const increment = () => setCount((count) => count + 1);
  const reset = () => setCount(0);
  const decrement = () => setCount((count) => count - 1);
  const counterActionValue = useMemo(
    () => ({
      increment,
      reset,
      decrement,
    }),
    []
  );

  return (
    <>
      <CounterContext value={{ count }}>
        <CounterActionContext value={counterActionValue}>
          {children}
        </CounterActionContext>
      </CounterContext>
    </>
  );
}
