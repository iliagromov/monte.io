import React, { FC } from 'react'
import { FormattedMessage } from 'react-intl'
import './style.scss'

type AppButtonsProps = {
  title?: string
  links: {
    type: string
    href: string
  }[]
}

export const AppButtons: FC<AppButtonsProps> = ({ title, links }) => {
  const imgMap = {
    'google-play': '/img/google-play.svg',
    'app-store': '/img/app-store.svg',
  }

  return (
    <div className="app-buttons">
      {title && (
        <div className="app-buttons__title">
          <FormattedMessage id={title} />
        </div>
      )}
      <div className="app-buttons__wrap">
        {links.map(({ type, href }, i) => {
          return (
            <a
              className="app-buttons__btn"
              href={href}
              target="_blank"
              key={`id-${i}-${href}`}
            >
              <img
                className="app-buttons__btn-img"
                src={imgMap[type]}
                alt={type}
              />
            </a>
          )
        })}
      </div>
    </div>
  )
}
