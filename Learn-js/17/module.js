// 모듈
// 파일 단위로 기능을 나누고 가져다 쓰기 위한 코드 묶음

// 장점, 러닝커브 낮추는 결정적인 역할을 함
// 언어 자체가 느슨함

// 단점, 그만큼 코드에 허점이 많아짐
"use strict"; // 엄격 모드

/* function sum(a, b) {
  return a + b;
}

function multiple(a, b) {
  return a * b;
}

export default sum;
export { multiple }; */

num = 10; // 선언 따로 안해도 알아서 해줌
console.log(1 + "2" + 3);

const obj = { a: 1, b: 2, c: 3 };
const { b, ...rest } = obj;
const value = Object.values(rest).reduce((acc, i) => acc + i, 0);
console.log(value);
