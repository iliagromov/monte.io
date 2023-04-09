import { sleep } from '../../../utils'
import { SendEmailResponseType, SendEmailArgsType } from '.'

export const dummy = async (
  args: SendEmailArgsType
): Promise<SendEmailResponseType> => {
  const response: SendEmailResponseType = {
    email: args.email,
  }

  await sleep(300)

  return response
}
