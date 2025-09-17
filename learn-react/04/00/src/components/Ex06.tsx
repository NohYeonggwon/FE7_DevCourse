export default function Ex06({ clickHandler }: { clickHandler: () => void }) {
  return (
    <>
      <h1>Ex06</h1>
      <button onClick={clickHandler}>버튼</button>
    </>
  );
}
