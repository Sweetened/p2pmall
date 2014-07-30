'use strict';

app.controller('investController', function ($scope, $http, $location) {
    var baseUrl = "http://" + $location.host() + ":" + $location.port();
    
    $scope.checked = function (condition,value){
    	$("#invest-list-filter ."+condition).find(".active").removeClass("active");
    	$("#invest-list-filter ."+condition).find("."+value).addClass("active");
    	$scope[condition] = value;
    	$scope.$watch(condition,function(value){
    		$http({url: baseUrl + "/rest/search/invests"})
    		.success(function (data, status, headers, config) {
        			$scope.invests = data;
    		});
    	});
    }
});