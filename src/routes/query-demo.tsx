import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

import { useCreateTodo, useTodos } from '@/hooks/use-todos'

function QueryDemoPage() {
  const [title, setTitle] = useState('')
  const todosQuery = useTodos()
  const createTodoMutation = useCreateTodo()

  const handleCreate = () => {
    const trimmedTitle = title.trim()

    if (!trimmedTitle) {
      return
    }

    createTodoMutation.mutate(
      { title: trimmedTitle, completed: false },
      {
        onSuccess: () => setTitle(''),
      },
    )
  }

  return (
    <main className="mx-auto max-w-2xl p-6">
      <h1 className="text-2xl font-semibold">React Query Demo</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        This page calls the backend using VITE_API_BASE_URL (default:
        http://localhost:8000).
      </p>

      <section className="mt-6 flex gap-2">
        <input
          className="w-full rounded-md border px-3 py-2"
          placeholder="New todo title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <button
          className="rounded-md border px-4 py-2"
          onClick={handleCreate}
          disabled={createTodoMutation.isPending}
          type="button"
        >
          {createTodoMutation.isPending ? 'Adding...' : 'Add'}
        </button>
      </section>

      {todosQuery.isPending ? (
        <p className="mt-6">Loading todos...</p>
      ) : null}

      {todosQuery.isError ? (
        <p className="mt-6 text-red-600">
          Failed to load todos. Check backend and CORS configuration.
        </p>
      ) : null}

      <ul className="mt-6 space-y-2">
        {todosQuery.data?.map((todo) => (
          <li key={todo.id} className="rounded-md border p-3">
            {todo.title}
          </li>
        ))}
      </ul>
    </main>
  )
}

export const Route = createFileRoute('/query-demo')({
  component: QueryDemoPage,
})
