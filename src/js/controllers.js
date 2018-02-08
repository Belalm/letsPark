// controller.js


angular.module('app')
    .controller('AppCtrl', ['$rootScope', '$window', '$scope', '$state', 'AuthService', '$interval',
        function($rootScope, $window, $scope, $state, AuthService, $interval) {

            var tick = function() {
                $scope.clock = Date.now();
            }
            tick();
            $interval(tick, 1000);

            $scope.currentUser = null;

            // in case user reloads page
            if ($scope.currentUser === null) {
                $scope.currentUser = AuthService.getUser();
            }

            $scope.setCurrentUser = function(user, isAdmin) {
                var curruser = { username: user.username, isAdmin: isAdmin };
                $scope.currentUser = curruser;
            };

            $scope.logout = function() {
                AuthService.logout();
                $state.go('appSimple.login');
            };

            $scope.startTimer = function() {

            };
        }
    ]);