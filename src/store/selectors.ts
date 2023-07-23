import {RootState} from "./store";


export const selectUsersForCurrentPage = (state: RootState) => {
    const {users, currentPage, usersPerPage, filteredUsers} = state.users;
    const startIndex = (currentPage - 1) * usersPerPage;
    const endIndex = startIndex + usersPerPage;
    if (filteredUsers.length) {
        return filteredUsers.slice(startIndex, endIndex);
    }
    return users.slice(startIndex, endIndex);
};
export const currentPageSelector = (state: RootState) => state.users.currentPage;
export const usersSelector = (state: RootState) => state.users.users;
export const inputDateSelectorSelector = (state: RootState) => state.users.searchingDate;
export const filteredUsersSelector = (state: RootState) => state.users.filteredUsers;