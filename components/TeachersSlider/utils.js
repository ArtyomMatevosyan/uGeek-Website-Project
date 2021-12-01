export const getMapObjectForSlider = (length) => {

    const map = {};

    for (let i = 0; i < length; ++i) {
        map[i] = {}
        for (let j = 0; j < length; j++) {
            map[i][j] = (j+(length - i))%length;
        }

    }

    return map;
}