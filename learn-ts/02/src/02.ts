{
  // 1. 타입 오퍼레이터
  // 1.1 유니언 타입 -> | 파이프, || OR
  // 1.1.1 의미는 비슷

  // 타입 가드
  /*
    런타임에 실제 검사 결과를 바탕으로 변수의 타입을 조금 더 좁게 추론하도록
    타입스크립트에서 힌트를 주는 문법
  */
  let x: number | string = 10;
  x = 20;
  x = "A";

  // 1.2 인터섹션 타입 -> & 앰퍼샌드, && AND
  // 1.2.1 의미는 비슷
  // 1.2.2 A or B타입
  // A타입
  const userA: { name: string } & { age: number } = {
    name: "kim",
    age: 20,
  };
  // B타입
  const userB: { name: string; age: number } = {
    name: "kim",
    age: 20,
  };
}
