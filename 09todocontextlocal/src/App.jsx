import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="min-h-screen bg-slate-900 flex justify-center items-center">
      <div className="w-full max-w-xl bg-slate-800 rounded-xl p-6 shadow-lg">

        <h1 className="text-3xl font-bold text-white text-center mb-6">
          Todo App
        </h1>

        <TodoForm />

        <TodoList />

      </div>
    </div>
  );
}

export default App;