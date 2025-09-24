import { useEffect, useState } from "react";
import { axiosInstance } from "../api/axiosInstance";

export default function useAxios<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true); // 로딩 시작
        const { data } = await axiosInstance.get(url);
        setData(data); // 데이터 저장
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message); // 에러 처리
        }
      } finally {
        setIsLoading(false); // 로딩 종료
      }
    };

    fetchData();
  }, [url]); // URL이 변경될 때마다 다시 호출

  return { data, error, isLoading };
}
