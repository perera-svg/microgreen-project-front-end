import { QueryClient } from '@tanstack/react-query'

import { ApiError } from '@/lib/api-client'

function shouldRetry(failureCount: number, error: unknown) {
  if (error instanceof ApiError && error.status < 500) {
    return false
  }

  return failureCount < 2
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
      gcTime: 5 * 60 * 1000,
      refetchOnWindowFocus: false,
      retry: shouldRetry,
    },
    mutations: {
      retry: shouldRetry,
    },
  },
})
