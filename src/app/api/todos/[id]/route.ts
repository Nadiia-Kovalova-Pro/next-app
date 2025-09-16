import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/lib/db'
import Todo from '@/lib/models/Todo'
import { UpdateTodoInput } from '@/types/todo'

interface RouteParams {
  params: { id: string }
}

// GET /api/todos/[id] - Get a specific todo
export async function GET(request: NextRequest, { params }: RouteParams) {
  try {
    await connectDB()
    const todo = await Todo.findById(params.id).populate('category')

    if (!todo) {
      return NextResponse.json(
        { error: 'Todo not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(todo)
  } catch (error) {
    console.error('Error fetching todo:', error)
    return NextResponse.json(
      { error: 'Failed to fetch todo' },
      { status: 500 }
    )
  }
}

// PUT /api/todos/[id] - Update a specific todo
export async function PUT(request: NextRequest, { params }: RouteParams) {
  try {
    await connectDB()
    const body: UpdateTodoInput = await request.json()

    const updateData: Partial<UpdateTodoInput> = {}
    if (body.title !== undefined) updateData.title = body.title
    if (body.description !== undefined) updateData.description = body.description
    if (body.completed !== undefined) updateData.completed = body.completed
    if (body.categoryId !== undefined) updateData.categoryId = body.categoryId

    const todo = await Todo.findByIdAndUpdate(params.id, updateData, { new: true }).populate('category')

    if (!todo) {
      return NextResponse.json(
        { error: 'Todo not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(todo)
  } catch (error) {
    console.error('Error updating todo:', error)
    return NextResponse.json(
      { error: 'Failed to update todo' },
      { status: 500 }
    )
  }
}

// DELETE /api/todos/[id] - Delete a specific todo
export async function DELETE(request: NextRequest, { params }: RouteParams) {
  try {
    await connectDB()
    const todo = await Todo.findByIdAndDelete(params.id)

    if (!todo) {
      return NextResponse.json(
        { error: 'Todo not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({ message: 'Todo deleted successfully' })
  } catch (error) {
    console.error('Error deleting todo:', error)
    return NextResponse.json(
      { error: 'Failed to delete todo' },
      { status: 500 }
    )
  }
}