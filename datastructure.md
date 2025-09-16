# Data Structures and Database Schema

This document describes the database schema and data structures for the Next.js Todo App.

## Overview

The application uses Prisma as the ORM with SQLite as the database for development and PostgreSQL for production. The schema includes the following main entities:

1. **User** - Represents application users
2. **Profile** - Extended user information and preferences
3. **Todo** - Individual todo items
4. **Category** - Grouping mechanism for todos

## Data Structures

### User
- **id**: String (UUID) - Primary key
- **email**: String - Unique email address
- **name**: String - User's display name
- **createdAt**: DateTime - Account creation timestamp
- **updatedAt**: DateTime - Last update timestamp

### Profile
- **id**: String (UUID) - Primary key
- **userId**: String (UUID) - Foreign key to User
- **bio**: String? - Optional biography text
- **avatar**: String? - Optional avatar image URL
- **theme**: String? - Preferred UI theme (default: 'light')
- **createdAt**: DateTime - Profile creation timestamp
- **updatedAt**: DateTime - Last update timestamp

### Todo
- **id**: String (UUID) - Primary key
- **title**: String - Todo title (required)
- **description**: String? - Optional detailed description
- **completed**: Boolean - Completion status (default: false)
- **userId**: String (UUID) - Foreign key to User
- **categoryId**: String (UUID)? - Optional foreign key to Category
- **createdAt**: DateTime - Todo creation timestamp
- **updatedAt**: DateTime - Last update timestamp

### Category
- **id**: String (UUID) - Primary key
- **name**: String - Category name
- **description**: String? - Optional category description
- **color**: String? - Optional color code for UI
- **userId**: String (UUID) - Foreign key to User
- **createdAt**: DateTime - Category creation timestamp
- **updatedAt**: DateTime - Last update timestamp

## Relationships

- **User** has one **Profile** (1:1)
- **User** has many **Todos** (1:N)
- **User** has many **Categories** (1:N)
- **Category** has many **Todos** (1:N)
- **Todo** belongs to one **User** (N:1)
- **Todo** belongs to one **Category** (N:1, optional)
- **Profile** belongs to one **User** (N:1)

## Database Configuration

- **Database**: SQLite for development, PostgreSQL for production
- **ORM**: Prisma
- **Migration Strategy**: Automatic migrations on schema changes
- **Connection**: Environment-based configuration

## Schema File Location

The Prisma schema is located at `prisma/schema.prisma`

## Usage Examples

### Creating a User with Profile
```typescript
const user = await prisma.user.create({
  data: {
    email: 'user@example.com',
    name: 'John Doe',
    profile: {
      create: {
        bio: 'Software developer',
        theme: 'dark'
      }
    }
  },
  include: {
    profile: true
  }
});
```

### Creating a Todo with Category
```typescript
const todo = await prisma.todo.create({
  data: {
    title: 'Learn Prisma',
    description: 'Study Prisma ORM documentation',
    userId: userId,
    category: {
      create: {
        name: 'Learning',
        color: '#4CAF50'
      }
    }
  },
  include: {
    category: true
  }
});
```

## Future Extensions

- Add authentication tokens
- Implement soft deletes
- Add audit logs
- Support for todo attachments
- User collaboration features