import { useEffect } from "react";
import CountButtons from "./CountButtons";
import CountDisplay from "./CountDisplay";
import { useCounterStore } from "../stores/counterStore";

// useCounterStore.subscribe(구독할 상태, 구독중인 상태가 변경되면 호출될 함수);
export default function Count() {
  useEffect(() => {
    useCounterStore.subscribe(
      (state) => state.count,
      (newCount, prevCount) => {
        console.log(`count 변경됨: ${prevCount} -> ${newCount}`);
      }
    );
  }, []);
  return (
    <>
      <CountDisplay />
      <CountButtons />
    </>
  );
}
