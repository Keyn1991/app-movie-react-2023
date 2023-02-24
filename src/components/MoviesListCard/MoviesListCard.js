import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";

import css from './MovieListCard.module.css'
import {PosterPreview} from "../PosterPreview/PosterPreview";
import {GenreBadge} from "../GenreBadge/GenreBadge";
import {StarsRating} from "../StarsRating/StarsRating";


const MoviesListCard = ({movie}) => {
    const [searchQuery, setSearchQuery] = useState("");
    const {title, poster_path} = movie;

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