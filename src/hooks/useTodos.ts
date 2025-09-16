import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { Todo, CreateTodoInput, UpdateTodoInput } from '../types/todo'
import axios from 'axios'

export function useTodos() {
  const queryClient = useQueryClient()

  // Fetch todos
  const {
    data: todos = [],
    isLoading,
    error: fetchError,
  } = useQuery({
    queryKey: ['todos'],
    queryFn: async (): Promise<Todo[]> => {
      const response = await axios.get('/api/todos')
      return response.data
    },
  })

  // Add todo mutation
  const addTodoMutation = useMutation({
    mutationFn: async (input: CreateTodoInput): Promise<Todo> => {
      const response = await axios.post('/api/todos', input)
      return response.data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    },
  })

  // Update todo mutation
  const updateTodoMutation = useMutation({
    mutationFn: async ({ id, input }: { id: string; input: UpdateTodoInput }): Promise<Todo> => {
      const response = await axios.put(`/api/todos/${id}`, input)
      return response.data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    },
  })

  // Delete todo mutation
  const deleteTodoMutation = useMutation({
    mutationFn: async (id: string): Promise<void> => {
      await axios.delete(`/api/todos/${id}`)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    },
  })

  /**
   * Adds a new todo if the input is not empty and not a duplicate.
   * @returns true if the todo was added successfully, false otherwise
   */
  const addTodo = async (title: string, description?: string): Promise<boolean> => {
    const trimmedTitle = title.trim()
    if (!trimmedTitle) {
      return false
    }

    // Check for duplicates
    if (todos.some(todo => todo.title.toLowerCase() === trimmedTitle.toLowerCase())) {
      return false
    }

    try {
      await addTodoMutation.mutateAsync({
        title: trimmedTitle,
        description: description?.trim(),
      })
      return true
    } catch (error) {
      console.error('Error adding todo:', error)
      return false
    }
  }

  /**
   * Toggles the completion status of a todo.
   */
  const toggleTodo = async (id: string): Promise<boolean> => {
    const todo = todos.find(t => t.id === id)
    if (!todo) return false

    try {
      await updateTodoMutation.mutateAsync({
        id,
        input: { completed: !todo.completed },
      })
      return true
    } catch (error) {
      console.error('Error toggling todo:', error)
      return false
    }
  }

  /**
   * Deletes a todo by its id.
   */
  const deleteTodo = async (id: string): Promise<boolean> => {
    try {
      await deleteTodoMutation.mutateAsync(id)
      return true
    } catch (error) {
      console.error('Error deleting todo:', error)
      return false
    }
  }

  const errorMessage = fetchError ? 'Failed to load todos' :
                      addTodoMutation.error ? 'Failed to add todo' :
                      updateTodoMutation.error ? 'Failed to update todo' :
                      deleteTodoMutation.error ? 'Failed to delete todo' : ''

  return {
    todos,
    isLoading,
    errorMessage,
    addTodo,
    toggleTodo,
    deleteTodo,
    isAdding: addTodoMutation.isPending,
    isUpdating: updateTodoMutation.isPending,
    isDeleting: deleteTodoMutation.isPending,
  }
}