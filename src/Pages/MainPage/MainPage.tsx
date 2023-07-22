import React from 'react';
import style from './mainPage.module.css'
import {Input} from "../../Componnets/Input/Input";
import {Table} from "./Componnets/Table/Table";


const MainPage = () => {
    return (
        <section className={style.mainPage}>
            <div className='container'>
           <Input/>
                <Table/>
            </div>
        </section>
    );
};

export default MainPage;