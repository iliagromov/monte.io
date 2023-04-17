import cn from 'classnames'
import React, { FC, useEffect, useRef, useState } from 'react'
import { FormattedMessage } from 'react-intl'
import { Link } from 'react-scroll'
import './style.scss'

export type NavElementType = {
  title: string
  key: string
  sectionData?: any
}

type ScrollNavProps = {
  elements: NavElementType[]
}

export const ScrollNav: FC<ScrollNavProps> = ({ elements }) => {
  if (typeof window === `undefined`) {
    return null
  }

  const [defaultActiveInd, setDefaultActiveInd] = useState<number>(0)
  const [scrollDirection, setScrollDirection] = useState<'top' | 'bottom'>()
  const [lastPageYOffset, setLastPageYOffset] = useState(window.pageYOffset)

  const navWrapper = useRef<HTMLUListElement>(null)

  useEffect(() => {
    function handleWindowScroll() {
      let currentPageYOffset = window.pageYOffset
      if (lastPageYOffset < currentPageYOffset) {
        setScrollDirection('bottom')
      } else if (lastPageYOffset > currentPageYOffset) {
        setScrollDirection('top')
      }
      setLastPageYOffset(window.pageYOffset)
    }
    window.addEventListener('scroll', handleWindowScroll)
    return () => {
      window.removeEventListener('scroll', handleWindowScroll)
    }
  })

  const handleSetActive = ind => {
    setTimeout(() => setDefaultActiveInd(-1), 50)
    if (navWrapper.current) {
      //прокрутка до текущего элемента в мобильной версии
      navWrapper.current.scrollLeft = ind * window.innerWidth
    }
  }

  const handleSetInactive = ind => {
    const topIndexCondition = ind === 0 && scrollDirection === 'top'
    const bottomIndexCondition =
      ind === elements.length - 1 && scrollDirection === 'bottom'
    if (topIndexCondition) {
      setDefaultActiveInd(ind)
    } else if (bottomIndexCondition) {
      setDefaultActiveInd(ind)
    }
  }

  const renderElements = elements.map(({ title, key }, index) => (
    <li className="scroll-nav__item" key={key}>
      <Link
        className={cn('scroll-nav__link', {
          'scroll-nav__link--active': defaultActiveInd === index,
        })}
        activeClass="scroll-nav__link--active"
        to={key}
        smooth={'linear'}
        spy={true}
        offset={-100}
        duration={500}
        onSetActive={() => handleSetActive(index)}
        onSetInactive={() => handleSetInactive(index)}
      >
        <FormattedMessage id={title} />
      </Link>
    </li>
  ))

  return (
    <div className="scroll-nav pt-2 pt-lg-3">
      <div className="container">
        <ul className="scroll-nav__list" ref={navWrapper}>
          {renderElements}
        </ul>
      </div>
    </div>
  )
}
