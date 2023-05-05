import cn from 'classnames'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import React, { FC } from 'react'
import { FormattedMessage } from 'react-intl'
import disclaimerData from '../../../data/disclaimer'
import {
  chipUi as chipUiProps,
  dyno,
  exposition as expositionData,
  faqSection,
  installation,
  installVideo,
  odds,
  performance as performanceProps,
  performanceCharts,
  product,
  productCard,
  programmer as programmerProps,
  promoVideo,
  techSpecs,
} from '../../../data/page-gtr'
import { items as productsMenu } from '../../../data/products-menu'
import { useCart } from '../../../hooks/useCart'
import AddMenu from '../../common/AddMenu'
import FaqList from '../../common/FaqList'
import { Odds } from '../../common/Odds'
import Performance from '../../common/Performance'
import { ProductCard } from '../../common/ProductCard'
import ProductMain from '../../common/ProductMain'
import { TechSpecs } from '../../common/TechSpecs'
import { Video } from '../../common/Video'
import { Footnote, Heading, notification, Section } from '../../ui'
import { Boost } from './components/Boost/Boost'
import { ChipUi } from './components/ChipUi'
import DynoSection from './components/DynoSection'
import { Exposition } from './components/Exposition'
import { GTRCharts } from './components/GTRCharts'
import { InstallationSteps } from './components/InstallationSteps'
import { Programmer } from './components/Programmer'

type PageMonteGTProps = {}

const PageMonteGT: FC<PageMonteGTProps> = () => {
  const {
    promoVideoPreview,
    installVideoPreview,
    performanceCar,
    productMain,
    gtrGraph,
    exposition,
    chipAndNotebook,
  } = useStaticQuery(graphql`
    query {
      chipAndNotebook: file(relativePath: { eq: "chip-and-notebook.png" }) {
        childImageSharp {
          fluid(maxWidth: 730, quality: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      promoVideoPreview: file(relativePath: { eq: "monte-video-preview.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1040, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      gtrGraph: file(relativePath: { eq: "gtr-graph.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 887, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      installVideoPreview: file(relativePath: { eq: "gtr-install.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1040, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      performanceCar: file(relativePath: { eq: "BMW-8.png" }) {
        childImageSharp {
          fluid(maxWidth: 1170, quality: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      productMain: file(relativePath: { eq: "two-chips.png" }) {
        childImageSharp {
          fluid(maxWidth: 424, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      exposition: file(relativePath: { eq: "exposition.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)

  const { addToCart } = useCart()

  const addGTRToCart = () => {
    addToCart(product.id)
    // todo: сделать через мидлвар
    notification.open({
      message: 'Added to cart.',
      description: 'Thanks!',
      duration: 2,
      top: 100,
    })
  }

  const productImages = [
    {
      img: productMain.childImageSharp.fluid,
      name: 'gtr-chips',
    },
  ]

  const renderedPromoVideo = (
    <Section withContainer>
      <Heading tag="h3" className="text-center mb-5">
        <FormattedMessage id={promoVideo.title} />
      </Heading>
      <Video
        youTubeId={promoVideo.youTubeId}
        preview={promoVideoPreview.childImageSharp.fluid}
      />
    </Section>
  )

  const renderedInstallVideo = (
    <Section withContainer>
      <Heading tag="h2" like="h1" className="text-center mb-5">
        <FormattedMessage id={installVideo.title} />
      </Heading>
      <Video
        youTubeId={installVideo.youTubeId}
        preview={installVideoPreview.childImageSharp.fluid}
        imgStyle={{
          objectPosition: 'left center',
        }}
      />
    </Section>
  )

  const renderedFaqSection = (
    <Section withContainer>
      <div className="row">
        <div className="col-lg-10 mx-auto">
          <Heading tag="h2" like="h1" className="text-center mb-5">
            <FormattedMessage id={faqSection.title} />
          </Heading>

          <FaqList items={faqSection.items} />
        </div>
      </div>
    </Section>
  )

  const renderedDynoSection = (
    <DynoSection
      features={dyno.features as any}
      title={dyno.title}
      text={dyno.text}
      img={<Img fluid={gtrGraph.childImageSharp.fluid} />}
    />
  )

  const renderedInstallationSteps = (
    <Section withContainer>
      <Heading className="mb-5 col-md-10 px-0">
        <FormattedMessage id={installation.title} />
      </Heading>

      <InstallationSteps
        className="pt-xl-5"
        items={installation.steps as any}
      />
    </Section>
  )

  const renderedProgrammer = (
    <Section withContainer>
      <Programmer
        mods="mobile-full"
        img={chipAndNotebook.childImageSharp.fluid}
        {...(programmerProps as any)}
      />
    </Section>
  )

  return (
    <>
      <AddMenu items={productsMenu as any} mod="absolute" />
      <ProductMain isBtn={false} images={productImages} {...(product as any)} />

      <Boost />

      <ChipUi {...(chipUiProps as any)} />

      {renderedPromoVideo}

      {renderedDynoSection}

      <Performance
        img={performanceCar.childImageSharp.fluid}
        {...performanceProps}
      />

      <GTRCharts {...performanceCharts} />

      <Exposition img={exposition.childImageSharp.fluid} {...expositionData} />

      {renderedInstallationSteps}

      {renderedInstallVideo}

      {renderedProgrammer}

      <Section withContainer>
        <div className="row">
          <div className="col-lg-6 mb-5 pb-5 mb-lg-0 pb-lg-0">
            <Odds title={odds.title} items={odds.items as any} />
          </div>

          <div
            className={cn(
              'col-md-6',
              'col-xl-5',
              'ml-xl-auto',
              'pl-xl-0',
              'order-md-1',
              'd-flex',
              'justify-content-center',
              'justify-content-lg-end',
              'mb-5',
              'mb-md-0'
            )}
          >
            <ProductCard
              isBtn={false}
              isSticky
              className="align-self-start"
              images={productCard.images}
              imgRatio="1x1"
              contactsLink={productCard.contactsLink}
              onBtnClick={addGTRToCart}
            />
          </div>

          <div
            className={cn(
              'col-md-6',
              'col-lg-10',
              'order-lg-1',
              'mx-lg-auto',
              'pt-lg-5',
              'mt-lg-5'
            )}
          >
            <TechSpecs
              asTableUp="lg"
              title={techSpecs.title}
              groups={techSpecs.groups}
            />
          </div>
        </div>
      </Section>

      {renderedFaqSection}

      <Footnote withContainer className="my-5">
        <FormattedMessage id={disclaimerData.text} />
      </Footnote>
    </>
  )
}

export default PageMonteGT
