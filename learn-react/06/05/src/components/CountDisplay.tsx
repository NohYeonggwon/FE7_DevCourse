type CountDisplayProps = {
  count: number;
};

export default function CountDisplay({ count }: CountDisplayProps) {
  return <h1>Count: {count}</h1>;
}
