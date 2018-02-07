angular.module('app').
controller('yearlyCtrl', ["$scope", "$state", "$stateParams", "$rootScope", "AuthService", "$http",
    function($scope, $state, $stateParams, $rootScope, AuthService, $http) {


        $scope.labels = ['', 'Vacant Spots', 'Unavailable Spots'];
        $scope.dataindoor = [0, 100, 500];
        $scope.dataoutdoor = [0, 10, 390];

        $scope.labelsBar = ['8:00AM', '9:00AM', '10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM', '6:00PM'];
        $scope.seriesBar = ['Capacity', 'Number of users waiting'];

        $scope.dataBar = [
            [500, 820, 900, 1000, 980, 870, 800, 800, 800, 500, 50],
            [10, 20, 40, 20, 86, 2, 0, 0, 0, 0, 0]
        ];

    }
]);