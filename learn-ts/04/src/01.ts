{
  // TODO: 나중에 타입 교체
  // any - 아무 값이나 대입하고 사용할 수 있어서 타입 검사를 우회하는 특수한 타입
  // unknown - 알 수 없는 타입 (안전한, 유연한 any)
  let x: unknown;
  x = 10.12;

  // 타입 좁히기 필요
  if (typeof x === "number") console.log(x.toFixed(2));
}
{
  // 타입 단언
  // as, <>
  // 개발자가 타입스크립트 컴파일러보다 타입을 더 잘 알고 있을 때 사용
  // 타입을 내가 정의, 보장하겠다.
  let x: unknown;
  x = 10.12;

  // 장점 -> 타입을 내가 원하는대로 지정할 수 있음
  // 단점 -> 책임은 개발자가 가져가야함
  (x as number).toFixed(1);
  (<number>x).toFixed(1);

  (x as { name: string }).name;

  const el = document.querySelector("#user") as Element;
  el.addEventListener("click", function () {});
}
