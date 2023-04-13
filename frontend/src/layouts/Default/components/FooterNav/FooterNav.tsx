import { Link } from 'gatsby'
import React, { FC } from 'react'
import { FormattedMessage, useIntl } from 'react-intl'
import { useFeedbackPopup } from '../../../../hooks/useFeedbackPopup'
import { getHrefWithLocale } from '../../../../utils'
import './style.scss'

type FooterNavProps = {
  items: {
    slug: string
    href: string
  }[]
}

export const FooterNav: FC<FooterNavProps> = ({ items }) => {
  const intl = useIntl()
  const { isFeedbackPopupOpen, setIsFeedbackPopupOpen } = useFeedbackPopup()

  const onDealerLinkClick = () => setIsFeedbackPopupOpen(!isFeedbackPopupOpen)

  return (
    <nav className="footer-nav">
      <ul className="footer-nav__list">
        {items.map(({ slug, href }) => (
          <li className="footer-nav__item" key={slug}>
            <Link
              to={getHrefWithLocale(intl, href)}
              className="footer-nav__link"
            >
              <FormattedMessage id={slug} />
            </Link>
          </li>
        ))}

        <li className="footer-nav__item">
          <a className="footer-nav__link" onClick={onDealerLinkClick}>
            <FormattedMessage id="footer.dealer" />
          </a>
        </li>
      </ul>
    </nav>
  )
}
