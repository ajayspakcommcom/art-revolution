
export const firstCharUpperCase = (txt) => {
    if (txt) {
        return txt.split('-').map(item => {
            return item.substr(0, 1).toUpperCase() + item.substr(1);
        }).join(' ');
    } else {
        return null;
    }
};