export const DateFormat = (date) => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
};

export const lastWeek = () => {
    const today = new Date();
    const lastWeekFirstDay = today.getDate() - today.getDay() - 7;
    const res = new Date(today.setDate(lastWeekFirstDay));
    return DateFormat(res);
}

export const NextMonth = () => {
    const startDate = new Date();
    // Calculate the date exactly one month after the given starting date
    let nextMonthFirstDay = new Date(startDate.getFullYear(), startDate.getMonth() + 1, 7);

    // Log the result for debugging
    console.log(nextMonthFirstDay);

    // Return the formatted date
    return DateFormat(nextMonthFirstDay);
};

