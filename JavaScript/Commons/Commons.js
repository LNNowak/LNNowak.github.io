/// <reference path="../../Scripts/typings/angularjs/angular.d.ts"   />
var Commons;
(function (Commons) {
    var RGBColors = (function () {
        function RGBColors(red, green, blue) {
            this.red = red;
            this.green = green;
            this.blue = blue;
        }
        RGBColors.prototype.detruct = function () {
            this.red = null;
            this.green = null;
            this.blue = null;
        };
        return RGBColors;
    }());
    Commons.RGBColors = RGBColors;
    var ColorsString = (function () {
        function ColorsString(HEX, RGB) {
            this.HEX = HEX;
            this.RGB = RGB;
        }
        ColorsString.prototype.destructor = function () {
            this.HEX = "";
            this.RGB = "";
        };
        return ColorsString;
    }());
    Commons.ColorsString = ColorsString;
})(Commons || (Commons = {}));
