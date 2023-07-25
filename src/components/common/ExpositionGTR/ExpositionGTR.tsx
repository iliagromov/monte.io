import React, { FC, useState } from 'react';
import cn from 'classnames'
// import { ReactSVG } from 'react-svg';
import {
    exposition
} from '../../../data/page-gtr'
import './ExpositionGTR.scss';
import { Heading, Section } from '../../ui';
import { FormattedMessage, useIntl } from 'react-intl';
import { StaticImage } from 'gatsby-plugin-image';
import { Tooltip } from 'antd';

const ExpositionGTRComponent: FC = () => {
    const { formatMessage } = useIntl()
    const [activeItem, setActiveItem] = useState<string>()
  
    const onBlur = () => setActiveItem('')
  
    const renderNums = exposition.items.map(({ id, descr, title }, i) => {
      const trnslatedTitle = formatMessage({ id: title })
      const trnslatedDescr = formatMessage({ id: descr })
  
      const onHover = () => setActiveItem(id)
  
      return (
        <li
          key={id}
          className={cn('exposition__num', `exposition__num--${i + 1}`, {
            'exposition__num--active': activeItem === id,
          })}
          onMouseEnter={onHover}
          onMouseLeave={onBlur}
        >
          <Tooltip
            title={trnslatedDescr}
            color="#fff"
            open={activeItem === id}
            overlayClassName="exposition__num-tooltip"
          >
            <span className="exposition__num-icon d-md-none">{i + 1}</span>
          </Tooltip>
  
          <span
            className="exposition__num-icon d-none d-md-flex"
            title={trnslatedTitle}
          >
            {i + 1}
          </span>
  
          <div
            className={cn('exposition__num-bubble', {
              'exposition__num-bubble--hidden': activeItem !== id,
            })}
          >
            {trnslatedDescr}
          </div>
        </li>
      )
    })
  
    const renderListItems = exposition.items.map(({ id, title }, i) => {
      const onHover = () => setActiveItem(id)
  
      return (
        <li
          key={id}
          className={cn('exposition__list-item', {
            'exposition__list-item--active': activeItem === id,
          })}
        >
          <span
            className="exposition__list-text"
            onMouseEnter={onHover}
            onMouseLeave={onBlur}
          >
            {i + 1}. {formatMessage({ id: title })}
          </span>
        </li>
      )
    })



    return (

        <Section withContainer className={"exposition"}>
            <Heading tag="h2" like="h1" className="exposition__title">
                <FormattedMessage id={exposition.title} />
            </Heading>

            <div className="exposition__image-wrap">
                <StaticImage
                    className="exposition__image"
                    src='../../../assets/images/exposition.jpg'
                    alt={` image`}
                />
                <ol className="exposition__nums">{renderNums}</ol>
            </div>

            <ol className="exposition__list">{renderListItems}</ol>
        </Section>

    );
}


export { ExpositionGTRComponent };

