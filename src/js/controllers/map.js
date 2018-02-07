angular.module('app').
controller('mapCtrl', ["$scope", "$state", "$stateParams", "$http",
    function($scope, $state, $stateParams, $http) {

        $scope.location = $stateParams.location;
        $scope.floor = $stateParams.floor;

        $scope.navDirection = {
            row: null,
            col: null
        };

        $scope.parkedLocation = {
            row: null,
            col: null,
            id: null
        };

        var previousPopup = {
            row: null,
            col: null
        }
        getParkedSpot();

        $scope.spots = { Indoor: { First: { "1": { "1": false, "2": false, "3": false, "4": false, "5": false, "6": false, "7": false, "8": false, "9": false, "10": false, "11": false, "12": false, "13": false, "14": false, "15": false, "16": false, "17": false, "18": false, "19": false, "20": false, "21": false, "22": false, "23": false, "24": false, "25": false, "26": false, "27": false, "28": false, "29": false, "30": false }, "2": { "1": false, "2": false, "3": false, "4": false, "5": false, "6": false, "7": false, "8": false, "9": false, "10": false, "11": false, "12": false, "13": false, "14": false, "15": false, "16": false, "17": false, "18": false, "19": false, "20": false, "21": false, "22": false, "23": false, "24": false, "25": false, "26": false, "27": false, "28": false, "29": false, "30": false }, "3": { "1": false, "2": false, "3": false, "4": false, "5": false, "6": false, "7": false, "8": false, "9": false, "10": false, "11": false, "12": false, "13": false, "14": false, "15": false, "16": false, "17": false, "18": false, "19": false, "20": false, "21": false, "22": false, "23": false, "24": false, "25": false, "26": false, "27": false, "28": false, "29": false, "30": false }, "4": { "1": false, "2": false, "3": false, "4": false, "5": false, "6": false, "7": false, "8": false, "9": false, "10": false, "11": false, "12": false, "13": false, "14": false, "15": false, "16": false, "17": false, "18": false, "19": false, "20": false, "21": false, "22": false, "23": false, "24": false, "25": false, "26": false, "27": false, "28": false, "29": false, "30": false }, "5": { "1": false, "2": false, "3": false, "4": false, "5": false, "6": false, "7": false, "8": false, "9": false, "10": false, "11": false, "12": false, "13": false, "14": false, "15": false, "16": false, "17": false, "18": false, "19": false, "20": false, "21": false, "22": false, "23": false, "24": false, "25": false, "26": false, "27": false, "28": false, "29": false, "30": false }, "6": { "1": false, "2": false, "3": false, "4": false, "5": false, "6": false, "7": false, "8": false, "9": false, "10": false, "11": false, "12": false, "13": false, "14": false, "15": false, "16": false, "17": false, "18": false, "19": false, "20": false, "21": false, "22": false, "23": false, "24": false, "25": false, "26": false, "27": false, "28": false, "29": false, "30": false }, "7": { "1": false, "2": false, "3": false, "4": false, "5": false, "6": false, "7": false, "8": false, "9": false, "10": false, "11": false, "12": false, "13": false, "14": false, "15": false, "16": false, "17": false, "18": false, "19": false, "20": false, "21": false, "22": false, "23": false, "24": false, "25": false, "26": false, "27": false, "28": false, "29": false, "30": false }, "8": { "1": false, "2": false, "3": false, "4": false, "5": false, "6": false, "7": false, "8": false, "9": false, "10": false, "11": false, "12": false, "13": false, "14": false, "15": false, "16": false, "17": false, "18": false, "19": false, "20": false, "21": false, "22": false, "23": false, "24": false, "25": false, "26": false, "27": false, "28": false, "29": false, "30": false }, "9": { "1": false, "2": false, "3": false, "4": false, "5": false, "6": false, "7": false, "8": false, "9": false, "10": false, "11": false, "12": false, "13": false, "14": false, "15": false, "16": false, "17": false, "18": false, "19": false, "20": false, "21": false, "22": false, "23": false, "24": false, "25": false, "26": false, "27": false, "28": false, "29": false, "30": false }, "10": { "1": false, "2": false, "3": false, "4": false, "5": false, "6": false, "7": false, "8": false, "9": false, "10": false, "11": false, "12": false, "13": false, "14": false, "15": false, "16": false, "17": false, "18": false, "19": false, "20": false, "21": false, "22": false, "23": false, "24": false, "25": false, "26": false, "27": false, "28": false, "29": false, "30": false } }, Second: { "1": { "1": false, "2": false, "3": false, "4": false, "5": false, "6": false, "7": false, "8": false, "9": false, "10": false, "11": false, "12": false, "13": false, "14": false, "15": false, "16": false, "17": false, "18": false, "19": false, "20": false, "21": false, "22": false, "23": false, "24": false, "25": false, "26": false, "27": false, "28": false, "29": false, "30": false }, "2": { "1": false, "2": false, "3": false, "4": false, "5": false, "6": false, "7": false, "8": false, "9": false, "10": false, "11": false, "12": false, "13": false, "14": false, "15": false, "16": false, "17": false, "18": false, "19": false, "20": false, "21": false, "22": false, "23": false, "24": false, "25": false, "26": false, "27": false, "28": false, "29": false, "30": false }, "3": { "1": false, "2": false, "3": false, "4": false, "5": false, "6": false, "7": false, "8": false, "9": false, "10": false, "11": false, "12": false, "13": false, "14": false, "15": false, "16": false, "17": false, "18": false, "19": false, "20": false, "21": false, "22": false, "23": false, "24": false, "25": false, "26": false, "27": false, "28": false, "29": false, "30": false }, "4": { "1": false, "2": false, "3": false, "4": false, "5": false, "6": false, "7": false, "8": false, "9": false, "10": false, "11": false, "12": false, "13": false, "14": false, "15": false, "16": false, "17": false, "18": false, "19": false, "20": false, "21": false, "22": false, "23": false, "24": false, "25": false, "26": false, "27": false, "28": false, "29": false, "30": false }, "5": { "1": false, "2": false, "3": false, "4": false, "5": false, "6": false, "7": false, "8": false, "9": false, "10": false, "11": false, "12": false, "13": false, "14": false, "15": false, "16": false, "17": false, "18": false, "19": false, "20": false, "21": false, "22": false, "23": false, "24": false, "25": false, "26": false, "27": false, "28": false, "29": false, "30": false }, "6": { "1": false, "2": false, "3": false, "4": false, "5": false, "6": false, "7": false, "8": false, "9": false, "10": false, "11": false, "12": false, "13": false, "14": false, "15": false, "16": false, "17": false, "18": false, "19": false, "20": false, "21": false, "22": false, "23": false, "24": false, "25": false, "26": false, "27": false, "28": false, "29": false, "30": false }, "7": { "1": false, "2": false, "3": false, "4": false, "5": false, "6": false, "7": false, "8": false, "9": false, "10": false, "11": false, "12": false, "13": false, "14": false, "15": false, "16": false, "17": false, "18": false, "19": false, "20": false, "21": false, "22": false, "23": false, "24": false, "25": false, "26": false, "27": false, "28": false, "29": false, "30": false }, "8": { "1": false, "2": false, "3": false, "4": false, "5": false, "6": false, "7": false, "8": false, "9": false, "10": false, "11": false, "12": false, "13": false, "14": false, "15": false, "16": false, "17": false, "18": false, "19": false, "20": false, "21": false, "22": false, "23": false, "24": false, "25": false, "26": false, "27": false, "28": false, "29": false, "30": false }, "9": { "1": false, "2": false, "3": false, "4": false, "5": false, "6": false, "7": false, "8": false, "9": false, "10": false, "11": false, "12": false, "13": false, "14": false, "15": false, "16": false, "17": false, "18": false, "19": false, "20": false, "21": false, "22": false, "23": false, "24": false, "25": false, "26": false, "27": false, "28": false, "29": false, "30": false }, "10": { "1": false, "2": false, "3": false, "4": false, "5": false, "6": false, "7": false, "8": false, "9": false, "10": false, "11": false, "12": false, "13": false, "14": false, "15": false, "16": false, "17": false, "18": false, "19": false, "20": false, "21": false, "22": false, "23": false, "24": false, "25": false, "26": false, "27": false, "28": false, "29": false, "30": false } } }, Outdoor: { First: { "1": { "1": false, "2": false, "3": false, "4": false, "5": false, "6": false, "7": false, "8": false, "9": false, "10": false, "11": false, "12": false, "13": false, "14": false, "15": false, "16": false, "17": false, "18": false, "19": false, "20": false, }, "2": { "1": false, "2": false, "3": false, "4": false, "5": false, "6": false, "7": false, "8": false, "9": false, "10": false, "11": false, "12": false, "13": false, "14": false, "15": false, "16": false, "17": false, "18": false, "19": false, "20": false, }, "3": { "1": false, "2": false, "3": false, "4": false, "5": false, "6": false, "7": false, "8": false, "9": false, "10": false, "11": false, "12": false, "13": false, "14": false, "15": false, "16": false, "17": false, "18": false, "19": false, "20": false, }, "4": { "1": false, "2": false, "3": false, "4": false, "5": false, "6": false, "7": false, "8": false, "9": false, "10": false, "11": false, "12": false, "13": false, "14": false, "15": false, "16": false, "17": false, "18": false, "19": false, "20": false, }, "5": { "1": false, "2": false, "3": false, "4": false, "5": false, "6": false, "7": false, "8": false, "9": false, "10": false, "11": false, "12": false, "13": false, "14": false, "15": false, "16": false, "17": false, "18": false, "19": false, "20": false, }, "6": { "1": false, "2": false, "3": false, "4": false, "5": false, "6": false, "7": false, "8": false, "9": false, "10": false, "11": false, "12": false, "13": false, "14": false, "15": false, "16": false, "17": false, "18": false, "19": false, "20": false, }, "7": { "1": false, "2": false, "3": false, "4": false, "5": false, "6": false, "7": false, "8": false, "9": false, "10": false, "11": false, "12": false, "13": false, "14": false, "15": false, "16": false, "17": false, "18": false, "19": false, "20": false, }, "8": { "1": false, "2": false, "3": false, "4": false, "5": false, "6": false, "7": false, "8": false, "9": false, "10": false, "11": false, "12": false, "13": false, "14": false, "15": false, "16": false, "17": false, "18": false, "19": false, "20": false, }, "9": { "1": false, "2": false, "3": false, "4": false, "5": false, "6": false, "7": false, "8": false, "9": false, "10": false, "11": false, "12": false, "13": false, "14": false, "15": false, "16": false, "17": false, "18": false, "19": false, "20": false, }, "10": { "1": false, "2": false, "3": false, "4": false, "5": false, "6": false, "7": false, "8": false, "9": false, "10": false, "11": false, "12": false, "13": false, "14": false, "15": false, "16": false, "17": false, "18": false, "19": false, "20": false, }, "11": { "1": false, "2": false, "3": false, "4": false, "5": false, "6": false, "7": false, "8": false, "9": false, "10": false, "11": false, "12": false, "13": false, "14": false, "15": false, "16": false, "17": false, "18": false, "19": false, "20": false, }, "12": { "1": false, "2": false, "3": false, "4": false, "5": false, "6": false, "7": false, "8": false, "9": false, "10": false, "11": false, "12": false, "13": false, "14": false, "15": false, "16": false, "17": false, "18": false, "19": false, "20": false, }, "13": { "1": false, "2": false, "3": false, "4": false, "5": false, "6": false, "7": false, "8": false, "9": false, "10": false, "11": false, "12": false, "13": false, "14": false, "15": false, "16": false, "17": false, "18": false, "19": false, "20": false, }, "14": { "1": false, "2": false, "3": false, "4": false, "5": false, "6": false, "7": false, "8": false, "9": false, "10": false, "11": false, "12": false, "13": false, "14": false, "15": false, "16": false, "17": false, "18": false, "19": false, "20": false, }, "15": { "1": false, "2": false, "3": false, "4": false, "5": false, "6": false, "7": false, "8": false, "9": false, "10": false, "11": false, "12": false, "13": false, "14": false, "15": false, "16": false, "17": false, "18": false, "19": false, "20": false, }, "16": { "1": false, "2": false, "3": false, "4": false, "5": false, "6": false, "7": false, "8": false, "9": false, "10": false, "11": false, "12": false, "13": false, "14": false, "15": false, "16": false, "17": false, "18": false, "19": false, "20": false, }, "17": { "1": false, "2": false, "3": false, "4": false, "5": false, "6": false, "7": false, "8": false, "9": false, "10": false, "11": false, "12": false, "13": false, "14": false, "15": false, "16": false, "17": false, "18": false, "19": false, "20": false, }, "18": { "1": false, "2": false, "3": false, "4": false, "5": false, "6": false, "7": false, "8": false, "9": false, "10": false, "11": false, "12": false, "13": false, "14": false, "15": false, "16": false, "17": false, "18": false, "19": false, "20": false, }, "19": { "1": false, "2": false, "3": false, "4": false, "5": false, "6": false, "7": false, "8": false, "9": false, "10": false, "11": false, "12": false, "13": false, "14": false, "15": false, "16": false, "17": false, "18": false, "19": false, "20": false, }, "20": { "1": false, "2": false, "3": false, "4": false, "5": false, "6": false, "7": false, "8": false, "9": false, "10": false, "11": false, "12": false, "13": false, "14": false, "15": false, "16": false, "17": false, "18": false, "19": false, "20": false, }, } } };

        $scope.spots.Indoor.First[1][10] = true;
        $scope.spots.Indoor.First[2][10] = true;
        $scope.spots.Indoor.First[5][4] = true;
        $scope.spots.Indoor.First[8][2] = true;
        $scope.spots.Indoor.First[2][12] = true;
        $scope.spots.Indoor.First[1][29] = true;
        $scope.spots.Indoor.First[3][15] = true;

        $scope.spots.Indoor.First[2][2] = true;
        $scope.spots.Indoor.First[3][6] = true;
        $scope.spots.Indoor.First[4][4] = true;
        $scope.spots.Indoor.First[5][5] = true;
        $scope.spots.Indoor.First[6][6] = true;
        $scope.spots.Indoor.First[7][25] = true;
        $scope.spots.Indoor.First[10][30] = true;

        $scope.spots.Indoor.First[5][4] = true;
        $scope.spots.Indoor.First[10][6] = true;
        $scope.spots.Indoor.First[9][20] = true;
        $scope.spots.Indoor.First[8][25] = true;
        $scope.spots.Indoor.First[6][26] = true;
        $scope.spots.Indoor.First[7][20] = true;
        $scope.spots.Indoor.First[6][30] = true;

        $scope.spots.Indoor.First[9][2] = true;
        $scope.spots.Indoor.First[9][6] = true;
        $scope.spots.Indoor.First[8][4] = true;

        $scope.findMeClosest = function() {
            var spot = $scope.spots[$scope.location][$scope.floor];
            for (var i = 0; i < Object.keys(spot).length; i++) {
                for (var j = 0; j < Object.keys(spot[i + 1]).length; j++) {
                    if (spot[i + 1][j]) {
                        if (!$scope.currentUser.isAdmin)
                            return takeMeThere(i, j);
                    }
                }
            }
        };

        function getParkedSpot() {
            $http.get('http://13.84.129.102:3000/api/parked?username=' + $scope.currentUser.username)
                .then(function(res) {
                    if (res.data.length) {
                        $scope.parkedLocation.row = res.data[0].row;
                        $scope.parkedLocation.col = res.data[0].col;
                        $scope.parkedLocation.id = res.data[0].id;
                        $scope.spots[$scope.location][$scope.floor][$scope.parkedLocation.row + 1][$scope.parkedLocation.col] = false;
                    }
                });
        }

        function deleteParkedSpot(id) {
            $http.delete('http://13.84.129.102:3000/api/parked/', id)
                .then(function(res) {});
        }

        function saveParkedSpot(row, col) {
            var data = {
                "username": $scope.currentUser.username,
                "row": row,
                "col": parseInt(col)
            }

            if ($scope.parkedLocation.id) deleteParkedSpot($scope.parkedLocation.id);

            $http.post('http://13.84.129.102:3000/api/parked', data)
                .then(function(res) {
                    getParkedSpot();
                });
        }

        $scope.showPopup = function(row, col) {
            if ($scope.spots[$scope.location][$scope.floor][row + 1][col]) {
                if (previousPopup.row != null) {
                    var prevpopup = document.getElementById("myPopup-" + previousPopup.row + "-" + previousPopup.col);
                    prevpopup.classList.toggle("show");
                    previousPopup.row = null;
                    previousPopup.col = null;
                    return;
                }

                previousPopup.row = row;
                previousPopup.col = col;

                var popup = document.getElementById("myPopup-" + row + "-" + col);
                popup.classList.toggle("show");
            }
            return;
        };

        $scope.confirmReservation = function(row, col) {
            if (!$scope.currentUser.isAdmin) {
                saveParkedSpot(row, col);
                takeMeThere(row, col);
            }
        };

        function takeMeThere(row, col) {
            console.log($scope.spots.Indoor.First[row + 1][col]);
            if ($scope.spots[$scope.location][$scope.floor][row + 1][col]) {
                $scope.navDirection.row = row;
                $scope.navDirection.col = col;
            }
        };

    }
]);