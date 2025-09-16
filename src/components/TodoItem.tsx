import React from 'react';
import { Todo } from '../types/todo';
import styles from '../styles/TodoApp.module.css';
import Button from './Button';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  isUpdating?: boolean;
  isDeleting?: boolean;
}

// Component for individual todo item
function TodoItem({ todo, onToggle, onDelete, isUpdating, isDeleting }: TodoItemProps) {
  return (
    <li className={styles.item}>
      <label className={styles.label}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className={styles.checkbox}
          disabled={isUpdating}
          aria-label={`Mark "${todo.title}" as ${todo.completed ? 'incomplete' : 'complete'}`}
        />
        <div className={styles.todoContent}>
          <span className={`${styles.text} ${todo.completed ? styles.completed : ''}`}>
            {todo.title}
          </span>
          {todo.description && (
            <span className={styles.description}>
              {todo.description}
            </span>
          )}
          {todo.category && (
            <span className={styles.category}>
              📁 {todo.category.name}
            </span>
          )}
        </div>
      </label>
      <Button
        variant="danger"
        onClick={() => onDelete(todo.id)}
        disabled={isDeleting}
        aria-label={`Delete "${todo.title}"`}
      >
        {isDeleting ? '...' : '🗑️'}
      </Button>
    </li>
  );
}

export default TodoItem;