import React from 'react';

import css from "./Header.module.css"
import {UserInfo} from "../UserInfo/UserInfo";
import {ThemeSwitcher} from "../ThemeSwitcher/ThemeSwitcher";

export default function Header () {

    return (

        <div className={css.main}>

            <div className={css.Header}>
            <ThemeSwitcher/>

                <div className={css.headerLeft}>
                </div>
                <div className={css.title}>
                    <h1>
                        APP-MOVIE-PROJECT
                    </h1>
            </div>
            <UserInfo/>

        </div>
        </div>
    );
};

export {Header}