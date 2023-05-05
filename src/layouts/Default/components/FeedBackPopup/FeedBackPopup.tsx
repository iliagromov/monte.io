import React, { FC, useCallback, useEffect } from 'react'
import {
  contacts,
  heading,
  whatsAppButton,
} from '../../../../data/feed-back-popup'
import { useFeedbackPopup } from '../../../../hooks/useFeedbackPopup'
import OpenButton from './OpenButton'
import Popup, { ContactItemType } from './Popup'
import './style.scss'

const blockName = 'feed-back-popup-wrap'

type FeedBackPopupProps = {}

export const FeedBackPopup: FC<FeedBackPopupProps> = () => {
  const { isFeedbackPopupOpen, setIsFeedbackPopupOpen } = useFeedbackPopup()

  const openPopup = () => setIsFeedbackPopupOpen(true)
  const closePopup = () => setIsFeedbackPopupOpen(false)

  const onEsc = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closePopup()
    }
  }, [])

  const onClick = useCallback((e: any) => {
    const isFeedbackPopup = e.target.closest(`.${blockName}`)
    const isFooterItem = e.target.closest(`.footer-nav__item`)
    if (!isFeedbackPopup && !isFooterItem) {
      closePopup()
    }
  }, [])

  useEffect(() => {
    if (!isFeedbackPopupOpen) {
      return
    }

    document.addEventListener('keydown', onEsc, false)
    document.addEventListener('click', onClick)
    return () => {
      document.removeEventListener('keydown', onEsc, false)
      document.removeEventListener('click', onClick)
    }
  }, [isFeedbackPopupOpen])

  return (
    <div className={`${blockName}`}>
      <Popup
        isOpen={isFeedbackPopupOpen}
        closePopup={closePopup}
        heading={heading}
        contacts={contacts as ContactItemType[]}
        whatsAppButtonData={whatsAppButton}
      />
      <OpenButton
        iconName="chat"
        onClick={openPopup}
        isOpen={isFeedbackPopupOpen}
      />
    </div>
  )
}
