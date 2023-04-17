import { useState } from 'react'
import { ProductId } from '../../../../../types/product'

export const useModal = () => {
  const [isModalShowed, setIsModalShowed] = useState(false)
  const [currentProductId, setCurrentProductId] = useState<ProductId | null>(
    null
  )

  const openModal = (productId: ProductId) => {
    setCurrentProductId(productId)
    setIsModalShowed(true)
  }

  const closeModal = () => {
    setCurrentProductId(null)
    setIsModalShowed(false)
  }

  return { isModalShowed, openModal, closeModal, currentProductId }
}
