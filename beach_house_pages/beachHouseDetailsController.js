/**
 * Created by HSO on 10/24/14.
 */
(function(){
    "use strict";

    angular.module("beachHouse")
        .controller("beachHouseDetailsController",beachHouseDetailsController);

    function beachHouseDetailsController(house){
        var vm = this;

        vm.house = house;
        vm.title = " TEST TITLE";

    }

}());