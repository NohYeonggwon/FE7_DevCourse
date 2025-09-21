import { useState } from "react";
import TodoEditor from "./TodoEditor";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

export default function Todo() {
  const [todos, setTodos] = useState<Todo[]>([]);

  // 추가
  const addTodo = (text: string) => {
    setTodos((todos) => [
      ...todos,
      {
        id: new Date().getTime(),
        text,
        completed: false,
      },
    ]);
  };

  // 완료
  const toggleTodo = (id: number) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // 삭제
  const deleteTodo = (id: number) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  // 수정
  const updateTodo = (id: number, newText: string) => {
    setTodos((todos) =>
      todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };
  return (
    <>
      <div className="todo">
        <TodoHeader />
        {/* 할 일 등록  */}
        <TodoEditor addTodo={addTodo} />
        {/* 할 일 목록  */}
        <TodoList
          todos={todos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
        />
      </div>
    </>
  );
}
