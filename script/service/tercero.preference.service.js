tercero.service('preferenceservice', [function () {

    const storage = window.localStorage;

    return ({

        tercero_local_storage: storage,

        tercero_local_storage_handler: {

            exists: function (key) {
                return !(storage.getItem(key) === null);
            },

            store: function (key, value) {
                storage.setItem(key, value);
            },

            get: function (key) {
                return storage.getItem(key);
            },

            remove: function (key) {
                storage.removeItem(key);
            },

            reset: function () {
                storage.clear();
            }
        }
    });
}]);