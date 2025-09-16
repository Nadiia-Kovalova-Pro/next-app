# User Flows

This document describes the key user flows in the Next.js Todo App.

## Main Todo Management Flow

### Adding a Todo
1. User navigates to the home page (`/`).
2. User sees the Todo App with a form to add new todos.
3. User enters text in the input field.
4. User clicks the "Add Todo" button or presses Enter.
5. If the input is empty or a duplicate, an error message is displayed.
6. If valid, the todo is added to the list and displayed.

### Completing a Todo
1. User sees a list of todos on the home page.
2. User clicks the checkbox next to a todo item.
3. The todo's completion status toggles (completed todos are visually distinguished).

### Deleting a Todo
1. User sees a list of todos on the home page.
2. User clicks the "Delete" button next to a todo item.
3. The todo is removed from the list.

## Profile Management Flow

### Viewing Profile
1. User navigates to the profile page (`/profile`).
2. User sees their profile information (name, email, bio, avatar).
3. If loading, a loading message is shown.
4. If error or no profile, an error message is displayed.

### Editing Profile
1. User is on the profile page.
2. User sees an "Edit Profile" form with current values pre-filled.
3. User modifies fields (name, email, bio, avatar URL).
4. User clicks "Update Profile".
5. If successful, the profile is updated and the page refreshes with new data.
6. If error, an error message is displayed.

## Navigation Flow

### Using Navigation
1. User sees the Navigation component on every page.
2. User clicks links to navigate between Home, Profile, and About pages.
3. The app uses Next.js routing to switch pages without full reloads.

## About Page Flow

### Viewing About Information
1. User navigates to the About page (`/about`).
2. User sees information about the app, its features, and usage.
3. Static content is displayed with no user interaction required.

## Error Handling Flows

### API Errors
- If profile fetch fails, display error message on profile page.
- If profile update fails, display error in the form.
- Network errors are logged to console and user-friendly messages shown.

### Form Validation
- Empty todo input shows error.
- Duplicate todos show error.
- Profile form may have client-side validation (not implemented in current code).