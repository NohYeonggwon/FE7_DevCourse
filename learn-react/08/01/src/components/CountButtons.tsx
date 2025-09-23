import { useContext } from "react";
import { CounterActionContext } from "../contexts/counter/counterContext";
import { ConfigActionContext } from "../contexts/configure/configureContext";

export default function CountButtons() {
  const { increment, reset, decrement } = useContext(CounterActionContext)!;
  const { darkMode, lightMode } = useContext(ConfigActionContext)!;
  console.log("Render");
  return (
    <>
      <button onClick={increment}>증가</button>
      <button onClick={reset}>리셋</button>
      <button onClick={decrement}>감소</button>
      <br />
      <br />
      <button onClick={darkMode}>다크모드</button>
      <button onClick={lightMode}>라이트모드</button>
    </>
  );
}
