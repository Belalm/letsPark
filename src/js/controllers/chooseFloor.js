angular.module('app').
controller('chooseFloorCtrl', ["$scope", "$state", "$stateParams",
    function($scope, $state, $stateParams) {
        $scope.location = $stateParams.location;

        $scope.leftSpots = {
            "first": 10,
            "second": 10
        };

        $scope.floorChosen = function(floor) {
            $state.go('app.chooseParking.floor.map', { floor: floor, location: $scope.location });
        };
    }
]);