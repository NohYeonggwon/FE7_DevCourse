import { createContext } from "react";

export type TodoContextType = {
  todos: Todo[];
};

export const TodoContext = createContext<TodoContextType | null>(null);

type TodoActionContextType = {
  addTodo: (text: string) => void;
  toggleTodo: (id: string) => void;
  updateTodo: (id: string, text: string) => void;
  deleteTodo: (id: string) => void;
};

export const TodoActionContext = createContext<TodoActionContextType | null>(
  null
);
