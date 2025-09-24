import { useConfigureStore } from "../stores/configureStore";

export default function ConfigDisplay() {
  const theme = useConfigureStore((state) => state.theme);
  return (
    <>
      <h1>Theme: {theme}</h1>
    </>
  );
}
