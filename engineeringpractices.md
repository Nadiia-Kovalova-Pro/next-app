# Engineering Practices

This document outlines the engineering practices followed in the Next.js Todo App project.

## Coding Conventions

### Component Conventions
- Always use **functional components** with React hooks.
- Components should be small, reusable, and follow the single responsibility principle.
- Use TypeScript for type safety.
- Prefer interfaces over types for object shapes.
- Use `readonly` for props and state that should not be mutated.
- Prefer `unknown` over `any` for better type safety.
- Use generics for reusable components and functions.
- Define types in the `types/` folder for better organization.
- Always type function return values, props, and state explicitly.

### File Naming
- Use **PascalCase** for React component files (e.g., `MyComponent.tsx`).
- Use **camelCase** for utility functions, hooks, and variables (e.g., `useTodos.ts`, `fetchData.ts`).
- Test files should have the `.test.tsx` suffix (e.g., `MyComponent.test.tsx`).
- CSS Modules use `ComponentName.module.css`.

### Styling
- Use **CSS Modules** for component-specific styles.
- Avoid inline styles.
- Keep global styles minimal and use them for resets or typography.

### API Integration
- Use `lib/api.ts` for abstracting API calls with Axios.
- Always handle errors gracefully and provide fallback UI.
- Use **React Query** for caching and managing server-side state.
- Use **async/await** for handling asynchronous code.

### Hooks
- Custom hooks are stored in `/hooks`.
- Use hooks for state management and side effects.

## Testing Guidelines

- Write tests for all critical components and logic.
- Use **Jest** and **React Testing Library** for testing.
- Mock API calls and hooks using Jest.
- Test files are colocated with components.

## Git Conventions

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

## Project Structure

- Follow the default Next.js App Router structure.
- Pages: `/app` contains route-based components.
- Components: `/components` stores reusable UI components.
- Hooks: `/hooks` stores custom React hooks.
- Styles: `/styles` contains CSS Modules.
- Lib: `/lib` contains utility functions and API integrations.
- Types: `/types` contains TypeScript type definitions.

## Tools & Libraries

- **Next.js** for the framework.
- **React** for UI components.
- **TypeScript** for type safety.
- **@tanstack/react-query** for data fetching and caching.
- **Axios** for HTTP requests.
- **Jest** and **React Testing Library** for testing.
- **ESLint** for linting.
- **Prettier** for formatting (implied by ESLint config).

## Build and Development

- Use `npm run dev` for development with Turbopack.
- Use `npm run build` for production builds.
- Use `npm run lint` for linting.
- Use `npm test` for running tests.