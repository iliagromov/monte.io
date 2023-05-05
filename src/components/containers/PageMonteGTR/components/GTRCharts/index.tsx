import React, { FC, useCallback, useState } from 'react'
import { FormattedMessage } from 'react-intl'
import Swiper from 'swiper/types/swiper-class'
import {
  getSwiperActiveSlideEl,
  getSwiperSlideIndexById,
} from '../../../../../utils'
import ModesTabs, { ModeProps } from '../../../../common/ModesTabs'
import {
  PerformanceCharts,
  PerformanceChartsProps,
} from '../../../../common/PerformanceCharts'
import { ChipSlider, ChipSliderProps } from '../ChipSlider'
import './style.scss'

type ModeChartProps = ModeProps & {
  img: string
  data: PerformanceChartsProps['chartData']
}

export type GTRChartsProps = {
  title: string
  text: string
  comparisonText: string
  carInfo: string
  nmAxisTitle: string
  hpAxisTitle: string
  modes: ModeChartProps[]
}

export const GTRCharts: FC<GTRChartsProps> = ({
  title,
  modes,
  text,
  comparisonText,
  carInfo,
  nmAxisTitle,
  hpAxisTitle,
}) => {
  const [activeModeId, setActiveModeId] = useState<string>(modes[0].id)
  const [slider, setSlider] = useState<Swiper>(null)

  const onTabClick = useCallback(
    (id: string) => {
      const isAlreadyActive = activeModeId === id
      if (isAlreadyActive) {
        return
      }

      setActiveModeId(id)
      const slideIndex = getSwiperSlideIndexById(slider, id)
      slider.slideTo(slideIndex + 1)
    },
    [slider, activeModeId]
  )

  const { data: activeModeData, title: activeModeTitle } = modes.find(
    m => m.id === activeModeId
  )

  const slides = modes.map(({ id, img }) => ({ id, imgSrc: img }))

  const chipSliderOptions: ChipSliderProps = {
    slides,
    onSwiper: swiper => {
      setSlider(swiper)
    },
    onSlideChange: swiper => {
      const activeSlideEl = getSwiperActiveSlideEl(swiper)
      setActiveModeId(activeSlideEl.dataset.id)
    },
  }

  return (
    <section className="section gtr-charts">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-5 mb-lg-0">
            <div className="row">
              <div className="col-md-6 col-lg-12 mb-4 mb-md-0 mb-lg-5">
                <h3 className="h3 gtr-charts__title">
                  <FormattedMessage id={title} />
                </h3>

                <div className="gtr-charts__text">
                  <p>
                    <FormattedMessage id={text} />
                  </p>
                  <p className="mb-0">
                    <FormattedMessage id={comparisonText} />
                  </p>
                </div>
              </div>

              <div className="col-md-auto col-lg-12 ml-auto">
                <ChipSlider
                  className="gtr-charts__slider"
                  {...chipSliderOptions}
                />
              </div>
            </div>
          </div>

          <div className="col">
            <div className="gtr-charts__frame">
              <ModesTabs
                className="gtr-charts__tabs"
                modes={modes}
                activeKey={activeModeId}
                onTabClick={onTabClick}
              />

              <PerformanceCharts
                nmAxisTitle={nmAxisTitle}
                hpAxisTitle={hpAxisTitle}
                chartData={activeModeData}
                lineTitle={activeModeTitle}
              />
            </div>

            <p className="gtr-charts__car-info text-md-right mt-1 mb-0">
              <FormattedMessage id={carInfo} />
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GTRCharts
