var tercero = angular.module('tercero', ['ngRoute', 'ngMaterial', 'ngAnimate', 'ngSanitize', 'ngProgress']);

tercero.config(['$sceDelegateProvider', function ($sceDelegateProvider) {

    $sceDelegateProvider.resourceUrlWhitelist([
        'self',
        GLOBAL_API.delegate_provider.view
    ]);
}]);

tercero.config(function ($mdDateLocaleProvider) {

    $mdDateLocaleProvider.formatDate = function (date) {
        return moment(date).format('DD/MM/YYYY');
    };
});

tercero.config(['$routeProvider', function ($routeProvider) {

    $routeProvider

        .when(GLOBAL_API.route.home, {
            templateUrl: GLOBAL_API.template.home,
            controller: GLOBAL_CONST.controller.home
        })
        .when(GLOBAL_API.route.course, {
            templateUrl: GLOBAL_API.template.course,
            controller: GLOBAL_CONST.controller.course
        })
        .when(GLOBAL_API.route.faculty, {
            templateUrl: GLOBAL_API.template.faculty,
            controller: GLOBAL_CONST.controller.faculty
        })
        .when(GLOBAL_API.route.student, {
            templateUrl: GLOBAL_API.template.student,
            controller: GLOBAL_CONST.controller.student
        })
        .when(GLOBAL_API.route.staff, {
            templateUrl: GLOBAL_API.template.staff,
            controller: GLOBAL_CONST.controller.staff
        })
        .when(GLOBAL_API.route.resource, {
            templateUrl: GLOBAL_API.template.resource,
            controller: GLOBAL_CONST.controller.resource
        })
        .when(GLOBAL_API.route.research, {
            templateUrl: GLOBAL_API.template.research,
            controller: GLOBAL_CONST.controller.research
        })
        .when(GLOBAL_API.route.achievement, {
            templateUrl: GLOBAL_API.template.achievement,
            controller: GLOBAL_CONST.controller.achievement
        })
        .when(GLOBAL_API.route.gallery, {
            templateUrl: GLOBAL_API.template.gallery,
            controller: GLOBAL_CONST.controller.gallery
        })
        .when(GLOBAL_API.route.contact, {
            templateUrl: GLOBAL_API.template.contact,
            controller: GLOBAL_CONST.controller.contact
        })
        .otherwise({
            redirectTo: GLOBAL_API.route.home
        });
}]);

tercero.run(['$rootScope', 'ngProgressFactory', function ($rootScope, ngProgressFactory) {

    $rootScope.routing_progress_bar = ngProgressFactory.createInstance();

    $rootScope.routing_progress_bar.setHeight('10px');
    $rootScope.routing_progress_bar.setColor('#FFB938');

    $rootScope.$on('$routeChangeStart', function () {
        $rootScope.routing_progress_bar.start();
    });

    $rootScope.$on('$routeChangeSuccess', function () {
        $rootScope.routing_progress_bar.complete();
        $("#scroll-container").scrollTop(0);
    });

    $rootScope.$on('$routeChangeError', function () {
        $rootScope.routing_progress_bar.reset();
    });
}]);

tercero.config(['$locationProvider', function ($locationProvider) {

    if (window.history && window.history.pushState) {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    }

}]);