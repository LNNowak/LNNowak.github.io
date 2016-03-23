"use strict";

var app = angular.module("lnnowak.colorsConverter", []);

app
    .controller("converterCtrl", ["$scope", function ($scope) {
        $scope.colors = {
            rgb: "rgb(0,0,0)",
            hex: "#000000"
        };

        $scope.rgbToHex = function(r, g, b) {
            return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
        };

        $scope.hexToRgb = function(hex) {
            var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
            hex = hex.replace(shorthandRegex, function (m, r, g, b) {
                return r + r + g + g + b + b;
            });

            var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
            return result ? {
                r: parseInt(result[1], 16),
                g: parseInt(result[2], 16),
                b: parseInt(result[3], 16)
            } : null;
        };

        $scope.rgbStringToHex = function(str) {
            var splitResult = str.slice(0, -1).split("(")[1].split(",");
            return $scope.rgbToHex(parseInt(splitResult[0]), parseInt(splitResult[1]), parseInt(splitResult[2]));
        };

        $scope.hexStringToRgbString = function(str) {
            var temp = $scope.hexToRgb(str);
            return "rgb(" + temp.r + "," + temp.g + "," + temp.b + ")";
        };

        $scope.rgbOnChange = function() {
            $scope.colors.hex = $scope.rgbStringToHex($scope.colors.rgb);
        };

        $scope.hexOnChange = function() {
            $scope.colors.rgb = $scope.hexStringToRgbString($scope.colors.hex);
        };
    }]);