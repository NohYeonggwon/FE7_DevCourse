{
  // class, 제네릭, 유틸리티, 조건부타입
  // class
  class User {
    name: string;
    age: number;
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }

    greet(): string {
      return `Hello, ${this.name}`;
    }
  }
}
{
  // 2. 접근 제어자 public private protected readonly
  // 2.1 public(default) => 누구나 접근 가능(인스턴스 외부, 클래스 내부, 상속 클래스 등등), 생략 public
  // 2.2 private => 클래스 내부에서만 접근 가능(외부x, 상속x)
  // 2.3 protected => 클래스 외부에서만 접근 불가능 (클래스 내부o, 상속o)
  class Car {
    private speed: number;
    constructor(speed: number) {
      this.speed = speed;
    }
  }

  const benz = new Car(100);
}
