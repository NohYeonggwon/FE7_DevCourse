// 조건부 렌더링
// 조건에 따라 서로 다른 콘텐츠 표시하는 방법

export default function App() {
  const isLogin = true;
  // 1. if
  /* if (isLogin) return <h1>로그인 되었습니다.</h1>;
  return <h1>로그인 되지 않았습니다.</h1>; */

  // 2. 삼항 연산자
  // return <>{isLogin ? <h1>로그인o</h1> : <h1>로그인x</h1>}</>;

  // 3. 논리 연산자 &&
  return (
    <>
      {isLogin && <h1>로그인o</h1>}
      {!isLogin && <h1>로그인x</h1>}
    </>
  );
}
