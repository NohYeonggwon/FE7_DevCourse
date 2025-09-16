// 문제 1: 요일을 나타내는 상수
{
  /* const MONDAY = 1;
  const TUESDAY = 2;
  const WEDNESDAY = 3;
  const THURSDAY = 4;
  const FRIDAY = 5;
  const SATURDAY = 6;
  const SUNDAY = 7; */

  enum Day {
    MONDAY = 1,
    TUESDAY,
    WEDNESDAY,
    THURSDAY,
    FRIDAY,
    SATURDAY,
    SUNDAY,
  }

  function getDayName(day: Day): string {
    if (day === Day.MONDAY) return "Monday";
    if (day === Day.TUESDAY) return "Tuesday";
    if (day === Day.WEDNESDAY) return "Wednesday";
    if (day === Day.THURSDAY) return "Thursday";
    if (day === Day.FRIDAY) return "Friday";
    if (day === Day.SATURDAY) return "Saturday";
    if (day === Day.SUNDAY) return "Sunday";
    return "Invalid day";
  }
}

// 문제 2: 상태 코드
{
  /*  const SUCCESS = 200;
  const NOT_FOUND = 404;
  const INTERNAL_ERROR = 500; */

  const enum Status {
    SUCCESS = 200,
    NOT_FOUND = 404,
    INTERNAL_ERROR = 500,
  }

  function getStatusMessage(status: Status): string {
    if (status === Status.SUCCESS) return "Success";
    if (status === Status.NOT_FOUND) return "Not Found";
    if (status === Status.INTERNAL_ERROR) return "Internal Server Error";
    return "Unknown Status";
  }
}

// 문제 3: 우편번호에 따른 지역 이름
{
  /* const SEOUL = "Seoul";
  const BUSAN = "Busan";
  const DAEGU = "Daegu"; */

  const enum City {
    SEOUL = "Seoul",
    BUSAN = "Busan",
    DAEGU = "Daegu",
  }

  function getCityByZip(zip: City): string {
    if (zip === City.SEOUL) return City.SEOUL;
    if (zip === City.BUSAN) return City.BUSAN;
    if (zip === City.DAEGU) return City.DAEGU;
    return "Unknown City";
  }
}

// 문제 4: 사용자 권한
{
  /* const ADMIN = "admin";
  const USER = "user";
  const GUEST = "guest"; */

  const enum Role {
    ADMIN = "admin",
    USER = "user",
    GUEST = "guest",
  }

  function getPermissionLevel(role: Role): string {
    if (role === Role.ADMIN) return "Full access";
    if (role === Role.USER) return "Limited access";
    if (role === Role.GUEST) return "Guest access";
    return "No access";
  }
}

// 문제 5: 상품 상태
{
  /* const PENDING = 1;
  const SHIPPED = 2;
  const DELIVERED = 3; */

  const enum Status {
    PENDING = 1,
    SHIPPED,
    DELIVERED,
  }

  function getProductStatus(status: Status): string {
    if (status === Status.PENDING) return "Pending";
    if (status === Status.SHIPPED) return "Shipped";
    if (status === Status.DELIVERED) return "Delivered";
    return "Unknown Status";
  }
}

// 문제 6: 주문 상태
{
  /* const ORDER_PLACED = "Order Placed";
  const PAYMENT_PENDING = "Payment Pending";
  const SHIPPED = "Shipped";
  const DELIVERED = "Delivered"; */

  const enum Status {
    ORDER_PLACED = "Order Placed",
    PAYMENT_PENDING = "Payment Pending",
    SHIPPED = "Shipped",
    DELIVERED = "Delivered",
  }

  function getOrderStatus(status: Status): string {
    if (status === Status.ORDER_PLACED) return "Your order has been placed.";
    if (status === Status.PAYMENT_PENDING) return "Payment is pending.";
    if (status === Status.SHIPPED) return "Your order has been shipped.";
    if (status === Status.DELIVERED) return "Your order has been delivered.";
    return "Unknown Status";
  }
}

// 문제 7: 상태 변경
{
  /* const IS_ACTIVE = true;
  const IS_INACTIVE = false; */

  const enum Status {
    Active = 1,
    Inactive = 0,
  }

  function toggleStatus(status: Status): boolean {
    return status === Status.Active ? true : false;
  }
}

// 문제 8: 선택지 값
{
  /* const OPTION_ONE = "Option 1";
  const OPTION_TWO = "Option 2";
  const OPTION_THREE = "Option 3"; */

  const enum Option {
    OPTION_ONE = "Option 1",
    OPTION_TWO = "Option 2",
    OPTION_THREE = "Option 3",
  }

  function getOptionValue(option: Option): string {
    if (option === Option.OPTION_ONE) return "You selected Option 1.";
    if (option === Option.OPTION_TWO) return "You selected Option 2.";
    if (option === Option.OPTION_THREE) return "You selected Option 3.";
    return "Invalid option";
  }
}

// 문제 9: 식사 시간
{
  /* const BREAKFAST = "Breakfast";
  const LUNCH = "Lunch";
  const DINNER = "Dinner"; */

  const enum Meal {
    BREAKFAST = "Breakfast",
    LUNCH = "Lunch",
    DINNER = "Dinner",
  }

  function getMealTime(meal: Meal): string {
    if (meal === Meal.BREAKFAST) return "Good morning, it's breakfast time!";
    if (meal === Meal.LUNCH) return "Good afternoon, it's lunch time!";
    if (meal === Meal.DINNER) return "Good evening, it's dinner time!";
    return "Invalid meal time";
  }
}

// 문제 10: 로그인 상태
{
  /* const LOGGED_IN = true;
  const LOGGED_OUT = false; */

  const enum LoginStatus {
    LOGGED_IN,
    LOGGED_OUT,
  }

  function checkLoginStatus(status: LoginStatus): string {
    if (status === LoginStatus.LOGGED_IN) return "You are logged in.";
    if (status === LoginStatus.LOGGED_OUT) return "You are logged out.";
    return "Unknown status";
  }
}
