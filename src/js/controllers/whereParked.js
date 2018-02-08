angular.module('app').
controller('whereParkedCtrl', ["$scope", "$state", "$stateParams", "$http",
    function($scope, $state, $stateParams, $http) {

        $scope.parkedLocation = {
            row: null,
            col: null
        }

        $scope.message = "";

        getParkedSpot();

        $scope.convertToNumber = function(num) {
            return String.fromCharCode(97 + num);
        }

        function getParkedSpot() {
            $http.get('http://13.84.129.102:3000/api/parked?username=' + $scope.currentUser.username)
                .then(function(res) {
                    if (res.data.length) {
                        $scope.parkedLocation.row = res.data[0].row;
                        $scope.parkedLocation.col = res.data[0].col;
                    }
                });
        }

        $scope.showme = function(params) {
            $state.go('app.chooseParking.floor.map', { location: 'Indoor', floor: 'First' });
        };

        $scope.leaving = function(params) {
            var data = {
                "username": $scope.currentUser.username,
                "row": $scope.parkedLocation.row,
                "col": $scope.parkedLocation.col
            }

            $http.post('http://13.84.129.102:3000/api/leaving', data)
                .then(function(res) {
                    $scope.message = "Great thank you for your input!";
                });
        };

    }
]);