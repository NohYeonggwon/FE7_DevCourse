import styled from "styled-components"; // "@emotion/styled" 이모션에서 스타일 컴포넌트 사용 가능
import { css } from "@emotion/css"; /* 2. 이모션 */
import { button } from "./style.css";

/* 1. 스타일-컴포넌트 */
const HelloWorld = styled.div`
  color: red;
  text-decoration: underline;
  &:hover {
    color: blue;
  }
`;

export default function App() {
  return (
    <>
      <HelloWorld>Hello, World styled-component</HelloWorld>
      <div
        className={css`
          color: brown;
          text-decoration: underline;
          &:hover {
            color: blue;
          }
        `}
      >
        Hello, World emotion
      </div>
      <button className={button}>버튼</button>
    </>
  );
}
