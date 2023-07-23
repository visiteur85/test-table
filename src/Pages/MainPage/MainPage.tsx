import React from 'react';
import style from './mainPage.module.css'
import {Search} from "../../Componnets/Input/Input";
import {Table} from "./Componnets/Table/Table";


const MainPage = () => {
    return (
        <section className={style.mainPage}>
            <div className='container'>
                <Search/>
                <Table/>
            </div>
        </section>
    );
};

export default MainPage;