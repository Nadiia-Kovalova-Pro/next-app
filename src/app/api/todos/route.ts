import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/lib/db'
import Todo from '@/lib/models/Todo'
import { CreateTodoInput } from '@/types/todo'

// GET /api/todos - Get all todos for the current user
export async function GET() {
  try {
    await connectDB()
    // For now, we'll use a hardcoded user ID from our seeded data
    // In a real app, this would come from authentication
    const userId = 'cmfmfslzj0000ol14lpg2eoih'

    const todos = await Todo.find({ userId }).populate('category').sort({ createdAt: -1 })

    return NextResponse.json(todos)
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
    const userId = 'cmfmfslzj0000ol14lpg2eoih' // Hardcoded for now

    const todo = await Todo.create({
      title: body.title,
      description: body.description,
      completed: false,
      userId,
      categoryId: body.categoryId,
    })

    const populatedTodo = await Todo.findById(todo._id).populate('category')

    return NextResponse.json(populatedTodo, { status: 201 })
  } catch (error) {
    console.error('Error creating todo:', error)
    return NextResponse.json(
      { error: 'Failed to create todo' },
      { status: 500 }
    )
  }
}