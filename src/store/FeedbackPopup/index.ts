import { createSlice } from '@reduxjs/toolkit'
import { createSelector } from 'reselect'
import { AppState } from '..'

type FeedbackState = {
  isOpen: boolean
}

const initialState: FeedbackState = {
  isOpen: false,
}

const slice = createSlice({
  name: 'feedbackPopup',
  initialState,
  reducers: {
    setisOpen(state, action) {
      state.isOpen = action.payload
    },
  },
})

const { reducer } = slice

const actions = {
  ...slice.actions,
}

const selectFeedbackPopup = (state: AppState) => state.feedbackPopup
const selectIsOpen = createSelector(selectFeedbackPopup, feedbackPopup => {
  return feedbackPopup.isOpen
})

const selectors = {
  feedbackPopup: selectFeedbackPopup,
  isOpen: selectIsOpen,
}

export { actions, selectors, reducer }
