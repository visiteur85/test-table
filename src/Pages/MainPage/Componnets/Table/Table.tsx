import React from 'react';
import style from './table.module.css'
import {useAppSelector} from "../../../../store/store";
import {allUsersSelector} from "../../../../store/selectors";
import {OneUserType} from "../../../../types/types";

export const Table = () => {
    const users = useAppSelector(allUsersSelector);

    return (
        <div>
            <table>
                <thead className={style.thead}>
                <tr>
                    <th className={style.col1}>ID</th>
                    <th className={style.col2}>Заголовок</th>
                    <th className={style.col3}>Описание</th>
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
        </div>
    );
};

