import { ITodo } from './models/Todo'
import { ICategory } from './models/Category'
import { Todo, Category } from '../types/todo'

// Transform MongoDB Todo document to API response format
export function transformTodo(todo: ITodo & { category?: ICategory }): Todo {
  return {
    id: todo._id.toString(),
    title: todo.title,
    description: todo.description,
    completed: todo.completed,
    userId: todo.userId,
    categoryId: todo.categoryId,
    category: todo.category ? transformCategory(todo.category) : undefined,
    createdAt: todo.createdAt,
    updatedAt: todo.updatedAt,
  }
}

// Transform MongoDB Category document to API response format
export function transformCategory(category: ICategory): Category {
  return {
    id: category._id.toString(),
    name: category.name,
    description: category.description,
    color: category.color,
    userId: category.userId,
    createdAt: category.createdAt,
    updatedAt: category.updatedAt,
  }
}