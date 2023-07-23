import {UserType, UsersType} from "../types/types";
import {AppThunk} from "./store";
import {Dispatch} from "redux";
import {usersApi} from "../api/usersApi";


type StateType = {
    users: UsersType;
    currentPage: number;
    usersPerPage: number;
    searchingData: string
    filteredUsers: UsersType
    sorting: 'up' | 'down'

};
const initialState: StateType = {
    users: [],
    currentPage: 1,
    usersPerPage: 10,
    searchingData: '',
    filteredUsers: [],
    sorting: 'down'
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
        case 'SET-DATA-FROM-INPUT':
            return {
                ...state,
                currentPage: 1,
                searchingDate: action.value,
                filteredUsers: action.value ? state.users.filter(({id, body, title}: UserType) => {
                    return (
                        String(id).includes(action.value) ||
                        body.includes(action.value) ||
                        title.includes(action.value)
                    )
                }) : [],
            };
        case 'SORTING-TABLE':
            let sortedUsers;

            if (state.filteredUsers.length === 0) {
                sortedUsers = [...state.users].sort((a, b) => {
                    if (action.value === 'id') {
                        return state.sorting === 'up' ? a.id - b.id : b.id - a.id;
                    } else if (action.value === 'body') {
                        return state.sorting === 'up' ? a.body.localeCompare(b.body) : b.body.localeCompare(a.body);
                    } else if (action.value === 'title') {
                        return state.sorting === 'up' ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title);
                    } else {
                        return 0;
                    }
                });
            } else if (state.filteredUsers.length > 1) {
                sortedUsers = [...state.filteredUsers].sort((a, b) => {
                    if (action.value === 'id') {
                        return state.sorting === 'up' ? a.id - b.id : b.id - a.id;
                    } else if (action.value === 'body') {
                        return state.sorting === 'up' ? a.body.localeCompare(b.body) : b.body.localeCompare(a.body);
                    } else if (action.value === 'title') {
                        return state.sorting === 'up' ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title);
                    } else {
                        return 0;
                    }
                });
            } else {
                // Если filteredUsers содержит только 1 элемент, оставляем массивы без изменений
                sortedUsers = state.filteredUsers;
            }

            return {
                ...state,
                sorting: state.sorting === 'up' ? 'down' : 'up',
                filteredUsers: sortedUsers,
            };

        default:
            return state
    }
}

//actions
export const getUsersAC = (users: UsersType) => ({type: 'GET-USERS', users} as const)
export const setCurrentPageAC = (page: number) => ({type: 'SET-CURRENT-PAGE', page} as const);
export const setDateToFindAC = (value: string) => ({type: 'SET-DATA-FROM-INPUT', value} as const);
export const sortTableAC = (value: string) => ({type: 'SORTING-TABLE', value} as const);

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
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setDateToFindAC>
    | ReturnType<typeof sortTableAC>
