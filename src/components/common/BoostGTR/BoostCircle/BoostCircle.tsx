import React, { FC, useEffect, useRef, useState } from 'react';
import ArcProgress from 'react-arc-progress'

// import { ReactSVG } from 'react-svg';
// import { useStaticQuery, graphql, Link, navigate } from "gatsby";

import './BoostCircle.scss';
import { Circle20Svg } from './assets/Circle20';
import { Circle50Svg } from './assets/Circle50';
import { Circle80Svg } from './assets/Circle80';

const circleIconMap = {
    '20': Circle20Svg,
    '50': Circle50Svg,
    '80': Circle80Svg,
}

type IconsType = keyof typeof circleIconMap

export type BoostCircleProps = {
    value?: any
    descr?: any
  }

const BoostCircle: FC<BoostCircleProps> = ({
    value,
    descr
}) => {
    const [numArcProgress, setCount] = useState(0)
    // let numArcProgress = Math.abs(Number.parseInt(value) / 100);
    let cnt
    const inputEl = useRef(null)
    const scrollHandler = () => {
        const bottom = inputEl.current.getBoundingClientRect().bottom
        const height = inputEl.current.getBoundingClientRect().height
        let indicatorPosition = bottom + height * 3
        if (window.outerWidth > 768) {
            indicatorPosition = bottom + height / 2
        }
        if (
            window.pageYOffset >= indicatorPosition &&
            indicatorPosition > 0 &&
            cnt === 0
        ) {
            setCount(Math.abs(Number.parseInt(value) / 100))
            cnt = 1
        } else if (indicatorPosition > window.pageYOffset && cnt !== 0) {
            cnt = 0
            setCount(0)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', scrollHandler, true)
        return () => {
            window.removeEventListener('scroll', scrollHandler, true)
        }
    }, [])

    return (

        <div className={"BoostCircle__indicator BoostCircle"}>
            <div className={"BoostCircle__inner"} ref={inputEl}>
                <ArcProgress
                    progress={numArcProgress}
                    text={value}
                    textStyle={{
                        size: '32px',
                        font: '"Regola Pro Trial", sans-serif',
                        color: '#222',
                    }}
                    size={240}
                    emptyColor={'#ecf0f3'}
                    fillColor={{ gradient: ['#ff002d', '#c8fdfd', '#c8fdfd'] }} //linear-gradient(62deg, #C8FDFD, #FF002D)
                    thickness={17}
                />
                <div className={"BoostCircle__content"}>
                    <div className={"BoostCircle__descr"}>{descr}</div>
                </div>
            </div>
        </div>

    );
}


export { BoostCircle };

