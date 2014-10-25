/**
 * Created by HSO on 10/25/14.
 */

(function () {

angular
    .module("beachHouse")
    .controller("mainController", mainController);

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

}());