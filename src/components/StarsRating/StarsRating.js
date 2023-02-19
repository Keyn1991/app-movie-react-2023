import React from 'react';
import ReactStars from "react-rating-stars-component/dist/react-stars";

const StarsRating = ({movie}) => {

    let {vote_average} = movie;

    return (
        <div className='StarRating'>

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