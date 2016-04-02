/// <reference path="../../Scripts/typings/angularjs/angular.d.ts"   />
var Commons;
(function (Commons) {
    var RgbColors = (function () {
        function RgbColors(red, green, blue) {
            this.red = red;
            this.green = green;
            this.blue = blue;
        }
        RgbColors.prototype.detruct = function () {
            this.red = null;
            this.green = null;
            this.blue = null;
        };
        return RgbColors;
    }());
    Commons.RgbColors = RgbColors;
    var ColorsString = (function () {
        function ColorsString(hex, rgb) {
            this.hex = hex;
            this.rgb = rgb;
        }
        ColorsString.prototype.destructor = function () {
            this.hex = "";
            this.rgb = "";
        };
        return ColorsString;
    }());
    Commons.ColorsString = ColorsString;
})(Commons || (Commons = {}));
