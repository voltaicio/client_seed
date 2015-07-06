"use strict";

angular.module("voltaic", [
    // 3rd party
    "ui.router",
    // custom
    "errors",
    "index",
    "messages"
])


.config(["$urlRouterProvider", function($urlRouterProvider) {
    $urlRouterProvider.when("", "/");
    $urlRouterProvider.otherwise("/404");
}])


.controller("AppCtrl", ["$scope", function($scope) {

}])


.run(["$rootScope", function($rootScope) {
    $rootScope.$on(
            "$stateChangeStart",
            function(evt, toState, toParams, fromState, fromParams) {
        $rootScope.title = toState.title ? toState.title : "Voltaic";
    });
}]);
