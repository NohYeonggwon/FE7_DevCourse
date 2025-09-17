export default function Ex03({ fruits }: { fruits: string[] }) {
  return (
    <>
      <h1>Ex03</h1>
      <ul>
        <li>{fruits[0]}</li>
        <li>{fruits[1]}</li>
        <li>{fruits[2]}</li>
      </ul>
    </>
  );
}
