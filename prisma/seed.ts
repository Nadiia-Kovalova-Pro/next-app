import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Create a sample user
  const user = await prisma.user.create({
    data: {
      email: 'john.doe@example.com',
      name: 'John Doe',
      profile: {
        create: {
          bio: 'Software developer passionate about Next.js',
          theme: 'dark',
        },
      },
      categories: {
        create: [
          {
            name: 'Work',
            description: 'Work-related tasks',
            color: '#FF6B6B',
          },
          {
            name: 'Personal',
            description: 'Personal tasks',
            color: '#4ECDC4',
          },
        ],
      },
    },
    include: {
      profile: true,
      categories: true,
    },
  })

  // Create sample todos
  await prisma.todo.createMany({
    data: [
      {
        title: 'Set up database',
        description: 'Initialize Prisma and create database schema',
        completed: true,
        userId: user.id,
        categoryId: user.categories[0].id,
      },
      {
        title: 'Create API routes',
        description: 'Implement CRUD operations for todos',
        completed: false,
        userId: user.id,
        categoryId: user.categories[0].id,
      },
      {
        title: 'Update UI components',
        description: 'Integrate database with React components',
        completed: false,
        userId: user.id,
        categoryId: user.categories[0].id,
      },
      {
        title: 'Read a book',
        description: 'Finish reading "The Pragmatic Programmer"',
        completed: false,
        userId: user.id,
        categoryId: user.categories[1].id,
      },
    ],
  })

  console.log('Database seeded successfully')
  console.log('Created user:', user)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })