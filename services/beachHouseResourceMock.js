/**
 * Created by HSO on 10/24/14.
 */
(function(){
    "use strict";

    var app = angular.module("beachHouseResourceMock",["ngMockE2E"]);

    app.run(function($httpBackend){

        var homes = [
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

    var homeUrl = "/api/beachHouse";

    $httpBackend.whenGET(homeUrl).respond(homes);

    $httpBackend.whenGET(homeUrl + '/20300').respond(homes[0]);
    $httpBackend.whenGET(homeUrl + '/26050').respond(homes[2]);



    // links here will not be processed by the $httpBackend service
    $httpBackend.whenGET(/beach_house_pages/).passThrough();


    });

}());