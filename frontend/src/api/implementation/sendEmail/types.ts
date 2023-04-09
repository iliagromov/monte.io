export type SendEmailServerResponseType = {
  email: string | string[]
}

export type SendEmailResponseType = {
  ok: boolean
  data?: string | string[]
  message?: any
}

export type SendEmailPayloadType = {
  email: string
}
