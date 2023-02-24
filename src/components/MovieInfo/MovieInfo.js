import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import ReactStars from "react-rating-stars-component";
import {Badge} from "reactstrap";
import React, {useEffect, useState} from "react";

import {movieAction} from "../../redux";
import {posterURL} from "../../configs/urls"
import css from "./MovieInfo.module.css"
import {Header} from "../Header/Header";
import {MovieTrailers} from "../MovieTrailers/MovieTrailers";


const MovieInfo = () => {

    const {movie} = useSelector(state => state.movie);

    const dispatch = useDispatch();

    const {id} = useParams();

    useEffect(() => {
        if (id)
            dispatch(movieAction.getMovie(id))
            dispatch(movieAction.getTrailer({id: id}));
    }, [id, dispatch])

    const navigate = useNavigate();



    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 300);
    }, []);

    return (
        <div className={css.MovieInfo}>
            {loading ? (
                <h2>Loading...............</h2>
            ) : (
                <Header />
            )}

            <div className={css.backButton}>
                <button onClick={() => navigate(-1)} className={css.back}>
                    back
                </button>
            </div>

            {movie ? (
                <div className={css.movieContainer}>
                    <div className={css.genre}>
                        {movie.genres.map((genre) => (
                            <Badge
                                className={css.Badge}
                                key={genre.id}
                                color="primary"
                                pill={true}
                            >
                                {genre.name}{' '}
                            </Badge>
                        ))}
                    </div>

                    <div className={css.poster}>
                        <img
                            src={`${posterURL + movie.backdrop_path}`}
                            alt={movie.title}
                        />
                    </div>

                    <div className={css.description}>
                        <h2 className={css.title}>{movie.title}</h2>

                        <div className={css.originalTitle}>
                            {movie.original_title}
                        </div>

                        <div className={css.vote}>
                            Total Votes: {movie.vote_count}
                            <ReactStars
                                count={10}
                                value={movie.vote_average}
                                isHalf={true}
                                edit={true}
                                size={25}
                            />
                        </div>

                        <div className={css.releaseDate}>
                            Release: {movie.release_date}
                        </div>

                        <div className={css.popularity}>
                            Popularity: {movie.popularity}
                        </div>

                        <div className={css.language}>
                            Language:{' '}
                            {movie.spoken_languages.map((lang) => (
                                <span key={lang.name}>{lang.english_name} </span>
                            ))}
                        </div>

                        <div className={css.budget}>Budget: {movie.budget}$</div>

                        <div className={css.country}>
                            Country:{' '}
                            {movie.production_countries.map((country) => (
                                <span key={country.iso_3166_1}>{country.name} </span>
                            ))}
                        </div>

                        <div className={css.website}>
                            Web Site: <a href={movie.homepage}>{movie.homepage}</a>
                        </div>

                        <div className={css.tagline}>
                            Tagline: {movie.tagline}
                        </div>

                        <div className={css.overview}>
                            Description: {movie.overview}
                        </div>
                    </div>

                    <div className={css.trailer}>

                        <MovieTrailers id={id} />
                    </div>
                </div>
            ) : (
                <h1>No movie found</h1>
            )}
        </div>
    );
};

export {MovieInfo};
