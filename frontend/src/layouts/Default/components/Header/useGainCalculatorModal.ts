import { useState } from 'react'

export const useGainCalculatorModal = () => {
  const [isModalShowed, setIsModalShowed] = useState(false)

  const openModal = () => {
    setIsModalShowed(true)
  }

  const closeModal = () => {
    setIsModalShowed(false)
  }

  return { isModalShowed, openModal, closeModal }
}
