import { useState, type ChangeEvent } from "react";

type TodoInputProps = {
  addTodo: (text: string) => void;
};
export const TodoInput = ({ addTodo }: TodoInputProps) => {
  const [newTodo, setNewTodo] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };
  const handleAddTodo = () => {
    if (newTodo.trim()) {
      addTodo(newTodo);
      setNewTodo("");
    }
  };
  return (
    <div className="mb-4 flex">
      <input
        value={newTodo}
        onChange={handleChange}
        type="text"
        className="w-full px-4 py-2 border rounded-l-lg  rounded-r-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 mr-3"
        name=""
        id=""
      />
      <button
        onClick={handleAddTodo}
        className="bg-emerald-500 text-white px-6 py-2 rounded-r-lg hover:bg-emerald-700 transition-all "
      >
        Add
      </button>
    </div>
  );
};
