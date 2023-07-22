import React from "react";
import {useAppDispatch, useAppSelector} from "../../store/store";
import {setCurrentPageAC} from "../../store/usersRdecure";
import style from './pagination.module.css'
import {currentPageSelector, usersSelector} from "../../store/selectors";
import {updateUrl} from "../../utils/ipdateUrl";

export const Pagination = () => {
    const dispatch = useAppDispatch();
    const currentPage = useAppSelector(currentPageSelector);
    const users = useAppSelector(usersSelector);
    const usersPerPage = 10;
    const totalPages = Math.ceil(users.length / usersPerPage);


    const handlePrevPage = () => {
        if (currentPage > 1) {
            dispatch(setCurrentPageAC(currentPage - 1));
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            dispatch(setCurrentPageAC(currentPage + 1));
        }
    };

    const handlePageChange = (pageNumber: number) => {
        dispatch(setCurrentPageAC(pageNumber));
        updateUrl(pageNumber);
    };


    return (
        <div className={style.paginationWrapper}>
            <div className={style.pagination}>
                <div>
                    <button onClick={handlePrevPage} disabled={currentPage === 1}>
                        Назад
                    </button>
                </div>
                <div>
                    {Array.from({length: totalPages}, (_, index) => index + 1).map((pageNumber) => (
                        <span className={currentPage === pageNumber ? style.active : ''}
                              key={pageNumber}
                              onClick={() => handlePageChange(pageNumber)}
                        >
                            {pageNumber}
                        </span>
                    ))}
                </div>
                <div>
                    <button onClick={handleNextPage} disabled={currentPage === totalPages}>
                        Далее
                    </button>
                </div>
            </div>

        </div>
    );
};