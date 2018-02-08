angular.module('app').
controller('registerCtrl', ["$scope", "$state", "$stateParams", "$rootScope", "AuthService", "$http",
    function($scope, $state, $stateParams, $rootScope, AuthService, $http) {
        $scope.user = {};

        $scope.confirmPassword = "";

        function register() {
            $scope.user.isAdmin = false;
            console.log($scope.user);
            if ($scope.user.password === $scope.confirmPassword) {
                $http.post('http://13.84.129.102:3000/api/users', JSON.stringify($scope.user))
                    .then(function(res) {
                        if (res.data.password === $scope.user.password) {
                            if (!res.data.isAdmin) {

                                AuthService.saveCurrentUser($scope.user.username, false);
                                $scope.setCurrentUser($scope.user, false);

                                $state.go('app.chooseParking');
                            } else if (res.data.isAdmin) {
                                AuthService.saveCurrentUser($scope.user.username, true);
                                $scope.setCurrentUser($scope.user, true);

                                $state.go('app.right_now');
                            }
                        }


                    });
            }
        }

        $scope.register = function() {
            register();
        };

        $scope.login = function() {
            $state.go('appSimple.login');
        }
    }
]);