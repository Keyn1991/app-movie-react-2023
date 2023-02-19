import React from 'react';

import css from "./Header.module.css"
import {UserInfo} from "../UserInfo/UserInfo";
export default function Header () {

    return (<div className={css.Header}>

            <div className={css.headerLeft}>



            </div>

            <div className={css.title}>
                <h1>
                    It is Header
                </h1>

            </div>

            <UserInfo/>

        </div>
    );
};

export {Header}