import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/lib/db'
// Import Category model first to ensure it's registered
import Category from '@/lib/models/Category'
import Todo from '@/lib/models/Todo'
import { CreateTodoInput } from '@/types/todo'
import { transformTodo } from '@/lib/utils'

// GET /api/todos - Get all todos for the current user
export async function GET() {
  try {
    await connectDB()
    // For now, we'll use a hardcoded user ID from our seeded data
    // In a real app, this would come from authentication
    const userId = '68c9926b1eefce26b6400968' // MongoDB ObjectId from seeded data

    const todos = await Todo.find({ userId }).populate({
      path: 'category',
      model: Category
    }).sort({ createdAt: -1 })

    // Transform MongoDB documents to match the expected interface
    const transformedTodos = todos.map(transformTodo)

    return NextResponse.json(transformedTodos)
  } catch (error) {
    console.error('Error fetching todos:', error)
    return NextResponse.json(
      { error: 'Failed to fetch todos' },
      { status: 500 }
    )
  }
}

// POST /api/todos - Create a new todo
export async function POST(request: NextRequest) {
  try {
    await connectDB()
    const body: CreateTodoInput = await request.json()
    const userId = '68c9926b1eefce26b6400968' // MongoDB ObjectId from seeded data

    const todo = await Todo.create({
      title: body.title,
      description: body.description,
      completed: false,
      userId,
      categoryId: body.categoryId,
    })

    const populatedTodo = await Todo.findById(todo._id).populate('category')

    return NextResponse.json(transformTodo(populatedTodo!), { status: 201 })
  } catch (error) {
    console.error('Error creating todo:', error)
    return NextResponse.json(
      { error: 'Failed to create todo' },
      { status: 500 }
    )
  }
}