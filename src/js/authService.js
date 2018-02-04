angular
    .module('app')
    .factory('AuthService', ['$state', '$window', '$sessionStorage', '$filter', function($state, $window, $sessionStorage, $filter) {
        var auth = {};

        auth.getUsername = function() {
            return $sessionStorage['username'];
        };

        auth.getPermission = function() {
            return $sessionStorage['isadmin'];
        };

        auth.saveCurrentUser = function(username, isAdmin) {
            $sessionStorage['username'] = username;
            $sessionStorage['isadmin'] = isAdmin;
        };

        auth.getUser = function() {
            var username = auth.getUsername();
            if (username) {
                return { username: auth.getUsername(), isAdmin: auth.getPermission() };
            }
            return null;
        };

        auth.isAuthenticated = function() {
            if (auth.getUsername()) return true;
            return false;
        }

        auth.logout = function() {
            $sessionStorage.$reset();
        };

        return auth;
    }]);