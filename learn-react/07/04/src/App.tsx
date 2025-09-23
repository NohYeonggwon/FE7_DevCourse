import { createContext, useCallback, useMemo, useState } from "react";
import Page from "./components/Page";

// 전역 상태 관리
// 1. Context Api
// 1.1. 컨텍스트 객체를 생성해야 함 -> createContext
// 1.2. 컨텐츠스의 범위를 지정해야 함 -> <컨텍스트객체>공금범위</컨텍스트객체>
// 1.3. 데이터를 공급 -> 컨텍스트에 value 속성을 사용
// 1.4. 시용

// 2. Redux Toolkit
// 3. Zustand (주스탄드, 저스탠드, 저스탄드)
// 4. Mobx, recoil ...

type CounterContextType = {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
};

// eslint-disable-next-line react-refresh/only-export-components
export const CounterContext = createContext<CounterContextType | null>(null);

// => null 대신 사용
// export const CounterContext = createContext<CounterContextType>({
//   count: 0,
//   increment: () => {},
//   decrement: () => {},
//   reset: () => {},
// });

export default function App() {
  const [count, setCount] = useState(0);

  /* const increment = () => {
    console.log("increment");
    setCount((count) => count + 1);
  };

  const decrement = () => {
    console.log("decrement");
    setCount((count) => count - 1);
  };

  const reset = () => {
    console.log("reset");
    setCount(0);
  }; */

  const increment = useCallback(() => {
    console.log("increment");
    setCount((count) => count + 1);
  }, []);

  const decrement = useCallback(() => {
    console.log("decrement");
    setCount((count) => count - 1);
  }, []);

  const reset = useCallback(() => {
    console.log("reset");
    setCount(0);
  }, []);

  /* const value = { count, increment, decrement, reset } */

  // value 자체도 useMemo로 묶어야 함
  const value = useMemo(
    () => ({ count, increment, decrement, reset }),
    [count, increment, decrement, reset]
  );

  return (
    <>
      <CounterContext value={value}>
        <Page />
      </CounterContext>
    </>
  );
}
