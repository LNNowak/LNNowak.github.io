/// <reference path="../../Scripts/typings/angularjs/angular.d.ts"   />
/// <reference path="../../TypeScript/Commons/Commons.ts"   />
module app {
    "use strict";
    import ColorsString = Commons.ColorsString;


    export interface IColorConverterCtrl extends ng.IScope {
        Colors: ColorsString;
        rgbToHex(red: number, green: number, blue: number): string;
        hexToRgb(HEX: string): any;
        rgbStringToHex(rgbStr: string): string;
        hexStringToRgbString(hexStr: string): string;

    }

    export class ColorConverterCtrl {
        static $inject = ['$scope'];

        constructor($scope: IColorConverterCtrl) {
            $scope.Colors = new ColorsString("#000000", "rgb(0,0,0)");

            $scope.rgbToHex = (red, green, blue) =>{
                return "#" + ((1 << 24) + (red << 16) + (green << 8) + blue).toString(16).slice(1);
            }

            $scope.hexToRgb = (hex) => {
                var shorthandRegex: RegExp = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
                hex = hex.replace(shorthandRegex, function (m, r, g, b) {
                    return r + r + g + g + b + b;
                });

                var result: RegExpExecArray = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
                return result ? {
                    r: parseInt(result[1], 16),
                    g: parseInt(result[2], 16),
                    b: parseInt(result[3], 16)
                } : null;
            };

            $scope.rgbStringToHex = (str) => {
                var splitResult: Array<string> = str.slice(0, -1).split("(")[1].split(",");
                return $scope.rgbToHex(parseInt(splitResult[0]), parseInt(splitResult[1]), parseInt(splitResult[2]));
            };

            $scope.hexStringToRgbString = (str) =>  {
                var temp : any = $scope.hexToRgb(str);
                return "rgb(" + temp.r + "," + temp.g + "," + temp.b + ")";
            };

            $scope.$watch(() => { return $scope.Colors.RGB }, (newValue, oldValue) => {
                if (newValue !== oldValue) {
                    $scope.Colors.HEX = $scope.rgbStringToHex($scope.Colors.RGB);
                }
            });

            $scope.$watch(() => { return $scope.Colors.HEX }, (newValue, oldValue) => {
                if (newValue !== oldValue) {
                    $scope.Colors.RGB = $scope.hexStringToRgbString($scope.Colors.HEX);
                }
            });

        }
    }


    angular
        .module('lnnowak.ColorsConverter', [])
        .controller('ConverterCtrl', ColorConverterCtrl)
        ;


};
