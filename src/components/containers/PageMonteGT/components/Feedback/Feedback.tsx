import { RightOutlined } from '@ant-design/icons'
import { Link } from 'gatsby'
import React, { FC } from 'react'
import { FormattedMessage, useIntl } from 'react-intl'
import { getBaseUrl } from '../../../../../utils'
import './style.scss'

type FeedbackProps = {
  title: string
}

const Feedback: FC<FeedbackProps> = ({ title, children }) => {
  const intl = useIntl()
  const baseUrl = getBaseUrl(intl)
  return (
    <div className="feedback">
      <h3 className="feedback__title h3">{title}</h3>
      {children}

      <div className="feedback__link-wrap">
        <Link className="feedback__link" to={`${baseUrl}/reviews/`}>
          <FormattedMessage id="pageGT.moreFeedback" />
          <RightOutlined className="feedback__link-icon" />
        </Link>
      </div>
    </div>
  )
}

export default Feedback
