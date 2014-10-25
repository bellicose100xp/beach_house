/**
 * Created by HSO on 10/21/14.
 */
(function () {
    'use strict';

    var app = angular.module("beachHouse", ["common.services","beachHouseResourceMock","ui.router"]);

    app.config(function($stateProvider,$urlRouterProvider){

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home',{
                url: '/',
                templateUrl: 'beach_house_pages/main.html',
                Controller: 'mainController as homes'
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
                Controller: 'beachHouseDetailsController',
                resolve: {
                    beachHouseResource: "beachHouseResource", //why?
                    house: function (beachHouseResource, $stateParams) {
                        var pageId = $stateParams.pageId;
                        return beachHouseResource.get({pageId:pageId}).$promise;
                    }
                }

            })

    });

}());