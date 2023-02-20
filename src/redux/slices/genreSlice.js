import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {genreService} from "../../services";



let initialState = {
    genres: [],
    error:null,
    loading:false
};

const getAllGenres = createAsyncThunk(

    'getAllGenre',

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
    initialState,
    reducers: {},

    extraReducers:builder =>
        builder.addCase(getAllGenres.fulfilled, (state, action)=>{
            state.genres = action.payload
            state.loading =false
        })
            .addCase(getAllGenres.pending, (state, action) => {
                state.error=action.payload
            })

});

const {reducer: genreReducer} = genreSlice;

const genreAction = {
    getAllGenres
};

export {
    genreSlice,
    genreAction,
    genreReducer,
};