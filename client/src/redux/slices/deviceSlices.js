import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  profit: null,
  new: null,
  recommended: null,
  isStock: null,
  sort: "created_at",
  ascending: null,
  maxPrice: null,
  minPrice: null,
}

export const counterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setProfit: (state) => {
      if (state.profit) {
        state.profit = false
      } else {
        state.profit = true
      }
    },
    setNew: (state) => {
      if (state.new) {
        state.new = false
      } else {
        state.new = true
      }
    },
    setRecommended: (state) => {
      if (state.recommended) {
        state.recommended = false
      } else {
        state.recommended = true
      }
    },
    setIsStock: (state) => {
      if (state.isStock) {
        state.isStock = false
      } else {
        state.isStock = true
      }
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer