"use strict";


describe("messages", function() {
    var ctrl;

    beforeEach(function() {
        module("messages");
    });

    describe("MessagesCtrl", function() {
        var Messages = {
            getMessages: function() {
                return [];
            },
            removeMessage: jasmine.createSpy(
                "Messages.removeMessage")
        };

        beforeEach(inject(function($rootScope, $controller) {
            ctrl = $controller("MessagesCtrl", {
                "Messages": Messages
            });
        }));

        it("should be defined", function() {
            expect(ctrl).toBeDefined();
        });

        it("should defined 'messages'", function() {
            expect(ctrl.messages).toBeDefined();
        });

        it("should define 'closeMessage'", function() {
            expect(ctrl.closeMessage).toBeDefined();
        });

        it("should remove a message from the list", function() {
            ctrl.closeMessage(1);
            expect(Messages.removeMessage).toHaveBeenCalled();
        });
    });

    describe("Messages", function() {
        var Messages;

        beforeEach(inject(function(_Messages_) {
            Messages = _Messages_;
        }));

        it("should define 'addMessage'", function() {
            expect(Messages.addMessage).toBeDefined();
        });

        it("should define 'getMessages'", function() {
            expect(Messages.getMessages).toBeDefined();
        });

        it("should define 'removeMessage'", function() {
            expect(Messages.removeMessage).toBeDefined();
        });
    });
});
