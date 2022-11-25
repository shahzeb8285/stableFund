import { createSlice } from '@reduxjs/toolkit'
export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    data: {},
    isLoading:true,
  },
  reducers: {
   
    setGlobalUser: (state, action) => {

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

export const { setGlobalUser , logout,setLoading } = usersSlice.actions

export default usersSlice.reducer


