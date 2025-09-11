{
  // 선언 병합 => 타입 별칭 안됨
  interface User {
    name: string;
  }
  interface User {
    age: number;
  }

  // enum 열거형 => 선언 병합 가능. 단, 값이 달라야 함.
  enum Direction {
    UP,
    DOWN,
  }

  enum Direction {
    RIGHT = 2,
    LEFT,
  }
}
{
  // 조건부 타입 (삼항 연산자와 비슷함)
  // T extends U ? X : Y
  type IsString<T> = T extends string ? "Yes" : "No";
  type A = IsString<string>; // "Yes"
  type B = IsString<number>; // "No"
}
{
  type MyType = "a" | "b" | "c";

  // 예제 1: "b를 제외한 나머지 타입 변환"
  type Result = Exclude<MyType, "b">;
}
{
  // 실제 Exclude 유틸리티 타입은 아래처럼 구현되어 있음
  // type Exclude<"a" | "b" | "c", "b"> = "a" | "b" | "c" extends "b" ? never : T;
  // | "a" extends "b" ? never : T -> T
  // | "b" extends "b" ? never : T -> never
  // | "c" extends "b" ? never : T -> T
  // => "a" | never | "c" => never은 삭제
  // "a" | "c"

  type MyExclude<T, U> = T extends U ? never : T;
  type MyType = "a" | "b" | "c";
  type Result = MyExclude<MyType, "b">;
}
