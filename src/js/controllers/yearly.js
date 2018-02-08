angular.module('app').
controller('yearlyCtrl', ["$scope", "$state", "$stateParams", "$rootScope", "AuthService", "$http",
    function($scope, $state, $stateParams, $rootScope, AuthService, $http) {

        $scope.labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        $scope.data = [
            [65, 59, 80, 81, 56, 55, 40],
            [28, 48, 40, 19, 86, 27, 90]
        ];
        $scope.seriesBar = ['Average number of users that wait', 'Average time the user waits'];


        $scope.busylabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        $scope.busydata = [4, 11, 11, 8, 8, 6, 4, 4, 10, 9, 10, 15];

        $scope.fulllabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        $scope.fulldata = [9, 20, 20, 17, 17, 11, 9, 9, 20, 18, 20, 25];

        $scope.popularlabels = ['Indoor', 'Outdoor'];
        $scope.populardata = [67, 23];

        $scope.waitinglabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        $scope.waitingdata = [4, 25, 35, 25, 30, 4, 4, 4, 10, 25, 20, 40];

        $scope.userwaitedlabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        $scope.userwaiteddata = [10, 120, 200, 120, 170, 10, 10, 10, 70, 120, 115, 230];

    }
]);