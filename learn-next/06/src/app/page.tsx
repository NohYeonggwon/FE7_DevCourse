// Next.js
// axios? x, tanstackquery x, SWR x
// fetch 사용: 웹 표준 API에서 제공하는 함수 => 웹 브라우저에서만 사용 가능
// => 클라이언트 전용 함수
// fetch() !== fetch()

import RandomNumber from "@/components/RandomNumber";

export default async function HomePage() {
  const res = await fetch("http://localhost:4000/random");
  const number = await res.json();
  return (
    <>
      <RandomNumber number={number} />
    </>
  );
}
