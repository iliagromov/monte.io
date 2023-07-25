import cn from 'classnames'
import React, { CSSProperties, FC, useState } from 'react'
import './Video.scss'
import { getImage, GatsbyImage } from 'gatsby-plugin-image'

type VideoProps = {
  youTubeId: string
  preview: any
}

export const Video: FC<VideoProps> = (
  { youTubeId, preview }) => {
 
  const imgSrc = getImage(preview)

  const [isActive, setIsActive] = useState(false)

  const videoUrl = `https://www.youtube.com/embed/${youTubeId}?autoplay=1&rel=0`
  const srcThumb = isActive ? videoUrl : 'about:blank'

  const playOnClick = () => {
    setIsActive(true)
  }
  const closeOnClick = () => {
    setIsActive(false)
  }

  return (
    <div
      className={cn('video', {
        'video--play': isActive,
      })}
    >
      <div
        className={cn('video__inner', {
          'video__inner--active': isActive,
        })}
      >
        <iframe
          className="video__player"
          width="560"
          height="315"
          src={srcThumb}
          data-src={videoUrl}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          frameBorder="0"
          allowFullScreen
        />
        <div className="video__overlay">
        <GatsbyImage
           className="video__img-wrap position-absolute"
          image={imgSrc}
          alt={'img'}
              />
          <div className="video__content">
            <button
              className="video__play"
              onClick={playOnClick}
              type="button"
              title="play video"
            />
          </div>
        </div>
        <button
          className={cn('video__close', {
            'video__close--hidden': !isActive,
          })}
          onClick={closeOnClick}
          type="button"
          title="close video"
        />
      </div>
    </div>
  )
}
