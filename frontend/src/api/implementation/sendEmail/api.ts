import {
  SendEmailResponseType,
  SendEmailPayloadType,
  SendEmailServerResponseType,
} from '.'

export type SendEmailArgsType = {
  email: string
}

export const api = async (
  args: SendEmailArgsType
): Promise<SendEmailResponseType> => {
  try {
    const url: string = `${process.env.APP_DOMAIN}/api/v1/email_subscribe/`

    const params: SendEmailPayloadType = {
      email: args.email,
    }

    const answer = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(params),
    })

    const responseJson: SendEmailServerResponseType = await answer.json()

    if (answer.ok) {
      return {
        ok: true,
        data: responseJson.email,
      }
    } else {
      return {
        ok: false,
        message: responseJson.email,
      }
    }
  } catch (e) {
    console.error('Failed to send data', e)

    return e
  }
}
