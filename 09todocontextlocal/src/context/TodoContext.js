import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [],
    addTodo: () => {},
    deleteTodo: () => {},
    updateTodo: () => {},
    toggleTodo: () => {},
});

export const useTodo = () => {
    return useContext(TodoContext);
};