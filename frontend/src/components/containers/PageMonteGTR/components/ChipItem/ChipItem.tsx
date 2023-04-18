import cn from 'classnames'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import React, { FC, useState } from 'react'
import { FormattedMessage } from 'react-intl'
import './style.scss'

export type ChipItemProps = {
  items: {
    id: string | number
    imgSrc: string
    video: string
    title: string
    text: string
  }[]
  className?: string
}

export const ChipItem: FC<ChipItemProps> = ({ items }) => {
  const { chipScreen } = useStaticQuery(graphql`
    query {
      chipScreen: file(relativePath: { eq: "chip-screen.png" }) {
        childImageSharp {
          fluid(maxWidth: 558, quality: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  const renderSlides = items.map(({ id, title, text, imgSrc, video }) => (
    <div key={id} className={cn('chip-ui-item col-md-6')}>
      <Img
        className={cn('chip-ui-item__imgBg')}
        fluid={chipScreen.childImageSharp.fluid}
      ></Img>
      <div className={cn('chip-ui-item__img')} data-id={id}>
        <div
          dangerouslySetInnerHTML={{
            __html: `
            <video
              loop
              muted
              autoplay
              playsinline
              poster=${imgSrc}
              src="${video}"
            />
          `,
          }}
        />
      </div>
      <div className={cn('h3 mb-3 chip-ui-item__title')}>
        <FormattedMessage id={title} />
      </div>
      <div className={cn('chip-ui-item__text mb-md-3')}>
        <FormattedMessage id={text} />
      </div>
    </div>
  ))

  return <>{renderSlides}</>
}

export default ChipItem
