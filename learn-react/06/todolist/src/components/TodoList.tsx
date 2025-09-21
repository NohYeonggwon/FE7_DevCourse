import TodoListEmpty from "./TodoListEmpty";
import TodoListItem from "./TodoListItem";

type TodoList = {
  todos: Todo[];
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  updateTodo: (id: number, newText: string) => void;
};

export default function TodoList({
  todos,
  toggleTodo,
  deleteTodo,
  updateTodo,
}: TodoList) {
  return (
    <>
      <ul className="todo__list">
        {/* 할 일 목록이 없을 때  */}
        {todos.length === 0 && <TodoListEmpty />}
        {todos.length > 0 &&
          todos.map((todo) => (
            <TodoListItem
              key={todo.id}
              todo={todo}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
              updateTodo={updateTodo}
            />
          ))}
        {/* 할 일 목록이 있을 때 */}
      </ul>
    </>
  );
}
