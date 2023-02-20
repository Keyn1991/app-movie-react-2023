import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";

import css from './MovieListCard.module.css'
import {PosterPreview} from "../PosterPreview/PosterPreview";
import {GenreBadge} from "../GenreBadge/GenreBadge";
import {StarsRating} from "../StarsRating/StarsRating";

import {Skeleton} from "@mui/material";

const MoviesListCard = ({movie}) => {

    let {title,original_language, poster_path,
        release_date} = movie;

    let [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(()=> {
            setLoading(false)}, 1000);
    });


    return (
        <div>


            <Link className={css.MovieListCard} to={`/movie/${movie.id}`}>

                    <div className={'MoviesListCard'}>
                    <GenreBadge movie={movie}/>

                        <PosterPreview title={title} poster={poster_path}/>
                        <StarsRating movie={movie}/>

                        <div className={css.MainMovieTitle}>
                            {title}
                        </div>





                    </div>


            </Link>
        </div>
    );
};

export {MoviesListCard};
