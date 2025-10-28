import { notFound } from "next/navigation";

export default async function TransLateDetail({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (lang == "fr") notFound();
  return (
    <>
      <h1>TransLateDetail: {lang}</h1>
    </>
  );
}
