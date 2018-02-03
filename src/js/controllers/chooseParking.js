angular.module('app').
controller('chooseParkingCtrl', ["$scope", "$state",
    function($scope, $state) {

        $scope.leftSpots = {
            "indoor": 20,
            "outdoor": 100
        };

        console.log($scope.leftSpots);

        $scope.parkingChosen = function(parking) {
            console.log("Chose Parking " + parking);
            $state.go('app.floor', { location: parking });
        }
    }
]);