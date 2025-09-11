/* 1. 사람 객체 생성
문제: 다음은 사람 객체를 생성하는 생성자 함수입니다. 이를 타입스크립트 클래스 문법을 사용하여 변환하세요. 

요구 사항:
- 타입스크립트 클래스로 변환하세요.
- name과 age를 타입스크립트 타입으로 지정하세요.*/
{
  // 기존 코드
  /* function Person(name, age) {
    this.name = name;
    this.age = age;

    this.greet = function () {
      console.log(
        `Hello, my name is ${this.name} and I am ${this.age} years old.`
      );
    };
  }*/

  class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
    greet() {
      console.log(
        `Hello, my name is ${this.name} and I am ${this.age} years old.`
      );
    }
  }
  const person = new Person("Alice", 30);
  person.greet(); // "Hello, my name is Alice and I am 30 years old."
}

/* 2. 학생 클래스
문제: 다음은 학생 객체를 생성하는 생성자 함수입니다. 이를 타입스크립트 클래스로 변환하세요.

요구 사항:
- 타입스크립트 클래스로 변환하세요.
- name과 grade에 타입을 추가하세요. */
{
  // 기존 코드
  /* function Student(name, grade) {
    this.name = name;
    this.grade = grade;

    this.displayInfo = function () {
      console.log(`${this.name} is in grade ${this.grade}.`);
    };
  }*/

  class Student {
    name: string;
    grade: number;
    constructor(name: string, grade: number) {
      this.name = name;
      this.grade = grade;
    }

    displayInfo() {
      console.log(`${this.name} is in grade ${this.grade}.`);
    }
  }
  const student = new Student("Bob", 10);
  student.displayInfo(); // "Bob is in grade 10."
}

/* 3. 자동차 클래스
문제: 다음은 자동차 객체를 생성하는 생성자 함수입니다. 이를 타입스크립트 클래스로 변환하세요. 

요구 사항:
- 타입스크립트 클래스로 변환하세요.
- brand와 model에 타입을 추가하세요.*/
{
  // 기존 코드
  /* function Car(brand, model) {
    this.brand = brand;
    this.model = model;

    this.getCarInfo = function () {
      return `${this.brand} ${this.model}`;
    };
  }*/

  class Car {
    brand: string;
    model: string;
    constructor(brand: string, model: string) {
      this.brand = brand;
      this.model = model;
    }
    getCarInfo(): string {
      return `${this.brand} ${this.model}`;
    }
  }

  const car = new Car("Toyota", "Corolla");
  console.log(car.getCarInfo()); // "Toyota Corolla"
}

/*  4. 사각형 클래스
문제: 다음은 사각형 객체를 생성하는 생성자 함수입니다. 이를 타입스크립트 클래스로 변환하세요. 

요구 사항:
- 타입스크립트 클래스로 변환하세요.
- width와 height에 타입을 추가하세요.*/
{
  /* function Rectangle(width, height) {
    this.width = width;
    this.height = height;

    this.getArea = function () {
      return this.width * this.height;
    };
  }*/

  class Rectangle {
    width: number;
    height: number;
    constructor(width: number, height: number) {
      this.width = width;
      this.height = height;
    }
    getArea(): number {
      return this.width * this.height;
    }
  }

  const rectangle = new Rectangle(5, 10);
  console.log(rectangle.getArea());
}

/*  5. 도서 클래스
문제: 다음은 도서 객체를 생성하는 생성자 함수입니다. 이를 타입스크립트 클래스로 변환하세요. 

요구 사항:
- 타입스크립트 클래스로 변환하세요.
- title과 author에 타입을 추가하세요.*/
{
  // 기존 코드
  /* function Book(title, author) {
    this.title = title;
    this.author = author;

    this.getBookInfo = function () {
      return `"${this.title}" by ${this.author}`;
    };
  } */

  class Book {
    title: string;
    author: string;
    constructor(title: string, author: string) {
      this.title = title;
      this.author = author;
    }
    getBookInfo(): string {
      return `"${this.title}" by ${this.author}`;
    }
  }

  const book = new Book("1984", "George Orwell");
  console.log(book.getBookInfo()); // "\\"1984\\" by George Orwell"
}

