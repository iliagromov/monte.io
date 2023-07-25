import React, { FC } from 'react';

import {
    boost
} from '../../../data/page-gtr'

import './BoostGTR.scss';
import { Heading } from '../../ui';
import { FormattedMessage, useIntl } from 'react-intl';
import { StaticImage } from 'gatsby-plugin-image';
import { getRandomId } from '../../../utils';
import { BoostCircle } from './BoostCircle/BoostCircle';

const BoostGTRComponent: FC = () => {
    const { formatMessage } = useIntl();
   
    return (

        <section className="section BoostGTRComponent ">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6 col-lg-7 pl-lg-5 order-md-1 mb-5 mb-md-0">
                        <Heading className={"BoostGTRComponent__title"} tag="h3">
                            <FormattedMessage id={boost.title} />
                        </Heading>

                        <div className={"BoostGTRComponent__subTitle"}>
                            <FormattedMessage id={boost.subTitle} />
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-5">

                        <StaticImage
                            className={"BoostGTRComponent__img"}
                            src='../../../assets/images/motor@2x.png'
                            alt={`image`}
                        />

                    </div>
                </div>

                <div className={"BoostGTRComponent__indicators"}>
                    {boost.items.map(({ percentage, value, descr }, i) => {
                        const htmlDescr = formatMessage({ id: descr })

                        return (
                            <BoostCircle
                                key={getRandomId(`${i}`)}
                                value={value}
                                descr={<span dangerouslySetInnerHTML={{ __html: htmlDescr }} />}
                            />
                        )
                    })}
                </div>
            </div>
        </section>

    );
}


export { BoostGTRComponent };

