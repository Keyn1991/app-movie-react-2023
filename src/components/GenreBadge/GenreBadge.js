import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { genreAction } from '../../redux';
import { Badge } from 'reactstrap';

import css from './GenreBarge.module.css';

const GenreBadge = ({ movie }) => {
    const [genres, setGenres] = useState([]);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(genreAction.getAllGenres()).then(({ payload }) =>
            setGenres(payload.genres)
        );
    }, [dispatch]);

    let genreBadge = genres
        .filter((genre) => movie.genre_ids.includes(genre.id))
        .map((data) => data.name);
    genreBadge.length = 3;

    return (
        <div className={css.movieGenres}>
            {genreBadge.map((item, index) => (
                <div key={index} className={css.genreBadge}>
                    <Badge color="primary" pill className={css.badge}>
                        {item}
                    </Badge>
                </div>
            ))}
        </div>
    );
};

export {GenreBadge};
