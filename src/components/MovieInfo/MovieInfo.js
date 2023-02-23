import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";

import {movieAction} from "../../redux";
import {posterURL} from "../../configs/urls"
import css from "./MovieInfo.module.css"
import Header from "../Header/Header";
import ReactStars from "react-rating-stars-component";
import {Badge} from "reactstrap";
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
    console.log(id);
    const navigate = useNavigate();


    //Skeleton Loading
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)},300)
    })

    return (<div className={css.MovieInfo}>

            {loading ? <h2>Loading...............</h2> : <Header/>}


            <div className={css.backButton}>

                <button onClick={()=> navigate(-1)} className={css.back}> back</button>

            </div>


            {movie ? <div className={css.MovieInfo}>
                    <div className='genre'>
                        {movie.genres.map(genre =>
                            <Badge className={css.Badge} key={genre.id} color="primary" pill={true}>{genre.name} </Badge>)}
                    </div>
                    {<div className={css.poster}>
                        <img src={`${posterURL + movie.backdrop_path}`} alt={movie.title}/>

                    </div>}

                    <div className={css.description}>

                        {<h2 className='title'>{movie.title}</h2>}

                        {<div className='original_title'>{movie.original_title}</div>}


                        {<div>
                            Total Votes: {movie.vote_count}
                            <ReactStars
                                count={10}
                                value={movie.vote_average}
                                isHalf={true}
                                edit={true}
                                size={25}
                            />
                        </div>}

                        {<div>
                            Release: {movie.release_date}
                        </div>}

                        {<div>Popularity: {movie.popularity}</div>}

                        {<div>Language: {movie.spoken_languages.map(lang =>
                            <span key={lang.name}>{lang.english_name} </span>)}
                        </div>}

                        {<div>Budget: {movie.budget}$</div>}

                        {<div>Country: {movie.production_countries.map(country =>
                            <span key={country.iso_3166_1}>{country.name} </span>)}
                        </div>}

                        {<div>Web Site: <a href={movie.homepage}>{movie.homepage}</a></div>}

                        {<div>Tagline {movie.tagline}</div>}

                    </div>{<div className={css.description}>Description: {movie.overview}</div>}

                    <div key={movie.id}>
                        <MovieTrailers trailerPath={movie.id}/>
                    </div>



                </div>
                :
                <h1>No movie found</h1>}

        </div>
    );
};;

export {MovieInfo}
