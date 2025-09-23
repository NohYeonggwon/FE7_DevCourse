import { useSelector } from "react-redux";
import type { RootState } from "../store/store";

export default function ConfigDisplay() {
  const theme = useSelector((state: RootState) => state.config.theme);
  return (
    <>
      <h1>Theme: {theme}</h1>
    </>
  );
}
