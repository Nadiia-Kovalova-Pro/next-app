'use client';

import TodoItem from '../components/TodoItem';
import TodoForm from '../components/TodoForm';
import { useTodos } from '../hooks/useTodos';
import styles from '../styles/TodoApp.module.css';

export default function Home() {
  const { todos, errorMessage, addTodo, toggleTodo, deleteTodo } = useTodos();

  return (
    <main className={styles.container} role="main">
      <div className={styles.card}>
        <h1 className={styles.title}>✅ Todo App</h1>
        <TodoForm onAdd={addTodo} errorMessage={errorMessage} />
        {/* List of todos */}
        <ul className={styles.list} aria-label="List of todo items">
          {todos.map(todo => (
            <TodoItem key={todo.id} todo={todo} onToggle={toggleTodo} onDelete={deleteTodo} />
          ))}
        </ul>
      </div>
    </main>
  );
}
