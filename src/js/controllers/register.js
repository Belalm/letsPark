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
                        $state.go('appSimple.login');
                    });
            }
        }

        $scope.register = function() {
            register();
        };
    }
]);