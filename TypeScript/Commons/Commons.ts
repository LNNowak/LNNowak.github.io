/// <reference path="../../Scripts/typings/angularjs/angular.d.ts"   />

module Commons {
    
    export class RGBColors {
        public red: number;
        public green: number;
        public blue: number;

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
        public HEX: string;
        public RGB: string;
        constructor(HEX: string, RGB: string) {
            this.HEX = HEX;
            this.RGB = RGB;
        }

        destructor() {
            this.HEX = "";
            this.RGB = "";
        }
    }
}
