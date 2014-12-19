angular.module("myApp", ['ngRoute', 'ngAnimate'])
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
    when('/child1', {
        templateUrl: 'child1.html'
    }).
    when('/child2', {
        templateUrl: 'child2.html'
    }).
    otherwise({
        redirectTo: '/child1'
    });
}])
.run(['$timeout', '$location', function($timeout, $location) {
    console.log('run executed');
    var func = function () {
        if ($location.path().indexOf('1') > 0) {
            $location.path("/child2");
        } else {
            $location.path("/child1");
        }
        $timeout(func, 3000);
    };
    $timeout(func, 3000);
}]);

