// controller.js


angular.module('app')
    .controller('AppCtrl', ['$rootScope', '$window', '$scope', '$state', 'AuthService',
        function($rootScope, $window, $scope, $state, AuthService) {

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
                console.log("In here");
                AuthService.logout();
                $state.go('appSimple.login');
            };

        }
    ]);