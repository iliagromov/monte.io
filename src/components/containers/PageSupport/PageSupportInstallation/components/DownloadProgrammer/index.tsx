import React, { FC } from 'react'
import { FormattedMessage } from 'react-intl'
import { Button, Icon } from '../../../../../ui'
import './style.scss'
import { StaticImage } from 'gatsby-plugin-image'

export type FeatureItem = {
  text: string
}

type DownloadProgrammerProps = {
  titleId: string
  features: FeatureItem[]
  buttonText: string
  buttonHref: string
  comment: string
}

const DownloadProgrammer: FC<DownloadProgrammerProps> = ({
  titleId,
  features,
  buttonText,
  buttonHref,
  comment,
}) => {

  
  const renderFeatures = features.map(({ text }, index) => (
    <li
      className="download-programmer__feature-item programmer-feature-item"
      key={`${text}_${index}`}
    >
      <Icon name="checkmark" />
      <div className="programmer-feature-item__text">
        <FormattedMessage id={text} />
      </div>
    </li>
  ))

  return (
    <section className="download-programmer section">
      <div className="container">
        <div className="download-programmer__content-wrap row">
          <div className="download-programmer__info-wrap col-md-6">
            <h2 className="download-programmer__title h1 mb-0">
              <FormattedMessage id={titleId} />
            </h2>
            <ul className="download-programmer__features-list">
              {renderFeatures}
            </ul>

            <Button
              className="download-programmer__btn"
              href={buttonHref}
              target="_blank"
            >
              <span>
                <FormattedMessage id={buttonText} />
              </span>
            </Button>

            <div className="download-programmer__comment">
              <FormattedMessage id={comment} />
            </div>
          </div>
          <div className="col-md-6">
            <StaticImage
                className="download-programmer__image-container"
                src='../../../../../../assets/images/chip-and-settings.png'
                alt={'img'}
                />
          </div>
        </div>
      </div>
    </section>
  )
}

export default DownloadProgrammer
