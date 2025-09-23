import { createContext } from "react";

type CounterContextType = {
  count: number;
};

export const CounterContext = createContext<CounterContextType>({
  count: 0,
});

type CounterActionContextType = {
  increment: () => void;
  reset: () => void;
  decrement: () => void;
};

export const CounterActionContext =
  createContext<CounterActionContextType | null>({
    increment: () => {},
    reset: () => {},
    decrement: () => {},
  });
