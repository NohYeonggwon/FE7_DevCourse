import { createContext } from "react";

type ConfigContextType = {
  theme: string;
};

export const ConfigContext = createContext<ConfigContextType | null>(null);

type ConfigActionContextType = {
  darkMode: () => void;
  lightMode: () => void;
};

export const ConfigActionContext =
  createContext<ConfigActionContextType | null>({
    darkMode: () => {},
    lightMode: () => {},
  });
