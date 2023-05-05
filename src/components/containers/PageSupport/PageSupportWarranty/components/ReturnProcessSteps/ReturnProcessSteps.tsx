import React, { FC } from 'react'
import { FormattedMessage, useIntl } from 'react-intl'
import { Icon } from '../../../../../ui'
import './style.scss'

export type ReturnProccesStep = {
  icon: 'printer' | 'open-box' | 'purse'
  stepNumber: number
  description: string
  link?: {
    text: string
    slug: string
  }
}

type ReturnProcessStepsProps = {
  title: string
  items: ReturnProccesStep[]
}

export const ReturnProcessSteps: FC<ReturnProcessStepsProps> = ({
  title,
  items,
}) => {
  const intl = useIntl()
  const stepIntl = intl.formatMessage({ id: 'returnProcess.step' })

  const renderItems = items.map(({ icon, stepNumber, description, link }) => (
    <li className="return-steps__item return-step-item col-md" key={stepNumber}>
      <div className="return-step-item__icon-wrapper">
        <Icon name={icon} />
      </div>
      <div className="return-step-item__step-number">
        {`${stepIntl} ${stepNumber}`}
      </div>
      <div className="return-step-item__description">
        <FormattedMessage id={description} />
      </div>
      {link && (
        <a href={link.slug} target="_blank" className="return-step-item__link">
          <FormattedMessage id={link.text} />
        </a>
      )}
    </li>
  ))

  return (
    <section className="section mb-5 return-steps">
      <div className="container">
        <h3 className="return-steps__title h3">
          <FormattedMessage id={title} />
        </h3>
        <ul className="return-steps__list row">{renderItems}</ul>
      </div>
    </section>
  )
}
