import Count from "./components/Count";
import Form from "./components/form";

// 리듀서 함수 -> 상태 업데이트 로직이 담겨있는 함수

export default function App() {
  // const [상태변수, 액션(리듀서)발생함수] = useReducer(리듀서함수, 초깃값)
  return (
    <>
      {/* <h1>Count: {count}</h1>
      <button onClick={() => countDispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => countDispatch({ type: "RESET" })}>0</button>
      <button onClick={() => countDispatch({ type: "DECREMENT" })}>-</button> */}
      <Count />
      <Form />
    </>
  );
}
