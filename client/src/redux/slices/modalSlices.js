import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  asideModal: false,
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    showAsideModal: (state) => {
      state.asideModal = true
    },
    hideAsideModal: (state) => {
      state.asideModal = false
    },

  },
})

// Action creators are generated for each case reducer function
export const { showAsideModal, hideAsideModal } = modalSlice.actions;
export const isAsideModalActive = state => state.modal.asideModal;

export default modalSlice.reducer