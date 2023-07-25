import React, { FC } from 'react'
import { Icon, IconProps } from '../../../../components/ui'
import './style.scss'

type FooterSocialProps = {
  socials: {
    name: IconProps['name']
    href: string
  }[]
}

export const FooterSocial: FC<FooterSocialProps> = ({ socials }) => {
  return (
    <div className="social">
      <div className="social__list">
        {socials.map(({ name, href }) => (
          <a
            className="social__item"
            key={name}
            href={href}
            target="_blank"
            title={name}
            rel="nofollow"
          >
            <Icon name={name} />
          </a>
        ))}
      </div>
    </div>
  )
}
