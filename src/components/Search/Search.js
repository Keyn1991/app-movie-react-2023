import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";

import {movieAction} from "../../redux";
import css from './Search.module.css'
const Search = () => {

    let [request, setRequest] = useState("");

    let dispatch = useDispatch();

    useEffect(() => {
        if (request) {
            dispatch(movieAction.searchMovie(request));
        }
    }, [request]);




    return (
        <div className={css.searchInput}>

            <input className={css.input}
                   type="text"
                   placeholder={'Lets find your movie...'}
                   onChange={(event) => setRequest(event.target.value)}
                   value={request}
            />

        </div>
    );
};

export  {Search};