import styles from '../../styles/About.module.css';

export const metadata = {
  title: 'About - Todo App',
  description: 'Learn more about our Todo App, its features, and how to use it effectively.',
};

export default function About() {
  return (
    <main className={styles.container} role="main">
      <div className={styles.card}>
        <h1 className={styles.title}>About Todo App</h1>
        <p className={styles.description}>
          Welcome to our Todo App! This is a simple and efficient task management application built with Next.js and TypeScript, designed to help you stay organized and productive.
        </p>
        <h2 className={styles.sectionTitle}>Features</h2>
        <ul className={styles.featuresList}>
          <li className={styles.featureItem}>Add new todos with ease</li>
          <li className={styles.featureItem}>Mark todos as completed with a single click</li>
          <li className={styles.featureItem}>Delete todos you no longer need</li>
          <li className={styles.featureItem}>Persistent storage using local storage</li>
          <li className={styles.featureItem}>Responsive design for all devices</li>
        </ul>
        <h2 className={styles.sectionTitle}>How to Use</h2>
        <p className={styles.usageText}>
          Simply type your task in the input field and click "Add Todo". Click on a todo item to toggle its completion status, or use the delete button to remove it. Your todos are automatically saved and will persist between sessions.
        </p>
        <p className={styles.usageText}>
          This app helps you stay organized and productive by keeping track of your daily tasks in a clean, intuitive interface.
        </p>
      </div>
    </main>
  );
}