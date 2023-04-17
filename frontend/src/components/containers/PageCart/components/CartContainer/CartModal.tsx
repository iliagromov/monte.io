import React, { FC } from 'react'
import { FormattedMessage } from 'react-intl'
import {
  modalApproveBtn,
  modalCancelBtn,
  modalDescription,
  modalTitle,
} from '../../../../../data/page-cart'
import { Button, Modal } from '../../../../ui'

type CartModalProps = {
  isModalShowed: boolean
  onCloseModal: () => void
  onRemoveProduct: () => void
}

export const CartModal: FC<CartModalProps> = ({
  isModalShowed,
  onCloseModal,
  onRemoveProduct,
}) => {
  return (
    <Modal
      open={isModalShowed}
      footer={null}
      onCancel={onCloseModal}
      centered
      width={420}
    >
      <p className="text-center h3">
        <FormattedMessage id={modalTitle} />
      </p>
      <p className="text-center h5 mb-5">
        <FormattedMessage id={modalDescription} />
      </p>
      <Button
        className={`cart-modal__button mb-2`}
        block
        onClick={onRemoveProduct}
      >
        <span>
          <FormattedMessage id={modalApproveBtn} />
        </span>
      </Button>
      <Button
        className={`cart-modal__button`}
        type="text"
        block
        onClick={onCloseModal}
      >
        <span className="h5">
          <FormattedMessage id={modalCancelBtn} />
        </span>
      </Button>
    </Modal>
  )
}
