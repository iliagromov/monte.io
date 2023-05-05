import React, { FC } from 'react'
import './style.scss'

export type SupportBannerProps = {
  title: string | JSX.Element
  img: {
    desktop: string
    desktop2x: string
  }
  style?: React.CSSProperties
}

export const SupportBanner: FC<SupportBannerProps> = ({
  title,
  img,
  style,
}) => {
  return (
    <div className="support-banner" style={style}>
      <picture className="support-banner__img-wrap">
        <source srcSet={`${img.desktop}, ${img.desktop2x} 2x`} />
        <img src={img.desktop} alt="alt" loading="lazy" />
      </picture>
      <div className="support-banner__title">{title}</div>
    </div>
  )
}
