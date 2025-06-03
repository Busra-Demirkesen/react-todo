import type { Todo } from "../types/todo";

interface TodoItemProps {
  todo: Todo;
  onCompletedChange: (id: number, completed: boolean) => void;
}

const TodoItem = ({ todo, onCompletedChange }: TodoItemProps) => {
  return (
    <div>
      <label className="flex items-center gap-2 cursor-pointer border rounded-md p-2 border-gray-400 bg-white hover:bg-gray-100 transition-colors">
        <input type="checkbox" onChange={(e) => onCompletedChange(todo.id, e.target.checked) } checked={todo.completed} className="scale-125 " />
        <span className={todo.completed ? "line-through text-gray-500" : ""}>
          {todo.title}
        </span>
      </label>
    </div>
  );
};

export default TodoItem;
