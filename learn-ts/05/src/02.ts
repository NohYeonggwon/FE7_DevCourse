{
  // moveX -> 왼쪽과 오른쪽을 이동할 수 있게만 만든 것

  type MoveX = "left" | "right";

  function characterMoveX(direction: MoveX): void {
    if (direction === "left") console.log("왼쪽");
    else if (direction === "right") console.log("오른쪽");
  }
}

{
  // enum(이넘) => 고정된 값들의 집합을 정의하는 데 사용하는 특수한 타입

  enum CharacterMoveX { // 방향
    LEFT,
    RIGHT,
  }

  enum RotationMoveX { // 회전
    LEFT,
    RIGHT,
  }

  function characterMoveX(direction: CharacterMoveX | RotationMoveX): void {
    if (direction === CharacterMoveX.LEFT) console.log("왼쪽으로 이동");
    if (direction === CharacterMoveX.RIGHT) console.log("오른쪽으로 이동");
  }

  characterMoveX(CharacterMoveX.LEFT);
  characterMoveX(CharacterMoveX.RIGHT);

  characterMoveX(RotationMoveX.LEFT);
  characterMoveX(RotationMoveX.RIGHT);
}
{
  // 숫자형 enum
  enum Direction {
    Up = 1,
    Down,
    Left = 10,
    Right,
  }

  console.log(Direction.Up); // 1
  console.log(Direction.Down); // 2
  console.log(Direction.Left); // 10
  console.log(Direction.Right); // 11
}
{
  // 문자열 enum(열거형)
  enum Direction {
    UP = "UP",
    DOWN = "DOWN",
    LEFT = "LEFT",
    RIGHT = "RIGHT",
  }

  console.log(Direction.UP); // 'UP'
}
{
  // 혼합 enum(열거형) => 모두 할당해야 함. (권장되지 않는 방식)
  enum Mix {
    YES = 1,
    NO = "NO",
  }

  enum Direction {
    UP = 200,
    DOWN = "DOWN",
    LEFT = 300,
    RIGHT = "RIGHT",
  }
}
{
  // const enum
  enum Direction1 {
    Up,
    Down,
    Left,
    Right,
  }

  const enum Direction2 {
    Up,
    Down,
    Left,
    Right,
  }
}
{
  // 리터럴 타입 => enum (const enum)
  const enum Role {
    ADMIN = "admin",
    GUEST = "guest",
  }

  // 객체 => interface
  interface Account {
    id: number;
    role: Role /* "admin" | "guest"; */; // => 리터럴 타입을 enum으로 표현해도 됨(권장하는 방법)
  }

  // 타입 별칭 => 유니온 타입 (|), 인터섹션 (&)
  type AuthAccount = Account & { token?: string };
}
