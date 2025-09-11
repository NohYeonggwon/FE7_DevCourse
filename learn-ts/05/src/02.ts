// 제네릭 - 타입을 미리 지정하지 않고, 사용하는 시점에 타입을 정의하여 사용
// 코드의 재사용성을 높이고 다양한 타입에 대해 하나의 함수나 클래스를 작성할 수 있게 도와줌
// 치환, 어떤 변수가 값으로 변경

// T = Type 가장 일반적인 타입 변수
// K = Key 객체의 키
// V = Value 객체의 값
// E = Element 배열의 요소나 이벤트
// U = Another Type T 이외의 만만하면 U
{
  // 함수의 제네릭
  // function getFirstElement<number>(arr: number[]):number{}
  function getFirstElement<T>(arr: T[]): T {
    return arr[0]!; // ! => null 아님 보장 연산자
  }
  console.log(getFirstElement<number>([1, 2, 3]));
}
{
  // 제네릭도 타입 추론 가능
  // 타입 명시가 필요하지 않으면, 타입 추론을 활용하는 것을 권장
  function identity<T>(value: T): T {
    return value;
  }

  const num = identity<number>(42);
  const str = identity<string>("A");
  const bool = identity<boolean>(true);
}
{
  // 타입 1개
  function logArray<T>(arr: T[]): void {
    arr.forEach((value) => console.log(value));
  }

  logArray<number>([1, 2, 3]);
  logArray<string>(["a", "b", "c"]);
}
{
  // 타입 2개
  function mergeObj<T, U>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
  }

  const mer1 = mergeObj({ name: "kim" }, { age: 20 });
  const mer2 = mergeObj({ name: "kim", age: 20 }, { gender: "male" });
}
{
  // 타입 3개
  function makeTuple<T, K, V>(a: T, b: K, c: V): [T, K, V] {
    return [a, b, c];
  }
  const numTuple = makeTuple(1, 2, 3);
  const strTuple = makeTuple("a", "b", "c");
  const mixTuple = makeTuple(1, "a", true);
}
{
  // 타입 제약 - 제네릭의 타입을 제한하는 문법
  // T extends U
  function sumArray<T extends number>(arr: T[]): number {
    return arr.reduce((acc, cur) => acc + cur, 0);
  }

  sumArray([1, 2, 3]);
}
{
  function returnLength<T extends { length: number }>(arr: T[]): number {
    return arr.length;
  }
  returnLength(["a", "b", "c"]);
}
{
  function logKey<T extends { name: string; age: number }>(obj: T): void {
    console.log(`${obj.name}, ${obj.age}`);
  }
  logKey({ name: "kim", age: 20, gender: "male" });
}
{
  // 인터페이스의 제네릭 => 타입 제약 가능
  interface Box<T> {
    value: T;
    getValue(): T;
  }
  const stringBox: Box<string> = {
    value: "kim",
    getValue() {
      return this.value;
    },
  };

  const numberBox: Box<number> = {
    value: 10,
    getValue() {
      return this.value;
    },
  };
}
{
  // 타입 별칭의 제네릭 => 타입 제약 가능(T extends number | string)
  type Box<T extends number | string> = {
    value: T;
    getValue(): T;
  };
  const stringBox: Box<string> = {
    value: "kim",
    getValue() {
      return this.value;
    },
  };

  const numberBox: Box<number> = {
    value: 10,
    getValue() {
      return this.value;
    },
  };
}
{
  // 클래스의 제네릭 => 타입 제약 가능
  class Box<T> {
    private items: T[] = [];
    add(item: T) {
      this.items.push(item);
    }
    getAll(): T[] {
      return this.items;
    }
  }
  const stringBox = new Box<string>(); // <string> 생략 가능
  stringBox.add("A");
  stringBox.add("B");
  stringBox.add("C");
  console.log(stringBox.getAll());
}
