"use client";

import Button from "@/src/components/Button";

export default function HomePage() {
  // router.back() 뒤로 가기
  // router.forward() 앞으로 가기
  // router.hmrRefresh() HMD 새로고침
  // router.prefetch() 상용 모드에서만 사용 가능
  // router.push(url) 라우트 전환
  // router.refresh() 현재 페이지 새로고침
  // router.replace(url) 라우트 전환(브라우저 히스토리를 쌓지 않음)
  return (
    <>
      <h1>홈</h1>
      <Button text="버어어튼"></Button>
    </>
  );
}
