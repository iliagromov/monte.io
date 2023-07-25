import React, { FC } from 'react';


import './PerformanceGT.scss';
import { StaticImage } from 'gatsby-plugin-image';

import { GainCalculatorModal } from '../../../layouts/Default/components/GainCalculatorModal';
import { useGainCalculatorModal } from '../../../layouts/Default/components/HeaderNav/useGainCalculatorModal';
import { FormattedMessage } from 'react-intl';
import { Button } from '../../ui';
import {
    performance as performanceProps,
  } from '../../../data/page-gt'
import { PerformanceGain } from './PerformanceGain/PerformanceGain';

const PerformanceGTComponent: FC = () => {
    const { isModalShowed, openModal, closeModal } = useGainCalculatorModal()
    const renderBtn = (
      <FormattedMessage id={performanceProps.btnText}>
        {formattedBtnText => (
          <Button block onClick={openModal}>
            {formattedBtnText}
          </Button>
        )}
      </FormattedMessage>
    )
  
    return (
<section className="performance section">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-8 mb-5 mb-md-0">
            <div className="performance__model">{performanceProps.model}</div>
            <h2 className="performance__title h1">
              <FormattedMessage id={performanceProps.title} />
            </h2>
            <div className="performance__gain-wrap">
              <PerformanceGain 
              hp={performanceProps.hp}
              nm={performanceProps.nm}
              mph={performanceProps.mph}
              hpGain={performanceProps.hpGain}
              nmGain={performanceProps.nmGain}
              mphGain={performanceProps.mphGain}
              productLabel={performanceProps.productLabel}
               />
              <div className="performance__btn-wrap">{renderBtn}</div>
              <GainCalculatorModal
                isModalShowed={isModalShowed}
                onCloseModal={closeModal}
              />
            </div>
          </div>

          <div className="col-md-6 col-lg-8 align-self-end performance__img">
            <StaticImage 
            src='../../../assets/images/app-ui-Mercedes-2.png'
  
            className="performance__img-wrap"
            alt={'performance'}
              />
          </div>
        </div>
      </div>
    </section>
    );
}


export { PerformanceGTComponent };

