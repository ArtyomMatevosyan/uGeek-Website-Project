export const getDateFormat = (date) => {
    return `${parseInt(date.getMonth(), 10) + 1}/${date.getDate()}/${date.getFullYear()}`;
};

export const millisecondToDateFormat = (millisecond) => {
    const date = new Date(parseInt(millisecond, 10));
    return getDateFormat(date);
};

export const prettyDate = (time) => {
    if (typeof navigator !== 'undefined') {
        const date = new Date(parseInt(time, 10));

        const timeFormat = date.toLocaleTimeString(navigator && navigator.language, {
            hour: '2-digit',
            minute: '2-digit',
        });

        const newTimeFormat = timeFormat.slice(0, timeFormat.length - 2);

        return `${newTimeFormat}`;
    }

    return '';
}
