# Copilot Instructions for NEXT App

This document provides guidelines and examples for GitHub Copilot to generate code effectively in the Next.js project. Follow these instructions to ensure Copilot aligns with the project's conventions, tools, and coding style.

---

## 📁 Project Structure Guidelines



### Folder Structure:
- Follow the default Next.js folder structure:
  ```
  /pages
  /components
  /styles
  /lib
  /hooks
  /types
  ```
- Pages: `/pages` contains all route-based components.
- Components: `/components` stores reusable UI components.
- Hooks: `/hooks` stores custom React hooks.
- Styles: `/styles` contains global and component-scoped styles.
- Lib: `/lib` contains utility functions, API integrations, and helpers.

### File Naming:
- Use **PascalCase** for React component files (e.g., `MyComponent.js`).
- Use **camelCase** for utility functions and hooks (e.g., `fetchData.js`).
- Test files should have the `.test.js` suffix (e.g., `MyComponent.test.js`).

---

## 🖌 Styling Guidelines

- Use **CSS Modules** for component-specific styles (`ComponentName.module.css`).
- Avoid inline styles.
- Keep global styles minimal and use them for resets or typography.

### Example:
```jsx
import styles from './Button.module.css';

export default function Button({ label }) {
  return <button className={`${styles.button}`}>{label}</button>;
}
```

---

## 🛠 Tools & Libraries

### Key Libraries:
1. **Axios** for API calls.
2. **React Query** for caching and managing server-side state.
3. **Jest** and **React Testing Library** for testing.
4. **ESLint** and **Prettier** for linting and formatting.

### Preferred Patterns:
- Use **React Query** for API calls rather than custom state management.
- Use **Context API** for app-wide state management.
- Use **async/await** for handling asynchronous code.

---

## ⚙️ Coding Conventions

### Component Conventions:
- Always use **functional components**.
- Use **React hooks** for state and lifecycle methods.
- Ensure components are small, reusable, and follow the single responsibility principle.

### API Integration:
- Use `lib/api.js` for abstracting API calls.
- Always handle errors gracefully and provide fallback UI.

### Example:
```javascript
import axios from 'axios';

export async function fetchData(endpoint) {
  try {
    const response = await axios.get(endpoint);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}
```

---

## 🖋 TypeScript Guidelines (Optional)
- Use TypeScript for type safety.
- Prefer interface over type for object shapes.
- Use type aliases for primitive types and unions.
- Always use `readonly` for props and state that should not be mutated.
- Prefer `unknown` over `any` for better type safety.
- Use utility types like `Partial`, `Pick`, and `Omit` for type transformations.
- Use generics for reusable components and functions.
- Define types in the `types/` folder for better organization.
- Always type function return values explicitly.
- Always type props and state explicitly.

### Example:
```typescript
type ButtonProps = {
  label: string;
  onClick: () => void;
};

export default function Button({ label, onClick }: ButtonProps) {
  return <button onClick={onClick}>{label}</button>;
}
```

---

## 🛠 Testing Guidelines

- Write tests for all critical components and logic.
- Use **React Testing Library** for component testing.
- Mock API calls using **Jest**.

### Example:
```javascript
import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders Header component', () => {
  render(<Header />);
  expect(screen.getByText('Welcome to MyApp')).toBeInTheDocument();
});
```

---

## 🔄 Git Conventions

- **Branch Naming**:
  - Feature branches: `feature/branch-name`
  - Hotfix branches: `hotfix/branch-name`
- Commit messages should be clear and follow this format:
  ```
  [Type]: [Short description]
  ```
  Types:
  - `feat`: New feature
  - `fix`: Bug fix
  - `refactor`: Code refactoring
  - `test`: Adding or modifying tests
  - `chore`: Miscellaneous tasks like updating dependencies

---

## 🧠 Copilot Behavior Examples

### API Integration:
**Prompt**: "Fetch user data from an API endpoint using Axios."
```javascript
import axios from 'axios';

export async function getUserData(userId) {
  try {
    const response = await axios.get(`/api/users/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
}
```

### Custom Hook:
**Prompt**: "Create a custom hook for managing form state."
```javascript
import { useState } from 'react';

export function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return { values, handleChange };
}
```

---

## 🎯 Copilot Goal

To ensure Copilot generates code that:
1. Aligns with the **Next.js** and project-specific conventions.
3. Follows best practices like modularity, readability, and scalability.

---

## 📜 Changelog
All notable changes to this project will be documented in CHANGELOG.md, following [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) and [Semantic Versioning](https://semver.org/spec/v2.0.0.html).
