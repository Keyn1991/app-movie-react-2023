import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../../services";

let initialState = {
    movies: [],
};

let getAllMovies = createAsyncThunk(

    'getAllMovies',

    async (page, {rejectWithValue,}) => {
        try {
            let {data} = await movieService.getAllMovies(page)

            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

let getMovie = createAsyncThunk(

    'getMovie',

    async (id, {rejectWithValue,}) => {
        try {
            let {data} = await movieService.getOneMovie(id)

            console.log(id)

            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

let searchMovie = createAsyncThunk(
    "searchMovie",
    async (word, {rejectedWithValue}) => {
        try {
            let {data} = await movieService.movieSearch(word);
            return data;
        } catch (e){
            rejectedWithValue(e.response.data);
        }
    }
)

let movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    extraReducers: {
        [getAllMovies.fulfilled]: (state, action) => {
            state.movies = action.payload
        },
        [getMovie.fulfilled]: (state, action) => {
            state.movie = action.payload
        },
        [searchMovie.fulfilled]: (state,action) => {
            state.movies = action.payload;
        },
    }
});

let {reducer: movieReducer} = movieSlice;

let movieAction = {
    getAllMovies,
    getMovie,
    searchMovie,

};

export {
    movieAction,
    movieReducer,
};