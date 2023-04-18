import React, { FC } from 'react'
import { FormattedMessage, useIntl } from 'react-intl'
import { boost as data } from '../../../../../data/page-gtr'
import { getRandomId } from '../../../../../utils'
import { Heading, Img, Section } from '../../../../ui'
import { BoostCircle } from '../BoostCircle/BoostCircle'
// @ts-ignore
import motor from './assets/motor.png'
// @ts-ignore
import motor2x from './assets/motor@2x.png'
// @ts-ignore
import * as style from './Boost.module.scss'

export type BoostProps = {
  className?: string
}

export const Boost: FC<BoostProps> = ({ className }) => {
  const { formatMessage } = useIntl()

  return (
    <Section className={style.section}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 col-lg-7 pl-lg-5 order-md-1 mb-5 mb-md-0">
            <Heading className={style.title} tag="h3">
              <FormattedMessage id={data.title} />
            </Heading>

            <div className={style.subTitle}>
              <FormattedMessage id={data.subTitle} />
            </div>
          </div>

          <div className="col-md-6 col-lg-5">
            <Img
              className={style.img}
              srcset={{
                desktop: motor,
                desktop2x: motor2x,
              }}
              ratio="1x1"
              objectFit="scale-down"
              loading="lazy"
            />
          </div>
        </div>

        <div className={style.indicators}>
          {data.items.map(({ percentage, value, descr }, i) => {
            const htmlDescr = formatMessage({ id: descr })

            return (
              <BoostCircle
                key={getRandomId(`${i}`)}
                className={style.indicator}
                percentage={percentage as any}
                value={value}
                descr={<span dangerouslySetInnerHTML={{ __html: htmlDescr }} />}
              />
            )
          })}
        </div>
      </div>
    </Section>
  )
}
