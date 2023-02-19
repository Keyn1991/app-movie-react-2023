
import { configureStore, combineReducers } from '@reduxjs/toolkit';

import {movieReducer} from "./slices/movieSlice";
import {genreReducer} from "./slices/genreSlice";
import {themeReducer} from "./slices/themeSlice";


const rootReducer = combineReducers({
    movie: movieReducer,
    genre: genreReducer,
    theme: themeReducer

});

const setupStore  = () => configureStore({
    reducer: rootReducer
});

export {
    setupStore
};
