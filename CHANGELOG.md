# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [v1.2.0] - 2025-09-13

### Added
- Custom `useTodos` hook for centralized todo state management and business logic
- `TodoForm` component for better separation of concerns and form handling
- `TodoItemProps` interface for improved type safety in TodoItem component
- CSS Modules implementation replacing Tailwind CSS for styling
- Comprehensive CSS styles in `TodoApp.module.css` with hover states, transitions, and accessibility features
- Form validation with proper error handling and user feedback
- Accessibility improvements including ARIA labels, semantic HTML, and keyboard navigation
- Smooth transitions for todo completion state changes
- Type definitions in dedicated `types/todo.ts` file for better organization
- Reusable `Button` component with multiple variants (primary, secondary, danger)
- `Button.module.css` for consistent button styling across the application

### Changed
- Refactored main `Home` component to use custom hook and extracted components
- Improved variable naming and code readability throughout the application
- Enhanced form handling with proper HTML form elements and submit events
- Updated styling system from Tailwind CSS utility classes to CSS Modules
- Modified `addTodo` function to return success status for better UX feedback
- Improved error messaging with specific validation messages
- Updated `TodoForm` and `TodoItem` components to use the new reusable `Button` component
- Replaced inline button elements with consistent `Button` component usage

### Removed
- Tailwind CSS dependency and configuration
- Inline Tailwind utility classes from components
- Direct state management from main component (moved to custom hook)
- Redundant button styling in `TodoApp.module.css` (moved to `Button.module.css`)

### Fixed
- Input clearing behavior to only clear on successful todo addition
- Form submission handling with proper event prevention
- Type safety issues with better TypeScript interfaces

### Technical Improvements
- Component extraction for better maintainability and reusability
- Custom hook implementation for logic separation
- CSS Modules for scoped and conflict-free styling
- Enhanced accessibility with proper ARIA attributes and semantic markup
- Improved error handling and user feedback systems
- Reusable component library with consistent styling and behavior

## [v1.1.0] - 2025-09-13

### Added
- UI feedback for duplicate todos to enhance user experience
- Error state and message display to prevent silent failures when adding existing todos

## [v1.0.0] - 2025-09-12

### Added
- Initial release with basic add, toggle, and delete functionality for todos
- React state management for handling todo operations
- Tailwind CSS styling for a clean and responsive UI

[v1.1.0]: https://github.com/Nadiia-Kovalova-Pro/next-app/compare/v1.0.0...v1.1.0
[v1.2.0]: https://github.com/Nadiia-Kovalova-Pro/next-app/compare/v1.1.0...v1.2.0
[v1.0.0]: https://github.com/Nadiia-Kovalova-Pro/next-app/releases/tag/v1.0.0