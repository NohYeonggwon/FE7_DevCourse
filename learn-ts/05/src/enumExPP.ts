// 문제 1: 사용자 인증 상태
{
  enum UserStatus {
    UNVERIFIED = "UNVERIFIED",
    PENDING = "PENDING",
    VERIFIED = "VERIFIED",
  }

  function getUserStatus(status: UserStatus): string {
    if (status === UserStatus.UNVERIFIED) return "User is unverified";
    if (status === UserStatus.PENDING) return "User verification is pending";
    if (status === UserStatus.VERIFIED) return "User is verified";
    return "Unknown status";
  }
}

// 문제 2: 주문 처리 상태 (다양한 상태)
{
  enum OrderState {
    INITIATED,
    PROCESSING,
    SHIPPED,
    DELIVERED,
    CANCELLED,
  }

  function getOrderState(state: OrderState): string {
    if (state === OrderState.INITIATED) return "Order initiated";
    if (state === OrderState.PROCESSING) return "Order being processed";
    if (state === OrderState.SHIPPED) return "Order shipped";
    if (state === OrderState.DELIVERED) return "Order delivered";
    if (state === OrderState.CANCELLED) return "Order cancelled";
    return "Unknown state";
  }
}

// 문제 3: 레벨별 사용자 경험
{
  enum UserLevel {
    BEGINNER = "BEGINNER",
    INTERMEDIATE = "INTERMEDIATE",
    EXPERT = "EXPERT",
  }

  function getUserLevel(level: UserLevel): string {
    if (level === UserLevel.BEGINNER) return "Beginner user";
    if (level === UserLevel.INTERMEDIATE) return "Intermediate user";
    if (level === UserLevel.EXPERT) return "Expert user";
    return "Unknown level";
  }
}

// 문제 4: 결제 상태
{
  enum PaymentStatus {
    NOT_STARTED,
    IN_PROGRESS,
    COMPLETED,
    FAILED,
  }

  function getPaymentStatus(status: PaymentStatus): string {
    if (status === PaymentStatus.NOT_STARTED) return "Payment not started";
    if (status === PaymentStatus.IN_PROGRESS) return "Payment in progress";
    if (status === PaymentStatus.COMPLETED) return "Payment completed";
    if (status === PaymentStatus.FAILED) return "Payment failed";
    return "Unknown status";
  }
}

// 문제 5: 회원 가입 단계
{
  enum SignupStep {
    STEP_ONE = "STEP_ONE",
    STEP_TWO = "STEP_TWO",
    STEP_THREE = "STEP_THREE",
  }

  function getSignupStep(step: SignupStep): string {
    if (step === SignupStep.STEP_ONE) return "Step 1: Enter details";
    if (step === SignupStep.STEP_TWO) return "Step 2: Confirm email";
    if (step === SignupStep.STEP_THREE) return "Step 3: Complete registration";
    return "Unknown step";
  }
}

// 문제 6: 차종별 가격
{
  enum PriceCar {
    SEDAN = "SEDAN",
    SUV = "SUV",
    TRUCK = "TRUCK",
  }

  function getPriceByCarType(type: PriceCar): number {
    if (type === PriceCar.SEDAN) return 30000;
    if (type === PriceCar.SUV) return 40000;
    if (type === PriceCar.TRUCK) return 50000;
    return 0;
  }
}

// 문제 7: 채팅 메시지 유형
{
  enum Msg {
    TEXT = "TEXT",
    IMAGE = "IMAGE",
    VIDEO = "VIDEO",
    FILE = "FILE",
  }

  function getMessageType(type: Msg): string {
    if (type === Msg.TEXT) return "Text message";
    if (type === Msg.IMAGE) return "Image message";
    if (type === Msg.VIDEO) return "Video message";
    if (type === Msg.FILE) return "File message";
    return "Unknown message type";
  }
}

// 문제 8: 시스템 로그 레벨
{
  enum LogMsg {
    INFO = "INFO",
    WARN = "WARN",
    ERROR = "ERROR",
    DEBUG = "DEBUG",
  }

  function logMessage(level: LogMsg, message: string): void {
    if (level === LogMsg.INFO) console.log("INFO: " + message);
    if (level === LogMsg.WARN) console.warn("WARN: " + message);
    if (level === LogMsg.ERROR) console.error("ERROR: " + message);
    if (level === LogMsg.DEBUG) console.debug("DEBUG: " + message);
  }
}

// 문제 9: 날짜 유형 (일반, 휴일)
{
  enum Day {
    WEEKDAY = "WEEKDAY",
    WEEKEND = "WEEKEND",
  }

  function getDayType(day: Day): string {
    if (day === Day.WEEKDAY) return "It's a weekday";
    if (day === Day.WEEKEND) return "It's a weekend";
    return "Unknown day type";
  }
}

// 문제 10: 마케팅 캠페인 유형
{
  enum Campaign {
    DISCOUNT = "DISCOUNT",
    PROMOTION = "PROMOTION",
    GIVEAWAY = "GIVEAWAY",
  }

  function getCampaignType(type: Campaign): string {
    if (type === Campaign.DISCOUNT) return "Discount campaign";
    if (type === Campaign.PROMOTION) return "Promotion campaign";
    if (type === Campaign.GIVEAWAY) return "Giveaway campaign";
    return "Unknown campaign type";
  }
}
