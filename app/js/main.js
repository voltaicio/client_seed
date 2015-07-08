"use strict";

angular.module("voltaic", [
    // 3rd party
    "ngStorage",
    "ui.router",
    // custom
    "auth",
    "errors",
    "index",
    "messages"
])


//
.config(["$urlRouterProvider", function($urlRouterProvider) {
    $urlRouterProvider.when("", "/");
    $urlRouterProvider.otherwise("/404");
}])


//
.controller("AppCtrl", [
        "$scope", "$sessionStorage", function($scope, $sessionStorage) {
    
    //
    $scope.setCurrentUser = function(user) {
        $scope.currentUser = user;
    };

    // if user already exists at app startup, add to scope
    if ($sessionStorage.user) {
        $scope.setCurrentUser($sessionStorage.user);
    }
}])


//
.run(["$rootScope", "$state", "AuthService", function($rootScope, $state, AuthService) {
    $rootScope.$on(
            "$stateChangeStart",
            function(evt, toState, toParams, fromState, fromParams) {

        // redirects to login view if authentication is required but missing 
        if (toState.authenticate && !AuthService.isAuthenticated()) {
            evt.preventDefault();
            $state.go("login");
        }

        // sets the page title
        $rootScope.title = toState.title ? toState.title : "Voltaic";
    });
}]);
