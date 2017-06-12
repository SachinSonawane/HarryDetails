/**
 * Created by SACHIN on 12-Jun-17.
 */
var app = angular.module('app', []);

app.controller('mainController', function($scope, responseService) {
    $scope.displayData = {};
    var displayResponse = function(data) {
        $scope.displayData = data.profile;
    };
    responseService.getResponse(displayResponse);

    $scope.order = 'order';

    $scope.orderAscending = function() {
        $scope.order = 'name';
    }
    $scope.orderDescending = function() {
        $scope.order = '-name';
    }

    $scope.dropdownList = ['current', 'savings', 'deposits', 'cards', 'loans']

});

app.factory('responseService', function($http) {
    return {
        getResponse: function(displayResponse) {
            $http.get('harryData.json').then(function(response) {
                displayResponse(response.data);
            }, function(error) {
                console.log("No response found ",error);
            })
        }
    }
});

app.filter('filterData', function(){
    return function(data){
        var returnData = [];
        angular.forEach(data, function(value, index){
            angular.forEach(value, function(val, ind){
                angular.forEach(val, function(v, i){
                    returnData.push(v)
                });
            });
        });
        return returnData;
    }
});