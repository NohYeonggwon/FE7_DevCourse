import { useContext } from "react";
import TodoListEmpty from "./TodoListEmpty";
import TodoListItem from "./TodoListItem";
import { TodoContext } from "./contexts/todoList/todoContext";

export default function TodoList() {
  const { todos } = useContext(TodoContext)!;
  return (
    <>
      <ul className="todo__list">
        {/* 할 일 목록이 없을 때  */}
        {todos.length === 0 && <TodoListEmpty />}
        {todos.length > 0 &&
          todos.map((todo) => <TodoListItem key={todo.id} todo={todo} />)}
        {/* 할 일 목록이 있을 때 */}
      </ul>
    </>
  );
}
