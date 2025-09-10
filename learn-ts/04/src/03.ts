{
  // 인덱스 접근 타입 => 객체 타입에서 특정 키를 사용해 그 키의 값 타입을 추출하는 문법
  // 런타임에서 객체의 속성으로 값을 꺼내듯이, 타입차원에서 타입 속성으로 값의 타입을 꺼내는 것

  type Person = {
    name: string;
    age: number;
  };

  type NameType = Person["name"];
  type AgeType = Person["age"];

  type NameAndAge = Person["name" | "age"];
}
{
  // const 단언
  // 값을 -> 리터럴
  // 객체의 속성의 값을 -> readonly
  let x = "Hello";
  const number = [1, 2, 3] as const;
  const obj = {
    name: "kim",
    age: 20,
  } as const;
}
{
  // enum => 가공 가능 ,번들러를 통한 TREE_SHAKING 불가능하여 번들 사이즈 커짐(압축 안됨)
  enum Status {
    Pending = "PENDING",
    Success = "SUCCESS",
    Fail = "FAIL",
  }
  console.log(Status.Success);

  const options = Object.values(Status).map((value) => ({
    label: value,
    value,
  }));
  console.log(options);
}
{
  // const enum => 런타임 객체가 없어서 사이즈 줄임, TREE_SHAKING 필요없음, 동적 접근 불가하여 가공 불가
  const enum Status {
    Pending = "PENDING",
    Success = "SUCCESS",
    Fail = "FAIL",
  }
  console.log(Status.Success);
}
{
  // as const => ts=>js 사이즈가 줄어들지 않음, 번들러를 통해 미사용 코드 제거하여 TREE_SHAKING 가능, 가공 가능
  const Status = {
    Pending: "PENDING",
    Success: "SUCCESS",
    Fail: "FAIL",
  } as const;

  type Status = (typeof Status)[keyof typeof Status];
  console.log(Status.Success);
}
