'use strict';

app.controller('investController', function ($scope, $http, $location) {
    var baseUrl = "http://" + $location.host() + ":" + $location.port();
    $http.get(baseUrl + '/rest/hot/invests').success(function (data) {
        $scope.hotInvests = data;
    });
    $http.get(baseUrl + '/rest/hot/loans').success(function (data) {
        $scope.hotLoans = data;
    });
});