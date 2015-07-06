"use strict";


angular.module("auth", [
    "CFG",
    "ngStorage",
    "ui.router"
])


//
.config(["$stateProvider", function($stateProvider) {
    $stateProvider
        .state("login", {
            controller: "LoginCtrl",
            templateUrl: "js/auth/views/_login.html",
            title: "Login",
            url: "/login"
        })
        .state("logout", {
            controller: "LogoutCtrl",
            templateUrl: "js/auth/views/_logout.html",
            title: "Logout",
            url: "/logout"
        });
}])


//
.constant("AUTH_EVENTS", {
    loggedIn: "auth-logged-in",
    loggedout: "auth-logged-out"
})


//
.controller("LoginCtrl", [
        "$http", "$scope", "$sessionStorage", "$state", "AuthService", "CFG",
        function($http, $scope, $sessionStorage, $state, AuthService, CFG) {

    //
    $scope.login = function() {
        AuthService.login($scope.credentials).then(function(
                data, status, headers, config) {
            // get record for authenticated user
            $http.get(CFG.apiUrl)
                .then(function(response) {
                    $scope.setCurrentUser(response.data);
                    $sessionStorage.user = response.data;
                    $state.go("index");
                });
        }, function() {
            // @todo set error message
        });
    };
}])


//
.controller("LogoutCtrl", ["$scope", "AuthService", function($scope, AuthService) {
    AuthService.logout(); 
    $scope.setCurrentUser(null);
}])


.factory("AuthService", [
        "$http", "$rootScope", "$sessionStorage", "AUTH_EVENTS", "CFG",
        function($http, $rootScope, $sessionStorage, AUTH_EVENTS, CFG) {

    return {

        //
        isAuthenticated: function() {
            return !!$sessionStorage.token && !!$sessionStorage.user;
        },

        //
        login: function(credentials) {
            return $http
                .post(CFG.apiUrl, credentials)
                .success(function(data, status, headers, config) {
                    $sessionStorage.token = data.token;
                    $rootScope.$broadcast(AUTH_EVENTS.loggedIn);
                });
        },

        logout: function() {
            delete $sessionStorage.token;
            $rootScope.$broadcast(AUTH_EVENTS.loggedOut);
        }
    };
}])


.factory("AuthInterceptor", ["$sessionStorage", function($sessionStorage) {
    return {
        request: function(config) {
            config.headers = config.header || {};
            if ($sessionStorage.token) {
                config.headers.Authorization = "JWT " + $sessionStorage.token;
            }
            return config;
        }
    };
}]);
