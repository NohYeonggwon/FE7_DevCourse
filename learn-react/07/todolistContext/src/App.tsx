import TodoProvider from "./components/contexts/todoList/TodoProvider";
import Todo from "./components/Todo";

export default function App() {
  return (
    <>
      <TodoProvider>
        <Todo />
      </TodoProvider>
    </>
  );
}
