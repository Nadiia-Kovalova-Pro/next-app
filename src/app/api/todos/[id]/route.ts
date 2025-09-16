import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { UpdateTodoInput } from '@/types/todo'

interface RouteParams {
  params: { id: string }
}

// GET /api/todos/[id] - Get a specific todo
export async function GET(request: NextRequest, { params }: RouteParams) {
  try {
    const todo = await prisma.todo.findUnique({
      where: { id: params.id },
      include: {
        category: true,
      },
    })

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
    const body: UpdateTodoInput = await request.json()

    const todo = await prisma.todo.update({
      where: { id: params.id },
      data: {
        ...(body.title !== undefined && { title: body.title }),
        ...(body.description !== undefined && { description: body.description }),
        ...(body.completed !== undefined && { completed: body.completed }),
        ...(body.categoryId !== undefined && { categoryId: body.categoryId }),
      },
      include: {
        category: true,
      },
    })

    return NextResponse.json(todo)
  } catch (error) {
    console.error('Error updating todo:', error)
    if (error && typeof error === 'object' && 'code' in error && error.code === 'P2025') {
      return NextResponse.json(
        { error: 'Todo not found' },
        { status: 404 }
      )
    }
    return NextResponse.json(
      { error: 'Failed to update todo' },
      { status: 500 }
    )
  }
}

// DELETE /api/todos/[id] - Delete a specific todo
export async function DELETE(request: NextRequest, { params }: RouteParams) {
  try {
    await prisma.todo.delete({
      where: { id: params.id },
    })

    return NextResponse.json({ message: 'Todo deleted successfully' })
  } catch (error) {
    console.error('Error deleting todo:', error)
    if (error && typeof error === 'object' && 'code' in error && error.code === 'P2025') {
      return NextResponse.json(
        { error: 'Todo not found' },
        { status: 404 }
      )
    }
    return NextResponse.json(
      { error: 'Failed to delete todo' },
      { status: 500 }
    )
  }
}