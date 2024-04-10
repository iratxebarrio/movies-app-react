import { createSlice } from '@reduxjs/toolkit';

export const themeSlice = createSlice({
    name: 'theme',
    initialState: 
      localStorage.getItem('settings') 
      ? JSON.parse(localStorage.getItem('settings')) 
      : {theme: 'light', language: 'es'},

    reducers: {
     changeTheme: (state, {payload} ) => {
        state.theme = payload;
     },
     changeLanguage: (state, {payload} ) => {
      state.language = payload;
     }
  }
});


export const { changeTheme, changeLanguage } = themeSlice.actions;