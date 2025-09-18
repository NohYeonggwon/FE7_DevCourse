/* import Button from "./Button"; */

export default function App() {
  const handlerClick1 = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    console.log(e);
    alert("클릭!");
  };

  const handlerClick2 = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    name: string
  ) => {
    e.currentTarget.style.color = "red";
    alert(`${name} 클릭!`);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <button onClick={(e) => handlerClick2(e, "kim")}>매개변수o</button>
      </form>
      {/* 함수 매개변수 전달 안할 때 */}
      <button onClick={handlerClick1}>매개변수x</button>
      {/* 함수 매개변수 전달 할 때 */}
      <button onClick={(e) => handlerClick2(e, "kim")}>매개변수o</button>

      {/* <Button handlerClick1={handlerClick1}></Button> */}
    </>
  );
}
