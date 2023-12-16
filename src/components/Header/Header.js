import React from 'react';
import {Link} from "react-router-dom";

import css from "./Header.module.css"
import {UserInfo} from "../UserInfo";
import {ThemeSwitcher} from "../ThemeSwitcher";

const Header = () => {
    const handleReload = () => {
        window.location.reload();}
return (
    <div className={css.main}>
        <div className={css.Header}>
            <div className={css.headerLeft}>
                <button

                    className={css.HomeButton} onClick={handleReload}><Link to="/">Home</Link> </button>
            </div>
            <ThemeSwitcher />
            <div className={css.title}>
                <h1>ScreenSpectrum</h1>
            </div>
            <UserInfo />
        </div>
    </div>
)
};

export {Header}