"use strict";

angular.module("LNNowak", [])
    .controller("MainCtrl", ["$rootScope", "$scope", function($rootScope, $scope) {
        $scope.colors = {
            red: 0,
            green: 0,
            blue: 0
        };

        $scope.newColors = {
            red: 0,
            green: 0,
            blue: 0
        };

        $scope.calculateColors = function() {
            var rbDif = ($scope.colors.red - $scope.colors.blue) / 2;

            $scope.newColors.red = $scope.colors.green + rbDif;
            $scope.newColors.blue = $scope.colors.green - rbDif;
            $scope.newColors.green = $scope.colors.green;
        }
    }]);