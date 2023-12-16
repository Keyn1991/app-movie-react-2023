import React, { useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { useDispatch, useSelector } from 'react-redux';

import { getAllGenres } from '../../redux';
import css from './GetGanres.module.css';
import {Genre} from "../Genre";

const GetGenres = () => {
    const { genres, loading } = useSelector((state) => state.genre);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllGenres());
    }, [dispatch]);

    const bgAnimation = useSpring({

        color: '#000'
    });

    return (
        <div>
            <animated.div className={css.Genre} style={bgAnimation}>
                {
                    genres?.genres?.map(genre =><Genre key={genre.id} genre={genre}/>)
                }
            </animated.div>
            <div>{loading && <h1>Loading.........</h1>}</div>

        </div>
    );
};

export { GetGenres };
