// 변수: 타입
// 기본 자료형
{
  const str: string = "hello";
  const num: number = 0;
  const bool: boolean = true;
  const und: undefined = undefined;
  const nul: null = null;
  const sym: symbol = Symbol("a");
  const big: bigint = 100n;
}

{
  let str: string = "hello";
  str = "A";
  console.log(str);
}

// 2. 참조 자료형
// 2.1 배열
// 2.1.1 []
// 2.1.2 Array<> (제네릭)
{
  const arr: number[] = [];
  arr.push(4);

  const arr1_1: [number, string] = [1, "a"];

  const arr2: Array<number> = [1, 2, 3];
  arr2.push(4);

  const matrix1: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
  ];

  const matrix2: Array<Array<number>> = [
    [1, 2, 3],
    [4, 5, 6],
  ];

  const matrix3: [number[], string[], boolean[]] = [
    [1, 2, 3],
    ["4", "5", "6"],
    [true, false],
  ];

  const block1: string[][][] = [
    [["a", "b"], ["c"]],
    [["d", "e"], ["f"]],
  ];
  const block2: [[string[], number[]], [string[], number[]]] = [
    [["a", "b"], [1]],
    [["d", "e"], [2]],
  ];
}

// 2.2 객체
{
  const obj: {} = {};
  const user: {
    name: string; // , or ; 둘 다 가능
    age: number;
    gender: string;
    fruits: string[];
    address: {
      zipcode: number;
      detail: [string, string, number];
    };
  } = {
    name: "kim",
    age: 20,
    gender: "male",
    fruits: ["apple", "banana"],
    address: {
      zipcode: 111333,
      detail: ["서울", "관악구", 11],
    },
  };

  const members: { id: number; name: string }[] = [
    { id: 1, name: "kim" },
    { id: 2, name: "park" },
  ];

  const project: {
    id: string;
    members: { id: number; name: string }[];
  } = {
    id: "p1",
    members,
  };
}
// 2.3 함수 (나중에 살필 예정) => 다음 주 월요일

/* 연습문제 */
// 1. string 타입을 사용하여 "Hello"라는 값을 갖는 문자열 변수를 선언하고, 이 값을 출력하세요.
{
  let str: string = "Hello";
  console.log(str);
}
// 2. number 타입을 사용하여 42라는 숫자를 갖는 변수를 선언하고, 출력하세요.
{
  let num: number = 42;
  console.log(num);
}
// 3. boolean 타입을 사용하여 true 값을 갖는 변수를 선언하고, 출력하세요.
{
  let bool: boolean = true;
  console.log(bool);
}
// 4. Array<number> 또는 number[] 타입을 사용하여 숫자 배열을 선언하고, 배열의 요소들을 출력하세요.
{
  let arr: number[] = [1, 2, 3];
  console.log(arr);
}
// 5. Array<string> 또는 string[] 타입을 사용하여 문자열 배열을 선언하고, 배열의 요소들을 출력하세요.
{
  let arr: string[] = ["a", "b", "c"];
  console.log(arr);
}
// 6. tuple 타입을 사용하여 숫자와 문자열이 섞인 튜플을 선언하고, 이 값을 출력하세요.
{
  let arr: [string, number] = ["a", 1];
  console.log(arr);
}
// 7. null 타입을 사용하여 null 값을 갖는 변수를 선언하고, 이를 출력하세요.
{
  let nul: null = null;
  console.log(nul);
}
// 8. undefined 타입을 사용하여 undefined 값을 갖는 변수를 선언하고, 이를 출력하세요.
{
  let und: undefined = undefined;
  console.log(und);
}
// 9. object 타입을 사용하여 이름과 나이를 포함하는 객체를 선언하고, 이를 출력하세요.
{
  let obj: {
    name: string;
    age: number;
  } = {
    name: "kim",
    age: 20,
  };
  console.log(obj);
}
// 10. Array<string | number> 또는 (string | number)[] 타입을 사용하여 숫자와 문자열이 섞인 배열을 선언하고, 이를 출력하세요.
{
  let arr: (string | number)[] = ["a", 1];
  console.log(arr);
}

/* 연습문제+ => 문제의 변수 타입 지정하기 */
// 1. 문제: 중첩된 객체
{
  let employee: {
    id: number;
    name: string;
    contact: {
      email: string;
      phone: string;
    };
    department: string;
  } = {
    id: 123,
    name: "John Doe",
    contact: {
      email: "john.doe@example.com",
      phone: "123-456-7890",
    },
    department: "Engineering",
  };
}
// 2. 문제: 객체 배열에서 특정 값 찾기
{
  let students: { name: string; age: number; grade: string }[] = [
    { name: "Alice", age: 22, grade: "A" },
    { name: "Bob", age: 24, grade: "B" },
    { name: "Charlie", age: 21, grade: "C" },
  ];
}
// 3. 문제: 숫자 배열에서 최댓값 구하기
{
  let numbers: number[] = [10, 20, 30, 40, 50];
}
// 4. 문제: 객체 배열에서 특정 조건 만족하는 객체 찾기
{
  let users: { name: string; age: number; active: boolean }[] = [
    { name: "Alice", age: 30, active: true },
    { name: "Bob", age: 25, active: false },
    { name: "Charlie", age: 35, active: true },
  ];
  console.log(users[1]?.name);
}
// 5. 문제: 중첩된 배열
{
  let nestedArray: [string[], number[], string[]] = [
    ["apple", "banana"],
    [1, 2, 3],
    ["cherry"],
  ];
}
// 6. 문제: 문자열 배열에서 길이가 5 이상인 문자열 찾기
{
  let words: string[] = ["apple", "banana", "cherry", "kiwi"];
  words.filter((w) => w.length >= 5).forEach((w) => console.log(w));
}
// 7. 문제: 여러 객체가 섞인 배열
{
  let items: (
    | { id: number; name: string; price: number }
    | [string, number]
  )[] = [
    { id: 1, name: "Item1", price: 100 },
    { id: 2, name: "Item2", price: 200 },
    ["discount", 10],
  ];
}
// 8. 문제: 복합적인 객체
{
  let profile: {
    user: { name: string; age: number };
    preferences: string[];
    isActive: boolean;
  } = {
    user: { name: "John", age: 30 },
    preferences: ["coding", "reading", "travelling"],
    isActive: true,
  };
}
// 9. 문제: 여러 타입을 가진 배열
{
  let mixedData: (string | number | boolean)[] = [
    "apple",
    10,
    true,
    "banana",
    20,
  ];
}
// 10. 문제: 중첩된 객체에서 키 접근하기
{
  let company: {
    name: string;
    address: {
      street: string;
      city: string;
      country: string;
    };
  } = {
    name: "Tech Corp",
    address: {
      street: "123 Main St",
      city: "Tech City",
      country: "Techland",
    },
  };
}

