
import { configureStore, combineReducers } from '@reduxjs/toolkit';

import {movieReducer} from "./slices/movieSlice";
import {themeReducer} from "./slices/themeSlice";
import {genreReducer} from "./slices";



const rootReducer = combineReducers({
    movie: movieReducer,
    genre: genreReducer,
    theme: themeReducer,


});

const setupStore  = () => configureStore({
    reducer: rootReducer
});

export {
    setupStore
};
