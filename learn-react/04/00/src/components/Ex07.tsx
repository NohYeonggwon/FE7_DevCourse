export default function Ex07({ name = "홍길동" }: { name?: string }) {
  return (
    <>
      <h1>Ex07</h1>
      <p>{name}</p>
    </>
  );
}
