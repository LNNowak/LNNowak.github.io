/// <reference path="../Scripts/typings/angularjs/angular.d.ts"   />
/// <reference path="../Scripts/typings/angularjs/angular-route.d.ts"   />
/// <reference path="../typings/angular-ui-router/angular-ui-router.d.ts"   />

var modules: Array<string> = [
    "lnnowak.ColorsConverter",
    "lnnowak.ColorsBalance"

];
modules.forEach((module) => angular.module(module, []));


modules.push("ui.router");
modules.push('colorpicker.module');

angular.module('LNNowak', modules);
angular.module('LNNowak')
    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider, $locationProvider: ng.ILocationProvider) {

        $urlRouterProvider.otherwise("/home/balance");

        $stateProvider
            .state("lnnowak", {
                abstract : true,
                url: "/home",
                views: {
                    "topPanel": {
                        templateUrl: "partials/topPanel.html"
                    },
                    "bottomPanel": {
                        templateUrl: "partials/bottomPanel.html"
                    }
                }
            })
            .state("lnnowak.colorsBalance", {
                url: "/balance",
                views: {
                    "centralPanel@": {
                        templateUrl: "partials/utils/colorsBalance.html"
                    }
                }
            })
            .state("lnnowak.colorsConverter", {
                url: "/converters",
                views: {
                    "centralPanel@": {
                        templateUrl: "partials/utils/colorsConverter.html"
                    }
                }
            })

    }
    ])

.controller("MainCtrl", ["$rootScope", "$scope", function ($rootScope, $scope) {

}]);