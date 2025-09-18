import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    // setCount(10); // setCount(값)
    setCount((count) => count + 1); // setCount(콜백함수)
  };

  const [name, setName] = useState("");
  return (
    <>
      <h1>count: {count}</h1>
      <button onClick={handleIncrement}>증가</button>
      <h1>name: {name}</h1>
      <button onClick={() => setName("kim")}>이름변경</button>
    </>
  );
}
