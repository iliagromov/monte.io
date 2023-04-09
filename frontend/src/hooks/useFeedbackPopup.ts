import { useDispatch, useSelector } from 'react-redux'
import { feedbackPopup } from '../store'

export const useFeedbackPopup = () => {
  const dispatch = useDispatch()

  const setIsFeedbackPopupOpen = (isOpen: boolean) => {
    dispatch(feedbackPopup.actions.setisOpen(isOpen))
  }

  const isFeedbackPopupOpen: boolean = useSelector(
    feedbackPopup.selectors.isOpen
  )

  return { setIsFeedbackPopupOpen, isFeedbackPopupOpen }
}
