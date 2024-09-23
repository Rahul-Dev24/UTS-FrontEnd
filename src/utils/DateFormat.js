export const DateFormat = (date) => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
};

export const lastWeek = () => {
    let today = new Date();
    let date = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
    // return lastWeek;
    return DateFormat(date);
}

export const NextMonth = () => {
    let today = new Date();
    let nextMonth = new Date(today.getFullYear(), today.getMonth() + 1, new Date().getDate() - 8);
    return DateFormat(nextMonth);
};

