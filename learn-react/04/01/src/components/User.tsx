export default function User({
  userObj: { name, age },
  clickHandler,
}: UserProps) {
  return (
    <>
      <h1>User Component</h1>
      <h1>Name: {name}</h1>
      <h1>Age: {age}</h1>
      <button onClick={clickHandler}>클릭</button>
    </>
  );
}
