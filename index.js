const locst = {
    isLocalStorageAvailable: false,
    checkIfLocalStorageAvailable() {
        return typeof localStorage === "object" ? true : false;
    },
    add(key, data) {
        try {
            localStorage.setItem(key, JSON.stringify(data));
        } catch (err) {
            throw err;
        }
        return true;
    },
    get(key) {
        try {
            return JSON.parse(localStorage.getItem(key));
        } catch (err) {
            throw err;
        }
    },
    remove(key) {
        try {
            localStorage.removeItem(key);
        } catch (err) {
            throw err;
        }
        return true;
    },
    update(key, newData) {
        try {
            const currentData = JSON.parse(localStorage.getItem(key));
            localStorage.setItem(
                key,
                JSON.stringify({ ...currentData, ...newData })
            );
        } catch (err) {
            throw err;
        }
        return true;
    },
};

module.exports = locst;
