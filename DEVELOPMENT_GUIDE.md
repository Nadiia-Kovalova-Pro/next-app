# Development Guide for Next App

This document outlines the development practices, conventions, and tools used in this Next.js project to ensure consistency, scalability, and maintainability. Please follow these guidelines when contributing or working on the project.

---

## 📁 Project Structure

- Follow the default Next.js folder structure:
  ```
  /pages
  /components
  /styles
  /lib
  /hooks
  /types
  ```
- **Pages**: All route-based components go here. Pages automatically map to a route.
- **Components**: Reusable UI components go in the `/components` folder.
- **Styles**: Use the `/styles` folder for global styles and module-based styles.
- **Lib**: Utility functions, APIs, or third-party integrations live in the `/lib` folder.
- **Hooks**: Custom React hooks should be stored in the `/hooks` folder.

---

## 🖌 Styling Conventions

We use **CSS Modules**.

- Use **CSS Modules** for component-specific styles (e.g., `ComponentName.module.css`).
- Avoid inline styles unless absolutely necessary.
- Keep global styles minimal.

---

## 🛠 Tools & Libraries

### 1. **Framework**
   - **Next.js**: React framework for server-side rendering and static site generation.

### 2. **Styling**
   - **CSS Modules**: For component-scoped styles.

### 3. **State Management**
   - Prefer **Context API** for small-scale state management.
   - Use **Redux Toolkit** for larger state management needs.

### 4. **API Handling**
   - Use **Axios** for HTTP requests.
   - All API calls should be abstracted in the `/lib/api.js` file.
   - Use **React Query** for caching and managing server state.

### 5. **Linting & Formatting**
   - ESLint: For linting JS/TS code. (Config: `.eslintrc.js`)
   - Prettier: For consistent code formatting. (Config: `.prettierrc`)
   - Install VSCode extensions for ESLint and Prettier and enable auto-formatting.

### 6. **Testing**
   - Use **Jest** and **React Testing Library** for unit and integration testing.
   - Write tests for all critical logic and components.
   - Store test files alongside the component or module with a `.test.js` suffix.

### 7. **Version Control**
   - We use **Git** for version control.
   - Follow the Git branching model:
     - `main`: Production-ready code.
     - `develop`: Development branch.
     - Feature branches: `feature/branch-name`
     - Hotfix branches: `hotfix/branch-name`

---

## ⚙️ Coding Conventions

### 1. **Naming Conventions**
   - Use **PascalCase** for React components and files (e.g., `MyComponent.js`).
   - Use **camelCase** for variables and functions.
   - Use **UPPER_SNAKE_CASE** for constants.

### 2. **File Naming**
   - Use `.js` or `.jsx` for JavaScript files.
   - Use `.ts` or `.tsx` for TypeScript files (if applicable).

### 3. **TypeScript**
   - If using TypeScript, define types in a dedicated `types/` folder or inline when appropriate.
   - Use interfaces for object types and types for everything else.

### 4. **Imports**
   - Use absolute imports for better readability. Configure `jsconfig.json` for aliases.
   - Group imports in the following order:
     1. React and Next.js imports.
     2. Third-party libraries.
     3. Aliased imports (e.g., `@/components`).
     4. Relative imports.

### 5. **Best Practices**
   - Follow the **DRY** principle (Don't Repeat Yourself).
   - Ensure components are **small** and **focused** (Single Responsibility Principle).
   - Use `React.memo` for memoizing components where necessary.
   - Always define TypeScript types for components.
   - Use `async/await` for asynchronous code.
   - Avoid using `any` in TypeScript—be as specific as possible.

---

## ✅ Checklist Before Submitting Code

1. Run `npm run lint` and fix all linting errors.
2. Run `npm run test` and ensure all tests pass.
3. Ensure your code is properly formatted using Prettier.
4. Update documentation or comments if necessary.
5. Update the CHANGELOG.md file and describe code changes.
6. Update the version in package.json file.
6. Test functionality on different screen sizes if applicable.

---

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Query Documentation](https://tanstack.com/query/v4)
- [Jest Documentation](https://jestjs.io/docs/getting-started)

---