/*  6. 직원 클래스
문제: 다음은 직원 객체를 생성하는 생성자 함수입니다. 이를 타입스크립트 클래스로 변환하세요. 

요구 사항:
- 타입스크립트 클래스로 변환하세요.
- name과 salary에 타입을 추가하세요.*/
{
  // 기존 코드
  /* function Employee(name, salary) {
    this.name = name;
    this.salary = salary;

    this.getSalary = function () {
      return `${this.name} earns $${this.salary}`;
    };
  } */

  class Employee {
    name: string;
    salary: number;
    constructor(name: string, salary: number) {
      this.name = name;
      this.salary = salary;
    }
    getSalary(): string {
      return `${this.name} earns $${this.salary}`;
    }
  }

  const employee = new Employee("Alice", 50000);
  console.log(employee.getSalary()); // "Alice earns $50000"
}

/* 7. 도형 클래스
문제: 다음은 도형 객체를 생성하는 생성자 함수입니다. 이를 타입스크립트 클래스로 변환하세요. 

요구 사항:
- 타입스크립트 클래스로 변환하세요.
- name에 타입을 추가하세요.*/
{
  // 기존 코드
  /* function Shape(name) {
    this.name = name;

    this.getShapeName = function () {
      return `This is a ${this.name}`;
    };
  } */

  class Shape {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
    getShapeName(): string {
      return `This is a ${this.name}`;
    }
  }

  const shape = new Shape("Circle");
  console.log(shape.getShapeName()); // "This is a Circle"
}

/* 8. 도서관 클래스
문제: 다음은 도서관 객체를 생성하는 생성자 함수입니다. 이를 타입스크립트 클래스로 변환하세요.

요구 사항:
- 타입스크립트 클래스로 변환하세요.
- name과 books에 타입을 추가하세요.*/
{
  // 기존 코드
  /* function Library(name, books) {
    this.name = name;
    this.books = books;

    this.getBooks = function () {
      return `${this.name} has the following books: ${this.books.join(", ")}`;
    };
  } */

  class Library {
    name: string;
    books: string[];
    constructor(name: string, books: string[]) {
      this.name = name;
      this.books = books;
    }
    getBooks(): string {
      return `${this.name} has the following books: ${this.books.join(", ")}`;
    }
  }

  const library = new Library("City Library", ["1984", "Brave New World"]);
  console.log(library.getBooks()); // "City Library has the following books: 1984, Brave New World"
}

/* 9. 날짜 클래스
문제: 다음은 날짜 객체를 생성하는 생성자 함수입니다. 이를 타입스크립트 클래스로 변환하세요.

요구 사항:
- 타입스크립트 클래스로 변환하세요.
- day, month, year에 타입을 추가하세요.*/
{
  // 기존 코드
  /* function DateUtil(day, month, year) {
    this.day = day;
    this.month = month;
    this.year = year;

    this.getDate = function () {
      return `${this.day}/${this.month}/${this.year}`;
    };
  } */

  class DateUtil {
    day: number;
    month: number;
    year: number;
    constructor(day: number, month: number, year: number) {
      this.day = day;
      this.month = month;
      this.year = year;
    }
    getDate(): string {
      return `${this.day}/${this.month}/${this.year}`;
    }
  }

  const date = new DateUtil(12, 5, 2024);
  console.log(date.getDate()); // "12/5/2024"
}

/* 10. 점 클래스
문제: 다음은 점 객체를 생성하는 생성자 함수입니다. 이를 타입스크립트 클래스로 변환하세요.

요구 사항:
- 타입스크립트 클래스로 변환하세요.
- x와 y에 타입을 추가하세요.*/
{
  // 기존 코드
  /* function Point(x, y) {
    this.x = x;
    this.y = y;

    this.getDistance = function () {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    };
  } */

  class Point {
    x: number;
    y: number;
    constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
    }
    getDistance(): number {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    }
  }

  const point = new Point(3, 4);
  console.log(point.getDistance()); // 5
}
