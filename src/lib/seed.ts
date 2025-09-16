import { connectDB } from './db'
import User from './models/User'
import Profile from './models/Profile'
import Category from './models/Category'
import Todo from './models/Todo'

async function main() {
  await connectDB()

  // Create a sample user
  const user = await User.create({
    email: 'john.doe@example.com',
    name: 'John Doe',
  })

  // Create profile
  await Profile.create({
    userId: user._id.toString(),
    bio: 'Software developer passionate about Next.js',
    theme: 'dark',
  })

  // Create categories
  const workCategory = await Category.create({
    name: 'Work',
    description: 'Work-related tasks',
    color: '#FF6B6B',
    userId: user._id.toString(),
  })

  const personalCategory = await Category.create({
    name: 'Personal',
    description: 'Personal tasks',
    color: '#4ECDC4',
    userId: user._id.toString(),
  })

  // Create sample todos
  await Todo.create([
    {
      title: 'Set up database',
      description: 'Initialize MongoDB and create database schema',
      completed: true,
      userId: user._id.toString(),
      categoryId: workCategory._id.toString(),
    },
    {
      title: 'Create API routes',
      description: 'Implement CRUD operations for todos',
      completed: false,
      userId: user._id.toString(),
      categoryId: workCategory._id.toString(),
    },
    {
      title: 'Update UI components',
      description: 'Integrate database with React components',
      completed: false,
      userId: user._id.toString(),
      categoryId: workCategory._id.toString(),
    },
    {
      title: 'Read a book',
      description: 'Finish reading "The Pragmatic Programmer"',
      completed: false,
      userId: user._id.toString(),
      categoryId: personalCategory._id.toString(),
    },
  ])

  console.log('Database seeded successfully')
  console.log('Created user:', user)
}

main()
  .then(async () => {
    process.exit(0)
  })
  .catch(async (e) => {
    console.error(e)
    process.exit(1)
  })