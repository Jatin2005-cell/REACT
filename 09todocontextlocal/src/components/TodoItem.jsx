import { useState } from "react";
import { useTodo } from "../context/TodoContext";

function TodoItem({ todo }) {
  const { deleteTodo, toggleTodo, updateTodo } = useTodo();

  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    if (isEditing) {
      if (!editText.trim()) return;

      updateTodo(todo.id, editText);
    }

    setIsEditing(!isEditing);
  };

  return (
    <div className="bg-slate-700 p-4 rounded-lg mb-3 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />

        {isEditing ? (
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="px-2 py-1 rounded outline-none"
          />
        ) : (
          <p
            className={`text-white ${
              todo.completed ? "line-through text-gray-400" : ""
            }`}
          >
            {todo.text}
          </p>
        )}
      </div>

      <div className="flex gap-2">
        <button
          onClick={handleEdit}
          className="bg-yellow-500 px-3 py-1 rounded text-white"
        >
          {isEditing ? "Save" : "Edit"}
        </button>

        <button
          onClick={() => deleteTodo(todo.id)}
          className="bg-red-600 px-3 py-1 rounded text-white"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;