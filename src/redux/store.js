
import { configureStore, combineReducers } from '@reduxjs/toolkit';

import {movieReducer} from "./slices/movieSlice";
import {genreReducer} from "./slices";



const rootReducer = combineReducers({
    movie: movieReducer,
    genre: genreReducer,



});

const setupStore  = () => configureStore({
    reducer: rootReducer
});

export {
    setupStore
};
