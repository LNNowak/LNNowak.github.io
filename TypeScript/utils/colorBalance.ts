/// <reference path="../../Scripts/typings/angularjs/angular.d.ts"   />
/// <reference path="../../TypeScript/Commons/Commons.ts"   />


module app {
    "use strict";
    import RGBColors = Commons.RGBColors;

    export interface IBalanceCtrl extends ng.IScope {
        colors: RGBColors;
        newColors: RGBColors;
        calculateColors(): void;

    }

    export class BalanceCtrl {
        static $inject = ['$scope'];

        constructor($scope: IBalanceCtrl) {
            $scope.colors = new RGBColors(0, 0, 0);
            $scope.newColors = new RGBColors(0, 0, 0);

            $scope.calculateColors = () => {
                var rbDif: number = ($scope.colors.red - $scope.colors.blue) / 2;

                $scope.newColors.red = $scope.colors.green + rbDif;
                $scope.newColors.blue = $scope.colors.green - rbDif;
                $scope.newColors.green = $scope.colors.green;
            }

            $scope.$watch(() => { return $scope.colors }, (newValue, oldValue) => {
                if (newValue !== oldValue) {
                    $scope.calculateColors();
                }

            }, true);

        }
    }


    angular
        .module('lnnowak.ColorsBalance', [])
        .controller('BalanceCtrl', BalanceCtrl)
        ;


};
