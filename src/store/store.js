import { configureStore } from '@reduxjs/toolkit'
import { settingsSlice } from './settings/settingsSlice'

export const store = configureStore({
  reducer: {
    settings : settingsSlice.reducer
  },
})