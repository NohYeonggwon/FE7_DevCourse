import Profile from "./components/Profile";
import User from "./components/User";

export default function App() {
  const userObj = {
    name: "kim",
    age: 20,
  };

  let a = 1;
  const clickHandler = () => {
    console.log(a++);
  };
  return (
    <>
      <User userObj={userObj} clickHandler={clickHandler} />
      <Profile {...userObj} />
    </>
  );
}
