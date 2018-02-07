angular.module('app').
controller('nowCtrl', ["$scope", "$state", "$stateParams", "$rootScope", "AuthService", "$http",
    function($scope, $state, $stateParams, $rootScope, AuthService, $http) {
        // $scope.user = {};

        // $http.get('http://13.84.129.102:3000/api/users')
        //     .then(function(res) {
        //         console.log(res);
        //     });

        // $scope.login = function() {
        //     if ($scope.user.username === 'belalm' && $scope.user.password === 'monajjed') {

        //         AuthService.saveCurrentUser($scope.user.username, false);
        //         $scope.setCurrentUser($scope.user, false);

        //         $state.go('app.chooseParking');
        //     } else if ($scope.user.username === 'admin' && $scope.user.password === 'admin') {
        //         AuthService.saveCurrentUser($scope.user.username, true);
        //         $scope.setCurrentUser($scope.user, true);

        //         $state.go('app.chooseParking');
        //     }
        // };


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