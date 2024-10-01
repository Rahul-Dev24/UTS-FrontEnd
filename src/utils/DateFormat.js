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
    let date = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
    let nextMonth = new Date(date.getFullYear(), date.getMonth() + 1, date.getDate() - 1);
    return DateFormat(nextMonth);
};

