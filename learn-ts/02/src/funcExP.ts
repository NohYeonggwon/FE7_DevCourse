// 문제 1: 여러 개의 숫자 배열을 받아 합을 구하는 함수
/* 문제 설명: sumAllNumbers 함수는 여러 개의 숫자 배열을 인자로 받아 각 배열의 합을 구하여 반환하는 함수입니다.
rest parameter와 map을 사용하여 여러 배열을 처리하고 결과를 반환해야 합니다. */
{
  // 1. 함수 표현식 (1)
  const sumAllNumbers11 = function (...arr: number[][]): number[] {
    return arr.map((arr) => arr.reduce((a, c) => a + c, 0));
  };

  // 1. 함수 표현식 (2)
  const sumAllNumbers12: (...arr: number[][]) => number[] = function (...arr) {
    return arr.map((arr) => arr.reduce((a, c) => a + c, 0));
  };

  // 2. 화살표 함수 (1)
  const sumAllNumbers21 = (...arr: number[][]): number[] => {
    return arr.map((arr) => arr.reduce((a, c) => a + c, 0));
  };

  // 2. 화살표 함수 (2)
  const sumAllNumbers22: (...arr: number[][]) => number[] = (...arr) => {
    return arr.map((arr) => arr.reduce((a, c) => a + c, 0));
  };

  const result = sumAllNumbers11([1, 2], [3, 4, 5], [6, 7]);
  console.log(result); // [3, 12, 13]
}

// 문제 2: 숫자 또는 문자열을 받아 그 값을 두 배로 만드는 함수
/* 문제 설명: doubleValue 함수는 숫자나 문자열을 인자로 받습니다. 숫자라면 두 배를 반환하고,
문자열이라면 문자열 길이를 두 배로 반환합니다. 함수의 반환값 타입을 지정해보세요. */
{
  // 1. 함수 표현식 (1)
  const doubleValue11 = function (value: string | number): number {
    if (typeof value === "number") return value * 2;
    else return value.length;
  };

  // 1. 함수 표현식 (2)
  const doubleValue12: (value: string | number) => number = function (value) {
    if (typeof value === "number") return value * 2;
    else return value.length;
  };

  // 2. 화살표 함수 (1)
  const doubleValue21 = (value: string | number): number => {
    if (typeof value === "number") return value * 2;
    else return value.length;
  };

  // 2. 화살표 함수 (2)
  const doubleValue22: (value: string | number) => number = (value) => {
    if (typeof value === "number") return value * 2;
    else return value.length;
  };

  const result1 = doubleValue11(5);
  const result2 = doubleValue11("hello");
  console.log(result1); // 10
  console.log(result2); // 10
}

// 문제 3: 두 숫자 배열을 받아 각 배열의 곱을 구하는 함수
/* 문제 설명: multiplyArrays 함수는 두 개의 숫자 배열을 받아 각 배열에서 해당 인덱스의 숫자를
곱한 값을 새로운 배열로 반환합니다. 배열의 길이가 다르면 짧은 배열에 맞춰서 곱셈을 해야 합니다. */
{
  // 1. 함수 표현식 (1)
  const multiplyArrays11 = function (arr1: number[], arr2: number[]): number[] {
    const minLength: number = Math.min(arr1.length, arr2.length);
    const result: number[] = [];
    for (let i = 0; i < minLength; i++) {
      result.push(arr1[i]! * arr2[i]!);
    }
    return result;
  };

  // 1. 함수 표현식 (2)
  const multiplyArrays12: (arr1: number[], arr2: number[]) => number[] =
    function (arr1, arr2) {
      const minLength: number = Math.min(arr1.length, arr2.length);
      const result: number[] = [];
      for (let i = 0; i < minLength; i++) {
        result.push(arr1[i]! * arr2[i]!);
      }
      return result;
    };

  // 2. 화살표 함수 (1)
  const multiplyArrays21 = (arr1: number[], arr2: number[]): number[] => {
    const minLength: number = Math.min(arr1.length, arr2.length);
    const result: number[] = [];
    for (let i = 0; i < minLength; i++) {
      result.push(arr1[i]! * arr2[i]!);
    }
    return result;
  };

  // 2. 화살표 함수 (2)
  const multiplyArrays22: (arr1: number[], arr2: number[]) => number[] = (
    arr1,
    arr2
  ) => {
    const minLength: number = Math.min(arr1.length, arr2.length);
    const result: number[] = [];
    for (let i = 0; i < minLength; i++) {
      result.push(arr1[i]! * arr2[i]!);
    }
    return result;
  };

  const result = multiplyArrays11([1, 2, 3], [4, 5, 6]);
  console.log(result); // [4, 10, 18]

  const result2 = multiplyArrays11([1, 2], [4, 5, 6]);
  console.log(result2); // [4, 10]
}

