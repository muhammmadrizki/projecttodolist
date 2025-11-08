import type { Todo } from "../types/Todo";

type TodoItemProps = {
  todo: Todo;
  onToggleComplete: (id: number) => void;
};
export const TodoItem = ({ todo, onToggleComplete }: TodoItemProps) => {
  const { text, completed } = todo;

  return (
    <li
      className={`flex items-center justify-between p-4 rounded-lg shadow-md ${
        completed ? "bg-gray-200 line-through" : "bg-teal-300"
      }`}
    >
      <span
        onClick={() => onToggleComplete(todo.id)}
        className={`cursor-pointer ${
          completed ? "text-gray-600" : "todo-gray-800"
        }`}
      >
        {text}
      </span>
      <button className="text-red-500 hover:text-red-600 transition-all">
        Delete
      </button>
    </li>
  );
};
