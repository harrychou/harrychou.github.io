angular.module("myApp", [])
.run(['$rootScope', function ($rootScope) {
    console.log('app initialization');
    $rootScope.test = 'Harry is Awes';
    $rootScope.$watch('test', function (newValue, oldValue) {
        console.log('value of test changed from ' + oldValue + ' to ' + newValue);
        if (newValue && newValue.length > 15) {
            $rootScope.test = oldValue;
        }
    });
}]);

// if no  ng-strict-di
//.run(function ($rootScope) {
//    console.log('app initialization');
//    $rootScope.test = 'Harry Chou 223';
//});