// 문제 4: 두 개의 배열을 받아 교차된 값을 반환하는 함수
/* **문제 설명**: `intersection` 함수는 두 개의 **배열**을 받아 교차된 값들만 반환하는 함수입니다. 
두 배열에서 겹치는 값들을 찾아 반환해보세요. */
{
  // 1. 함수 표현식 (1)
  const intersection11 = function (arr1: number[], arr2: number[]): number[] {
    return arr1.filter((num) => arr2.includes(num));
  };

  // 1. 함수 표현식 (2)
  const intersection12: (arr1: number[], arr2: number[]) => number[] =
    function (arr1, arr2) {
      return arr1.filter((num) => arr2.includes(num));
    };

  // 2. 화살표 함수 (1)
  const intersection21 = (arr1: number[], arr2: number[]): number[] => {
    return arr1.filter((num) => arr2.includes(num));
  };
  // 2. 화살표 함수 (2)
  const intersection22: (arr1: number[], arr2: number[]) => number[] = (
    arr1,
    arr2
  ) => {
    return arr1.filter((num) => arr2.includes(num));
  };

  const result = intersection11([1, 2, 3], [2, 3, 4]);
  console.log(result); // [2, 3]
}

// 문제 5: 객체의 필드 값에 따라 출력 형식을 다르게 하는 함수
/* 문제 설명: formatInfo 함수는 객체를 받아, name 필드가 존재하면 "Name: {name}"을 출력하고,
age 필드가 존재하면 "Age: {age}"를 출력합니다. 매개변수 타입을 지정하고 호출해보세요. */
{
  // 1. 함수 표현식 (1)
  const formatInfo11 = function (info: {
    name?: string;
    age?: number;
  }): string {
    let result = "";
    if (info.name !== undefined) {
      result += `Name: ${info.name}`;
    }
    if (info.age !== undefined) {
      if (result) result += ", ";
      result += `Age: ${info.age}`;
    }
    return result;
  };

  // 1. 함수 표현식 (2)
  const formatInfo12: (info: { name?: string; age?: number }) => string =
    function (info) {
      let result = "";
      if (info.name !== undefined) {
        result += `Name: ${info.name}`;
      }
      if (info.age !== undefined) {
        if (result) result += ", ";
        result += `Age: ${info.age}`;
      }
      return result;
    };

  // 2. 화살표 함수 (1)
  const formatInfo21 = (info: { name?: string; age?: number }): string => {
    let result = "";
    if (info.name !== undefined) {
      result += `Name: ${info.name}`;
    }
    if (info.age !== undefined) {
      if (result) result += ", ";
      result += `Age: ${info.age}`;
    }
    return result;
  };

  // 2. 화살표 함수 (2)
  const formatInfo22: (info: { name?: string; age?: number }) => string = (
    info
  ) => {
    let result = "";
    if (info.name !== undefined) {
      result += `Name: ${info.name}`;
    }
    if (info.age !== undefined) {
      if (result) result += ", ";
      result += `Age: ${info.age}`;
    }
    return result;
  };

  const info = formatInfo11({ name: "Alice" });
  console.log(info); // "Name: Alice"
}

// 문제 6: 두 문자열을 합쳐서 출력하는 함수
/* 문제 설명: combineStrings 함수는 두 개의 문자열을 받아 합쳐서 반환하는 함수입니다.
적절한 타입을 지정하여 함수를 정의하고 호출해보세요. */
{
  // 1. 함수 표현식 (1)
  const combineStrings11 = function (str1: string, str2: string): string {
    return `${str1}${str2}`;
  };

  // 1. 함수 표현식 (2)
  const combineStrings12: (str1: string, str2: string) => string = function (
    str1,
    str2
  ) {
    return `${str1}${str2}`;
  };

  // 2. 화살표 함수 (1)
  const combineStrings21 = (str1: string, str2: string): string => {
    return `${str1}${str2}`;
  };

  // 2. 화살표 함수 (2)
  const combineStrings22: (str1: string, str2: string) => string = (
    str1,
    str2
  ) => {
    return `${str1}${str2}`;
  };

  const combined = combineStrings11("Hello", "World");
  console.log(combined); // "HelloWorld"
}

