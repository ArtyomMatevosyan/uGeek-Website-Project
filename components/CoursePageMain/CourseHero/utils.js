export const getLevel = (course) => {
    if (course?.level === 0) {
        return 'beginners'
    } else if (course?.level === 1) {
        return 'middles'
    } else if (course?.level === 2) {
        return 'seniors'
    } else {
        return ' '
    }
}