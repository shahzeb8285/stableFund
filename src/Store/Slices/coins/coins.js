import { createSlice } from '@reduxjs/toolkit'
import coins from '@/Config/Coins/coins'
import { fetchCoinData } from './helper'
export const coinsSlice = createSlice({
  name: 'coins',
  initialState: {
    data: coins,
    isLoading:false
  },
  reducers: {
    updateLoading: (state, action) => {
      state.isLoading = action.payload
    },
  
    setCoinPublicData: (state, action) => {
      const liveCoins= action.payload
      state.data = state.data.map((coin) => {
        const liveCoin = liveCoins.find((f) => f.id === coin.id)
        return { ...coin, ...liveCoin }
      })
    },
  },
})

// Action creators are generated for each case reducer function
export const { updateData ,updateLoading,setCoinPublicData } = coinsSlice.actions

export default coinsSlice.reducer


 
export const fetchCoinDataAsync = () => async (dispatch) => {

  dispatch(updateLoading(true))
  const coins = await fetchCoinData()
  dispatch(setCoinPublicData(coins))
  dispatch(updateLoading(false))

}