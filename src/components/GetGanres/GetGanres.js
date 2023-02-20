import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {genreAction} from "../../redux/slices/";
import {Genre} from "../Genre";



const GetGenres =()=> {
    const {genres, loading} = useSelector(state => state.genre);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(genreAction.getAllGenres())
    },[])

    return(
        <div>
            <div>
                {/*{loading && <h1>Loading.........</h1>}*/}
            </div>

            <div>
                {
                    genres?.genres?.map(genre =><Genre key={genre.id} genre={genre}/>)
                }
            </div>
        </div>
    )
}

export {GetGenres};