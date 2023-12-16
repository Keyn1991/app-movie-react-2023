
import {Link} from "react-router-dom";

import css from './MovieListCard.module.css'
import {PosterPreview} from "../PosterPreview";
import {GenreBadge} from "../GenreBadge";
import {StarsRating} from "../StarsRating";


const MoviesListCard = ({movie}) => {

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