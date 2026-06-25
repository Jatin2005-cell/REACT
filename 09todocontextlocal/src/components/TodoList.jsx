import TodoItem from "./TodoItem";
import { useTodo } from "../context/TodoContext";

function TodoList() {

    const { todos } = useTodo();

    return (

        <div>

            {
                todos.map((todo)=>(
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                    />
                ))
            }

        </div>

    );

}

export default TodoList;