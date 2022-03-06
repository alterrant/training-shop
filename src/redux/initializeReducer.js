import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isInit: false
}

export const initializeSlice = createSlice({
  name: 'initialization',
  initialState,
  reducers: {
    setInitSuccess: ((state) => {
      state.isInit = true;
    })
  }
})

export const {setInitSuccess} = initializeSlice.actions

export default initializeSlice.reducer