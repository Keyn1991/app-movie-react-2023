import React, { useEffect, useState } from 'react';

import css from './ThemeSwitcher.module.css'
const ThemeSwitcher = () => {
    const [isDarkMode, setIsDarkMode] = useState(
        localStorage.getItem('theme') === 'dark'
    );

    const toggleTheme = () => {
        setIsDarkMode((prev) => {
            const newTheme = prev ? 'light' : 'dark';
            localStorage.setItem('theme', newTheme);
            return !prev;
        });
    };

    useEffect(() => {
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme) {
            setIsDarkMode(currentTheme === 'dark');
        } else {
            localStorage.setItem('theme', 'dark');
        }
    }, []);

    useEffect(() => {
        document.body.className = isDarkMode ? 'dark' : 'light';
    }, [isDarkMode]);

    return (

<div>
    <div className={css.buttonSwitch}>
            <button onClick={toggleTheme}>{isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}</button>
    </div>
</div>

    );
};

export {ThemeSwitcher};
