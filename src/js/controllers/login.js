angular.module('app').
controller('loginCtrl', ["$scope", "$state", "$stateParams", "$rootScope", "AuthService",
    function($scope, $state, $stateParams, $rootScope, AuthService) {
        $scope.user = {};

        $scope.login = function() {
            if ($scope.user.username === 'belalm' && $scope.user.password === 'monajjed') {

                AuthService.saveCurrentUser($scope.user.username, false);
                $scope.setCurrentUser($scope.user, false);

                $state.go('app.chooseParking');
            } else if ($scope.user.username === 'admin' && $scope.user.password === 'admin') {
                AuthService.saveCurrentUser($scope.user.username, true);
                $scope.setCurrentUser($scope.user, true);

                $state.go('app.chooseParking');
            }
        };
    }
]);