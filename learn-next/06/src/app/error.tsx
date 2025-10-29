"use client";
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void; // 에러가 발생한 라우트 경로를 지정
}) {
  return (
    <>
      <h1>Error</h1>
    </>
  );
}
