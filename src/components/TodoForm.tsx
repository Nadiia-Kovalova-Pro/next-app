import { useState, FormEvent } from 'react';
import styles from '../styles/TodoApp.module.css';
import Button from './Button';

interface TodoFormProps {
  onAdd: (title: string, description?: string) => Promise<boolean>;
  errorMessage?: string;
  isLoading?: boolean;
}

export default function TodoForm({ onAdd, errorMessage, isLoading }: TodoFormProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const success = await onAdd(title, description);
    if (success) {
      setTitle('');
      setDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Input section for adding new todos */}
      <div className={styles.form}>
        <div className={styles.inputGroup}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Add a new task..."
            className={styles.input}
            disabled={isLoading}
            aria-label="New todo title"
            required
          />
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description (optional)..."
            className={styles.input}
            disabled={isLoading}
            aria-label="New todo description"
          />
        </div>
        <Button type="submit" variant="success" disabled={isLoading}>
          {isLoading ? 'Adding...' : 'Add'}
        </Button>
      </div>
      {/* Error message display */}
      {errorMessage && <p className={styles.error} role="alert">{errorMessage}</p>}
    </form>
  );
}