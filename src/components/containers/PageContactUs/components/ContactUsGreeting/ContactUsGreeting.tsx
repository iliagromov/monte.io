import React, { FC } from 'react'
import { FormattedMessage, useIntl } from 'react-intl'

type ContactUsGreeting = {
  title: string
  text: string
  sign: string
}

const ContactUsGreeting: FC<ContactUsGreeting> = ({ title, text, sign }) => {
  const { formatMessage } = useIntl()

  const formattedTitle = formatMessage({ id: title })
  const formattedSign = formatMessage({ id: sign })

  return (
    <section className="section section--pt-lg">
      <div className="container">
        <div className="row">
          <div className="col-xl-10 mx-auto">
            <h1
              className="h1 mb-4"
              dangerouslySetInnerHTML={{ __html: formattedTitle }}
            />
            <div className="h4">
              <p className="mb-5">
                <FormattedMessage id={text} />
              </p>
              <p
                className="mb-0"
                dangerouslySetInnerHTML={{ __html: formattedSign }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUsGreeting
