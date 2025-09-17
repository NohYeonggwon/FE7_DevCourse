interface ChildProps {
  // styled: { fontSize: string; color: string };
  // styled: { [key: string]: string };
  styled: React.CSSProperties;
}

export default function Ex08({ styled }: ChildProps) {
  return (
    <>
      <h1>Ex08</h1>
      <p style={styled}>8번</p>
    </>
  );
}
