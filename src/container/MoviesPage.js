import React from 'react';

import {MoviesList} from "../components/MoviesList/MoviesList";
import {Search} from "../components/Search/Search";
import {Outlet} from "react-router-dom";
import Header from "../components/Header/Header";
import css from './MoviesPage.module.css'
import {GetGenres} from "../components/GetGanres";

const MoviesPage = () => {
    return (
        <div className={css.Main}>

            <Header/>

            <Search/>
<div className={css.SideAndMain}>

            <GetGenres/>

             <MoviesList/>
</div>

            <Outlet/>

        </div>
    );
};

export  {MoviesPage};