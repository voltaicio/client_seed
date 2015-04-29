"use strict";


describe("index", function() {
    var ctrl, scope;

    beforeEach(function() {
        module("index");
    });

    describe("IndexCtrl", function() {
        beforeEach(inject(function($rootScope, $controller) {
            scope = $rootScope.$new();
            ctrl = $controller("IndexCtrl", { "$scope": scope });
        }));

        it("should be defined", function() {
            expect(ctrl).toBeDefined();
        });
    });
});
