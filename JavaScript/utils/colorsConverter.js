/// <reference path="../../Scripts/typings/angularjs/angular.d.ts"   />
/// <reference path="../../TypeScript/Commons/Commons.ts"   />
var app;
(function (app) {
    "use strict";
    var ColorsString = Commons.ColorsString;
    var ColorConverterCtrl = (function () {
        function ColorConverterCtrl($scope) {
            $scope.colors = new ColorsString("#000000", "rgb(0,0,0)");
            $scope.rgbToHex = function (red, green, blue) {
                return "#" + ((1 << 24) + (red << 16) + (green << 8) + blue).toString(16).slice(1);
            };
            $scope.hexToRgb = function (hex) {
                var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
                hex = hex.replace(shorthandRegex, function (m, r, g, b) { return (r + r + g + g + b + b); });
                var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
                return result ? {
                    r: parseInt(result[1], 16),
                    g: parseInt(result[2], 16),
                    b: parseInt(result[3], 16)
                } : null;
            };
            $scope.rgbStringToHex = function (str) {
                var splitResult = str.slice(0, -1).split("(")[1].split(",");
                return $scope.rgbToHex(parseInt(splitResult[0]), parseInt(splitResult[1]), parseInt(splitResult[2]));
            };
            $scope.hexStringToRgbString = function (str) {
                var temp = $scope.hexToRgb(str);
                return "rgb(" + temp.r + "," + temp.g + "," + temp.b + ")";
            };
            $scope.$watch(function () { return $scope.colors.rgb; }, function (newValue, oldValue) {
                if (newValue !== oldValue) {
                    $scope.colors.hex = $scope.rgbStringToHex($scope.colors.rgb);
                }
            });
            $scope.$watch(function () { return $scope.colors.hex; }, function (newValue, oldValue) {
                if (newValue !== oldValue) {
                    $scope.colors.rgb = $scope.hexStringToRgbString($scope.colors.hex);
                }
            });
        }
        ColorConverterCtrl.$inject = ["$scope"];
        return ColorConverterCtrl;
    }());
    app.ColorConverterCtrl = ColorConverterCtrl;
    angular
        .module("lnnowak.ColorsConverter", [])
        .controller("ConverterCtrl", ColorConverterCtrl);
})(app || (app = {}));
;
