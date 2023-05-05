import React, { FC } from 'react'
import { FormattedMessage } from 'react-intl'
import { Button, Heading, Modal } from '../../../../components/ui'
import {
  modalErrorTitle,
  modalSuccessText,
  modalSuccessTitle,
} from '../../../../data/subscribe'

type SubscribeModalProps = {
  isShowed: boolean
  closeModal: () => void
  errorText?: JSX.Element | string
}

export const SubscribeModal: FC<SubscribeModalProps> = ({
  isShowed,
  closeModal,
  errorText,
}) => {
  const renderSuccessTitle = <FormattedMessage id={modalSuccessTitle} />
  const renderErrorTitle = <FormattedMessage id={modalErrorTitle} />
  const renderSuccessText = <FormattedMessage id={modalSuccessText} />
  return (
    <Modal
      open={isShowed}
      footer={null}
      onCancel={closeModal}
      centered
      maskClosable={false}
      width={420}
      className="text-center"
    >
      <Heading tag="h3">
        {errorText ? renderErrorTitle : renderSuccessTitle}
      </Heading>
      <p className="h5 mb-5">{errorText ? errorText : renderSuccessText}</p>
      <Button className="px-5" onClick={closeModal}>
        Ok
      </Button>
    </Modal>
  )
}
