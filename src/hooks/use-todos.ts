import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

import { apiRequest } from '@/lib/api-client'

export type Todo = {
  id: number
  title: string
  completed?: boolean
}

export type CreateTodoInput = {
  title: string
  completed?: boolean
}

export const todoKeys = {
  all: ['todos'] as const,
  detail: (id: number) => ['todos', id] as const,
}

export function useTodos() {
  return useQuery({
    queryKey: todoKeys.all,
    queryFn: ({ signal }) => apiRequest<Todo[]>('/todos', { signal }),
  })
}

export function useTodo(todoId: number) {
  return useQuery({
    queryKey: todoKeys.detail(todoId),
    queryFn: ({ signal }) => apiRequest<Todo>(`/todos/${todoId}`, { signal }),
    enabled: Number.isFinite(todoId),
  })
}

export function useCreateTodo() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (input: CreateTodoInput) =>
      apiRequest<Todo>('/todos', {
        method: 'POST',
        body: input,
      }),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: todoKeys.all })
    },
  })
}
