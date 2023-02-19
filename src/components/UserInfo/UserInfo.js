import React from 'react';

import css from './UserInfo.module.css'
const UserInfo = () => {
    return (<div className = {css.User}>

            <img className={css.userIcon} src="https://klike.net/uploads/posts/2020-09/1599834372_1.jpg" alt="user"/>

            <div>Dmytro</div>

        </div>
    );
};

export {UserInfo};