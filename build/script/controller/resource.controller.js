tercero.controller(GLOBAL_CONST.controller.resource, ['$scope', '$mdSidenav', 'databaseservice', 'configurationservice', function ($scope, $mdSidenav, databaseservice, configurationservice) {

    $scope.sidenav = databaseservice.sidenav;
    $scope.global_function = configurationservice.tercero_shared_global_functions;

    const prepare_ui = function () {

        var typed_description = new Typed('#tr-typed-resource-content', {
            stringsElement: '#tr-typed-strings-resource',
            typeSpeed: 5,
            smartBackspace: true,
            showCursor: true,
            startDelay: 200,
            contentType: 'html',
            cursorChar: "█"
        });
    };

    angular.element(document).ready(function () {
        prepare_ui();
    });
}]);