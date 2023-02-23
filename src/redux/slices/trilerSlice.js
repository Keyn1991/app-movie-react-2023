// // import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// //
// // import {movieService} from "../../services";
// //
// // export const getMovieTrailers = createAsyncThunk(
// //     "movies/fetchMovies",
// //
// //     async ({id}, thunkAPI) => {
// //
// //         try {
// //             const {data: {results}} = await movieService.getMovieTrailers(id);
// //
// //             return results.filter(value => value.type === 'Trailer')[0];
// //         } catch (e) {
// //             return thunkAPI.rejectWithValue(e.response?.data);
// //         }
// //     });
// //
// // const videoSlice = createSlice({
// //     name: "movies",
// //     initialState: {
// //        trailerPath: null,
// //         status: "idle",
// //         error: null,
// //     },
// //     reducers: {},
// //     extraReducers: (builder) => {
// //         builder
// //             .addCase(getMovieTrailers.pending, (state) => {
// //                 state.status = "loading";
// //             })
// //             .addCase(getMovieTrailers.fulfilled, (state, action) => {
// //                 state.status = "succeeded";
// //                 state.movies = state.movies.concat(action.payload.results);
// //             })
// //             .addCase(getMovieTrailers.rejected, (state, action) => {
// //                 state.status = "failed";
// //                 state.error = action.error.message;
// //             });
// //     },
// // });
// //
// // const {reducer: videoReducer} = videoSlice  ;
// //
// //
// // const videoAction = {
// //     getMovieTrailers
// // }
// //
// // export {
// //     videoSlice,
// //     videoAction,
// //     videoReducer
// // }
//
//
//
// .addCase(getGenreID.fulfilled,(state, action)=>{
//     state.movies = action.payload;
//     state.errors = null;
//     state.loading = false;
// })
//     .addCase(getGenreID.pending,(state,action)=>{
//         state.loading = true;
//     })
//     .addCase(getById.fulfilled, (state, action) => {
//         state.details = action.payload;
//     })
//     .addCase(getTrailer.fulfilled, (state, action) => {
//         state.trailerPath = action.payload;
//     })
//
//
//
//
//
//
//
//
// const getGenreID = createAsyncThunk(
//     'movieSlice/getGenreID',
//     async ({with_genres,page},{rejectWithValue})=>{
//         try {
//             const {data} = await movieService.getGenreID(with_genres, page);
//             return data
//         }catch (e){
//             return rejectWithValue(e.response.data)
//         }
//     }
// )
//
// const getTrailer = createAsyncThunk('moviesSlice/getTrailer',
//     async ({id}, thunkAPI) => {
//         try {
//             const {data: {results}} = await movieService.getMovieTrailers(id);
//
//             return results.filter(value => value.type === 'Trailer')[0];
//         } catch (e) {
//             return thunkAPI.rejectWithValue(e.response?.data);
//         }
//     });
//
//
//
