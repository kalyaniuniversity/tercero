tercero.controller(GLOBAL_CONST.controller.faculty, ['$scope', 'databaseservice', 'configurationservice', function ($scope, databaseservice, configurationservice) {

    $scope.faculties = databaseservice.faculty;
    $scope.global_function = configurationservice.tercero_shared_global_functions;
}]);