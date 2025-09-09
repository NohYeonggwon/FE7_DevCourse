{
  // 구조적 타이핑
  // 타입의 이름이나 선언이 아니라, 내부의 구조가 같으면 같은 타입으로 간주하는 방식
  const point: { x: number; y: number } = { x: 10, y: 20 };
  const position: { x: number; y: number } = point;
}
{
  //readonly => 한 번 정해지면 바꿀 수 없음
  const user: {
    readonly name: string;
    readonly age?: number;
  } = {
    name: "kim",
  };

  const numArr: readonly number[] = [1, 2, 3];
  const mixArr: readonly [number, string] = [10, "A"];
}
{
  // 인덱스 시그니처
  // 객체의 키와 값의 타입 패턴을 통해 타입을 정의하는 문법
  const user: {
    [key: string]:
      | string
      | number
      | ({ address: string } & { zipcode: string })
      | ((a: number, b: number) => number);
  } = {
    name: "kim",
    age: 20,
    obj: {
      address: "ddd",
      zipcode: "ddd",
    },
    sum: (a: number, b: number) => a + b,
  };

  user.gender = "male";
  user.address = "seoul";

  const person: {
    name: string;
    gender: string;
  } = {
    name: "kim",
    gender: "male",
  };
}
{
  const sum: (a: number, b: number) => number = (a, b) => a + b;
}
