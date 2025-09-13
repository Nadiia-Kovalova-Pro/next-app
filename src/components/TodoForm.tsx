import { useState, FormEvent } from 'react';
import styles from '../styles/TodoApp.module.css';
import Button from './Button';

interface TodoFormProps {
  onAdd: (text: string) => boolean;
  errorMessage?: string;
}

export default function TodoForm({ onAdd, errorMessage }: TodoFormProps) {
  const [newTodoText, setNewTodoText] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const success = onAdd(newTodoText);
    if (success) {
      setNewTodoText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Input section for adding new todos */}
      <div className={styles.form}>
        <input
          type="text"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
          placeholder="Add a new task..."
          className={styles.input}
          aria-label="New todo input"
        />
        <Button type="submit" variant="success">
          Add
        </Button>
      </div>
      {/* Error message display */}
      {errorMessage && <p className={styles.error} role="alert">{errorMessage}</p>}
    </form>
  );
}