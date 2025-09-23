import { useMemo, useState } from "react";
import { TodoActionContext, TodoContext } from "./todoContext";

export default function TodoProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [todos, setTodos] = useState<Todo[]>([]);

  // 추가
  const addTodo = (text: string) => {
    setTodos((todos) => [
      ...todos,
      { id: new Date().getTime().toString(), text, completed: false },
    ]);
  };

  const toggleTodo = (id: string) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id: string, newText: string) => {
    setTodos((todos) =>
      todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };

  const todoContextValue = useMemo(
    () => ({ addTodo, toggleTodo, deleteTodo, updateTodo }),
    []
  );

  return (
    <TodoActionContext value={todoContextValue}>
      <TodoContext value={{ todos }}>{children}</TodoContext>
    </TodoActionContext>
  );
}
