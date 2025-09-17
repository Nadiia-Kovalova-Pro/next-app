# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [v1.7.0] - 2025-09-17

### Added
- **MongoDB Migration**: Complete migration from Prisma ORM with SQLite to MongoDB with Mongoose ODM
- Created Mongoose models for User, Profile, Todo, and Category with proper schema definitions
- Implemented MongoDB connection configuration in `src/lib/db.ts` with environment variable support
- Added database seeding script (`src/lib/seed.ts`) with sample data for development
- Created centralized API functions in `src/lib/api.ts` for todo CRUD operations
- Added data transformation utilities in `src/lib/utils.ts` for MongoDB document to API response conversion
- Implemented virtual populate for Todo-Category relationships in Mongoose schemas
- Integrated UI components with MongoDB database layer for real-time data persistence
- Updated Todo type definitions to match MongoDB schema (ObjectId, title, description, timestamps)
- Created REST API endpoints for todo CRUD operations (`/api/todos`, `/api/todos/[id]`)
- Refactored `useTodos` hook to use React Query for server state management
- Updated `TodoItem` component to display title, description, and category information
- Enhanced `TodoForm` component with description field support
- Implemented optimistic updates and error handling for database operations
- Added loading states and disabled states for better user experience during API calls

### Changed
- **Database Backend**: Replaced Prisma/SQLite with MongoDB/Mongoose for improved scalability and flexibility
- **API Routes**: Updated all API routes (`/api/todos`, `/api/todos/[id]`, `/api/users/[id]`) to work with MongoDB
- **Data Types**: Migrated from Prisma-generated types to custom TypeScript interfaces matching MongoDB schema
- **Route Handlers**: Updated to Next.js 15 compatibility with async `params` handling
- **Error Handling**: Enhanced error handling for MongoDB operations and connection issues
- **Dependencies**: Added `mongoose` and `mongodb` packages, removed Prisma-related dependencies
- Migrated from local state management to server-state management with React Query
- Updated component interfaces to use string IDs instead of ObjectIds
- Enhanced error handling with specific error messages for different failure scenarios
- Improved TypeScript types to include database relationships and optional fields

### Fixed
- Resolved Next.js 15 route parameter compatibility issues with Promise-based params
- Fixed Mongoose populate errors by ensuring proper model registration order
- Corrected data transformation from MongoDB `_id` to API `id` fields
- Fixed TypeScript compilation errors related to route handler interfaces

### Removed
- Removed Prisma ORM and SQLite dependencies (`@prisma/client`, `prisma`)
- Removed Prisma schema file (`prisma/schema.prisma`) and migration files
- Removed Prisma-related npm scripts (`db:seed`, `db:studio`, `db:migrate`)

## [v1.6.0] - 2025-09-16

### Added
- Introduced database layer using Prisma ORM with SQLite for development
- Created comprehensive data structures documentation (`datastructure.md`) defining User, Profile, Todo, and Category models
- Implemented Prisma schema with relationships: User ↔ Profile (1:1), User ↔ Todos/Categories (1:N), Category ↔ Todos (1:N)
- Generated Prisma client for type-safe database operations
- Created database configuration in `src/lib/db.ts` with proper connection handling
- Added database seeding script (`prisma/seed.ts`) with sample user, profile, categories, and todos
- Added npm scripts for database management: `db:seed`, `db:studio`, `db:migrate`
- Installed Prisma dependencies: `@prisma/client`, `prisma`, `tsx` for TypeScript execution

## [v1.5.1] - 2025-09-16

### Added
- Added `engineeringpractices.md` documenting engineering practices, coding conventions, and project guidelines
- Added `userflows.md` describing key user flows and interactions in the Todo App

## [v1.5.0] - 2025-09-16

### Added
- Added Git churn analyzer script (`analyze-churn.sh`) and documentation (`ANALYZE-CHURN-README.md`) for analyzing repository file change frequency using Git history
- New `/profile` page with user profile management functionality
- `ProfileForm` component for editing user profile information with form validation
- Custom `useProfile` hook for fetching user profile data using React Query
- Custom `useProfileForm` hook for managing form state and validation
- API utility functions in `src/lib/api.ts` for user profile operations
- TypeScript interfaces in `src/types/profile.ts` for type-safe profile management
- CSS Modules styling for profile components (`ProfileForm.module.css`, `Profile.module.css`)
- Jest and React Testing Library setup for unit testing
- Basic unit tests for `ProfileForm` component
- Navigation link for profile page in the main navigation
- `QueryProvider` component for React Query client management
- Comprehensive test configuration with Jest setup and mocking

### Changed
- Updated navigation routes to include profile page
- Enhanced layout with React Query provider for data caching
- Improved CSS Modules implementation with proper local class selectors
- Added "use client" directives to components using React hooks

### Technical Improvements
- Implemented proper Client Component architecture for Next.js 13+ App Router
- Added comprehensive testing infrastructure with Jest and React Testing Library
- Enhanced type safety with dedicated TypeScript interfaces for profile data
- Improved error handling and user feedback in profile management
- Added API integration layer with Axios and React Query for efficient data fetching
- Fixed CSS Modules compilation errors with pure selectors
- Resolved React hooks usage in Server Components by adding proper client directives

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
[v1.5.0]: https://github.com/Nadiia-Kovalova-Pro/next-app/compare/v1.4.0...v1.5.0
[v1.5.1]: https://github.com/Nadiia-Kovalova-Pro/next-app/compare/v1.5.0...v1.5.1
[v1.0.0]: https://github.com/Nadiia-Kovalova-Pro/next-app/releases/tag/v1.0.0