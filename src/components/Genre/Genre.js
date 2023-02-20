import React from 'react';
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";

const Genre = ({genre}) => {

    const dispatch = useDispatch();


    return (
        <div>
            <Link to ={'/genre/'+`${genre.id}`} onClick={()=>dispatch()}><h5>{genre?.name}</h5></Link>
        </div>
    );
};

export {Genre};