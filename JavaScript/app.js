"use strict";

angular.module("LNNowak", [
    "ui.router",
    "lnnowak.colorsBalance"
])
    .config(["$stateProvider", "$urlRouterProvider", "$locationProvider", function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise("/home/balance");

        $locationProvider.html5Mode(true).hashPrefix('*');

        $stateProvider
            .state("lnnowak", {
                abstract: true,
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
        ;
    }])
    .controller("MainCtrl", ["$rootScope", "$scope", function ($rootScope, $scope) {
        
    }]);