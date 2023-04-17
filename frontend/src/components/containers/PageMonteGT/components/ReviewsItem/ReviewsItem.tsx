import React, { FC, useState } from 'react'
import { FormattedMessage, useIntl } from 'react-intl'
import Truncate from 'react-truncate'
import { Modal, Rate } from '../../../../ui'
import './style.scss'

export type ReviewsItemProps = {
  author: string
  date: string
  rating: number
  text: string
}

export const ReviewsItem: FC<ReviewsItemProps> = ({
  author,
  date,
  rating,
  text,
}) => {
  const [isModalShowed, setIsModalShowed] = useState(false)
  const intl = useIntl()
  const i18nText = intl.formatMessage({ id: text })

  const closeModal = () => {
    setIsModalShowed(false)
  }

  const openModal = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault()
    setIsModalShowed(true)
  }

  const renderHeader = (
    <div className="review__header">
      <div className="row nowrap">
        <div className="col">
          <div className="review__author h4" title={author}>
            {author}
          </div>

          <div className="review__rating">
            <Rate className="review__stars" defaultValue={rating} disabled />
            <div className="review__rating-count">{rating}</div>
          </div>
        </div>

        <div className="col-auto">
          <div className="review__date">{date}</div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="review">
      {renderHeader}
      <div className="review__content">
        <Truncate
          lines={2}
          ellipsis={
            <span>
              ...{' '}
              <a href="#" onClick={openModal}>
                <FormattedMessage id="readMore" />
              </a>
            </span>
          }
        >
          {i18nText}
        </Truncate>
      </div>

      <Modal
        visible={isModalShowed}
        footer={null}
        onCancel={closeModal}
        centered
      >
        {renderHeader}
        <div dangerouslySetInnerHTML={{ __html: i18nText }} />
      </Modal>
    </div>
  )
}
