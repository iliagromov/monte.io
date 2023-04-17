import React, { FC } from 'react'
import { useIntl } from 'react-intl'
import { Icon, IconNamesType } from '../../../../ui'
import './style.scss'

export type FeatureItemType = {
  iconName: IconNamesType
  textId: string
}

export type ProductsFeaturesListProps = {
  features: FeatureItemType[]
}

export const ProductsFeaturesList: FC<ProductsFeaturesListProps> = ({
  features,
}) => {
  const intl = useIntl()

  const renderFeatures = features.map(({ iconName, textId }) => {
    const i18text = intl.formatMessage({ id: textId })
    return (
      <li className="col-6 col-md features__item feature-item" key={iconName}>
        <Icon name={iconName} className="feature-item__icon" />
        <div className="feature-item__text">
          {i18text.split('\n').map((textPart, index) => (
            <div key={index}>{textPart}</div>
          ))}
        </div>
      </li>
    )
  })

  return (
    <section className="section features">
      <div className="container">
        <ul className="features__list row">{renderFeatures}</ul>
      </div>
    </section>
  )
}
