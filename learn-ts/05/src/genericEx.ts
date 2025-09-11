/* 1. 숫자 배열의 첫 번째 값 구하기
다음은 숫자 배열에서 첫 번째 값을 구하는 함수입니다. 제네릭을 활용하여 숫자뿐만 아니라
다른 타입의 배열에서도 첫 번째 값을 구할 수 있도록 개선해보세요.

요구 사항:
- 배열의 타입에 관계없이 첫 번째 값을 구할 수 있도록 제네릭을 사용하세요.*/
{
  function getFirst<T>(arr: T[]): T | undefined {
    return arr[0];
  }

  console.log(getFirst([1, 2, 3])); // 1
}

/* 2. 배열의 길이 구하기
배열의 길이를 반환하는 함수입니다. 제네릭을 사용하여 다양한 타입의 배열에 대해 동작하도록 수정하세요.

요구 사항:
- 배열의 타입에 관계없이 배열의 길이를 구할 수 있도록 제네릭을 사용하세요.*/
{
  function getLength<T>(arr: T[]): number {
    return arr.length;
  }

  console.log(getLength([1, 2, 3])); // 3
  console.log(getLength(["a", "b", "c"])); // 3
}

/* 3. 배열에서 마지막 값 구하기
배열에서 마지막 값을 반환하는 함수입니다.
제네릭을 사용하여 모든 타입의 배열에서도 마지막 값을 구할 수 있도록 개선하세요. 

요구 사항:
- 배열의 타입에 관계없이 마지막 값을 구할 수 있도록 제네릭을 사용하세요.*/
{
  function getLast<T>(arr: T[]): T | undefined {
    return arr[arr.length - 1];
  }

  console.log(getLast([1, 2, 3])); // 3
}

/* 4. 두 값을 더하는 함수
두 값을 더하는 함수입니다.
제네릭을 사용하여 숫자뿐만 아니라 다른 타입의 값을 더할 수 있도록 개선하세요. 

요구 사항:
- 숫자뿐만 아니라 다른 타입에 대해서도 더할 수 있도록 제네릭을 사용하세요.*/
{
  function add<T extends number>(a: T, b: T): number {
    return a + b;
  }

  console.log(add(2, 3)); // 5
}

/* 5. 객체에서 특정 키의 값 구하기
객체에서 특정 키의 값을 반환하는 함수입니다.
제네릭을 사용하여 다양한 객체에 대해 특정 키의 값을 안전하게 구할 수 있도록 개선하세요. 

요구 사항:
- 객체의 타입에 맞게 동작하도록 제네릭을 사용하세요.*/
{
  function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
  }

  console.log(getValue({ name: "Alice" }, "name")); // "Alice"
}

/* 6. 두 값을 비교하는 함수
두 값을 비교하여 같은 값이면 `true`, 아니면 `false`를 반환하는 함수입니다.
제네릭을 사용하여 다양한 타입에 대해 동작할 수 있도록 개선하세요.

요구 사항:
- 제네릭을 사용하여 다른 타입의 값들에 대해서도 비교할 수 있도록 하세요.*/
{
  function isEqual<T>(a: T, b: T): boolean {
    return a === b;
  }

  console.log(isEqual(2, 2)); // true
}

/* 7. 배열의 모든 값을 제곱하는 함수
배열의 모든 값을 제곱하는 함수입니다.
제네릭을 사용하여 숫자뿐만 아니라 다양한 타입의 배열에 대해 제곱할 수 있도록 개선하세요. 

요구 사항:
- 숫자뿐만 아니라 다른 타입의 배열에도 동작할 수 있도록 제네릭을 사용하세요.*/
{
  function square<T extends number>(arr: T[]): number[] {
    return arr.map((num) => num * num);
  }

  console.log(square([1, 2, 3])); // [1, 4, 9]
}

/* 8. 배열의 첫 번째와 마지막 값을 반환하는 함수
배열에서 첫 번째와 마지막 값을 반환하는 함수입니다.
제네릭을 사용하여 모든 타입의 배열에서 첫 번째와 마지막 값을 구할 수 있도록 개선하세요. 

요구 사항:
- 제네릭을 사용하여 다양한 타입의 배열에서 첫 번째와 마지막 값을 반환하도록 개선하세요.*/
{
  function getFirstAndLast<T>(arr: T[]): (T | undefined)[] {
    return [arr[0], arr[arr.length - 1]];
  }

  console.log(getFirstAndLast([1, 2, 3])); // [1, 3]
}

/* 9. 두 개의 객체 병합 함수
두 개의 객체를 병합하는 함수입니다.
제네릭을 사용하여 다양한 타입의 객체도 병합할 수 있도록 개선하세요.

요구 사항:
- 제네릭을 사용하여 다양한 객체를 병합할 수 있도록 개선하세요.*/
{
  function mergeObjects<T, U>(obj1: { name: T }, obj2: { age: U }) {
    return { ...obj1, ...obj2 };
  }

  console.log(mergeObjects({ name: "Alice" }, { age: 25 })); // { name: "Alice", age: 25 }
}

/* 10. 배열에서 고유한 값을 반환하는 함수
배열에서 중복을 제거하고 고유한 값만 반환하는 함수입니다.
제네릭을 사용하여 다양한 타입의 배열에 대해서도 동작하도록 개선하세요.

요구 사항:
- 제네릭을 사용하여 다른 타입의 배열에도 동작하도록 개선하세요.*/
{
  function getUnique<T>(arr: T[]): T[] {
    return Array.from(new Set(arr));
  }

  console.log(getUnique([1, 2, 2, 3])); // [1, 2, 3]
}
