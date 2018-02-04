angular.module('app').
controller('chooseParkingCtrl', ["$scope", "$state", "$rootScope",
    function($scope, $state, $rootScope) {

        $scope.leftSpots = {
            "indoor": 20,
            "outdoor": 100
        };

        $scope.parkingChosen = function(parking) {
            $state.go('app.chooseParking.floor', { location: parking });
        }
    }
]);