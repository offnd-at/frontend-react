export type ApiError = {
  code: string
  message: string
}

export const unexpectedError: ApiError = {
  code: 'General.UnexpectedError',
  message: 'Unexpected error occurred.',
}

export function redirectNotFound(path: string): ApiError {
  return {
    code: 'General.NotFound',
    message: `The redirect was not found for ${path}`,
  }
}
