{
  // 타입별칭 type alias
  // 나만의 커스텀 타입을 만들 수 있음
  type Person = {
    name: string;
    age: number;
    gender: string;
  };

  const user1: Person = {
    name: "park",
    age: 20,
    gender: "male",
  };
}
{
  // 1. 기본 타입 별칭
  type ID = string | number;

  const userId: ID = "asd";
}
{
  // 2. 객체 타입 별칭
  type User = {
    name: string;
    readonly age?: number;
  };

  type Person = {
    [key: string]: string | number;
  };
}
{
  // 3. 함수 타입 별칭
  type AddFun = (a: number, b: number) => number;
  const add: AddFun = (a, b) => a + b;
}
{
  // 4. 튜플 타입 별칭
  type Point = [number, number];
  const point: Point = [10, 20];
}
{
  // 5. 타입 확장
  // 5.1 유니온 타입
  // 5.2 인터섹션 타입
  type StringID = string;
  type NumberID = number;
  type ID = StringID | NumberID;

  type Nameable = {
    name: string;
  };
  type Ageable = {
    name: string;
  };

  type Person = Nameable & Ageable;
}
{
  // 6. 리터럴 타입 별칭
  type Direction = "UP" | "RIGHT" | "LEFT" | "DOWN";
  const direct: Direction = "LEFT";
}
