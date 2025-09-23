import React, { useState } from "react";
import Button from "./html/Button";
import Checkbox from "./html/Checkbox";
import SvgClose from "./svg/SvgClose";
import SvgPencil from "./svg/SvgPencil";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";
import { deleteTodo, toggleTodo, updateTodo } from "../store/slice/todoSlice";

type TodoListItem = {
  todo: Todo;
};

export default React.memo(function TodoListItem({ todo }: TodoListItem) {
  const dispatch = useDispatch<AppDispatch>();

  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  // 수정 버튼 클릭 시
  const handleEdit = () => {
    //상태 변경
    setIsEditing((isEditing) => !isEditing);
    // 수정 텍스트가 빈칸이면 기존 텍스트로, 아니면 수정한 텍스트
    setEditText(editText === "" ? todo.text : editText);

    // 수정한 텍스트가 빈칸이 아니거나, 기존 텍스트랑 같지 않으면 수정
    if (editText.trim() !== "" && editText !== todo.text)
      dispatch(updateTodo({ id: todo.id, text: editText }));
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
            onChange={() => dispatch(toggleTodo(todo.id))}
          >
            {todo.text}
          </Checkbox>
        )}

        <div className="todo__button-group">
          <Button onClick={handleEdit} className="todo__action-button">
            <SvgPencil />
          </Button>
          <Button
            onClick={() => dispatch(deleteTodo(todo.id))}
            className="todo__action-button"
          >
            <SvgClose />
          </Button>
        </div>
      </li>
    </>
  );
});
