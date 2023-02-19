import React, {useEffect} from 'react';

import css from './MoviesList.module.css'
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";
import {movieAction} from "../../redux";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
const MoviesList = () => {

    let {movies} = useSelector(state => state.movie)

    let dispatch = useDispatch();

    let [query, setQuery] = useSearchParams({page: '1'});

    useEffect(() => {

        dispatch(movieAction.getAllMovies(query.get('page')));

    }, [dispatch, query]);

    let nextPage = () => {
        setQuery(value => ({page: +value.get('page') + 1}))
    };

    let prevPage = () => {
        setQuery(value => ({page: value.get('page') - 1}))
    };

    return (
        <div className={css.Movies}>


            <div className={css.page_buttons}>
                <button disabled={+query.get('page') < 2} onClick={prevPage}>Previous Page</button>

                <button disabled={+query.get('page') > 499} onClick={nextPage}>Next Page</button>
            </div>
            {
                movies.results?.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)
            }
        </div>
    );
};

export {MoviesList};