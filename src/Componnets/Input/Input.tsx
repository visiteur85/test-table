import React, {useState} from 'react';
import style from './input.module.css';
import {ReactComponent as FindIcon} from '../../assets/icon/search-svgrepo-com 1.svg';
import {useAppDispatch} from "../../store/store";
import {debounce} from "../../utils/debounce";
import {setDateToFindAC} from "../../store/usersReducer";

export const Search = () => {

    const [value, setValue] = useState('')

    const dispatch = useAppDispatch();
    const handleSearchQueryChange = debounce((query: string) => {
        dispatch(setDateToFindAC(query));
    }, 500);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
        handleSearchQueryChange(e.currentTarget.value)
    }


    return (
        <div className={style.inputContainer}>
            <input value={value} onChange={handleInputChange} type='text' placeholder="Поиск"/>
            <FindIcon className={style.icon}/>
        </div>
    );
};

