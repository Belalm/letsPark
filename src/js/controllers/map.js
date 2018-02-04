angular.module('app').
controller('mapCtrl', ["$scope", "$state", "$stateParams",
    function($scope, $state, $stateParams) {
        $scope.location = $stateParams.location;
        $scope.floor = $stateParams.floor;

        $scope.navDirection = {
            row: null,
            col: null
        };

        var previousPopup = {
            row: null,
            col: null
        }

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

        $scope.parkingChosen = function(parking) {
            $state.go('app.floor', { location: parking });
        };

        $scope.showPopup = function(row, col) {
            if ($scope.spots[$scope.location][$scope.floor][row + 1][col]) {
                if (previousPopup.row) {
                    var prevpopup = document.getElementById("myPopup-" + previousPopup.row + "-" + previousPopup.col);
                    prevpopup.classList.toggle("show");
                }

                previousPopup.row = row;
                previousPopup.col = col;

                var popup = document.getElementById("myPopup-" + row + "-" + col);
                popup.classList.toggle("show");
            }
            return;
        };

        $scope.confirmReservation = function(row, col) {
            takeMeThere(row, col);
        };

        function takeMeThere(row, col) {
            console.log("row: " + row);
            console.log("col: " + col);
            console.log($scope.spots.Indoor.First[row + 1][col]);
            if ($scope.spots[$scope.location][$scope.floor][row + 1][col]) {
                $scope.navDirection.row = row;
                $scope.navDirection.col = col;
            }
        };

    }
]);