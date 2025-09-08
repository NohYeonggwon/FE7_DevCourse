// 타입 추론
// 타입을 명시하지 않아도, 컴파일러가 값, 문맥, 흐름을 보고 적절한 타입을 자동으로 결정하는 기능
// 기본 자료형 -> 타입추론
// 참조 자료형 -> 타입명시

// 함수에 타입을 지정하는 방법
// 함수의 매개 변수와 반환 값의 타입을 지정
// function(n1: 매개변수타입):반환값의 타입{}
{
  function sum(n1: number, n2: number): number {
    return n1 + n2;
  }
  sum(1, 2);

  function printValue(value: string): void {
    // 개발자가 의도하면 반환할 수 있지만, 반환되지 않도록 지정
    console.log(value);
  }
  printValue("Hello");

  function throwError(msg: string): never {
    // 절대 값이 반환되지 않을 때, 사용
    throw new Error(msg);
  }
}
{
  // 함수 표현식
  // (1) - 함수 표현식 타입 지정하는 방법
  const sum1 = function sum(n1: number, n2: number): number {
    return n1 + n2;
  };

  // (2) - 변수에 함수 타입을 지정하는 방법
  const sum2: (n1: number, n2: number) => number = function sum(n1, n2) {
    return n1 + n2;
  };

  // (3) - 둘 다 => 비추
  const sum3: (n1: number, n2: number) => number = function sum(
    n1: number,
    n2: number
  ): number {
    return n1 + n2;
  };
}
{
  // 화살표 함수
  // (1) - 함수 표현식 타입 지정하는 방법
  const sum = (n1: number, n2: number): number => {
    return n1 + n2;
  };
  // (2) - 변수에 함수 타입을 지정하는 방법
  const sum2: (n1: number, n2: number) => number = (n1, n2) => {
    return n1 + n2;
  };

  // (3) - 둘 다 => 비추
  const sum3: (n1: number, n2: number) => number = (
    n1: number,
    n2: number
  ): number => {
    return n1 + n2;
  };
}
{
  // 옵셔널 파라미터
  function sum(n1: number, n2?: number): number {
    return n1 + (n2 || 0);
  }
  sum(1);
  sum(1, 2);
}
{
  // 매개변수가 콜백함수일 때
  // function log(msg: string) {
  //   console.log(msg);
  // }

  function printValue(callback: (msg: string) => void): void {
    callback("Hello");
  }

  printValue((msg: string) => {
    console.log(msg);
  });

  function createMultiplier1(factor: number): (num: number) => number {
    return (num) => num * factor;
  }

  const createMultiplier2: (factor: number) => (num: number) => number =
    (factor) => (num) =>
      num * factor;

  const multiplyByTwo = createMultiplier1(2);
  console.log(multiplyByTwo(5));
}
