import React from 'react';
import ReactStars from "react-rating-stars-component/dist/react-stars";

import css from './StarsRating.module.css'

const StarsRating = ({movie}) => {

    let {vote_average} = movie;

    return (
        <div className={css.StarsRating}>

            <ReactStars
                count={10}
                value={vote_average}
                isHalf={true}
                edit={false}
                size={20}
            />

        </div>
    );
};

export  {StarsRating};