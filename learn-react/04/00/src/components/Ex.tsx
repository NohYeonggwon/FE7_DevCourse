import Ex01 from "./Ex01";
import Ex02 from "./Ex02";
import Ex03 from "./Ex03";
import Ex04 from "./Ex04";
import Ex05 from "./Ex05";
import Ex06 from "./Ex06";
import Ex07 from "./Ex07";
import Ex08 from "./Ex08";
import Ex09 from "./Ex09";
import Content from "./ex09/Content";
import Footer from "./ex09/Footer";
import Header from "./ex09/Header";

export default function Ex() {
  const clickHandler = () => {
    alert("6번 문제!");
  };
  return (
    <div style={{ color: "white" }}>
      <Ex01 msg={"Hello World!"} /> <br />
      <Ex02 num={42} />
      <br />
      <Ex03 fruits={["Apple", "Banana", "Cherry"]} />
      <br />
      <Ex04 obj={{ name: "Alice", age: 30 }} />
      <br />
      <Ex05 isLoggedIn={false} />
      <br />
      <Ex06 clickHandler={clickHandler} />
      <br />
      <Ex07 name="123456" />
      <br />
      <Ex08 styled={{ fontSize: "50px", color: "red" }} />
      <br />
      <Ex09>
        <Header />
        <Content />
        <Footer />
      </Ex09>
    </div>
  );
}
