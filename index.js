const locst = {
    isLocalStorageAvailable: false,
    checkIfLocalStorageAvailable() {
        return typeof localStorage === "object" ? true : false;
    },
    addItem(key, data) {
        try {
            localStorage.setItem(key, JSON.stringify(data));
        } catch (err) {
            throw err;
        }
        return true;
    },
    removeItem(key) {
        try {
            localStorage.removeItem(key);
        } catch (err) {
            throw err;
        }
        return true;
    },
    updateItem(key, newData) {
        try {
            const currentData = JSON.parse(localStorage.getItem(key));
            localStorage.setItem(
                key,
                JSON.stringify({ ...currentData, newData })
            );
        } catch (err) {
            throw err;
        }
        return true;
    },
};

module.exports = locst;
