import Link from "next/link";

async function getRandomNumber() {
  const res = await fetch("http://localhost:4000/random", {
    cache: "force-cache",
    next: { revalidate: 10 },
  });
  const randomNum = await res.json();
  return randomNum;
}

export async function generateMetadata() {
  const randomNum = await getRandomNumber();
  return {
    title: `${randomNum}`,
  };
}

// export const dynamic = "force-dynamic"; // 빌드 방식이 SSR 렌더링 방식
// export const revalidate = 1; // 재검증 0초 => 빌드 방식이 ISR 렌더링 방식
export default async function HomePage() {
  const randomNum = await getRandomNumber();
  return (
    <>
      <h1>HomePage: {randomNum}</h1>
      <Link href={"/about"} prefetch={true}>
        About
      </Link>
    </>
  );
}

// a -> /item/1, /item/1
//   요청               Request Memoization            Data Cache        Data Source
//   --->     -------->       MISS      -------------->   MISS   -------->   HIT
//            <--------       SET       <--------------    SET    <--------
//   --->     -------->       HIT
//   <---     <--------

// b -> /item/1, /item/1
//   요청               Request Memoization            Data Cache        Data Source
//   --->     -------->       MISS      -------------->   MISS   -------->   HIT
//            <--------       SET
//   --->     -------->       HIT
//   <---     <--------
