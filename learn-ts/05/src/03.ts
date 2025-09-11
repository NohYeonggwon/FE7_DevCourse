{
  // 유틸리티 타입 (기존에 존재하는 타입을 변형)
  // 제네릭을 기반으로 만들어짐
}
{
  // 1. Partial<T> => 주어진 타입 T의 모든 속성을 선택적으로 만드는 유틸리티 타입
  interface User {
    name: string;
    age: number;
    email: string;
  }

  interface NoAuthUser {
    name: string;
    age: number;
    email?: string;
  }

  const u1: User = {
    name: "kim",
    age: 20,
    email: "test@naver.com",
  };

  const u2: Partial<User> = {
    name: "kim",
    age: 20,
  };

  // 예제 1: 일부 속성만 지정
  const user1: Partial<User> = { name: "John" };

  // 예제 2: age만 지정
  const user2: Partial<User> = { age: 30 };

  // 예제 3: name과 email만 지정
  const user3: Partial<User> = { name: "Alice", email: "alice@example.com" };

  // 예제 4: 모든 속성을 생략 가능
  const user4: Partial<User> = {}; // 모든 속성을 생략할 수 있음
}
{
  // 2. Required<T> => 주어진 타입 T의 모든 속성을 필수적으로 함
  interface Guest {
    name?: string;
    age?: number;
    email?: string;
  }

  type User = Required<Guest>; // 선택적 속성을 필수 속성으로

  // 예제 1: 모든 속성을 필수로 만듦
  const user1: User = {
    name: "John",
    age: 30,
    email: "john@example.com",
  };

  // 예제 2: 속성 하나라도 빠지면 오류
  // const user2: Required<User> = { name: "Alice" };  // 오류: age와 email은 필수

  // 예제 3: 모든 속성이 필수
  const user3: Required<User> = {
    name: "Bob",
    age: 40,
    email: "bob@example.com",
  };

  // 예제 4: 속성 하나라도 빠지면 오류
  // const user4: Required<User> = { name: "Charlie", email: "charlie@example.com" };  // 오류
}
{
  // 3. Readonly<T> => 주어진 타입 T의 모든 속성을 읽기 전용으로
  // 4. Pick<T, K> => 주어진 타입 T에서 선택한 속성만 추출하여 새로운 타입 생성
  // 5. Omit<T, K> => 주어진 타입 T에서 특정 속성 K를 제외한 나머지 속성만 추출하여 새로운 타입 생성
  // 6. Record<K, T> => 주어진 키 K와 값 T의 타입을 가지는 객체 타입을 생성
  let obj: Record<string, never> = {}; // 완전한 빈 객체
}
