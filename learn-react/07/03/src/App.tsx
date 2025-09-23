import { useState } from "react";
import A from "./components/A";

// 메모이제이션
// 한번 계산한 결과를 저장해 두었다가
// 같은 입력이 들어오면 다시 계산하지 않고 계산된 결과를 재사용하는 방식

// 방법1
// - 컴포넌트를 메모이제이션

// 컴포넌트 메모이제이션이 풀리는 순간
// - 컴포넌트의 전달된 props가 변경되면 메모이제이션 풀림
// - 자기 자신의 상태가 변경되면 메모이제이션이 풀림

// 애플리케이션을 처음 설계할 때부터 컴포넌트 최적화를 할 순 없다.
// 가장 마지막에, 문제가 되었을 경우에 컴포넌트 최적화 진행

// React.memo -> 컴포넌트 메모이제이션
// useCallback -> 함수를 메모이제이션
// useMemo -> 값을 메모이제이션
export default function App() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount((count) => count + 1);
  };
  console.log("App Rerendering");
  return (
    <>
      <h1>App Count: {count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>증가</button>
      <A handleIncrement={handleIncrement} />
    </>
  );
}
