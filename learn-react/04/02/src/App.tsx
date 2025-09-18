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

      <Input type="text" placeholder={"아이디 입력"}></Input>
      <br />
      <Input type="password" placeholder={"비밀번호 입력"}></Input>
      <br />
      <Button type="button" disabled={false}>
        Add
      </Button>
      <br />
      <Button className="bg-[#ed4848]">Cancel</Button>
      <br />
      <br />
      <CheckBox>
        <span>
          I agree with <strong>terms</strong> and <strong>policies</strong>
        </span>
      </CheckBox>
      <br />
      <CheckBox>
        <span>
          I agree with <strong>the privacy policy</strong> and{" "}
          <strong>data usage</strong>
        </span>
      </CheckBox>
      <br />
    </div>
  );
}
