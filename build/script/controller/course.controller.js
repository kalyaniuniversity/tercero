tercero.controller(GLOBAL_CONST.controller.course, ['$scope', '$mdSidenav', 'databaseservice', 'configurationservice', function ($scope, $mdSidenav, databaseservice, configurationservice) {

    $scope.courses = databaseservice.course;
    $scope.global_function = configurationservice.tercero_shared_global_functions;
    $scope.course_info_class = null;
    $scope.current_course = null;
    $scope.terminal_time = null;

    var typed_description = null;

    $scope.change_course = function (id) {

        switch (id) {
            case $scope.courses[0].id:

                change_view_mca();
                break;

            case $scope.courses[1].id:

                change_view_mtech();
                break;
            case $scope.courses[2].id:

                change_view_phd();
                break;
            case $scope.courses[3].id:

                change_view_msc();
                break;

        }
    };

    const change_view_mca = function () {

        $scope.course_info_class = "tr-course-mca-info";
        $scope.current_course = $scope.courses[0];
        $scope.terminal_time = moment(new Date()).format('dddd MMMM Do YYYY, h:mm:ss a');

        if (typed_description != null) typed_description.destroy();

        typed_description = new Typed('#tr-typed-course-desc', {
            stringsElement: '#tr-typed-strings-holder-mca',
            typeSpeed: 20,
            smartBackspace: true,
            showCursor: true,
            startDelay: 1000,
            cursorChar: "█"
        });
    };

    const change_view_mtech = function () {

        $scope.course_info_class = "tr-course-mtech-info";
        $scope.current_course = $scope.courses[1];
        $scope.terminal_time = moment(new Date()).format('dddd MMMM Do YYYY, h:mm:ss a');

        if (typed_description != null) typed_description.destroy();

        typed_description = new Typed('#tr-typed-course-desc', {
            stringsElement: '#tr-typed-strings-holder-mtech',
            replaceBaseText: true,
            typeSpeed: 20,
            smartBackspace: true,
            showCursor: true,
            startDelay: 1000,
            cursorChar: "█"
        });
    };

    const change_view_phd = function () {

        $scope.course_info_class = "tr-course-phd-info";
        $scope.current_course = $scope.courses[2];
        $scope.terminal_time = moment(new Date()).format('dddd MMMM Do YYYY, h:mm:ss a');

        if (typed_description != null) typed_description.destroy();

        typed_description = new Typed('#tr-typed-course-desc', {
            stringsElement: '#tr-typed-strings-holder-phd',
            replaceBaseText: true,
            typeSpeed: 20,
            smartBackspace: true,
            showCursor: true,
            startDelay: 1000,
            cursorChar: "█"
        });
    };

    const change_view_msc = function () {

        $scope.course_info_class = "tr-course-msc-info";
        $scope.current_course = $scope.courses[3];
        $scope.terminal_time = moment(new Date()).format('dddd MMMM Do YYYY, h:mm:ss a');

        if (typed_description != null) typed_description.destroy();

        typed_description = new Typed('#tr-typed-course-desc', {
            stringsElement: '#tr-typed-strings-holder-msc',
            typeSpeed: 10,
            smartBackspace: true,
            showCursor: true,
            startDelay: 1000,
            cursorChar: "█"
        });
    };

    const prepare_ui = function () {
        change_view_mca();
    };

    angular.element(document).ready(function () {
        prepare_ui();
    });
}]);