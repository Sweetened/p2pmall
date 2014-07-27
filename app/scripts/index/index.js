'use strict';
var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(false).hashPrefix('#');
    $routeProvider
        .when('/home', {templateUrl: '/views/tpl/home.html'})
        .when('/loans', {templateUrl: '/views/tpl/loan.html'})
        .when('/invests', {templateUrl: '/views/tpl/invests.html'})
        .when('/company', {templateUrl: '/views/tpl/company.html'})
        .when('/companyDetail', {templateUrl: '/views/tpl/companyDetail.html'})
        .otherwise({redirectTo: '/home'});
}]);

app.controller('hotController', function ($scope, $http, $location) {
    var baseUrl = "http://" + $location.host() + ":" + $location.port();
    $http.get(baseUrl + '/rest/invests').success(function (data) {
        $scope.hotInvests = data;
    });
    $http.get(baseUrl + '/rest/loans').success(function (data) {
        $scope.hotLoans = data;
    });
});