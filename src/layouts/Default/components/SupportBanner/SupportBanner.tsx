import React, { FC } from 'react'


import { Button } from '../../../../components/ui'
import { StaticImage } from 'gatsby-plugin-image'
import * as SupportBannerStyle from './SupportBanner.module.scss'

export type SupportBannerProps = {
  title?: string | JSX.Element
  style?: React.CSSProperties
}

export const SupportBanner: FC<SupportBannerProps> = ({
  title,
  style,
}) => {
  
  return (
    <div className={SupportBannerStyle.supportBanner} style={style}>
        <div className={SupportBannerStyle.supportBanner__Text}>
        <h2 className={SupportBannerStyle.supportBanner__TitleH2}>
          Meet Ana and Kevin.
        </h2>
        <div className={SupportBannerStyle.supportBanner__Title}>
          We are here to help.
          <br />
          Contact us : <a href="tel:+15042040005">+1 (504) 204 0005</a>
          <br />
          <a href="mailto:support@montetuning.com">support@montetuning.com</a>
          <br />
          
        </div>
        <Button
            className={SupportBannerStyle.pageBtn}
            href={'/contact-us'}
            block
          >
            <span>
            Contact us now
            </span>
          </Button>
      </div>
      
        <StaticImage
          className={SupportBannerStyle.supportBanner__imgWrap}
          src='../../../../assets/images/support-desktop@2x.jpg'
          alt={'img'}
              />
      
    </div>
  )
}
