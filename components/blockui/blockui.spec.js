"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var platform_browser_1 = require("@angular/platform-browser");
var blockui_1 = require("./blockui");
var animations_1 = require("@angular/platform-browser/animations");
var core_1 = require("@angular/core");
var panel_1 = require("../panel/panel");
var TestBlockUIComponent = /** @class */ (function () {
    function TestBlockUIComponent() {
    }
    TestBlockUIComponent.decorators = [
        { type: core_1.Component, args: [{
                    template: "\n    <p-blockUI></p-blockUI>\n    <p-blockUI [target]=\"pnl\">\n    </p-blockUI>\n    <p-panel #pnl header=\"Godfather I\" [style]=\"{'margin-top':'20px'}\">\n    </p-panel>  \n    "
                },] },
    ];
    return TestBlockUIComponent;
}());
describe('BlockUI', function () {
    var blockui;
    var blockui2;
    var fixture;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [
                animations_1.NoopAnimationsModule
            ],
            declarations: [
                blockui_1.BlockUI,
                TestBlockUIComponent,
                panel_1.Panel
            ]
        });
        fixture = testing_1.TestBed.createComponent(TestBlockUIComponent);
        blockui = fixture.debugElement.children[0].componentInstance;
        blockui2 = fixture.debugElement.children[1].componentInstance;
    });
    it('should display by default', function () {
        blockui.blocked = false;
        fixture.detectChanges();
        var blockEl = fixture.debugElement.query(platform_browser_1.By.css('div'));
        expect(blockEl.nativeElement).toBeTruthy();
    });
    it('should block body', function () {
        blockui.blocked = false;
        fixture.detectChanges();
        var blockSpy = spyOn(blockui, 'block').and.callThrough();
        blockui.blocked = true;
        fixture.detectChanges();
        expect(blockSpy).toHaveBeenCalled();
    });
    it('should unblock body', function () {
        blockui.blocked = false;
        fixture.detectChanges();
        var unBlockSpy = spyOn(blockui, 'unblock').and.callThrough();
        blockui.blocked = true;
        fixture.detectChanges();
        blockui.blocked = false;
        fixture.detectChanges();
        expect(unBlockSpy).toHaveBeenCalled();
    });
    it('should block element with target', function () {
        blockui2.blocked = false;
        fixture.detectChanges();
        var blockSpy = spyOn(blockui2, 'block').and.callThrough();
        blockui2.blocked = true;
        fixture.detectChanges();
        expect(blockSpy).toHaveBeenCalled();
        expect(blockui2.target.style.position).toEqual("relative");
    });
});
//# sourceMappingURL=blockui.spec.js.map