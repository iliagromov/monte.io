import React, { FC } from 'react'
import { FormattedMessage } from 'react-intl'

import './PerformanceGain.scss'

type PerformanceGainProps = {
  hp: number
  nm: number
  mph: number
  hpGain: number
  nmGain: number
  mphGain: number
  productLabel: string
}

const PerformanceGain: FC<PerformanceGainProps> = ({
  hp,
  nm,
  mph,
  hpGain,
  nmGain,
  mphGain,
  productLabel,
}) => {
  const items = [
    {
      title: 'Power',
      value: `${hp} hp`,
      gain: `+${hpGain} hp*`,
    },
    {
      title: 'Torque',
      value: `${nm} lbf⋅ft`,
      gain: `+${nmGain} lbf⋅ft*`,
    },
  ]

  const renderItems = items.map(({ title, value, gain }) => (
    <div
      className="gain-item performance-gain__item gain-item--calculator"
      key={title}
    >
      <div className="gain-item__col gain-item__col--calculator">{title}</div>
      <div className="gain-item__col gain-item__col--calculator">{value}</div>
      <div className="gain-item__col gain-item__col--calculator">{gain}</div>
    </div>
  ))
  return (
    <div className="performance-gain">
      <div className="performance-gain__descr">
        <div className="performance-gain__label ml-auto">
          <FormattedMessage id="pageGT.stock" />
        </div>
        <div className="performance-gain__label">
          <FormattedMessage id={productLabel} />
        </div>
      </div>
      <div className="performance-gain__items">{renderItems}</div>
    </div>
  )
}

export { PerformanceGain } 

