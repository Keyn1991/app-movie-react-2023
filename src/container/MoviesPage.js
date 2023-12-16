import React from 'react';
import {Outlet} from "react-router-dom";

import {MoviesList} from "../components/MoviesList";
import {Search} from "../components/Search";
import {Header} from "../components/Header";
import css from './MoviesPage.module.css'
import {GetGenres} from "../components/GetGanres";
import {Footer} from "../components/Footer";





const MoviesPage = () => {
    return (
        <div className={css.Main}>

            <Header/>
            <Search/>
            <div className={css.SideAndMain}>
            <GetGenres/>
             <MoviesList/>
            </div>
            <Footer/>
            <Outlet/>
        </div>
    );
};

export  {MoviesPage};