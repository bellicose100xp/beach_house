/**
 * Created by HSO on 10/21/14.
 */
(function () {
    'use strict';

    var app = angular.module("beachHouse", ["common.services","beachHouseResourceMock","ui.router"]);

    app.controller("mainController", mainController);

    function mainController(beachHouseResource) {
        var homes = this;

        beachHouseResource.query(function(data){
            homes.list = data;
        });

        homes.showButtons = true;

        homes.hideButtons = function(){
            homes.showButtons = !homes.showButtons;
            return homes.showButtons;
        };

        homes.title = "Master Beach House List";
    }

    app.config(function($stateProvider,$urlRouterProvider){

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home',{
                url: '/',
                templateUrl: 'beach_house_pages/main.html',
            })
            /*
            .state('beachHousePages',{
                url: '/:pageId',
                templateUrl: function($stateParams){
                    return 'beach_house_pages/' + $stateParams.pageId + '.html';
                }

            })*/
            .state('beachHousePages',{
                url:'/:pageId',
                templateUrl: 'beach_house_pages/houseDetailView.html',
                Controller: "beachHouseDetailController as vm",
                resolve: {
                    beachHouseResource: "beachHouseResource", //why?
                    home: function (beachHouseResource, $stateParams) {
                        var pageId = $stateParams.pageId;
                        return beachHouseResource.get({pageId:pageId}).$promise;
                    }
                }

            })

    });

}());