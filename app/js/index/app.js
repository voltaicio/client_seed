"use strict";


angular.module("index", [
    "ui.router"
])


//
.config(["$stateProvider", function($stateProvider) {
    $stateProvider
        .state("index", {
            authenticate: true,
            controller: "IndexCtrl",
            templateUrl: "js/index/views/_index.html",
            title: "Index",
            url: "/"
        });
}])


//
.controller("IndexCtrl", ["$scope", function($scope) {

}]);
