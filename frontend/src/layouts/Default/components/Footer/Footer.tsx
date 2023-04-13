import React, { FC } from 'react'
import { FormattedMessage } from 'react-intl'
import PaymentMethods from '../../../../components/common/PaymentMethods'
import footerData from '../../../../data/footer'
import { FooterNav } from '../FooterNav'
import { FooterSocial } from '../FooterSocial'
import { SelectLanguage } from '../SelectLang'
import './style.scss'

type FooterProps = {
  langs: any
}

export const Footer: FC<FooterProps> = ({ langs }) => {
  const { models, navItems, socials, paymentIcons } = footerData

  const rendermodelLists = models.map((modelsList, i) => (
    <ul className="footer__models-list" key={i}>
      {modelsList.map((model: string) => (
        <li className="footer__models-item" key={model}>
          <a className="footer__models-link">{model}</a>
        </li>
      ))}
    </ul>
  ))

  const renderCopyright = (
    <>
      {`© `}
      <FormattedMessage id="footer.copyright" />
      {` ${new Date().getFullYear()} Monte. `}
      <FormattedMessage id="footer.rights" />
    </>
  )

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__models-title h6">
          <FormattedMessage id="footer.modelsTitle" />
        </div>
        <div className="footer__models">{rendermodelLists}</div>

        <div className="footer__payments">
          <div className="row align-items-center">
            <div className="col">
              <PaymentMethods icons={paymentIcons as any} />
            </div>
            <div className="col-auto d-none d-lg-block">
              <SelectLanguage langs={langs} />
            </div>
          </div>
        </div>

        <div className="row align-items-center mt-n4">
          <div className="col col-lg-auto mt-4 order-lg-1">
            <FooterSocial socials={socials as any} />
          </div>
          <div className="col-auto d-lg-none mt-4">
            <SelectLanguage langs={langs} />
          </div>
          <div className="col-lg mt-4">
            <FooterNav items={navItems} />
          </div>
        </div>
        <div className="mt-4">{renderCopyright}</div>
      </div>
    </footer>
  )
}
