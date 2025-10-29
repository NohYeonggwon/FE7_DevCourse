import RandomNumber from "@/components/RandomNumber";
import RandomNum from "@/components/RandomNum";
import { Suspense } from "react";

export default async function Page() {
  return (
    <>
      {/* PPR */}
      <h1>RandomNumber</h1>
      <Suspense fallback={null}>
        <RandomNum />
      </Suspense>
      <Suspense fallback={null}>
        <RandomNumber />
      </Suspense>
    </>
  );
}
