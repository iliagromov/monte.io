import cn from 'classnames'
import { Link } from 'gatsby'
import React, { FC, useMemo } from 'react'
import { FormattedMessage, useIntl } from 'react-intl'
import menuData from '../../../../data/menu';
import { getMenuShowed } from '../../../../store/selectors/getMenuShowed'
import { getHrefWithLocale } from '../../../../utils'
import { GainCalculatorModal } from '../GainCalculatorModal/GainCalculatorModal'
// @ts-ignore
import style from './HeaderNav.module.scss'
import { useGainCalculatorModal } from './useGainCalculatorModal'

export type HeaderNavItem = {
  label: string
  slug: string
  mod?: 'button' | 'calculator'
}

export type HeaderNavProps = {
  className?: string
  items: HeaderNavItem[]
  onLinkClick: () => void
  isMenuVisible?: boolean
}

export const HeaderNavComponent: FC<HeaderNavProps> = ({
  className,
  items,
  onLinkClick,
  isMenuVisible = false,
}) => {
  const { isModalShowed, openModal, closeModal } = useGainCalculatorModal()

  const intl = useIntl()
  const renderedMenuItems = useMemo(
    () =>
      items.map(({ label, slug, mod }) => {
        const isButtonMod = mod === 'button'
        const isCalculatorMod = mod === 'calculator'
        const onClick = event => {
          if (isCalculatorMod) {
            event.preventDefault()
            openModal()
          }
          onLinkClick()
        }
        return (
          <li key={label}>
            <FormattedMessage id={label}>
              {formattedLabel => (
                <Link
                  to={getHrefWithLocale(intl, slug)}
                  className={cn(style.link, isButtonMod && style.linkButton)}
                  onClick={onClick}
                >
                  {formattedLabel}
                </Link>
              )}
            </FormattedMessage>
          </li>
        )
      }),
    [items, onLinkClick]
  )

  return (
    <>
      <nav
        className={cn(style.nav, className, isMenuVisible && style.navShowed)}
      >
        <ul className={style.list}>{renderedMenuItems}</ul>
      </nav>

      <GainCalculatorModal
        isModalShowed={isModalShowed}
        onCloseModal={closeModal}
      />
    </>
  )
}

export const HeaderNav: FC<{
  className?: HeaderNavProps['className']
  onLinkClick: HeaderNavProps['onLinkClick']
}> = ({ ...props }) => {
  const isMenuVisible = getMenuShowed()

  return (
    <HeaderNavComponent
      items={menuData as any}
      isMenuVisible={isMenuVisible}
      {...props}
    />
  )
}
