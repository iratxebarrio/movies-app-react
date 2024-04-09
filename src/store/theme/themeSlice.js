import { createSlice } from '@reduxjs/toolkit';

export const themeSlice = createSlice({
    name: 'theme',
    initialState: {
    theme: 'light'
},
    reducers: {
     changeTheme: (state, {payload} ) => {
        console.log(payload, "PAY")
        state.theme = payload;
     },
  }
});


export const { changeTheme } = themeSlice.actions;