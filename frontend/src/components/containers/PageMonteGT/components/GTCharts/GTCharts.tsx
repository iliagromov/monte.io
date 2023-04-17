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
import { PhoneSlider, PhoneSliderProps } from '../PhoneSlider'
import './style.scss'

type ModeChartProps = ModeProps & {
  img: string
  data: PerformanceChartsProps['chartData']
}

export type GTChartsProps = {
  title: string
  text: string
  carInfo: string
  nmAxisTitle: string
  hpAxisTitle: string
  modes: ModeChartProps[]
}

export const GTCharts: FC<GTChartsProps> = ({
  title,
  modes,
  text,
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

  const slides = modes.map(({ id, img }) => ({ id, img }))

  const phoneSliderOptions: PhoneSliderProps = {
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
    <section className="section gt-charts">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-xl-12 align-self-center">
            <h2 className="h1 gt-charts__title">
              <FormattedMessage id={title} />
            </h2>
            <p className="gt-charts__text">
              <FormattedMessage id={text} />
            </p>
          </div>

          <div className="col-md-6 col-xl-3 align-self-lg-center">
            <PhoneSlider
              className="gt-charts__slider mx-auto mx-xl-0"
              {...phoneSliderOptions}
            />
          </div>

          <div className="col-md-12 col-xl-9 ">
            <div className="gt-charts__frame">
              <ModesTabs
                className="gt-charts__tabs"
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

            <p className="gt-charts__car-info text-md-right mt-3 mb-0">
              <FormattedMessage id={carInfo} />
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
