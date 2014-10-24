/**
 * Created by HSO on 10/21/14.
 */
(function () {
    'use strict';

    var app = angular.module("beachHouse", ["ui.router"]);

    app.controller("mainController", function () {
        var homes = this;
        homes.showButtons = true;

        homes.hideButtons = function(){
          homes.showButtons = !homes.showButtons;
            return homes.showButtons;
        };

        homes.list = [
            {
                "name": "20300 Pacific Coast Highway",
                "pageId": "20300",
                "ourWebsite": "http://rentalhomebyowners.com/20300pch.html",
                "vrbo": "http://www.vrbo.com/412480",
                "airBnB": "https://www.airbnb.com/rooms/4033105"
            },
            {
                "name": "21010 Pacific Coast Highway",
                "pageId": "21010",
                "ourWebsite": "http://rentalhomebyowners.com/21010pch.html",
                "vrbo": "http://www.vrbo.com/602697",
                "airBnB": "https://www.airbnb.com/rooms/4033263"
            },
            {
                "name": "26050 Pacific Coast Highway",
                "pageId": "26050",
                "ourWebsite": "http://rentalhomebyowners.com/20300pch.html",
                "vrbo": "http://www.vrbo.com/403097",
                "airBnB": "https://www.airbnb.com/rooms/4235156"
            }
        ];

        homes.title = "Master Beach House List";
    });

    app.config(function($stateProvider,$urlRouterProvider){

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home',{
                url: '/',
                templateUrl: 'main.html'
            })
            .state('20300',{
                url: '/20300',
                templateUrl: '20300.html'
            })

    });

}());