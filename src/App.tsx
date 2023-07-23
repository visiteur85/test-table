import React, {useEffect} from 'react';
import './App.css';
import MainPage from "./Pages/MainPage/MainPage";
import {getUsersTS} from "./store/usersReducer";
import {useAppDispatch} from "./store/store";

function App() {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getUsersTS())

    }, [])
    return (

        <div className="App">
            <MainPage/>
        </div>

    );
}

export default App;
