import React, {useEffect} from 'react';

import css from './MoviesList.module.css'
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";
import {movieAction} from "../../redux";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
const MoviesList = () => {

    const {movies} = useSelector(state => state.movie)

    const dispatch = useDispatch();

    const [query, setQuery] = useSearchParams({page: '1'});

    useEffect(() => {

        dispatch(movieAction.getAllMovies(query.get('page')));

    }, [dispatch, query]);

    const nextPage = () => {
        setQuery(value => ({page: +value.get('page') + 1}))
    };

    const prevPage = () => {
        setQuery(value => ({page: value.get('page') - 1}))
    };

    return (
        <div>

            <div className={css.Movies}>

                <div className={css.pageButtons}>
                    <button disabled={+query.get('page') < 2} onClick={prevPage} className={css.prevButton}>Previous Page</button>

                    <button disabled={+query.get('page') > 499} onClick={nextPage} className={css.nextButton}>Next Page</button>
                </div>

                {
                    movies.results?.map(movie => <MoviesListCard key={movie.id} movie={movie} />)
                }

            </div>

            <div className={css.pageButtons}>
                <button disabled={+query.get('page') < 2} onClick={prevPage} className={css.prevButton}>Previous Page</button>

                <button disabled={+query.get('page') > 499} onClick={nextPage} className={css.nextButton}>Next Page</button>
            </div>

        </div>
    );
};

export {MoviesList};