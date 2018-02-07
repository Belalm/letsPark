angular.module('app').
controller('loginCtrl', ["$scope", "$state", "$stateParams", "$rootScope", "AuthService", "$http",
    function($scope, $state, $stateParams, $rootScope, AuthService, $http) {
        $scope.user = {};

        $scope.login = function() {

            $http.get('http://13.84.129.102:3000/api/users?username=' + $scope.user.username)
                .then(function(res) {
                    if (res.data.length) {
                        if (res.data[0].password === $scope.user.password) {
                            if (!res.data[0].isAdmin) {

                                AuthService.saveCurrentUser($scope.user.username, false);
                                $scope.setCurrentUser($scope.user, false);

                                $state.go('app.chooseParking');
                            } else if (res.data[0].isAdmin) {
                                AuthService.saveCurrentUser($scope.user.username, true);
                                $scope.setCurrentUser($scope.user, true);

                                $state.go('app.right_now');
                            }
                        }
                    }

                });
        };

        $scope.register = function(params) {
            $state.go('appSimple.register')
        }
    }
]);