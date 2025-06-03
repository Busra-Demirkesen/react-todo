import TodoItem from "./TodoItem";
import type { Todo } from "../types/todo";

interface TodoListProps {
  todos: Todo[];
  onCompletedChange: (id: number, completed: boolean) => void;
  onDelete: (id: number) => void;
}

export default function TodoList({
  todos,
  onCompletedChange,
  onDelete,
}: TodoListProps) {
  const todoSorted = todos.slice().sort((a, b) => {
    if (a.completed === b.completed) {
      return b.id - a.id;
    }
    return a.completed ? 1 : -1; // Completed todos go to the end
  });

  return (
    <div className="space-y-2">
      {todoSorted.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onCompletedChange={onCompletedChange}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
