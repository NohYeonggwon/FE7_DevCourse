import { useEffect, useState } from "react";

export default function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();
        setData(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]); // URL이 변경될 때마다 다시 호출

  return { data, error, isLoading };
}
