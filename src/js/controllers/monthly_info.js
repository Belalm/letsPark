angular.module('app').
controller('monthlyinfoCtrl', ["$scope", "$state", "$stateParams", "$rootScope", "AuthService", "$http",
    function($scope, $state, $stateParams, $rootScope, AuthService, $http) {
        $scope.month = $stateParams.month;

        $scope.waitinglabels = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];
        $scope.waitingdata = [4, 25, 35, 25];

    }
]);