import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {genreService} from "../../services";



let initialState = {
    genres: [],
};

let getGenres = createAsyncThunk(

    'getGenre',

    async (_, {rejected}) => {
        try {
            let {data} = await genreService.getAllGenres();
            return data;
        } catch (e) {
            return rejected(e.response.data);
        }
    }
);

let genreSlice = createSlice({
    name: 'genreSlice',
    initialState
});

let {reducer: genreReducer} = genreSlice;

let genreAction = {
    getGenres
};

export {
    genreAction,
    genreReducer,
};