import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../../services";

const initialState = {
    movies: [],
};

const getAllMovies = createAsyncThunk(

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

const getMovie = createAsyncThunk(

    'getMovie',

    async (id, {rejectWithValue,}) => {
        try {
            let {data} = await movieService.getOneMovie(id)

            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const searchMovie = createAsyncThunk(
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

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        setMovies: (state, action) => {
            state.movies = action.payload;
        },
        setMovie: (state, action) => {
            state.movie = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllMovies.fulfilled, (state, action) => {
                state.movies = action.payload;
            })
            .addCase(getMovie.fulfilled, (state, action) => {
                state.movie = action.payload;
            })
            .addCase(searchMovie.fulfilled, (state, action) => {
                state.movies = action.payload;
            });
    },
});
const {reducer: movieReducer} = movieSlice;

const movieAction = {
    getAllMovies,
    getMovie,
    searchMovie,

};

export {
    movieAction,
    movieReducer,
};