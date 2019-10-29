tercero.controller(GLOBAL_CONST.controller.research, ['$scope', '$mdSidenav', 'databaseservice', 'configurationservice', function ($scope, $mdSidenav, databaseservice, configurationservice) {

    $scope.sidenav = databaseservice.sidenav;
    $scope.global_function = configurationservice.tercero_shared_global_functions;

    var chinese = "田由甲申甴电甶男甸甹町画甼甽甾甿畀畁畂畃畄畅畆畇畈畉畊畋界畍畎畏畐畑";
    var c = document.getElementById("matrix");
    var ctx = c.getContext("2d");
    var font_size = 10;
    var drops = [];

    const draw = function () {

        ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
        ctx.fillRect(0, 0, c.width, c.height);
        ctx.fillStyle = "#0F0";
        ctx.font = font_size + "px arial";

        for (var i = 0; i < drops.length; i++) {

            var text = chinese[Math.floor(Math.random() * chinese.length)];
            ctx.fillText(text, i * font_size, drops[i] * font_size);

            if (drops[i] * font_size > c.height && Math.random() > 0.975)
                drops[i] = 0;

            drops[i]++;
        }
    };

    const prepare_ui = function () {

        c.height = window.innerHeight;
        c.width = window.innerWidth;
        chinese = chinese.split("");

        var columns = c.width / font_size;

        for (var x = 0; x < columns; x++)
            drops[x] = 1;

        setInterval(draw, 33);
    };

    angular.element(document).ready(function () {
        prepare_ui();
    });

    //--https://codepen.io/P3R0/pen/MwgoKv?editors=0010#0--










}]);