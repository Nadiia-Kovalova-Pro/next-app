import { useState } from 'react';
import { Todo } from '../types/todo';

export function useTodos() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [errorMessage, setErrorMessage] = useState('');

  /**
   * Adds a new todo if the input is not empty and not a duplicate.
   * @returns true if the todo was added successfully, false otherwise
   */
  const addTodo = (text: string): boolean => {
    const trimmedText = text.trim();
    if (!trimmedText) {
      setErrorMessage('Please enter a todo item.');
      return false;
    }

    if (todos.some(todo => todo.text === trimmedText)) {
      setErrorMessage('Todo already exists!');
      return false;
    }

    setTodos(prevTodos => [...prevTodos, { id: Date.now(), text: trimmedText, completed: false }]);
    setErrorMessage('');
    return true;
  };

  /**
   * Toggles the completion status of a todo.
   */
  const toggleTodo = (id: number) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  /**
   * Deletes a todo by its id.
   */
  const deleteTodo = (id: number) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };

  return {
    todos,
    errorMessage,
    addTodo,
    toggleTodo,
    deleteTodo,
  };
}