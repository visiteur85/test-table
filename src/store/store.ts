import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware, {ThunkAction, ThunkDispatch} from 'redux-thunk'
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {UsersActionType, usersReducer} from "./usersRdecure";


const rootReducer = combineReducers({
    users: usersReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

type AppRootActionType = UsersActionType

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ThunkDispatch<RootState, unknown, AppRootActionType>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AppRootActionType>

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>()

// @ts-ignore
window.store = store;