// 화면 렌더링과 관련 없는 작업 -> 사이드이펙트
// 사이드이펙트 -> useEffect()

import useFetch from "../hooks/useFetch";

export default function Fetch() {
  const {
    data: posts,
    isLoading: isLoading,
    error: error,
  } = useFetch<Post[]>("http://localhost:3001/posts");

  const {
    data: comments,
    isLoading: isLoadingComments,
    error: errorComments,
  } = useFetch<Post[]>("http://localhost:3001/comments");

  if (isLoading || isLoadingComments) return <p>Loading...</p>;
  if (error || errorComments)
    return <p style={{ color: "blue" }}>{error || errorComments}</p>;
  return (
    <>
      <pre>{JSON.stringify(posts, null, 2)}</pre>
      <pre>{JSON.stringify(comments, null, 2)}</pre>
    </>
  );
}
