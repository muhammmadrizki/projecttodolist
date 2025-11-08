import { useState } from "react";
import { TodoInput } from "../components/ToDoInput";
import { TodoItem } from "../components/ToDoItem";
import type { Todo } from "../types/Todo";

export function Todo() {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: 1,
      text: "Jalan Sore",
      completed: true,
    },
    {
      id: 2,
      text: "Makan Malam",
      completed: false,
    },
  ]);

  const addTodo = (newtodo: string) => {
    const todo: Todo = {
      id: todos.length + 1,
      text: newtodo,
      completed: false,
    };
    setTodos((prevTodos) => [...prevTodos, todo]);
  };

  const handleToggleComplete = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDeleteTodo = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-teal-500">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl text-center font-bold text-gray-800 mb-6">
          To Do List
        </h1>
        <TodoInput addTodo={addTodo} />
        <ul className="space-y-4">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggleComplete={handleToggleComplete}
              onDelete={handleDeleteTodo}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
