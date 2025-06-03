import { useState } from "react";

interface AddTodoFormProps {
  onSubmit: (title: string) => void;
}

export default function AddTodoForm({ onSubmit }: AddTodoFormProps) {
  const [input, setInput] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (input.trim() === "") return;
    onSubmit(input.trim());
    setInput("");
  }

  return (
    <form className="flex" onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new todo"
        className="rounded-s-md grow border border-gray-400 p-2"
        aria-label="Todo title"
      />
      <button
        type="submit"
        className="rounded-e-md bg-blue-500 text-white px-4 py-2 hover:bg-blue-600 transition-colors"
      >
        Add
      </button>
    </form>
  );
}
