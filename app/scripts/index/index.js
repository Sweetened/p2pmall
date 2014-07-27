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
