import React, { FC } from 'react'
import cn from 'classnames'
import 'intl'
import { IntlProvider } from 'react-intl'

import { useLayout } from './useLayout'
import './style.scss'
import { Header } from './components/Header'
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
  } = useLayout()

  return (
    <IntlProvider locale={langKey} messages={i18nMessages}>
      <div className="site">
        <Header />
        <main className="main">
          {children}

         <div>
          test
         </div>
        </main>
      </div>
    </IntlProvider>
  )
}

export default Layout
