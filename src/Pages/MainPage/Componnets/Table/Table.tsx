import React from 'react';
import style from './table.module.css'
import {useAppDispatch, useAppSelector} from "../../../../store/store";
import {OneUserType} from "../../../../types/types";
import {Pagination} from "../../../../Componnets/Pagination/Pagination";
import {
    filteredUsersSelector,
    inputDateSelectorSelector,
    selectUsersForCurrentPage
} from "../../../../store/selectors";
import {ReactComponent as SortSVG} from "../../../../assets/icon/sort.svg";
import {sortTableAC} from "../../../../store/usersReducer";


export const Table = () => {
    const dispatch = useAppDispatch()
    const users = useAppSelector(selectUsersForCurrentPage);
    const filteredUsers = useAppSelector(filteredUsersSelector);
    const inputData = useAppSelector(inputDateSelectorSelector);


    const onSorting = (value: string) => {
        dispatch(sortTableAC(value))
    }


    if (!users) {
        return <div>Loading...</div>;
    }

    if (inputData && filteredUsers.length === 0) {
        return <h2>Совпадений нет</h2>
    }

    return (
        <div>
            <table>
                <thead className={style.thead}>
                <tr>
                    <th className={`${style.col1} ${style.titleCo1}`}>
                        <span>ID</span>

                        {<SortSVG onClick={() => {
                            onSorting('id')
                        }} className={filteredUsers.length === 1 ? style.none : style.sortIcon}/>}

                    </th>
                    <th className={style.col2}>
                        <span className={style.title}>Заголовок</span>
                        {<SortSVG onClick={() => {
                            onSorting('title')
                        }} className={filteredUsers.length === 1 ? style.none : style.sortIcon}/>}
                    </th>
                    <th className={style.col3}>
                        <span className={style.title}>Описание</span>
                        {<SortSVG onClick={() => {
                            onSorting('body')
                        }} className={filteredUsers.length === 1 ? style.none : style.sortIcon}/>}
                    </th>

                </tr>
                </thead>
                <tbody>

                {users.map(({id, body, title}: OneUserType) => (
                    <tr key={id}>
                        <td className={style.col1}>{id}</td>
                        <td className={style.col2}>{title}</td>
                        <td className={style.col3}>{body}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <Pagination/>
        </div>
    );
};


