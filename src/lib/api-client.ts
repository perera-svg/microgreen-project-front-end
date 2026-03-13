type QueryValue = string | number | boolean | null | undefined

type QueryParams = Record<string, QueryValue>

type RequestOptions = Omit<RequestInit, 'body'> & {
  body?: unknown
  query?: QueryParams
}

export class ApiError extends Error {
  status: number
  payload: unknown

  constructor(status: number, payload: unknown) {
    super(`Request failed with status ${status}`)
    this.name = 'ApiError'
    this.status = status
    this.payload = payload
  }
}

export const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:8000'

function withQueryParams(path: string, query?: QueryParams) {
  const url = new URL(path, API_BASE_URL)

  if (!query) {
    return url
  }

  Object.entries(query).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      url.searchParams.set(key, String(value))
    }
  })

  return url
}

function isJsonBody(body: unknown) {
  return (
    body !== null &&
    typeof body === 'object' &&
    !(body instanceof FormData) &&
    !(body instanceof URLSearchParams) &&
    !(body instanceof Blob)
  )
}

export async function apiRequest<T>(
  path: string,
  options: RequestOptions = {},
): Promise<T> {
  const { body, query, headers, ...rest } = options
  const requestHeaders = new Headers(headers)

  const requestInit: RequestInit = {
    ...rest,
    headers: requestHeaders,
  }

  if (body !== undefined) {
    if (isJsonBody(body)) {
      if (!requestHeaders.has('Content-Type')) {
        requestHeaders.set('Content-Type', 'application/json')
      }
      requestInit.body = JSON.stringify(body)
    } else {
      requestInit.body = body as BodyInit
    }
  }

  const response = await fetch(withQueryParams(path, query), requestInit)

  const contentType = response.headers.get('content-type')
  const isJson = contentType?.includes('application/json')
  const payload = isJson ? await response.json() : await response.text()

  if (!response.ok) {
    throw new ApiError(response.status, payload)
  }

  return payload as T
}
