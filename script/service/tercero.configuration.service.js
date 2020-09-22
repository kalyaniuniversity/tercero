tercero.service('configurationservice', ['preferenceservice', '$location', '$mdSidenav', '$mdToast', function (preferenceservice, $location, $mdSidenav, $mdToast) {

    const preference = preferenceservice.tercero_local_storage_handler;

    return ({

        tercero_shared_global_functions: {

            md_show_menu_options: function ($mdMenu, event) {
                $mdMenu.open(event);
            },

            direct_to_location: function (path, close_sidenav = false) {

                $location.path(path);

                if (close_sidenav) $mdSidenav('tr-sidenav-left').toggle();
            },

            not_implemented: function () {
                $mdToast.show($mdToast.simple().textContent("This feature has not been implemented yet!"));
            }
        }
    });
}]);