// 리액트에서 상태(state)
// 컴포넌트 내부에서 변경 가능한 데이터를 의미합니다.
// 사용자 입력, 서버 응답, UI 상호작용 등으로 인해 값이 변경될 수 있다.
// 만약 값이 변경되면 컴포넌트가 자동으로 다시 렌더링되어 화면에 새로운 값이 반영됨.

// import { useRef /* , useState  */ } from "react";
import { useRef, useState } from "react";
import Input from "./components/Input";

// 리액트 훅 16.8
// 함수형 컴포넌트에서도 상태(state)나 생명주기(lifecycle) 같은 리액트 기능을 사용할 수 있게 해주는 특별한 함수
// useState(), useRef(), useReducer(), useEffect() ...

/* export default function App() {
  const [user, setUser] = useState({ name: "kim", age: 20 }); // [상태변수, 상태업데이트함수]
  const handleUpdate = () => {
    // 값 => 변경해야되는 상태 값이 이전 상태와 상관이 없다면
    setUser({
      name: "park",
      age: 55,
    });

    // 콜백 => 변경해야되는 상태 값이 이전 상태와 상관이 있다면
    // user.age = 30;
    // const newUser = structuredClone(user);
    // setUser(newUser);

    setUser((user) => ({ ...user, age: 40 }));
  };
  return (
    <>
      <h1>Name: {user.name} </h1>
      <h1>Age: {user.age} </h1>
      <button onClick={handleUpdate}>클릭</button>
    </>
  );
} */

// =============== useState + Form ===============

/* // input, textarea 실시간 입력 보여주기
// onChange (React) -> onInput + onChange (DOM)
export default function App() {
  const [text, setText] = useState(""); // [상태변수, 상태업데이트함수]
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };
  return (
    <>
      <pre>{text}</pre>
      <textarea
        onChange={handleChange}
        placeholder="이메일을 입력하세요"
      ></textarea>
    </>
  );
} */

/* // select box
export default function App() {
  const [text, setText] = useState("apple"); // [상태변수, 상태업데이트함수]
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setText(e.target.value);
  };
  return (
    <>
      <pre>{text}</pre>
      <select onChange={handleChange}>
        <option value="apple">apple</option>
        <option value="banana">banana</option>
        <option value="orange">orange</option>
      </select>
    </>
  );
} */

/* // checkbox
export default function App() {
  const [value, setValue] = useState(false); // [상태변수, 상태업데이트함수]
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.checked);
  };
  return (
    <>
      <pre>{value ? "동의함" : "동의하지 않음"}</pre>
      <div>
        <label htmlFor="chk">
          <input type="checkbox" onChange={handleChange} /> 동의
        </label>
      </div>
    </>
  );
}
 */

/* // radio
export default function App() {
  const [radio, setRadio] = useState("male"); // [상태변수, 상태업데이트함수]
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRadio(e.target.value);
  };
  return (
    <>
      <pre>{radio}</pre>
      <div>
        <input
          type="radio"
          name="gender"
          defaultChecked
          onChange={handleChange}
          value="male"
        />{" "}
        남자
      </div>
      <div>
        <input
          type="radio"
          name="gender"
          onChange={handleChange}
          value="female"
        />{" "}
        여자
      </div>
    </>
  );
}
 */

// useRef()
// 리액트에서 값을 기억하거나 DOM 요소에 접근
// current 속성을 가지는 객체를 반환
// current 속성으로 우리가 원하는 값을 저장 가능 / DOM 요소에 접근도 가능

// 폼 요소를 제어하는 방법
// 1. 제어 컨트롤러 - 실시간 입력값 체크
// 입력 값이 리액트의 상태에 의해서 제어되는 컴포넌트
// useState + onChange

// 2. 비제어 컨트롤러 - 실시간 입력값 체크가 불가능
// 입력값이 DOM 자체에서 관리되는 컴포넌트
// useRef + current

/* export default function App() {
  const textRef = useRef<HTMLInputElement>(null); // current 속성이 포함된 객체가 반환
  const checkboxRef = useRef<HTMLInputElement>(null); // current 속성이 포함된 객체가 반환
  const maleRef = useRef<HTMLInputElement>(null); // current 속성이 포함된 객체가 반환
  const femaleRef = useRef<HTMLInputElement>(null); // current 속성이 포함된 객체가 반환
  const colorRef = useRef<HTMLInputElement>(null); // current 속성이 포함된 객체가 반환
  const selectRef = useRef<HTMLSelectElement>(null); // current 속성이 포함된 객체가 반환
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(selectRef.current?.value);
    console.log(textRef.current?.value);
    console.log(colorRef.current?.value);
    console.log(checkboxRef.current?.checked);
    if (maleRef?.current?.checked) {
      console.log("남");
    } else if (femaleRef?.current?.checked) {
      console.log("여");
    } else {
      console.log("선택x");
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <select ref={selectRef}>
          <option value="apple">apple</option>
          <option value="banana`">banana</option>
          <option value="orange">orange</option>
        </select>
        <input type="text" ref={textRef} />
        <input type="color" ref={colorRef} />
        <input type="checkbox" ref={checkboxRef} />
        <input type="radio" name="gender" value="male" ref={maleRef} />
        남자
        <input type="radio" name="gender" value="female" ref={femaleRef} />
        여자
        <button type="submit">전송</button>
      </form>
    </>
  );
} */

export default function App() {
  const [email, setEmail] = useState("");
  const emailRef = useRef<HTMLInputElement>(null);
  const [pw, setPw] = useState("");
  const pwRef = useRef<HTMLInputElement>(null);
  const handleEmailUpdate = (value: string) => {
    setEmail(value);
  };
  const handlePwUpdate = (value: string) => {
    setPw(value);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(email);
    console.log(pw);
    if (email.trim() === "") {
      alert("이메일 입력하세요");
      if (emailRef.current) emailRef.current.focus();
    } else if (pw.trim() === "") {
      alert("비밀번호 입력하세요");
      if (pwRef.current) pwRef.current.focus();
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="이메일 입력"
          ref={emailRef}
          value={email}
          setValue={handleEmailUpdate}
        />
        <Input
          type="password"
          placeholder="비밀번호 입력"
          ref={pwRef}
          value={pw}
          setValue={handlePwUpdate}
        />
        <button>로그인</button>
      </form>
    </>
  );
}
