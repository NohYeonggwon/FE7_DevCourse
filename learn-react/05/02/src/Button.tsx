export default function Button({
  handlerClick1,
}: {
  handlerClick1: () => void;
}) {
  return (
    <>
      <button onClick={handlerClick1}>매개변수x</button>
    </>
  );
}
