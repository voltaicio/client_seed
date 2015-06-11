"use strict";

angular.module("voltaic", [
    // 3rd party
    "ui.router",
    // custom
    "errors",
    "index",
    "messages"
])


.config(function($urlRouterProvider) {
    $urlRouterProvider.when("", "/");
    $urlRouterProvider.otherwise("/404");
})


.controller("AppCtrl", function($scope) {

})


.run(function($rootScope) {
    $rootScope.$on(
            "$stateChangeStart",
            function(evt, toState, toParams, fromState, fromParams) {
        $rootScope.title = toState.title ? toState.title : "Voltaic";
    });
});
