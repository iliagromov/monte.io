import React, { FC } from 'react'
import { FormattedMessage } from 'react-intl'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

import './style.scss'

type ChartDataProps = {
  rpm: number
  nm: number
  nmBoosted: number
  hp: number
  hpBoosted: number
}

export type PerformanceChartsProps = {
  lineTitle: string
  nmAxisTitle: string
  hpAxisTitle: string
  chartData: ChartDataProps[]
}

export const PerformanceCharts: FC<PerformanceChartsProps> = ({
  lineTitle,
  nmAxisTitle,
  hpAxisTitle,
  chartData,
}) => {
  return (
    <div className="performance-charts">
      <div className="row mb-4">
        <div className="col-auto">
          <div className="performance-charts__axis-label">
            <FormattedMessage id={nmAxisTitle} />
          </div>
        </div>

        <div className="col-auto ml-auto">
          <div className="performance-charts__axis-label">
            <FormattedMessage id={hpAxisTitle} />
          </div>
        </div>
      </div>

      <ResponsiveContainer className="performance-charts__charts-container">
        <LineChart
          data={chartData}
          margin={{ top: 5, right: 0, left: 0, bottom: 0 }}
        >
          <XAxis dataKey="rpm" height={20} />
          <YAxis yAxisId="nm-left" width={35} />
          <YAxis yAxisId="hp-right" width={35} orientation="right" />
          <Tooltip />

          <Line
            yAxisId="nm-left"
            type="monotone"
            dataKey="nmBoosted"
            name={`lbf⋅ft ${lineTitle}`}
            stroke="#FF472E"
            dot={false}
          />

          <Line
            yAxisId="hp-right"
            type="monotone"
            dataKey="hpBoosted"
            name={`HP ${lineTitle}`}
            stroke="#FF472E"
            dot={false}
          />

          <Line
            yAxisId="nm-left"
            type="monotone"
            dataKey="nm"
            name="lbf⋅ft Stock"
            stroke="#CCCCCC"
            dot={false}
          />

          <Line
            yAxisId="hp-right"
            type="monotone"
            dataKey="hp"
            name="HP Stock"
            stroke="#CCCCCC"
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default PerformanceCharts
