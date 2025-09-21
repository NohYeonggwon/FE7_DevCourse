// useEffect 훅
// 컴포넌트의 사이드 이펙트 side effect 를 처리하기 위한 훅

import { useEffect, useState } from "react";
import Interval from "./components/Interval";

// 사이드 이텍드란?
// 데이터 가져오기, DOM 조작, 이벤트 등록/해제, 타이머 설정/해제 ...
// 실제 렌더링을 위한 동작을 제외한, 모든 나머지 코드들을 사이드 이펙트.

// 생명주기
// 컴포넌트가 생성, 수정, 삭제 기준으로 동작!
export default function App() {
  const [count, setCount] = useState(0);

  // 컴포넌트가 생성, 수정, 삭제될 때 코드 실행
  useEffect(() => {
    // 사이드 이펙트를 처리하기 위한 코드 작성
    console.log("App");
  }, [count]);
  return (
    <>
      <h1>count: {count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>클릭</button>
      {count === 0 && <Interval />}
    </>
  );
}
