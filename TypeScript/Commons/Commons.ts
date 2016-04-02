/// <reference path="../../Scripts/typings/angularjs/angular.d.ts"   />

module Commons {
    
    export class RgbColors {
        red: number;
        green: number;
        blue: number;

        constructor(red: number, green: number, blue: number) {
            this.red = red;
            this.green = green;
            this.blue = blue;
        }

        detruct() {
            this.red = null;
            this.green = null;
            this.blue = null;
        }
    }

    export class ColorsString {
        hex: string;
        rgb: string;
        constructor(hex: string, rgb: string) {
            this.hex = hex;
            this.rgb = rgb;
        }

        destructor() {
            this.hex = "";
            this.rgb = "";
        }
    }
}
