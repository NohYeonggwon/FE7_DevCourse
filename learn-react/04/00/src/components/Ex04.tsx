export default function Ex04(props: { obj: { name: string; age: number } }) {
  const { name, age } = props.obj;
  return (
    <>
      <h1>Ex04</h1>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </>
  );
}
