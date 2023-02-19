import React from 'react';

import {MoviesList} from "../components/MoviesList/MoviesList";
import {Search} from "../components/Search/Search";
import {Outlet} from "react-router-dom";
import Header from "../components/Header/Header";
import css from './MoviesPage.module.css'

const MoviesPage = () => {
    return (
        <div className={css.Main}>
            <Header/>

            <Search/>

            <MoviesList/>

            <Outlet/>



        </div>
    );
};

export  {MoviesPage};