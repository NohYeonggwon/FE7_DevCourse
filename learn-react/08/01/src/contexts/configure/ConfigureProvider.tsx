import { useMemo, useState } from "react";
import { ConfigActionContext, ConfigContext } from "./configureContext";

export default function ConfigureProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState("dark");
  const darkMode = () => setTheme("dark");
  const lightMode = () => setTheme("light");
  const configActionValue = useMemo(
    () => ({
      darkMode,
      lightMode,
    }),
    []
  );
  return (
    <>
      <ConfigContext value={{ theme }}>
        <ConfigActionContext value={configActionValue}>
          {children}
        </ConfigActionContext>
      </ConfigContext>
    </>
  );
}
