"use strict";


/**
 * @see https://github.com/jmcunningham/angularBPSeed
 */
angular.module("messages", [])


.controller("MessagesCtrl", function(Messages) {
    this.messages = Messages.getMessages();

    //
    this.closeMessage = function(index) {
        Messages.removeMessage(index);
    };
})


.directive("messages", function() {
    return {
        restrict: "EA",
        controllerAs: "messagesCtrl",
        controller: "MessagesCtrl",
        templateUrl: "js/messages/views/_main.html",
        scope: {}
    };
})


.service("Messages", function() {
    var messages = [];

    // adds a message to the list
    this.addMessage = function(message) {
        messages.push(message);
    };

    // returns the messages list
    this.getMessages = function() {
        return messages;
    };

    // removes a message from the list
    this.removeMessage = function(index) {
        messages.splice(index, 1);
    };
});
