/* import ButtonChild from "./components/ButtonChild";
import ButtonText from "./components/ButtonText"; */

import Button from "./components/html/Button";
import CheckBox from "./components/html/CheckBox";
import Input from "./components/html/Input";
import "./css/index.css";

export default function App() {
  /* const clickHandler = () => console.log("결제!"); */
  return (
    <div className="center">
      {/* <ButtonText text={"결제"} />
      <ButtonText text={"등록"} />
      <ButtonChild onClick={clickHandler}>Hi</ButtonChild> */}

      <Input placeholder={"입력"}></Input>
      <br />
      <Input placeholder={"하세요"}></Input>
      <br />
      <Button type="button" disabled={false}>
        Add
      </Button>
      <br />
      <Button className="bg-[#ed4848]">Cancel</Button>
      <br />
      <br />
      <CheckBox>I agree with terms and policies</CheckBox>
      <br />
      <CheckBox>I accept the privacy policy and data usage.</CheckBox>
      <br />
    </div>
  );
}
