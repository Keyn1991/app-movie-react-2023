import React from 'react';

import css from './UserInfo.module.css'
const UserInfo = () => {
    return (<div className = {css.User}>

            <img className={css.userIcon} src="https://img.freepik.com/free-photo/flag-of-ukraine-with-coat-of-arms_1401-250.jpg?w=1480&t=st=1677010817~exp=1677011417~hmac=e1fe8f454d9f365847d058fd71eb713d9c0faac7f9e97eeacc492a1f59b54498" alt="User Login"/>
            <div> <h4>Dmytro</h4>
            </div>

        </div>
    );
};

export {UserInfo};