import React, { FC } from 'react'
import { FormattedMessage } from 'react-intl'
import PaymentMethods from '../../../../components/common/PaymentMethods'
import footerData from '../../../../data/footer'
import { FooterNav } from '../FooterNav'
import { FooterSocial } from '../FooterSocial'
import { SelectLanguage } from '../SelectLang'
import { Link, PageProps, useStaticQuery, graphql } from "gatsby"
import './style.scss'

type FooterProps = {
  langs: any
}
import brandsJSON from '../../../../../brands.json';

export const Footer: FC<FooterProps> = (props) => {

 
  function replaceSymbol(str){
    let slugSorted0 = str.split(' ').join('-').toLowerCase();
    let slugSorted1 = slugSorted0.split('/').join('-');
    let slugSorted2 = slugSorted1.split('.').join('-');
    return slugSorted2;
  }

  const models = brandsJSON.brands.map(item => {
    let slug = replaceSymbol(item.brand);
    return {title: item.brand, slug: slug}
  });


  const initialValue = {};
  const sumWithInitial = models.reduce(
    (accumulator, currentValue) => {
      return (accumulator[currentValue.title[0]] ??= []).push(currentValue), accumulator
    }, initialValue
  );
  

  const modelsObj = Object.values(sumWithInitial);
  const { navItems, socials, paymentIcons } = footerData

  const rendermodelLists = modelsObj.map((modelsList: any, i: number) => {
    return (
      <ul className="footer__models-list" key={`models-list_${i}`}>
        {
          modelsList.map((model: any) => {
            return (
              <li className="footer__models-item" key={`models-list_${model.title}}`}>
                <Link className="footer__models-link" to={`/${model.slug}`}>{model.title}</Link>
              </li>
            )
          })
        }
      </ul>
    )
  });

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
        <div className="footer__models">
          {rendermodelLists}
        </div>

        <div className="footer__payments">
          <div className="row align-items-center">
            <div className="col">
              <PaymentMethods icons={paymentIcons as any} />
            </div>
            <div className="col-auto d-none d-lg-block">
              {/* <SelectLanguage langs={langs} /> */}
            </div>
          </div>
        </div>

        <div className="row align-items-center mt-n4">
          <div className="col col-lg-auto mt-4 order-lg-1">
            <FooterSocial socials={socials as any} />
          </div>
          <div className="col-auto d-lg-none mt-4">
            {/* <SelectLanguage langs={langs} /> */}
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
