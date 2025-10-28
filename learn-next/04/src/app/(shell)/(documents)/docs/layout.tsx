export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h1>Docs Header</h1>
      {children}
      <h1>Docs Footer</h1>
    </>
  );
}
