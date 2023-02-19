import {createSlice} from "@reduxjs/toolkit"

let initialState = {
    background: 'white',
    color: '#000000',
}

let themeSlice = createSlice({
    name: 'themeSwitcher',
    initialState,
    reducers: {
        lightTheme: (state, action) => {
            state.background = "white";
            state.color = "#000000"
        },
        darkTheme: (state, action) => {
            state.background = "#020531";
            state.color = "#ffffff"
        }
    }
});

let {reducer: themeReducer, actions: {
    lightTheme, darkTheme
}} = themeSlice;

let themeActions = {
    lightTheme, darkTheme,
}

export {
    themeSlice,
    themeReducer,
    themeActions
}