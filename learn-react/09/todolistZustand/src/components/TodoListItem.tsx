import React, { useEffect, useState } from "react";
import Button from "./html/Button";
import Checkbox from "./html/Checkbox";
import SvgClose from "./svg/SvgClose";
import SvgPencil from "./svg/SvgPencil";
import { useTodoStore } from "../stores/todoStore";

type TodoListItem = {
  todo: Todo;
};

export default React.memo(function TodoListItem({ todo }: TodoListItem) {
  const toggleTodo = useTodoStore((state) => state.toggleTodo);
  const deleteTodo = useTodoStore((state) => state.deleteTodo);
  const updateTodo = useTodoStore((state) => state.updateTodo);

  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  useEffect(() => {
    if (!isEditing && editText !== todo.text) updateTodo(todo.id, editText);
  }, [isEditing, editText, todo.id, todo.text, updateTodo]);

  // 수정 버튼 클릭 시
  const handleEdit = () => {
    setIsEditing((isEditing) => !isEditing);
    setEditText(editText === "" ? todo.text : editText);
  };
  console.log("TodoList-Item-Rendering");

  return (
    <>
      {/* 할 일이 완료되면 .todo__item--complete 추가 */}
      <li className={`todo__item ${todo.completed && "todo__item--complete"}`}>
        {/* false => 수정x / true => 수정o*/}
        {isEditing ? (
          <input
            type="text"
            className="todo__modify-input"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            autoFocus
          />
        ) : (
          <Checkbox
            parentClassName="todo__checkbox-group"
            type="checkbox"
            className="todo__checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
          >
            {todo.text}
          </Checkbox>
        )}

        <div className="todo__button-group">
          <Button onClick={handleEdit} className="todo__action-button">
            <SvgPencil />
          </Button>
          <Button
            onClick={() => deleteTodo(todo.id)}
            className="todo__action-button"
          >
            <SvgClose />
          </Button>
        </div>
      </li>
    </>
  );
});
