var app = angular.module('myApp', []);
app.controller('hotController', function ($scope, $http, $location) {
    var baseUrl = "http://" + $location.host() + ":" + $location.port();
    $http.get(baseUrl + '/rest/invests').success(function (data) {
        $scope.hotInvests = data;
    });
    $http.get(baseUrl + '/rest/loans').success(function (data) {
        $scope.hotLoans = data;
    });

});