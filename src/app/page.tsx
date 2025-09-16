'use client';

import TodoItem from '../components/TodoItem';
import TodoForm from '../components/TodoForm';
import { useTodos } from '../hooks/useTodos';
import styles from '../styles/TodoApp.module.css';

export default function Home() {
  const {
    todos,
    isLoading,
    errorMessage,
    addTodo,
    toggleTodo,
    deleteTodo,
    isAdding,
    isUpdating,
    isDeleting
  } = useTodos();

  const handleAddTodo = async (title: string, description?: string) => {
    return await addTodo(title, description);
  };

  const handleToggleTodo = async (id: string) => {
    await toggleTodo(id);
  };

  const handleDeleteTodo = async (id: string) => {
    await deleteTodo(id);
  };

  return (
    <main className={styles.container} role="main">
      <div className={styles.card}>
        <h1 className={styles.title}>✅ Todo App</h1>
        <TodoForm
          onAdd={handleAddTodo}
          errorMessage={errorMessage}
          isLoading={isAdding}
        />
        {/* Loading state */}
        {isLoading && (
          <div className={styles.loading}>
            <p>Loading todos...</p>
          </div>
        )}
        {/* List of todos */}
        {!isLoading && (
          <ul className={styles.list} aria-label="List of todo items">
            {todos.map(todo => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={handleToggleTodo}
                onDelete={handleDeleteTodo}
                isUpdating={isUpdating}
                isDeleting={isDeleting}
              />
            ))}
          </ul>
        )}
        {/* Empty state */}
        {!isLoading && todos.length === 0 && (
          <div className={styles.empty}>
            <p>No todos yet. Add one above!</p>
          </div>
        )}
      </div>
    </main>
  );
}
