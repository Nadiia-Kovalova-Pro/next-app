# New Screen Template

This is a reusable prompt template for creating new screens/pages in the Next.js app. Copy this template, fill in the placeholders, and use it to generate code that aligns with the project's conventions.

## Prompt Template:

```
Create a new screen/page for [FEATURE_DESCRIPTION] in the Next.js app.

Follow these guidelines from the Copilot Instructions:
- Use functional components with React hooks.
- Place the page in the appropriate directory (/pages or /app based on Next.js version).
- Use CSS Modules for component-specific styles (e.g., ScreenName.module.css).
- For API integration, use Axios and React Query for data fetching and caching.
- Handle errors gracefully and provide fallback UI.
- Ensure the component is small, reusable, and follows single responsibility principle.
- If using TypeScript, define types in /types folder and use interfaces for props.
- Add unit tests using Jest and React Testing Library.
- Follow file naming conventions: PascalCase for components, camelCase for hooks/utilities.
- Commit changes with clear messages following the format: [Type]: [Short description].

Specific requirements:
- [LIST_ANY_SPECIFIC_REQUIREMENTS_HERE]
- [INCLUDE_ANY_ADDITIONAL_DETAILS]

Generate the complete code for the new screen, including the page component, styles, and any necessary hooks or utilities.
```

## Example Usage:

Replace the placeholders with actual details, e.g.:

```
Create a new screen/page for user profile management in the Next.js app.

Follow these guidelines from the Copilot Instructions:
- Use functional components with React hooks.
- Place the page in the appropriate directory (/pages or /app based on Next.js version).
- Use CSS Modules for component-specific styles (e.g., Profile.module.css).
- For API integration, use Axios and React Query for data fetching and caching.
- Handle errors gracefully and provide fallback UI.
- Ensure the component is small, reusable, and follows single responsibility principle.
- If using TypeScript, define types in /types folder and use interfaces for props.
- Add unit tests using Jest and React Testing Library.
- Follow file naming conventions: PascalCase for components, camelCase for hooks/utilities.
- Commit changes with clear messages following the format: [Type]: [Short description].

Specific requirements:
- Display user profile information fetched from /api/user.
- Allow editing of profile details with form validation.
- Include a save button that updates the profile via API.

Generate the complete code for the new screen, including the page component, styles, and any necessary hooks or utilities.
```