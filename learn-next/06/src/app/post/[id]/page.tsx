// "동저게스먼트 - 게시글"
// "1 - 게시글"
// "2 - 게시글"

import { Metadata } from "next";

export async function generateMetadata({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const { lang = "ko" } = await searchParams;
  return {
    title: `${id} - 게시글(${lang})`,
  };
}

export default async function PostDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <>
      <h1>PostDetailPage {id}</h1>
    </>
  );
}
