# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [v1.4.0] - 2025-09-13

### Added
- Checkmark icon (✅) to the Todo App header for visual appeal
- Larger checkbox icons for improved accessibility and visibility
- Enhanced card-style layout for todo items with increased border-radius and subtle shadows
- Trashcan icon (🗑️) replacing text-based delete buttons for better aesthetics

### Changed
- Updated input placeholder text to "Add a new task..." for better clarity
- Changed "Add" button color to vibrant green (#28a745) to signify action
- Styled error messages with smaller font size and light red color (#e63946)
- Updated completed todo text color to suggested gray (#6c757d)
- Enhanced global background color to subtle gray (#f7f7f7) for better visual hierarchy
- Updated delete button color to specified red (#dc3545) for consistency
- Improved hover effects and transitions throughout the application

### Technical Improvements
- Enhanced accessibility with larger interactive elements and maintained ARIA labels
- Improved visual design consistency with modern color palette and spacing
- Better user experience with more intuitive visual indicators and feedback

## [v1.3.0] - 2025-09-13

### Added
- New `/about` page with comprehensive information about the Todo application
- Dedicated `About.module.css` for About page styling with improved typography and layout
- Navigation component (`Navigation.tsx`) extracted from layout for better reusability
- Centralized routes configuration in `src/lib/routes.ts` with TypeScript interfaces
- Dynamic navigation rendering using routes array for maintainable link management
- Page-specific metadata for the About page to improve SEO
- `Navigation.module.css` for consistent navigation styling with hover effects and transitions

### Changed
- Moved navigation from `layout.tsx` to dedicated `Navigation` component
- Updated navigation to use dynamic routes configuration instead of hardcoded links
- Enhanced About page content with detailed features list and usage instructions
- Improved navigation accessibility with proper semantic HTML structure
- Replaced inline navigation styles with CSS Modules approach

### Technical Improvements
- Centralized route management for easier maintenance and scalability
- Component extraction following single responsibility principle
- Enhanced type safety with Route interface definitions
- Improved code organization with separation of navigation logic

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
[v1.3.0]: https://github.com/Nadiia-Kovalova-Pro/next-app/compare/v1.2.0...v1.3.0
[v1.4.0]: https://github.com/Nadiia-Kovalova-Pro/next-app/compare/v1.3.0...v1.4.0
[v1.0.0]: https://github.com/Nadiia-Kovalova-Pro/next-app/releases/tag/v1.0.0