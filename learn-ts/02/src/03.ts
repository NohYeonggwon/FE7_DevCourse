{
  // 함수 오버로딩
  // 오버로드 시그니처를 활용해서 매개변수와 반환값의 경우의 수를 좁히는 방법
  function sum(a: string, b: number): string;
  function sum(a: number, b: string): string;
  function sum(a: string, b: string): string;
  function sum(a: number, b: number): number; // 등등 내가 필요한 경우의 수를 오버로딩 할 수 있음
  function sum(a: number | string, b: number | string): number | string {
    if (typeof a === "number" && typeof b === "number") return a + b;
    else return `${a}${b}`;
  }
}
