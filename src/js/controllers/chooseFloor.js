angular.module('app').
controller('chooseFloorCtrl', ["$scope", "$state", "$stateParams",
    function($scope, $state, $stateParams) {

        var parkings = {
            I: 2,
            O: 1
        }

        $scope.location = $stateParams.location;
        console.log(location);

    }
]);