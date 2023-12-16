import React from 'react';
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import {getGenreID} from "../../redux"

import css from './Genre.module.css'
const Genre = ({genre}) => {

    const dispatch = useDispatch();

    return (
        <div className={css.Genre}>
            <Link to={`/genre/${genre.id}`} onClick={() => dispatch(getGenreID({ with_genres: genre.id, page: '1' }))}>
                <h5>{genre?.name}</h5>
            </Link>



        </div>
    );
};

export {Genre};