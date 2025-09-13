import React from 'react';
import { Todo } from '../types/todo';
import styles from '../styles/TodoApp.module.css';
import Button from './Button';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

// Component for individual todo item
function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <li className={styles.item}>
      <label className={styles.label}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className={styles.checkbox}
          aria-label={`Mark "${todo.text}" as ${todo.completed ? 'incomplete' : 'complete'}`}
        />
        <span className={`${styles.text} ${todo.completed ? styles.completed : ''}`}>
          {todo.text}
        </span>
      </label>
      <Button
        variant="danger"
        onClick={() => onDelete(todo.id)}
        aria-label={`Delete "${todo.text}"`}
      >
        Delete
      </Button>
    </li>
  );
}

export default TodoItem;