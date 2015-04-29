"use strict";


describe("voltaic", function() {
    var ctrl, scope;

    beforeEach(function() {
        module("voltaic");
    });

    describe("AppCtrl", function() {
        beforeEach(inject(function($rootScope, $controller) {
            scope = $rootScope.$new();
            ctrl = $controller("AppCtrl", { "$scope": scope });
        }));

        it("should be defined", function() {
            expect(ctrl).toBeDefined();
        });
    });
});
