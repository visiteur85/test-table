import {UsersType} from "../types/types";
import {AppThunk} from "./store";
import {Dispatch} from "redux";
import {usersApi} from "../api/usersApi";


type StateType = UsersType | [];

const initialState: StateType = [];

export const usersReducer = (state = initialState, action: UsersActionType): any => {
    switch (action.type) {
        case 'GET-USERS':
            return action.users
        default:
            return state
    }
}

//actions
export const getUsersAC = (users: UsersType) => ({type: 'GET-USERS', users} as const)

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
export type UsersActionType = ReturnType<typeof getUsersAC>