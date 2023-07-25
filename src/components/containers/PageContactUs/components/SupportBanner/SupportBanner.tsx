import React, { FC } from 'react'
import './style.scss'
import { StaticImage } from 'gatsby-plugin-image'

export type SupportBannerProps = {
  title: string | JSX.Element
  style?: React.CSSProperties
}

export const SupportBanner: FC<SupportBannerProps> = ({
  title,
  style,
}) => {


  return (
    <div className="support-banner" style={style}>

        <StaticImage
          className="support-banner__img-wrap"
          src='../../../../../assets/images/support-desktop.jpg'
          alt={'img'}
              />
      <div className="support-banner__title">{title}</div>
    </div>
  )
}
