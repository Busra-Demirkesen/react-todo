import { useState } from "react";
import TodoItem from "./components/TodoItem";
import { dummyData } from "./data/todos";
import type { Todo } from "./types/todo";
import AddTodoForm from "./components/AddTodoForm";

function App() {
  const [todos, setTodos] = useState<Todo[]>(dummyData); 

  function setTodoCompleted(id: number, completed: boolean) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed } : todo
      )
    );
  }

  function addTodo(title: string) {
    const newTodo: Todo = {
      id: Date.now(), // Simple ID generation
      title,
      completed: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  }

  return (
    <main className="py-10 h-screen space-y-5">
      <h1 className="font-bold text-3xl text-center">Your Todos</h1>
      <div className="max-w-lg mx-auto bg-slate-100 p-5 rounded-md space-y-6">
        <AddTodoForm onSubmit={addTodo}/>
        <div className="space-y-2">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onCompletedChange={setTodoCompleted}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

export default App;
