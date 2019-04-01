tercero.service('configurationservice', ['preferenceservice', '$location', '$mdSidenav', function (preferenceservice, $location, $mdSidenav) {

    const preference = preferenceservice.paperdesk_local_storage_handler;

    return ({

        tercero_shared_global_functions: {

            md_show_menu_options: function ($mdMenu, event) {
                $mdMenu.open(event);
            },

            direct_to_location: function (path, close_sidenav = false) {

                $location.path(path);

                if (close_sidenav) $mdSidenav('tr-sidenav-left').toggle();
            }
        }
    });
}]);