import { useState } from "react";
import { TodoContext } from "./TodoContext";
import { useEffect } from "react";

export default function Provider({ children }) {

   const [todos, setTodos] = useState(() => {

const saved = localStorage.getItem("todos");

return saved ? JSON.parse(saved) : [];

});
    const addTodo = (todo) => {
        const newTodo = {
        id: Date.now(),
        text,
        completed: false,
    };

    setTodos((prev) => [...prev, newTodo]);
    };

    const deleteTodo = (id) => {
         setTodos((prev) => prev.filter((todo) => todo.id !== id));
    };

    const updateTodo = (id, text) => {

    setTodos((prev) =>
        prev.map((todo) =>
            todo.id === id
                ? { ...todo, text }
                : todo
        )
    );

};

    const toggleTodo = (id) => {
          setTodos((prev) =>
        prev.map((todo) =>
            todo.id === id
                ? { ...todo, completed: !todo.completed }
                : todo
        )
    );


    };

    return (
        <TodoContext.Provider
            value={{
                todos,
                addTodo,
                deleteTodo,
                updateTodo,
                toggleTodo
            }}
        >
            {children}
        </TodoContext.Provider>
    );
}