import CountButtons from "./CountButtons";
import CountDisplay from "./CountDisplay";

export default function Count() {
  console.log("Count render");
  return (
    <>
      <CountDisplay />
      <CountButtons />
    </>
  );
}
