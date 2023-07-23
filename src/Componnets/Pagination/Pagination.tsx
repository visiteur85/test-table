import React from "react";
import {useAppDispatch, useAppSelector} from "../../store/store";
import {setCurrentPageAC} from "../../store/usersReducer";
import style from './pagination.module.css'
import {currentPageSelector, usersSelector} from "../../store/selectors";
import {updateUrl} from "../../utils/ipdateUrl";


export const Pagination = () => {

    const dispatch = useAppDispatch();
    const currentPage = useAppSelector(currentPageSelector);
    const users = useAppSelector(usersSelector);
    const filteredUsers = useAppSelector(state => state.users.filteredUsers);
    const usersPerPage = 10;
    const totalPages = Math.ceil((filteredUsers.length || users.length) / usersPerPage);


    const handlePrevPage = () => {
        if (currentPage > 1) {
            dispatch(setCurrentPageAC(currentPage - 1));
            updateUrl(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            dispatch(setCurrentPageAC(currentPage + 1));
            updateUrl(currentPage + 1);
        }
    };

    const handlePageChange = (pageNumber: number) => {
        dispatch(setCurrentPageAC(pageNumber));
        updateUrl(pageNumber);
    };
    if (totalPages <= 1) {
        return null
    }


    return (
        <div className={style.paginationWrapper}>
            <div className={style.pagination}>
                <div>
                    <button className={currentPage === 1 ? style.end : ''} onClick={handlePrevPage}
                            disabled={currentPage === 1}>
                        Назад
                    </button>
                </div>
                <div>
                    {Array.from({length: totalPages}, (_, index) => index + 1).map((pageNumber) => (
                        <span className={`${style.list} ${currentPage === pageNumber ? style.active : ''}`}
                              key={pageNumber}
                              onClick={() => handlePageChange(pageNumber)}
                        >
                            {pageNumber}
                        </span>
                    ))}
                </div>
                <div>
                    <button className={currentPage === totalPages ? style.end : ''} onClick={handleNextPage}
                            disabled={currentPage === totalPages}>
                        Далее
                    </button>
                </div>
            </div>

        </div>
    );
};