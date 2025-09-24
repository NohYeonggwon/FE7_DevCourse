import { useConfigureStore } from "../stores/configureStore";

export default function ConfigButtons() {
  const setIsDark = useConfigureStore((state) => state.setIsDark);
  const setIsLight = useConfigureStore((state) => state.setIsLight);
  console.log("render");
  return (
    <>
      <button onClick={setIsDark}>Dark</button>
      <button onClick={setIsLight}>Light</button>
    </>
  );
}
