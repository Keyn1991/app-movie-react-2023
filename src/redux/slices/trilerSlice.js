import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = 'YOUR_API_KEY';

export const fetchMovieTrailers = createAsyncThunk(
    'movie/fetchMovieTrailers',
    async (movieId, thunkAPI) => {
        const language = 'en-US';
        const url = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}&language=${language}`;
        const response = await axios.get(url);
        return response.data.results;
    }
);

const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        trailers: [],
        status: 'idle',
        error: null
    },
    extraReducers: {
        [fetchMovieTrailers.pending]: (state, action) => {
            state.status = 'loading';
        },
        [fetchMovieTrailers.fulfilled]: (state, action) => {
            state.status = 'succeeded';
            state.trailers = action.payload;
        },
        [fetchMovieTrailers.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        }
    }
});

export default movieSlice.reducer;
