var app = angular.module("myApp", []);

app.controller('ParentController', ['$http', function ($http) {
    this.p1 = {
        c1: "test p1/c1",
        c2: "test p2/c2"
    };
}]);

app.controller('ChildController', ['$http', function ($http) {
    this.c1 = "test c1";
}]);

