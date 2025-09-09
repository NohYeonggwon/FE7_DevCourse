/* 1. 간단한 객체 타입 정의
Person이라는 인터페이스를 정의하여, name과 age 프로퍼티를 가진 객체를 생성하세요.

- name: string
- age: number */
{
  interface Person {
    name: string;
    age: number;
  }

  const person: Person = {
    name: "kim",
    age: 20,
  };
}

/* 2. 메소드가 포함된 인터페이스
Car라는 인터페이스를 정의하여, 자동차의 brand, model, start() 메소드를 포함하는 객체를 생성하세요.

- brand: string
- model: string
- start(): void (자동차를 시작하는 메소드, 내부 구현은 자율적으로.) */
{
  interface Car {
    brand: string;
    model: string;
    start(): void;
  }

  const myCar: Car = {
    brand: "현대",
    model: "제네시스",
    start() {
      console.log(`${this.brand} ${this.model}가 출발합니다.`);
    },
  };
}

/* 3. 선택적 속성 사용
Employee라는 인터페이스를 정의하여, name과 position을 기본 속성으로 하고, department는 선택적인 속성으로 추가하세요.

- name: string
- position: string
- department: string (선택적 속성) */
{
  interface Employee {
    name: string;
    position: string;
    department?: string;
  }

  const emp: Employee = {
    name: "kim",
    position: "developer",
  };
}

/* 4. 배열을 포함한 인터페이스
Team이라는 인터페이스를 정의하여, name과 members 속성을 포함합니다.

- name: string
- members: string[] (팀원들의 이름 배열, 팀원들 이름은 자율적으로) */
{
  interface Team {
    name: string;
    members: string[];
  }

  const five: Team = {
    name: "noh",
    members: ["kim", "Lee", "Jung"],
  };
}

/* 5. 상속을 이용한 인터페이스 확장
Animal이라는 인터페이스를 정의하고, Dog라는 인터페이스가 Animal을 상속받도록 하세요.

- Animal은 name과 age 속성을 포함하고,
- Dog는 breed 속성을 추가합니다. */
{
  interface Animal {
    name: string;
    age: number;
  }

  interface Dog extends Animal {
    breed: string;
  }

  const myDog: Dog = {
    name: "BbaBbi",
    age: 3,
    breed: "Golden Retriever",
  };
}

/* 6. 인터페이스에서 메소드 정의
Person이라는 인터페이스를 정의하여, name과 age 프로퍼티를 포함하고, greet() 메소드를 정의하세요. greet()는 "Hello, my name is {name}"을 반환하는 메소드입니다. */
{
  interface Person {
    name: string;
    age: number;
    greet(): void;
  }

  const person: Person = {
    name: "kim",
    age: 20,
    greet() {
      console.log(`Hello, my name is ${this.name}`);
    },
  };
}

/* 7. 다형성을 가진 인터페이스
Shape라는 인터페이스를 정의하고, Circle과 Rectangle이라는 인터페이스가 Shape를 상속받도록 하세요.

- Shape는 area() 메소드만 정의하고,
- Circle은 radius 속성을, Rectangle은 width와 height 속성을 추가합니다. */
{
  interface Shape {
    area(): void;
  }

  interface Circle extends Shape {
    radius: number;
  }

  interface Rectangle extends Shape {
    width: number;
    height: number;
  }

  const circle: Circle = {
    radius: 5,
    area() {
      return this.radius * this.radius * Math.PI;
    },
  };

  const rectangle: Rectangle = {
    width: 10,
    height: 5,
    area() {
      return this.width * this.height;
    },
  };
}

/* 8. 다중 인터페이스를 사용하는 객체
Person과 Address라는 두 개의 인터페이스가 있을 때, 이 두 인터페이스를 합친 객체 Contact를 만들어 보세요.

- Person은 name과 age를 포함하고,
- Address는 street, city, zipcode를 포함합니다.
- 속성에 대한 자료형은 자율적으로 지정하세요. */
{
  interface Person {
    name: string;
    age: number;
  }

  interface Address {
    street: string;
    city: string;
    zipcode: string;
  }

  interface Contact extends Person, Address {}

  const contact1: Contact = {
    name: "kim",
    age: 20,
    street: "123",
    city: "Seoul",
    zipcode: "9999",
  };
}

/* 9. 인터페이스에 인덱스 시그니처 사용
Dictionary라는 인터페이스를 정의하여, 이 인터페이스는 string 키와 string 값을 가지는 객체 타입을 정의하세요. */
{
  interface Dictionary {
    [key: string]: string;
  }
}

/* 10. 인터페이스를 사용한 함수 타입 정의
Operation이라는 인터페이스를 정의하여, 두 개의 number를 받아 number를 반환하는 함수를 타입으로 정의하세요. 그 후 add와 subtract 함수를 작성하여 이 인터페이스를 사용하세요. */
{
  interface Operation {
    (a: number, b: number): number;
  }

  const add: Operation = (a, b) => a + b;
  const subtract: Operation = (a, b) => a - b;
}
