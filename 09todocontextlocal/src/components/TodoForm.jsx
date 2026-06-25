import { useState } from "react";
import { useTodo } from "../context/TodoContext";

function TodoForm() {

    const [text, setText] = useState("");

    const { addTodo } = useTodo();

    const handleSubmit = (e) => {

        e.preventDefault();

        if (!text.trim()) return;

        addTodo(text);

        setText("");
    };

    return (

        <form
            onSubmit={handleSubmit}
            className="flex gap-3 mb-6"
        >

            <input
                type="text"
                value={text}
                onChange={(e)=>setText(e.target.value)}
                placeholder="Enter a todo..."
                className="flex-1 px-4 py-2 rounded-lg outline-none"
            />

            <button
                className="bg-blue-600 px-5 rounded-lg text-white hover:bg-blue-700"
            >
                Add
            </button>

        </form>

    );

}

export default TodoForm;