angular.module('app').
controller('chooseParkingCtrl', ["$scope", "$state", "$rootScope",
    function($scope, $state, $rootScope) {

        $scope.leftSpots = {
            "indoor": 20,
            "outdoor": 100
        };

        $scope.parkingChosen = function(parking) {
            if (parking === 'Indoor') {
                $state.go('app.chooseParking.floor', { location: parking });
                return;
            }
            $state.go('app.chooseParking.floor.map', { location: parking, floor: "First" });

        }
    }
]);