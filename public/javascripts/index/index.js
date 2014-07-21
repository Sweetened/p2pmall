var app = angular.module('myApp', []);
app.controller('hotController', function ($scope) {
    $scope.hotInvests = [
        {name: '富盈人生第14期', company: 'lufax', time: 24, description: '18%', amount: 3000},
        {name: '资金周转', company: 'yooli', time: 18, description: '15%', amount: 50000},
        {name: '天天盈', company: 'renrendai', time: 36, description: '19%', amount: 600000},
        {name: '半年盈', company: 'hepandai', time: 6, description: '14%', amount: 10000},
        {name: '年年盈', company: 'hepandai', time: 12, description: '10%', amount: 120000},
        {name: '好宝宝', company: 'lufax', time: 1, description: '30%', amount: 10000},
        {name: '季季盈', company: 'lufax', time: 3, description: '17.8%', amount: 30000}
    ];
    $scope.hotLoans = [
        {name: '富盈人生第1期', company: 'lufax', time: 24, description: '18%', amount: 3000},
        {name: '天天盈', company: 'renrendai', time: 36, description: '19%', amount: 600000},
        {name: '半年盈', company: 'hepandai', time: 6, description: '14%', amount: 1000},
        {name: '年年盈', company: 'lufax', time: 12, description: '10%', amount: 120000},
        {name: '季季盈', company: 'yooli', time: 3, description: '17.8%', amount: 30000}
    ];
});