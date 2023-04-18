import cn from 'classnames'
import React, { FC } from 'react'
import { FormattedMessage } from 'react-intl'
import { Heading, Icon, IconProps } from '../../../../ui'
import './style.scss'

export type InstallationStepsProps = {
  className?: string
  items: {
    icon: IconProps['name']
    title: string
    descr: string
  }[]
}

export const InstallationSteps: FC<InstallationStepsProps> = ({
  className,
  items,
}) => {
  const renderSteps = items.map(({ icon, title, descr }) => (
    <li key={icon} className="installations-steps__item col-md">
      <div className="installations-step">
        <Icon name={icon} className="installations-step__icon" />
        <Heading tag="h5" like="h2" className="installations-step__title">
          <FormattedMessage id={title} />
        </Heading>
        <div className="installations-step__descr">
          <FormattedMessage id={descr} />
        </div>
      </div>
    </li>
  ))

  return (
    <div className={cn('installations-steps', className)}>
      <ul className="installations-steps__list row">{renderSteps}</ul>
    </div>
  )
}
