"use strict";


angular.module("errors", [
    "ui.router"
])


.config(function($stateProvider) {
    $stateProvider
        .state("404", {
            templateUrl: "js/errors/views/_404.html",
            title: "404 Error",
            url: "/404"
        });
});
