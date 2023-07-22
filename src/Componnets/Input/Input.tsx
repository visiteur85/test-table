import React from 'react';
import style from './input.module.css';
import {ReactComponent as FindIcon} from '../../assets/icon/search-svgrepo-com 1.svg';

export const Input = () => {
    return (
        <div className={style.inputContainer}>
            <input type='text' placeholder="Поиск"/>
            <FindIcon className={style.icon}/>
        </div>
    );
};

