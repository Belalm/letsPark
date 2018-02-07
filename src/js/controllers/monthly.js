angular.module('app').
controller('monthlyCtrl', ["$scope", "$state", "$stateParams", "$rootScope", "AuthService", "$http",
    function($scope, $state, $stateParams, $rootScope, AuthService, $http) {

        $scope.labels = {
            "January": {
                "Av. Number of people waiting": "30",
                "Av waiting time": "5mins",
                "Status": "Very Good"
            },
            "February": {
                "Av. Number of people waiting": "80",
                "Av waiting time": "30mins ",
                "Status": "Fair"
            },
            "March": {
                "Av. Number of people waiting": "100",
                "Av waiting time": "45mins ",
                "Status": "Disaster"
            },
            "April": {
                "Av. Number of people waiting": "40",
                "Av waiting time": "10mins ",
                "Status": "Good"
            },
            "May": {
                "Av. Number of people waiting": "40",
                "Av waiting time": "7mins ",
                "Status": "Good"
            },
            "June": {
                "Av. Number of people waiting": "30",
                "Av waiting time": "7mins ",
                "Status": "Very Good"
            },
            "July": {
                "Av. Number of people waiting": "110",
                "Av waiting time": "50mins ",
                "Status": "Disaster"
            },
            "August": {
                "Av. Number of people waiting": "110",
                "Av waiting time": "50mins ",
                "Status": "Disaster"
            },
            "September": {
                "Av. Number of people waiting": "70",
                "Av waiting time": "35mins ",
                "Status": "Fair"
            },
            "October": {
                "Av. Number of people waiting": "100",
                "Av waiting time": "45mins",
                "Status": "Disaster"
            },
            "November": {
                "Av. Number of people waiting": "97",
                "Av waiting time": "45mins ",
                "Status": "Disaster"
            },
            "December": {
                "Av. Number of people waiting": "32",
                "Av waiting time": "3mins",
                "Status": "Very Good"
            }
        }

        console.log($scope.labels);

    }
]);