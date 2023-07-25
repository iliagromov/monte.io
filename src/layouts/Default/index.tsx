import React, { FC } from 'react'
import cn from 'classnames'
import 'intl'
import { IntlProvider } from 'react-intl'

import { useLayout } from './useLayout'


import { bannerData } from '../../data/page-contact-us'
import { items as warrantyItems } from '../../data/warranty-return'

import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { SupportBanner } from './components/SupportBanner'
import { FeedBackPopup } from './components/FeedBackPopup'
import { Warranty } from './components/Warranty'
import { Subscribe } from './components/Subscribe'
import subscribeData from '../../data/subscribe'

import './style.scss'
import { graphql, useStaticQuery } from 'gatsby'
// @ts-ignore
type LayoutProps = {
  i18nMessages?: any
}


const Layout: FC<LayoutProps> = ({ children, i18nMessages }) => {
  const {
    langKey,
    needToShowSubscribe,
    needToShowWarranty,
    langsMenu,
  } = useLayout();
    
  return (
    <IntlProvider locale={langKey} messages={i18nMessages}>
      <div className="site">
        <Header />
        <div className="main">
          {children}
          
          <div className="container mb-4">
            <Subscribe
              title={subscribeData.title}
              text={subscribeData.text}
              emailPlaceholder={subscribeData.emailPlaceholder}
              submitText={subscribeData.submitText}
            />
          </div>
         <section className={cn('section')}>
            <div className="container">
              <SupportBanner />
            </div>
          </section>
          {needToShowWarranty && <Warranty items={warrantyItems as any} />}
        </div>
        <Footer langs={langsMenu} />
        <FeedBackPopup />
      </div>
    </IntlProvider>
  )
}

export default Layout
