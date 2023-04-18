import cn from 'classnames'
import React, { FC, ReactNode } from 'react'
import { FormattedMessage } from 'react-intl'
import { Icon, IconProps } from '../../../../ui'
import './style.scss'

export type DynoSectionProps = {
  className?: string
  title: string
  text: string
  features: {
    icon: IconProps['name']
    text: string
  }[]
  img: ReactNode
}

export const DynoSection: FC<DynoSectionProps> = ({
  className,
  title,
  features,
  text,
  img,
}) => {
  const modifyImg = (child: any) => {
    const props = {
      className: cn(child.props.className, 'dyno-section__img'),
    }

    return React.cloneElement(child, props)
  }

  const renderImg = React.Children.map(img, child => modifyImg(child))

  return (
    <div className={cn('dyno-section', 'section', className)}>
      <div className="container">
        <div className="row">
          <div className="col-md-5 col-lg-6 order-md-1">{renderImg}</div>

          <div className="col-md-7 col-lg-6">
            <div className="h1 mb-3">
              <FormattedMessage id={title} />
            </div>
            <div className="dyno-section__descr">
              <FormattedMessage id={text} />
            </div>

            <div className="dyno-section__features">
              {features.map(({ icon, text }, i) => (
                <div className="dyno-section__feature" key={`${i}-${icon}`}>
                  <Icon name={icon} className="dyno-section__feature-icon" />

                  <div className="dyno-section__feature-text">
                    <FormattedMessage id={text} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DynoSection
