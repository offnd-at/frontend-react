import { ApiError } from '../apiError'

export type ProblemResponse = {
  type: string
  title: string
  status: number
  detail: string
  instance: string
  errors: ApiError[]
  traceId: string
  requestId: string
  activityId: string
}
