import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams, useSearchParams} from "react-router-dom";

import css from './MoviesList.module.css'
import {movieAction as movieActions, movieAction} from "../../redux";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
const MoviesList = () => {

    const {id:genreId} = useParams();

    const {movies} = useSelector(state => state.movie)

    const dispatch = useDispatch();

    let [query, setQuery] = useSearchParams({with_genres:`${genreId}`, page: '1'});

    const page = query.get('page');
    const with_genres = query.get('with_genres');


    useEffect(() => {

        dispatch(movieAction.getAllMovies(query.get('page')));

    }, [dispatch, query,]);

    useEffect(()=>{
        dispatch(movieActions.getGenreID({with_genres,page}))
    },[genreId, page])


    const nextPage = () => {
        setQuery(value => ({page: +value.get('page') + 1}))
    };

    const prevPage = () => {
        setQuery(value => ({page: value.get('page') - 1}))
    };


    let [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(()=> {
            setLoading(false)}, 300);
    });

    return (
        <div>
            {loading && <h1>Loading.........</h1>}
            <div className={css.Movies}>

                <div className={css.pageButtons}>
                    <button disabled={+query.get('page') < 2} onClick={prevPage} className={css.prevButton}>Previous Page</button>

                    <button disabled={+query.get('page') > 499} onClick={nextPage} className={css.nextButton}>Next Page</button>
                </div>

                {
                    movies.results?.map(movie => <MoviesListCard key={movie.id} movie={movie} />)
                }

            </div>

            <div className={css.pageButtonsTwo}>
                <button disabled={+query.get('page') < 2} onClick={prevPage} className={css.prevButton}>Previous Page</button>

                <button disabled={+query.get('page') > 499} onClick={nextPage} className={css.nextButton}>Next Page</button>
            </div>

        </div>
    );
};

export {MoviesList};