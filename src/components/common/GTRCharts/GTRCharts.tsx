import React, { FC, useCallback, useState } from 'react';

// import { ReactSVG } from 'react-svg';
import { useStaticQuery, graphql, Link, navigate } from "gatsby";
import {
    performanceCharts,
  } from '../../../data/page-gtr'
import './GTRCharts.scss';
import { FormattedMessage } from 'react-intl';
import { PerformanceCharts } from '../PerformanceCharts';
import ModesTabs from '../ModesTabs';
import ChipSlider, { ChipSliderProps } from './ChipSlider/ChipSlider';
import { getSwiperActiveSlideEl, getSwiperSlideIndexById } from '../../../utils';
import Swiper from 'swiper/types/swiper-class'
import { getImage } from 'gatsby-plugin-image';

const GTRChartsComponent: FC = () => {


      const { 
        drivingModeEco,
        drivingModeSport,
        drivingModeRace,
      } = useStaticQuery(graphql`
        query  {
            drivingModeEco: file(relativePath: { eq: "driving-mode-eco.png" }) {
                childImageSharp {
                    gatsbyImageData(placeholder: BLURRED )
                }
            }
            drivingModeSport: file(relativePath: { eq: "driving-mode-sport.png" }) {
                childImageSharp {
                    gatsbyImageData(placeholder: BLURRED )
                }
            }
            drivingModeRace: file(relativePath: { eq: "driving-mode-race.png" }) {
                childImageSharp {
                    gatsbyImageData(placeholder: BLURRED )
                }
            }
        }`);


    const drivingModeEcoSrc = getImage(drivingModeEco);
    const drivingModeSportSrc = getImage(drivingModeSport);
    const drivingModeRaceSrc = getImage(drivingModeRace);

    const modes = [
        {
          id: 'economy',
          title: 'Economy',
          img: drivingModeEcoSrc,
          data: [
            { rpm: 1500, nm: 630, nmBoosted: 623, hp: 187, hpBoosted: 187 },
            { rpm: 2000, nm: 650, nmBoosted: 649, hp: 220, hpBoosted: 219 },
            { rpm: 2500, nm: 690, nmBoosted: 692, hp: 300, hpBoosted: 303 },
            { rpm: 3000, nm: 700, nmBoosted: 709, hp: 340, hpBoosted: 345 },
            { rpm: 3500, nm: 720, nmBoosted: 736, hp: 430, hpBoosted: 440 },
            { rpm: 4000, nm: 740, nmBoosted: 763, hp: 490, hpBoosted: 505 },
            { rpm: 4500, nm: 749, nmBoosted: 789, hp: 519, hpBoosted: 544 },
            { rpm: 5000, nm: 710, nmBoosted: 746, hp: 510, hpBoosted: 531 },
            { rpm: 5500, nm: 690, nmBoosted: 726, hp: 500, hpBoosted: 512 },
            { rpm: 6000, nm: 660, nmBoosted: 689, hp: 450, hpBoosted: 450 },
          ],
        },
        {
          id: 'sport',
          title: 'Sport',
          img: drivingModeSportSrc,
          data: [
            { rpm: 1500, nm: 630, nmBoosted: 637, hp: 187, hpBoosted: 197 },
            { rpm: 2000, nm: 650, nmBoosted: 663, hp: 220, hpBoosted: 229 },
            { rpm: 2500, nm: 690, nmBoosted: 699, hp: 300, hpBoosted: 314 },
            { rpm: 3000, nm: 700, nmBoosted: 717, hp: 340, hpBoosted: 357 },
            { rpm: 3500, nm: 720, nmBoosted: 743, hp: 430, hpBoosted: 452 },
            { rpm: 4000, nm: 740, nmBoosted: 771, hp: 490, hpBoosted: 519 },
            { rpm: 4500, nm: 749, nmBoosted: 797, hp: 519, hpBoosted: 555 },
            { rpm: 5000, nm: 710, nmBoosted: 754, hp: 510, hpBoosted: 542 },
            { rpm: 5500, nm: 690, nmBoosted: 734, hp: 500, hpBoosted: 522 },
            { rpm: 6000, nm: 660, nmBoosted: 696, hp: 450, hpBoosted: 459 },
          ],
        },
        {
          id: 'race',
          title: 'Race',
          img: drivingModeRaceSrc,
          data: [
            { rpm: 1500, nm: 630, nmBoosted: 656, hp: 187, hpBoosted: 194 },
            { rpm: 2000, nm: 650, nmBoosted: 689, hp: 220, hpBoosted: 231 },
            { rpm: 2500, nm: 690, nmBoosted: 738, hp: 300, hpBoosted: 320 },
            { rpm: 3000, nm: 700, nmBoosted: 750, hp: 340, hpBoosted: 367 },
            { rpm: 3500, nm: 720, nmBoosted: 785, hp: 430, hpBoosted: 474 },
            { rpm: 4000, nm: 740, nmBoosted: 811, hp: 490, hpBoosted: 558 },
            { rpm: 4500, nm: 749, nmBoosted: 830, hp: 519, hpBoosted: 597 },
            { rpm: 5000, nm: 710, nmBoosted: 778, hp: 510, hpBoosted: 583 },
            { rpm: 5500, nm: 690, nmBoosted: 744, hp: 500, hpBoosted: 562 },
            { rpm: 6000, nm: 660, nmBoosted: 687, hp: 450, hpBoosted: 495 },
          ],
        },
    ];
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
                  <FormattedMessage id={performanceCharts.title} />
                </h3>

                <div className="gtr-charts__text">
                  <p>
                    <FormattedMessage id={performanceCharts.text} />
                  </p>
                  <p className="mb-0">
                    <FormattedMessage id={performanceCharts.comparisonText} />
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
                nmAxisTitle={performanceCharts.nmAxisTitle}
                hpAxisTitle={performanceCharts.hpAxisTitle}
                chartData={activeModeData}
                lineTitle={activeModeTitle}
              />
            </div>

            <p className="gtr-charts__car-info text-md-right mt-1 mb-0">
              <FormattedMessage id={performanceCharts.carInfo} />
            </p>
          </div>
        </div>
      </div>
    </section>

    );
}


export { GTRChartsComponent };

