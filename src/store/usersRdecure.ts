import {UsersType} from "../types/types";
import {AppThunk} from "./store";
import {Dispatch} from "redux";
import {usersApi} from "../api/usersApi";


type StateType = {
    users: UsersType;
    currentPage: number;
    usersPerPage: number;
};
const initialState: StateType = {
    users: [],
    currentPage: 1,
    usersPerPage: 10,
};


export const usersReducer = (state = initialState, action: UsersActionType): any => {
    switch (action.type) {
        case 'GET-USERS':
            return {
                ...state,
                users: action.users
            };

        case 'SET-CURRENT-PAGE':
            return {
                ...state,
                currentPage: action.page,
            };
        default:
            return state
    }
}

//actions
export const getUsersAC = (users: UsersType) => ({type: 'GET-USERS', users} as const)
export const setCurrentPageAC = (page: number) => ({type: 'SET-CURRENT-PAGE', page} as const);

//thunks
export const getUsersTS = (): AppThunk => async (dispatch: Dispatch) => {
    try {
        let res = await usersApi.getUsers()
        const users = res.data
        dispatch(getUsersAC(users))
    } catch (e) {
        console.log("Нет данных")
    }
}

//types
export type UsersActionType = ReturnType<typeof getUsersAC> | ReturnType<typeof setCurrentPageAC>