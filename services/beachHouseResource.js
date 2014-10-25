/**
 * Created by HSO on 10/24/14.
 */
(function(){
   "use strict";

    angular
        .module("common.services")
        .factory("beachHouseResource",['$resource',beachHouseResource]);

    function beachHouseResource($resource){
        return $resource("/api/beachHouse/:pageId")
    }

}());