import React, { FC } from 'react'
// import { GainCalculator } from '../..components/common/GainCalculator'
import { GainCalculator } from '../../../../components/common/GainCalculator';
import { Modal } from '../../../../components/ui'
import './style.scss'

type GainCalculatorModalProps = {
  isModalShowed: boolean
  onCloseModal: () => void
}

export const GainCalculatorModal: FC<GainCalculatorModalProps> = ({
  isModalShowed,
  onCloseModal,
}) => {
  return (
    <Modal
      visible={isModalShowed}
      footer={null}
      onCancel={onCloseModal}
      centered
      width={'auto'}
      className={'CalculatorModal__wrapper'}
    >
      <GainCalculator isStoreCalculator={false} onCloseModal={onCloseModal} />
    </Modal>
  )
}
