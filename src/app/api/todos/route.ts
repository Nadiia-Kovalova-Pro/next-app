import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { CreateTodoInput, UpdateTodoInput } from '@/types/todo'

// GET /api/todos - Get all todos for the current user
export async function GET() {
  try {
    // For now, we'll use a hardcoded user ID from our seeded data
    // In a real app, this would come from authentication
    const userId = 'cmfmfslzj0000ol14lpg2eoih'

    const todos = await prisma.todo.findMany({
      where: { userId },
      include: {
        category: true,
      },
      orderBy: { createdAt: 'desc' },
    })

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
    const body: CreateTodoInput = await request.json()
    const userId = 'cmfmfslzj0000ol14lpg2eoih' // Hardcoded for now

    const todo = await prisma.todo.create({
      data: {
        title: body.title,
        description: body.description,
        completed: false,
        userId,
        categoryId: body.categoryId,
      },
      include: {
        category: true,
      },
    })

    return NextResponse.json(todo, { status: 201 })
  } catch (error) {
    console.error('Error creating todo:', error)
    return NextResponse.json(
      { error: 'Failed to create todo' },
      { status: 500 }
    )
  }
}