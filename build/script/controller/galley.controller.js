tercero.controller(GLOBAL_CONST.controller.gallery, ['$scope', '$mdSidenav', '$mdDialog', 'databaseservice', 'configurationservice', function ($scope, $mdSidenav, $mdDialog, databaseservice, configurationservice) {

    $scope.sidenav = databaseservice.sidenav;
    $scope.global_function = configurationservice.tercero_shared_global_functions;
    $scope.photos = databaseservice.photo;
    $scope.picture_to_enlarge = null;

    $scope.enlarge_picture = function (event, index) {

        $scope.picture_to_enlarge = $scope.photos[index];

        $mdDialog.show({
            contentElement: '#tr-picture-enlarged',
            parent: angular.element(document.body),
            targetEvent: event,
            clickOutsideToClose: true
        });
    };
}]);