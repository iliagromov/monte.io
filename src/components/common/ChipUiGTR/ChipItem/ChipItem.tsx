import cn from 'classnames'
import { graphql, useStaticQuery } from 'gatsby'
import React, { FC } from 'react'
import { FormattedMessage } from 'react-intl'
import './ChipItem.scss'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'


export type ChipItemProps = {
}

export const ChipItem: FC<ChipItemProps> = () => {
    const { 
        chipScreen,
        increasePower,
        drivingMode,
        errorCodes,
        accelerationTest,
        measureHp,
        liveGauges,
        videoIncreasePower,
        videoDrivingMode,
        videoReadError,
        videoTestAcc,
        videoMeasureYour,
        videoLiveGauges
    } = useStaticQuery(graphql`
        query {
            chipScreen: file(relativePath: { eq: "chip-screen.png" }) {
                childImageSharp {
                    gatsbyImageData(placeholder: BLURRED width: 73)
                }
            }
            increasePower: file(relativePath: { eq: "increase-power.png" }) {
                childImageSharp {
                    gatsbyImageData(placeholder: BLURRED)
                }
            }
            drivingMode: file(relativePath: { eq: "driving-mode.png" }) {
                childImageSharp {
                    gatsbyImageData(placeholder: BLURRED)
                }
            }
            errorCodes: file(relativePath: { eq: "error-codes.png" }) {
                childImageSharp {
                    gatsbyImageData(placeholder: BLURRED)
                }
            }
            accelerationTest: file(relativePath: { eq: "acceleration-test.png" }) {
                childImageSharp {
                    gatsbyImageData(placeholder: BLURRED)
                }
            }
            measureHp: file(relativePath: { eq: "measure-hp.png" }) {
                childImageSharp {
                    gatsbyImageData(placeholder: BLURRED)
                }
            }
            liveGauges: file(relativePath: { eq: "live-gauges.png" }) {
                childImageSharp {
                    gatsbyImageData(placeholder: BLURRED)
                }
            }
            videoIncreasePower: file(relativePath: { eq: "videoIncreasePower.mp4" }) {
                name
                publicURL
            }
            videoDrivingMode: file(relativePath: { eq: "videoDrivingMode.mp4" }) {
                name
                publicURL
            }
            videoReadError: file(relativePath: { eq: "videoReadError.mp4" }) {
                name
                publicURL
            }
            videoTestAcc: file(relativePath: { eq: "videoTestAcc.mp4" }) {
                name
                publicURL
            }
            videoMeasureYour: file(relativePath: { eq: "videoMeasureYour.mp4" }) {
                name
                publicURL
            }
            videoLiveGauges: file(relativePath: { eq: "videoLiveGauges.mp4" }) {
                name
                publicURL
            }
        }
    `)

    const items = [
        {
            id: 'increasePower',
            icon: 'fuel',
            title: 'pageGTR.increasePower',
            text: 'pageGTR.increasePowerText',
            image: increasePower,
            video: videoIncreasePower,
        },
        {
            id: 'drivingMode',
            icon: 'steering-wheel',
            title: 'pageGTR.drivingMode',
            text: 'pageGTR.drivingModeText',
            image: drivingMode,
            video: videoDrivingMode,
        },
        {
            id: 'readError',
            icon: 'search',
            title: 'pageGTR.readError',
            text: 'pageGTR.readErrorText',
            image: errorCodes,
            video: videoReadError,
        },
        {
            id: 'testAcc',
            icon: 'adv-power-meter',
            title: 'pageGTR.testAcc',
            text: 'pageGTR.testAccText',
            image: accelerationTest,
            video: videoTestAcc,
        },
        {
            id: 'measureYour',
            icon: 'speedometer',
            title: 'pageGTR.measureYour',
            text: 'pageGTR.measureYourText',
            image: measureHp,
            video: videoMeasureYour,
        },
        {
            id: 'liveGauges',
            icon: 'increase',
            title: 'pageGTR.liveGauges',
            text: 'pageGTR.liveGaugesText',
            image: liveGauges,
            video: videoLiveGauges,
        },
    ];

    const imgNewsMonteGT1Src = getImage(chipScreen)

    const renderItems = items.map(({ id, title, text, image, video }) => {
        let imgSrc = getImage(image);
        return (
            <div key={id} className={cn('chip-ui-item col-md-6')}>

                <GatsbyImage
                className={cn('chip-ui-item__imgBg')}
                image={imgNewsMonteGT1Src}
                alt={` image`}
                />
                <div className={cn('chip-ui-item__img')} data-id={id}>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: ` <video
                                        loop
                                        muted
                                        autoplay
                                        playsinline
                                        poster=${imgSrc}
                                        src="${video.publicURL}"
                                        />
                                    `,
                        }}
                    />
                </div>
                <div className={cn('h3 mb-3 chip-ui-item__title')}>
                    <FormattedMessage id={title} />
                </div>
                <div className={cn('chip-ui-item__text mb-md-3')}>
                    <FormattedMessage id={text} />
                </div>
            </div>
        )
    }
    )

    return <>{renderItems}</>
}

export default ChipItem
