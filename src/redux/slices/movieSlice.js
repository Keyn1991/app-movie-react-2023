import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../../services";

const initialState = {
    movies: [],
    genres:[],
    currentMovie:null,
    loading:false,
    error:null,
    currentPage: 1,
    totalMoviesPage: 0,
    filterParam: '',
    page: '1',
    with_genres:'',
    trailerPath: null,

};

const getAllMovies = createAsyncThunk(

    'getAllMovies',

    async (page, {rejectWithValue,}) => {
        try {
            const {data} = await movieService.getAllMovies(page)

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
            const {data} = await movieService.getOneMovie(id)

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

export const getGenreID = createAsyncThunk(
    'movieSlice/getGenreID',
    async ({with_genres,page},{rejectWithValue})=>{
        try {
            const {data} = await movieService.getGenreID(with_genres, page);
            return data
        }catch (e){
            return rejectWithValue(e.response.data)
        }
    }
)

const getTrailer = createAsyncThunk('moviesSlice/getTrailer',
    async ({id}, rejectWithValue) => {
        try {
            const {data: {results}} = await movieService.getMovieTrailers(id);

            return results.filter(value => value.type === 'Trailer')[0];
        } catch (e) {
            return rejectWithValue(e.response?.data);
        }
    });







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
        setFilterParam:(state, action)=>{
            state.filterParam = action.payload
        },
        setQueryParams: (state, action) => {
            state.page = action.payload.page;
            state.with_genres  = action.payload.with_genres;
        },


    },



    extraReducers: (builder) => {
        builder
            .addCase(getAllMovies.fulfilled, (state, action) => {
                state.movies = action.payload;
                state.loading=true

            })
            .addCase(getMovie.fulfilled, (state, action) => {
                state.movie = action.payload;
            })
            .addCase(searchMovie.fulfilled, (state, action) => {
                state.movies = action.payload;
            })
            .addCase(getGenreID.fulfilled,(state, action)=>{
                state.movies = action.payload;
                state.errors = null;
                state.loading = false;
            })
            .addCase(getGenreID.pending,(state,action)=>{
                state.loading = true;
            })
            .addCase(getTrailer.pending, (state) => {
                state.trailerPath = null;
            })
            .addCase(getTrailer.fulfilled, (state, action) => {
                state.trailerPath = action.payload;
            })
            .addCase(getTrailer.rejected, (state, action) => {
                state.trailerPath = null;
                state.error = action.payload;
            });
    },

});
const {reducer: movieReducer, actions:{setMovies, setMovie, setFilterParam, setQueryParams}} = movieSlice;

const movieAction = {
    getAllMovies,
    getMovie,
    searchMovie,
    setMovies,
    setMovie,
    setFilterParam,
    setQueryParams,
    getGenreID,
    getTrailer

};

export {
    movieAction,
    movieReducer,
};