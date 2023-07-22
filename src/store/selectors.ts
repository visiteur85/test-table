import {RootState} from "./store";



export const selectUsersForCurrentPage = (state: RootState) => {
    const { users, currentPage, usersPerPage } = state.users;
    const startIndex = (currentPage - 1) * usersPerPage;
    const endIndex = startIndex + usersPerPage;
    return users.slice(startIndex, endIndex);
};
export const currentPageSelector = (state: RootState) => state.users.currentPage;

export const usersSelector = (state:RootState) => state.users.users