/* 연습문제++ => 모든 문제는 변수의 타입 지정 */
// 1. 문제: 중첩된 객체와 다양한 배열을 포함한 데이터
{
  let complexData: {
    id: number;
    name: string;
    details: {
      description: string;
      dimensions: {
        height: number;
        width: number;
        depth: number;
      };
      tags: string[];
    };
    reviews: { user: string; rating: number; comment: string }[];
  } = {
    id: 1,
    name: "Product A",
    details: {
      description: "This is a great product",
      dimensions: {
        height: 10,
        width: 5,
        depth: 2,
      },
      tags: ["sale", "new", "featured"],
    },
    reviews: [
      { user: "Alice", rating: 4.5, comment: "Excellent!" },
      { user: "Bob", rating: 3.0, comment: "Decent product." },
    ],
  };
}
// 2. 문제: 다차원 배열과 객체 혼합 구조
{
  let dataset: [
    { id: number; value: string }[],
    { id: number; value: string }[],
    { id: number; value: string }[]
  ] = [
    [
      { id: 1, value: "a" },
      { id: 2, value: "b" },
    ],
    [
      { id: 3, value: "c" },
      { id: 4, value: "d" },
    ],
    [
      { id: 5, value: "e" },
      { id: 6, value: "f" },
    ],
  ];
}
// 3. 문제: 중첩된 객체 배열에 조건이 다른 값 포함하기
{
  let mixedData: (
    | { type: string; name: string; age: number }
    | { type: string; id: number; name: string; price: number }
  )[] = [
    { type: "user", name: "Alice", age: 30 },
    { type: "user", name: "Bob", age: 25 },
    { type: "product", id: 1, name: "Laptop", price: 999 },
    { type: "product", id: 2, name: "Smartphone", price: 499 },
  ];
}
// 4. 문제: 배열 안에 객체와 튜플이 섞인 구조
{
  let dataSet: ({ name: string; price: number } | [string, number])[] = [
    { name: "Item A", price: 100 },
    ["item1", 50],
    { name: "Item B", price: 200 },
    ["item2", 75],
  ];
}
// 5. 문제: 고급 배열과 객체의 중첩된 관계
{
  let complexStructure: {
    id: number;
    value: string;
    attributes: { weight: number; color: string };
  }[] = [
    { id: 1, value: "apple", attributes: { weight: 1.2, color: "green" } },
    { id: 2, value: "banana", attributes: { weight: 0.5, color: "yellow" } },
    { id: 3, value: "cherry", attributes: { weight: 0.2, color: "red" } },
  ];
}
// 6. 문제: 배열 안에 객체와 중첩된 배열이 섞인 구조
{
  let nestedData: { id: number; tags: string[]; name: string };
  [] = [
    { id: 1, tags: ["fruit", "sweet"], name: "apple" },
    { id: 2, tags: ["fruit", "tropical"], name: "mango" },
    { id: 3, tags: ["fruit", "berry"], name: "strawberry" },
  ];
}
// 7. 문제: 다양한 타입을 가진 배열로 구성된 객체
{
  let profile: {
    name: string;
    age: number;
    favorites: (string | number | boolean)[];
    address: {
      street: string;
      city: string;
    };
  } = {
    name: "Alice",
    age: 28,
    favorites: ["reading", 42, true, 99.9],
    address: {
      street: "123 Main St",
      city: "Metropolis",
    },
  };
}
// 8. 문제: 중첩된 객체 배열에서 특정 조건을 만족하는 값 찾기
{
  let userData: { user: { name: string; age: number }; status: string }[] = [
    { user: { name: "John", age: 32 }, status: "active" },
    { user: { name: "Doe", age: 28 }, status: "inactive" },
    { user: { name: "Jane", age: 35 }, status: "active" },
  ];
}
// 9. 문제: 배열 안에 객체와 다른 배열이 포함된 구조
{
  let collection: (
    | { id: number; name: string; price: number }
    | [string, number]
  )[] = [
    { id: 1, name: "Item 1", price: 100 },
    ["Discount", 20],
    { id: 2, name: "Item 2", price: 200 },
    ["Discount", 10],
  ];
}
// 10. 문제: 객체 배열의 각 항목이 서로 다른 구조를 가진 배열
{
  let mixedItems: { id: number; type: string; name: string; size: string }[] = [
    { id: 1, type: "food", name: "Pizza", size: "Large" },
    { id: 2, type: "drink", name: "Coke", size: "Medium" },
    { id: 3, type: "food", name: "Burger", size: "Small" },
  ];
}
