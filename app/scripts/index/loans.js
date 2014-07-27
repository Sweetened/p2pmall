'use strict';

app.controller('investController', function ($scope, $http, $location) {
    var baseUrl = "http://" + $location.host() + ":" + $location.port();
    $http({url: baseUrl + "/rest/search/loans", data: user}).success(function (data, status, headers, config) {
        $scope.loans = data;
    });
});