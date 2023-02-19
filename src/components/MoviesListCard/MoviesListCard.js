import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";

import css from './Movie.module.css'
import {Skeleton} from "@mui/material";
import {PosterPreview} from "../PosterPreview/PosterPreview";
import {GenreBadge} from "../GenreBadge/GenreBadge";
import {StarsRating} from "../StarsRating/StarsRating";

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
            <h3>
                MoviesListCard
            </h3>

            <Link className={css.Movie} to={`/movie${movie.id}`}>
                {loading ? (<Skeleton variant={'rounded'} width={'100%'} height={'619px'}/>)
                    :
                    <div className='movieCard'>

                        <PosterPreview title={title} poster={poster_path}/>

                        <div className={css.title}>
                            {title}
                        </div>

                        <div className={css.release_date}>
                            Release Date: {release_date}, {original_language}
                        </div>

                        <GenreBadge movie={movie}/>

                        <StarsRating movie={movie}/>

                    </div>}


            </Link>
        </div>
    );
};

export {MoviesListCard};