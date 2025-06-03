import { Trash2 } from "lucide-react";
import type { Todo } from "../types/todo";

interface TodoItemProps {
  todo: Todo;
  onCompletedChange: (id: number, completed: boolean) => void;
  onDelete: (id: number) => void;
}

const TodoItem = ({ todo, onCompletedChange, onDelete }: TodoItemProps) => {
  return (
    <div className="flex items-center gap-1">
      <label className="flex items-center gap-2 cursor-pointer border rounded-md p-2 border-gray-400 bg-white hover:bg-gray-100 transition-colors grow">
        <input
          type="checkbox"
          checked={!!todo.completed}
          onChange={(e) => onCompletedChange(todo.id, e.target.checked)}
          className="scale-125"
        />
        <span className={todo.completed ? "line-through text-gray-500" : ""}>
          {todo.title}
        </span>
      </label>
      <button
        type="button"
        onClick={() => onDelete(todo.id)}
        className="p-2"
      >
        <Trash2
          size={20}
          className="text-red-500 hover:text-red-700 transition-colors ml-2"
        />
      </button>
    </div>
  );
};

export default TodoItem;
