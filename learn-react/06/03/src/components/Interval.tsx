import { useEffect } from "react";

export default function Interval() {
  useEffect(() => {
    // 클린업 함수 -> 컴포넌트가 제거될 때, 정리하는 코드 작성
    const interval = setInterval(() => {
      console.log("interval 코드 실행");
    }, 1000);
    return () => {
      clearInterval(interval);
      console.log("Interval 컴포넌트 제거");
    };
  }, []);
  return (
    <>
      <h1>Interval Component</h1>
    </>
  );
}
