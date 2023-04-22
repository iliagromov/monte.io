import React, { FC } from 'react'
import './style.scss'

export type SupportBannerProps = {
  title?: string | JSX.Element
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
      <div className="support-banner__title">
        We are here to help.
        <br />
        Contact us : <a href="tel:+15042040005">+1 (504) 204 0005</a>
        <br />
        <a href="mailto:support@montetuning.com">support@montetuning.com</a>
      </div>
    </div>
  )
}
