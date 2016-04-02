/// <reference path="../../Scripts/typings/angularjs/angular.d.ts"   />
/// <reference path="../../TypeScript/Commons/Commons.ts"   />
var app;
(function (app) {
    "use strict";
    var RGBColors = Commons.RgbColors;
    var BalanceCtrl = (function () {
        function BalanceCtrl($scope) {
            $scope.colors = new RGBColors(0, 0, 0);
            $scope.newColors = new RGBColors(0, 0, 0);
            $scope.calculateColors = function () {
                var rbDif = ($scope.colors.red - $scope.colors.blue) / 2;
                $scope.newColors.red = $scope.colors.green + rbDif;
                $scope.newColors.blue = $scope.colors.green - rbDif;
                $scope.newColors.green = $scope.colors.green;
            };
            $scope.$watch(function () { return $scope.colors; }, function (newValue, oldValue) {
                if (newValue !== oldValue) {
                    $scope.calculateColors();
                }
            }, true);
        }
        BalanceCtrl.$inject = ["$scope"];
        return BalanceCtrl;
    }());
    app.BalanceCtrl = BalanceCtrl;
    angular
        .module("lnnowak.ColorsBalance", [])
        .controller("BalanceCtrl", BalanceCtrl);
})(app || (app = {}));
;
