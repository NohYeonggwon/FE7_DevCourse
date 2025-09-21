type CountOutSideProps = {
  count: number;
};

export default function CountOutSide({ count }: CountOutSideProps) {
  return <h1>CountOutSide: {count}</h1>;
}
