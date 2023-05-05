import cn from 'classnames'
import Img, { FluidObject } from 'gatsby-image'
import React, { FC } from 'react'
import { FormattedMessage } from 'react-intl'
import { getClassNameModificators } from '../../../../../utils'
import { Button, Heading, Icon, IconProps } from '../../../../ui'
import './style.scss'

type ModsType = 'mobile-full' | undefined

export type ProgrammerProps = {
  img: FluidObject | FluidObject[]
  btnText: string
  infoText: string
  fileLink: string
  features: {
    icon: IconProps['name']
    text: string
  }[]
  className?: string
  mods?: ModsType | ModsType[]
}

export const Programmer: FC<ProgrammerProps> = ({
  className,
  img,
  btnText,
  infoText,
  features,
  fileLink,
  mods,
}) => {
  const renderFeatures = features.map(({ icon, text }) => (
    <div key={icon} className="programmer__feature">
      <Icon name={icon} className="programmer__feature-icon" />
      <Heading tag="h5" className="programmer__feature-text">
        <FormattedMessage id={text} />
      </Heading>
    </div>
  ))

  return (
    <div
      className={cn(
        'programmer',
        getClassNameModificators('programmer', mods),
        className
      )}
    >
      <div className="row">
        <div className="col-md-6 pr-md-0 mb-5 mb-md-0">
          <div className="programmer__features">{renderFeatures}</div>

          <Button type="ghost" block href={fileLink}>
            <span>
              <FormattedMessage id={btnText} />
            </span>
          </Button>

          <div className="text-center mt-3">
            <FormattedMessage id={infoText} />
          </div>
        </div>

        <div className="col-md-6">
          <Img className="programmer__img" fluid={img} />
        </div>
      </div>
    </div>
  )
}
