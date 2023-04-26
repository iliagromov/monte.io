import cn from 'classnames'
import { graphql, useStaticQuery } from 'gatsby'
import React, { FC, ComponentProps } from 'react'
import {
  appButtons as appButtonsProps,
  appUi as appUiProps,
  odds as oddsProps,
  performance as performanceProps,
  performanceCharts,
  product as productProps,
  productCard as productCardProps,
  reviews,
  techSpecs as techSpecsProps,
  votes,
  faqSection,
  gallaryCard,
  slider,
} from '../../../data/page-gt'
import { items as productsMenu } from '../../../data/products-menu'
import { useCart } from '../../../hooks/useCart'
import AddMenu from '../../common/AddMenu'
import Odds from '../../common/Odds'
import Performance from '../../common/Performance'
import ProductCard from '../../common/ProductCard'
import ProductMain from '../../common/ProductMain'
import TechSpecs from '../../common/TechSpecs'
import { Footnote, notification } from '../../ui'
import { AppButtons } from './components/AppButtons'
import { AppUi } from './components/AppUi'
import Feedback from './components/Feedback/Feedback'
import FeedbackRating from './components/FeedbackRating'
import { GTCharts } from './components/GTCharts'
import { Reviews } from './components/Reviews'

import FaqSection from '../../common/Faq'
import FaqList from '../../common/FaqList'
// @ts-ignore
import * as styles from './PageMonteGT.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination, Navigation } from 'swiper'

import { Button, Img, ImgProps } from '../../ui'

type SwiperProps = ComponentProps<typeof Swiper>

SwiperCore.use([Pagination, Navigation])

type PageMonteGTProps = {}

const PageMonteGT: FC<PageMonteGTProps> = () => {




  return (
    <>
      <div> 
        PageMonteGT
      </div>
    </>
  )
}

export default PageMonteGT
