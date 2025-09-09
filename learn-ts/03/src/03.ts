{
  // 인터페이스 => 오직 객체만 지정!!
  // 객체의 타입을 지정할 때 사용하는 타입 지정 방법

  // type 식별자 = 할당 (타입 별칭)
  // interface 식별자 {} (인터페이스)
  interface Person {
    name: string;
    age: number;
    gender: "male" | "female" | "natural";
  }

  const person: Person = {
    name: "kim",
    age: 20,
    gender: "male",
  };
}
{
  interface Person {
    [key: string]: string | number;
  }

  const person: Person = {
    name: "kim",
    age: 20,
  };
}
{
  // 타입 별칭 <-> 인터페이스
  // 자동 병합
  interface Person {
    readonly name: string;
  }

  interface Person {
    readonly age?: number;
  }

  const person: Person = {
    name: "kim",
    age: 20,
  };
}
