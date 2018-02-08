angular.module('app').
controller('weeklyinfoCtrl', ["$scope", "$state", "$stateParams", "$rootScope", "AuthService", "$http",
    function($scope, $state, $stateParams, $rootScope, AuthService, $http) {
        $scope.day = $stateParams.day;
        console.log($scope.day);
        console.log($stateParams.day);

    }
]);