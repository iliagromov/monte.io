import React, { FC } from 'react'
import { FormattedMessage } from 'react-intl'
import { before, withGtr, gained } from '../../../data/performance-gain'

import './style.scss'

type CalculatorPerformanceGainProps = {
  hp: number
  nm: number
  hpGain: number
  nmGain: number
}

const CalculatorPerformanceGain: FC<CalculatorPerformanceGainProps> = ({
  hp,
  nm,
  hpGain,
  nmGain,
}) => {
  const items = [
    {
      title: 'Power',
      value: `${hp}HP`,
      newValue: `${hp + hpGain}HP*`,
      gain: `+${hpGain}HP*`,
    },
    {
      title: 'Torque',
      value: `${nm}NM`,
      newValue: `${nm + nmGain}NM*`,
      gain: `+${nmGain}NM*`,
    },
  ]

  const renderItems = items.map(({ title, value, newValue, gain }) => (
    <div
      className="gain-item gain-item--calculator performance-gain__item"
      key={title}
    >
      <div className="gain-item__col gain-item__col--calculator">{title}</div>
      <div className="gain-item__col gain-item__col--calculator">{value}</div>
      <div className="gain-item__col gain-item__col--calculator">
        {newValue}
      </div>
      <div className="gain-item__col gain-item__col--calculator">{gain}</div>
    </div>
  ))

  return (
    <div className="performance-gain mb-5">
      <div className="gain-item gain-item--calculator gain-item--calculator-descr">
        <div className="gain-item__col gain-item__col--calculator gain-item__col--calculator-description"></div>
        <div className="gain-item__col gain-item__col--calculator gain-item__col--calculator-description">
          <FormattedMessage id={before} />
        </div>
        <div className="gain-item__col gain-item__col--calculator gain-item__col--calculator-description">
          <FormattedMessage id={withGtr} />
        </div>
        <div className="gain-item__col gain-item__col--calculator gain-item__col--calculator-description">
          <FormattedMessage id={gained} />
        </div>
      </div>

      <div className="performance-gain__items">{renderItems}</div>
    </div>
  )
}

export default CalculatorPerformanceGain
