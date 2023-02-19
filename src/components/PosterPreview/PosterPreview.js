import React from 'react';

import css from './/Poster.module.css'
import {posterURL} from "../../configs";
const PosterPreview = ({poster, title}) => {
    return (
        <div className ={css.PosterPreview}>
            PosterPreview


            <img className={css.img} src={`${posterURL + poster}`} alt={title}/>
        </div>
    );
};

export  {PosterPreview};