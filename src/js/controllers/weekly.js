angular.module('app').
controller('weeklyCtrl', ["$scope", "$state", "$stateParams", "$rootScope", "AuthService", "$http",
    function($scope, $state, $stateParams, $rootScope, AuthService, $http) {

        $scope.labels = {
            "Monday": {
                "Av. Number of people waiting": "30",
                "Av waiting time": "5mins",
                "Status": "Very Good"
            },
            "Tuesday": {
                "Av. Number of people waiting": "80",
                "Av waiting time": "30mins ",
                "Status": "Fair"
            },
            "Wednesday": {
                "Av. Number of people waiting": "100",
                "Av waiting time": "45mins ",
                "Status": "Disaster"
            },
            "Thursday": {
                "Av. Number of people waiting": "40",
                "Av waiting time": "10mins ",
                "Status": "Good"
            },
            "Friday": {
                "Av. Number of people waiting": "40",
                "Av waiting time": "7mins ",
                "Status": "Good"
            }
        }

        $scope.showDayInfo = function(day) {
            $state.go('app.statistics.weekly.info', { day: day });
        };

    }
]);