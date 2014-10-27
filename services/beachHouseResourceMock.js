/**
 * Created by HSO on 10/24/14.
 */
(function () {
    "use strict";

    var app = angular.module("beachHouseResourceMock", ["ngMockE2E"]);

    app.run(function ($httpBackend) {

            var homes = [
                {
                    "name": "20300 Pacific Coast Highway",
                    "pageId": "20300",
                    "ourWebsite": "http://rentalhomebyowners.com/20300pch.html",
                    "vrbo": "http://www.vrbo.com/412480",
                    "airBnB": "https://www.airbnb.com/rooms/4033105",
                    "title": "OCEANFRONT BEACH HOUSE THE HEART OF MALIBU",
                    "images": []
                },
                {
                    "name": "21010 Pacific Coast Highway",
                    "pageId": "21010",
                    "ourWebsite": "http://rentalhomebyowners.com/21010pch.html",
                    "vrbo": "http://www.vrbo.com/602697",
                    "airBnB": "https://www.airbnb.com/rooms/4033263",
                    "title": "OCEANFRONT: LARGEST ENTERTAINING DECK ON PRIVATE BEACH",
                    "images": []
                },
                {
                    "name": "26050 Pacific Coast Highway",
                    "pageId": "26050",
                    "ourWebsite": "http://rentalhomebyowners.com/20300pch.html",
                    "vrbo": "http://www.vrbo.com/403097",
                    "airBnB": "https://www.airbnb.com/rooms/4235156",
                    "title": "OCEANFRONT: 6 BEDROOM CELEBRITY STYLED HOME ON PRIVATE BEACH",
                    "images": [
                        {
                            "orderId": 1,
                            "src": "http://rentalhomebyowners.com/images/26050pch_13.jpg"
                        },
                        {
                            "orderId": 2,
                            "src": "http://rentalhomebyowners.com/images/26050pch_09.jpg"
                        },
                        {
                            "orderId": 3,
                            "src": "http://rentalhomebyowners.com/images/26050pch_12.jpg"
                        },
                        {
                            "orderId": 4,
                            "src": "http://rentalhomebyowners.com/images/26050pch_17.jpg"
                        }

                    ]
                }
            ];

            var homeUrl = "/api/beachHouse";

            $httpBackend.whenGET(homeUrl).respond(homes);

            var pattern = new RegExp(homeUrl + "/.{5}", '');

            $httpBackend.whenGET(pattern).respond(function (method, url, data) {
                var home = {"pageId": '00000'}; // define a blank home with pageId blank parameter ??
                var urlSplit = url.split('/');
                var length = urlSplit.length;
                var stringToCheck = urlSplit[length - 1];

                for (var i = 0; i < homes.length; i++) {
                    if (homes[i].pageId == stringToCheck) {
                        home = homes[i];
                        break;
                    }
                }

                return [200, home, {}];

            });

            /*
             $httpBackend.whenGET(homeUrl + '/20300').respond(homes[0]);
             $httpBackend.whenGET(homeUrl + '/21010').respond(homes[1]);
             $httpBackend.whenGET(homeUrl + '/26050').respond(homes[2]);
             */


            // links here will not be processed by the $httpBackend service
            $httpBackend.whenGET(/beach_house_pages/).passThrough();


        }
    )
    ;

}());