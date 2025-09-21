import { useState } from "react";
import Button from "./html/Button";
import Checkbox from "./html/Checkbox";
import SvgClose from "./svg/SvgClose";
import SvgPencil from "./svg/SvgPencil";

type TodoListItem = {
  todo: Todo;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  updateTodo: (id: number, newText: string) => void;
};

export default function TodoListItem({
  todo,
  toggleTodo,
  deleteTodo,
  updateTodo,
}: TodoListItem) {
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
      updateTodo(todo.id, editText);
  };

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
}
