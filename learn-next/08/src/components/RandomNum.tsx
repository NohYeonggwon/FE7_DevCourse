import { cacheLife } from "next/cache";

export default async function RandomNumber() {
  "use cache";
  cacheLife("seconds");
  const res = await fetch("http://localhost:4000/random");
  const randomNumber = await res.json();
  return (
    <>
      <h1>{randomNumber}</h1>
    </>
  );
}
