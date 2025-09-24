import { useEffect, useState } from "react";

export default function useFetch<T>(url: string) {
  const [data, setData] = useState<T[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);

        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNDIwMzFmOTQxZTc5YjY2ZjVhODliZDVjMGIzZTI4YiIsIm5iZiI6MTc1ODY5NzU3MS43MSwic3ViIjoiNjhkMzk4NjM2NWFmOGY4ZWIwNDlmM2Y4Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.kNc0DJF0Y5bPnLBTpAgBAs1NYsYkNqJLzhvZrjx0rQc",
          },
        };

        const res = await fetch(url, options);
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }

        const json = await res.json();
        setData(json.results);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, isLoading, error };
}
