import React, {useEffect} from 'react';
import './App.css';
import MainPage from "./Pages/MainPage/MainPage";
import {getUsersTS, setCurrentPageAC} from "./store/usersReducer";
import {useAppDispatch} from "./store/store";

function App() {
    const dispatch = useAppDispatch()

    useEffect(() => {
        const currentUrl = window.location.href;
        const url = new URL(currentUrl);
        const searchParams = new URLSearchParams(url.search);
        const pageNumber = searchParams.get('page');
        if (pageNumber) {
            dispatch(setCurrentPageAC(+pageNumber))
        }

        dispatch(getUsersTS())

    }, [])
    return (

        <div className="App">
            <MainPage/>
        </div>

    );
}

export default App;