// 문제 7: 배열의 각 값을 제곱하여 새로운 배열을 반환하는 함수
/* 문제 설명: squareArray 함수는 숫자 배열을 받아 그 배열의 각 값에 대해
제곱을 계산하여 새로운 배열을 반환합니다. */
{
  // 1. 함수 표현식 (1)
  const squareArray11 = function (arr: number[]): number[] {
    return arr.map((n) => Math.sqrt(n));
  };

  // 1. 함수 표현식 (2)
  const squareArray12: (arr: number[]) => number[] = function (arr) {
    return arr.map((n) => Math.sqrt(n));
  };

  // 2. 화살표 함수 (1)
  const squareArray21 = (arr: number[]): number[] => {
    return arr.map((n) => Math.sqrt(n));
  };

  // 2. 화살표 함수 (2)
  const squareArray22: (arr: number[]) => number[] = (arr) => {
    return arr.map((n) => Math.sqrt(n));
  };

  const result = squareArray11([1, 2, 3, 4]);
  console.log(result); // [1, 4, 9, 16]
}

// 문제 8: 문자열과 숫자가 주어졌을 때, 그 둘을 더하여 문자열로 반환하는 함수
/* 문제 설명: addStringAndNumber 함수는 문자열과 숫자를 인자로 받아 두 값을 더하여 문자열로
반환하는 함수입니다.적절한 타입을 지정하여 함수를 정의하고 호출해보세요. */
{
  // 1. 함수 표현식 (1)
  const addStringAndNumber11 = function (str: string, num: number): string {
    return `${str}${num}`;
  };

  // 1. 함수 표현식 (2)
  const addStringAndNumber12: (str: string, num: number) => string = function (
    str,
    num
  ) {
    return `${str}${num}`;
  };

  // 2. 화살표 함수 (1)
  const addStringAndNumber21 = (str: string, num: number): string => {
    return `${str}${num}`;
  };

  // 2. 화살표 함수 (2)
  const addStringAndNumber22: (str: string, num: number) => string = (
    str,
    num
  ) => {
    return `${str}${num}`;
  };

  const result = addStringAndNumber11("The number is ", 10);
  console.log(result); // "The number is 10"
}

// 문제 9: 타입이 서로 다른 두 값을 비교하는 함수
/* 문제 설명: compareValues 함수는 숫자와 문자열을 받아 두 값을 비교하여 결과를 출력하는 함수입니다.
숫자가 크면 "Number is larger", 문자열의 길이가 길면 "String is larger"를 반환하도록 하세요. */
{
  // 1. 함수 표현식 (1)
  const compareValues11 = function (num: number, str: string): string {
    if (num > str.length) return "Number is larger";
    else if (num < str.length) return "String is larger";
    else return "Number and string are equal in size";
  };

  // 1. 함수 표현식 (2)
  const compareValues12: (num: number, str: string) => string = function (
    num,
    str
  ) {
    if (num > str.length) return "Number is larger";
    else if (num < str.length) return "String is larger";
    else return "Number and string are equal in size";
  };

  // 2. 화살표 함수 (1)
  const compareValues21 = (num: number, str: string): string => {
    if (num > str.length) return "Number is larger";
    else if (num < str.length) return "String is larger";
    else return "Number and string are equal in size";
  };

  // 2. 화살표 함수 (2)
  const compareValues22: (num: number, str: string) => string = (num, str) => {
    if (num > str.length) return "Number is larger";
    else if (num < str.length) return "String is larger";
    else return "Number and string are equal in size";
  };

  const result = compareValues11(10, "Hello");
  console.log(result); // "Number is larger"
}

// 문제 10: 다중 조건을 처리하는 조건문 함수
/* 문제 설명: checkValue 함수는 숫자, 문자열, 불리언 값을 인자로 받습니다.
이 값이 숫자라면 "It's a number", 문자열이라면 "It's a string",
불리언이라면 "It's a boolean"을 반환하도록 하세요. */
{
  // 1. 함수 표현식 (1)
  const checkValue11 = function (value: string | number | boolean): string {
    if (typeof value === "string") return "It's a string";
    else if (typeof value === "number") return "It's a number";
    else return "It's a boolean";
  };

  // 1. 함수 표현식 (2)
  const checkValue12: (value: string | number | boolean) => string = function (
    value
  ) {
    if (typeof value === "string") return "It's a string";
    else if (typeof value === "number") return "It's a number";
    else return "It's a boolean";
  };

  // 2. 화살표 함수 (1)
  const checkValue21 = (value: string | number | boolean): string => {
    if (typeof value === "string") return "It's a string";
    else if (typeof value === "number") return "It's a number";
    else return "It's a boolean";
  };

  // 2. 화살표 함수 (2)
  const checkValue22: (value: string | number | boolean) => string = (
    value
  ) => {
    if (typeof value === "string") return "It's a string";
    else if (typeof value === "number") return "It's a number";
    else return "It's a boolean";
  };

  const result = checkValue11(true);
  console.log(result);
}
