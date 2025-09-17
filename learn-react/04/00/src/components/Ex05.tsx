export default function Ex05({ isLoggedIn }: { isLoggedIn: boolean }) {
  return (
    <>
      <h1>Ex05</h1>
      <p>{isLoggedIn ? "로그인 됨" : "로그인 안됨"}</p>
    </>
  );
}
