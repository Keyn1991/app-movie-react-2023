import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";

import {movieAction} from "../../redux";
import {posterURL} from "../../configs/urls"
import css from "./MovieInfo.module.css"
import Header from "../Header/Header";
import ReactStars from "react-rating-stars-component";
import {Badge} from "reactstrap";
import {Button,Skeleton} from "@mui/material";


 const MovieInfo = () => {

    const {movie} = useSelector(state => state.movie);

    const dispatch = useDispatch();

    const {id} = useParams();

    useEffect(() => {
        if (id) dispatch(movieAction.getMovie(id))
    }, [id])

    const navigate = useNavigate();


    //Skeleton Loading
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)},100)
    })

    return (<div className={css.MovieInfo}>

            {loading ? (<Skeleton variant={"rounded"} height={"60px"}/>)
                :
                <Header/>}

            {loading ? (<Skeleton variant={"text"} height={"50px"} width={"80px"}/>) :
                <Button variant={"outlined"} size={'small'} className='backButton'
                        onClick={() => navigate(-1)}>Back</Button>}


            {movie ? <div className={css.MovieInfo}>

                    {loading ? (<Skeleton variant={"rounded"} height={'313px'} width={'512px'}/>)
                        :
                        <div className='poster'>
                            <img src={`${posterURL + movie.backdrop_path}`} alt={movie.title}/>
                            <div className='genre'>
                                {movie.genres.map(genre =>
                                    <Badge key={genre.id} color="primary" pill={true}>{genre.name} </Badge>)}
                            </div>
                        </div>}


                    <div className={css.description}>

                        {loading ? (<Skeleton variant={"text"} height={'39px'} width={'371px'}/>)
                            :
                            <h2 className='title'>{movie.title}</h2>}

                        {loading ? (<Skeleton variant={"text"} height={'10px'} width={"150px"}/>)
                            :
                            <div className='original_title'>{movie.original_title}</div>}


                        {loading ? (<Skeleton variant={"text"} height={'61px'} width={"213px"}/>)
                            :
                            <div>
                                Total Votes: {movie.vote_count}
                                <ReactStars
                                    count={10}
                                    value={movie.vote_average}
                                    isHalf={true}
                                    edit={true}
                                    size={25}
                                />
                            </div>}

                        {loading ? (<Skeleton variant={"text"}/>)
                            :
                            <div>
                                Release: {movie.release_date}
                            </div>}

                        {loading ? (<Skeleton variant={"text"}/>)
                            :
                            <div>
                                Popularity: {movie.popularity}
                            </div>}

                        {loading ? (<Skeleton variant={"text"}/>)
                            :
                            <div>
                                Language: {movie.spoken_languages.map(lang =>
                                <span key={lang.name}>{lang.english_name} </span>)}
                            </div>}

                        {loading ? (<Skeleton variant={"text"}/>)
                            :
                            <div>Budget: {movie.budget}$</div>}

                        {loading ? (<Skeleton variant={"text"}/>)
                            :
                            <div>Country: {movie.production_countries.map(country =>
                                <span key={country.iso_3166_1}>{country.name} </span>)}
                            </div>}

                        {loading ? (<Skeleton variant={"text"}/>)
                            :
                            <div>Web Site: <a href={movie.homepage}>{movie.homepage}</a></div>}

                        {loading ? (<Skeleton variant={"text"}/>)
                            :
                            <div>Tagline: {movie.tagline}</div>}

                    </div>

                    {loading ? (<Skeleton variant={"text"} height={'150px'} width={'100%'}/>)
                        :
                        <div>Description: {movie.overview}</div>}

                </div>
                :
                <h1>No movie found</h1>}

        </div>
    );
};;

export {MovieInfo}