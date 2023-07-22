export const updateUrl = (pageNumber: number) => {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set('page', pageNumber.toString());
    window.history.replaceState(null, '', `${window.location.pathname}?${searchParams.toString()}`);
};