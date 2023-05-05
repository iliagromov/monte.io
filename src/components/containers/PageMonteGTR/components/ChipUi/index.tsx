import cn from 'classnames'
import React, { FC, useState } from 'react'
import { FormattedMessage } from 'react-intl'
import { Icon, IconProps } from '../../../../ui'
import { ChipSlider, ChipSliderProps } from '../ChipSlider'
import { ChipItem, ChipItemProps } from '../ChipItem'
import './style.scss'

export type ChipUiProps = {
  className?: string
  items: {
    id: string | number
    icon: IconProps['name']
    title: string
    text: string
    imgSrc: string
    video: string
  }[]
}

export const ChipUi: FC<ChipUiProps> = ({ className, items }) => {
  const ChipItemOptions: ChipItemProps = {
    items: items,
  }

  return (
    <section className={cn('chip-ui', 'section', className)}>
      <div className="container">
        <div className="chip-ui__frame">
          <h2 className="chip-ui__title">A powerhouse full of features</h2>
          <div className="row chip-ui__items">
            <ChipItem {...ChipItemOptions} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ChipUi
