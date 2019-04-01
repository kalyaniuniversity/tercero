tercero.controller(GLOBAL_CONST.controller.home, ['$scope', 'databaseservice', function ($scope, databaseservice) {

    $scope.sidenav = databaseservice.sidenav;
    $scope.news = databaseservice.news;
    $scope.attribution = "{{attribution}}";

    $scope.news_item_focus_class = "tr-news-item-focus pulse";
    $scope.news_item_nofocus_class = "tr-news-item-nofocus";
    $scope.news_item_class = $scope.news_item_nofocus_class;
    $scope.news_item_whiteframe = -1;
    $scope.year = new Date().getFullYear();

    const prepare_ui = function () {

        var typed_banner_1 = new Typed('#tr-cse-banner-1', {
            stringsElement: '#tr-typed-strings-holder-1',
            typeSpeed: 50,
            smartBackspace: true,
            showCursor: false
        });

        var typed_banner_2 = new Typed('#tr-cse-banner-2', {
            stringsElement: '#tr-typed-strings-holder-2',
            typeSpeed: 50,
            smartBackspace: true,
            loop: true,
            showCursor: true
        });
    };

    angular.element(document).ready(function () {
        prepare_ui();
    });
}]);