/**
 * Created by HSO on 10/24/14.
 */
(function(){
    "use strict";

    angular.module("beachHouse")
        .controller("beachHouseDetailsController",beachHouseDetailsController);

    function beachHouseDetailsController(promiseObj){
        var vm = this;
        vm.house = promiseObj;
    }

}());