tercero.controller(GLOBAL_CONST.controller.dashboard, ['$scope', '$mdSidenav', 'databaseservice', 'configurationservice', function ($scope, $mdSidenav, databaseservice, configurationservice) {

    $scope.sidenav = databaseservice.sidenav;
    $scope.global_function = configurationservice.tercero_shared_global_functions;

    $scope.attribution = "{{attribution}}";
    $scope.sidenav_option_focus_class = "tr-sidenav-option-focus";
    $scope.sidenav_option_nofocus_class = "tr-sidenav-option-nofocus";
    $scope.sidenav_option_class = $scope.sidenav_option_nofocus_class;

    $scope.sidenav_toggle = function () {
        $mdSidenav('tr-sidenav-left').toggle();
    };
}]);