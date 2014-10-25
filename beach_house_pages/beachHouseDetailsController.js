/**
 * Created by HSO on 10/24/14.
 */
(function(){
    "use strict";

    angular.module("beachHouse")
        .controller("beachHouseDetailsController",beachHouseDetailsController);

    function beachHouseDetailsController(home){
        var vm = this;

        vm.house = home;
        vm.title = " TEST TITLE";

    }

}());