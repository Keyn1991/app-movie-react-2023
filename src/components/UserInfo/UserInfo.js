import React from 'react';

import userIcon from '../../Images/DALL-Logo.png';
import css from './UserInfo.module.css'
const UserInfo = () => {
    return (<div className = {css.User}>

            <img className={css.userIcon} src={userIcon} alt="User Login"/>
            <h4>Dmytro</h4>


        </div>
    );
};

export {UserInfo};

//1.1v