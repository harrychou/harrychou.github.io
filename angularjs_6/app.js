var app = angular.module("harrychou", []);

app.controller('MainController', ['MainService', function (MainService) {
    var vm = this;
    vm.albums = [];

    vm.getAlbums = function() {
        MainService.getAlbums()
            .then(function(data) {
                    vm.albums = data;
                    console.log('albums returned to controller.', data);
                },
                function(error) {
                    console.log('albums retrieval failed.', error);
                },
                function(progress) {
                    console.log('albums retrieval in progress.', progress);
                });

            //.then(function(data) {
            //    vm.albums = data;
            //    console.log('albums returned to controller.', data);
            //})
            //.catch(function(err) {
            //    console.log('catch.', err);
            //})
            //.finally(function(f) {
            //    console.log('fianlly.', f);
            //});
    };
        
    vm.getAlbums();
}]);

// app.factory('MainService', ['$http', '$q', function ($http, $q) {

//app.factory('MainService_return_promise', ['$http', '$q', function ($http, $q) {
app.factory('MainService', ['$http', '$q', '$timeout', function ($http, $q, $timeout) {
    // interface
    var service = {
        getAlbums: getAlbums
    };
    return service;



    // implementation
    function getAlbums() {
        var def = $q.defer();

        var progress = 0;

        var reportProgress = function (data) {
            progress = progress + 10;
            def.notify(progress);
            if (progress < 100) {
                $timeout(function() {
                    reportProgress(data);
                }, 1000);
            } else {
                def.resolve(data);
            }
        };

       // def.notify(['cached', 'value', 'haha ha']);
        def.notify(0);

        $http.get("olympicWinners.json")
            .success(function (data) {
                reportProgress(data);
            })
            .error(function (error) {
                def.reject(error);
            });

        return def.promise;
    }
}]);

//app.factory('MainService', ['$http', '$q', function ($http, $q) {
app.factory('MainService_return_http', ['$http', '$q', function ($http, $q) {
    // interface
    var service = {
        albums: [],
        getAlbums: getAlbums
    };
    return service;

    // implementation
    function getAlbums() {

        return $http.get("olympicWinners.json")
            .success(function(data) {
                service.albums = data;
            });
    }
}]);