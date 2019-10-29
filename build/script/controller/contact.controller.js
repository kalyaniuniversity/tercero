tercero.controller(GLOBAL_CONST.controller.contact, ['$scope', '$mdSidenav', 'databaseservice', 'configurationservice', function ($scope, $mdSidenav, databaseservice, configurationservice) {

    $scope.sidenav = databaseservice.sidenav;
    $scope.global_function = configurationservice.tercero_shared_global_functions;

    var typed = new Typed('#tr-typed-contact-cursor', {
        stringsElement: '#tr-typed-dummy',
        typeSpeed: 20,
        smartBackspace: true,
        showCursor: true,
        startDelay: 0,
        cursorChar: "█"
    });
}]);