import { createSlice } from '@reduxjs/toolkit'
import preLoaded from "@/Config/Staking/config"
export const stakingSlice = createSlice({
  name: 'staking',
  initialState: {
    data: {...preLoaded},
    isLoading:true,
  },
  reducers: {
   
    setStakingData: (state, action) => {
      state.data = action.payload
      state.isLoading = false
    },
    logout: (state,) => {
      state.data = {}
    },
    setLoading: (state,action) => {
      state.isLoading = action.payload
    },
  },
})

export const { setStakingData , logout,setLoading } = stakingSlice.actions

export default stakingSlice.reducer


