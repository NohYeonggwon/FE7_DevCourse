import { useDispatch } from "react-redux";
import { setIsDark, setIsLight } from "../store/slice/configureSlice";
import type { AppDispatch } from "../store/store";

export default function ConfigButtons() {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <>
      <button onClick={() => dispatch(setIsDark())}>Dark</button>
      <button onClick={() => dispatch(setIsLight())}>Light</button>
    </>
  );
}
