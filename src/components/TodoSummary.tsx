import { Todo } from '../types/Todo';

interface TodoSummaryProps {
    todos: Todo[];
    deleteAllCompleted: () => void;
}

export default function TodoSummary({
    todos,
    deleteAllCompleted
}: TodoSummaryProps){
    const completedCount = todos.filter(todo => todo.completed).length;
    const totalCount = todos.length;

    return (
        <div className="flex justify-between items-center p-4 bg-gray-100 rounded-lg">
            <div>
                <p className="text-gray-700">
                    {completedCount} of {totalCount} completed
                </p>
            </div>
            <button
                onClick={deleteAllCompleted}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
                Delete Completed
            </button>
        </div>
    );
}