"use strict";


angular.module("index", [
    "ui.router"
])


.config(function($stateProvider) {
    $stateProvider
        .state("index", {
            controller: "IndexCtrl",
            templateUrl: "js/index/views/_index.html",
            title: "Index",
            url: "/"
        });
})


.controller("IndexCtrl", function($scope) {

});
