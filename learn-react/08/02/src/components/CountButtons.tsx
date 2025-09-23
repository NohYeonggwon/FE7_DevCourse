import { useDispatch } from "react-redux";
import type { AppDispatch } from "../store/store";
import { decrement, increment, reset } from "../store/slice/counterSlice";

export default function CountButtons() {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <>
      <button onClick={() => dispatch(decrement())}>감소</button>
      <button onClick={() => dispatch(reset())}>리셋</button>
      <button onClick={() => dispatch(increment())}>증가</button>
    </>
  );
}
