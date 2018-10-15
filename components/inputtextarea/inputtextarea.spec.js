"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var platform_browser_1 = require("@angular/platform-browser");
var inputtextarea_1 = require("./inputtextarea");
var animations_1 = require("@angular/platform-browser/animations");
var core_1 = require("@angular/core");
var TestInputTextArea = /** @class */ (function () {
    function TestInputTextArea() {
    }
    TestInputTextArea.prototype.onResize = function (event) {
    };
    TestInputTextArea.decorators = [
        { type: core_1.Component, args: [{
                    template: "<textarea rows=\"1\" cols=\"1\" (onResize)=\"onResize($event)\" [autoResize]=\"autoResize\" pInputTextarea></textarea>\n  "
                },] },
    ];
    return TestInputTextArea;
}());
describe('InputTextarea', function () {
    var fixture;
    var component;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [
                animations_1.NoopAnimationsModule
            ],
            declarations: [
                inputtextarea_1.InputTextarea,
                TestInputTextArea
            ]
        });
        fixture = testing_1.TestBed.createComponent(TestInputTextArea);
        component = fixture.debugElement.componentInstance;
    });
    it('should display by default', function () {
        fixture.detectChanges();
        var inputTextEl = fixture.debugElement.query(platform_browser_1.By.css('textarea'));
        expect(inputTextEl).toBeTruthy();
    });
    it('should change autoResize', function () {
        component.autoResize = true;
        fixture.detectChanges();
        var onResizeSpy = spyOn(component, 'onResize').and.callThrough();
        var inputTextEl = fixture.debugElement.query(platform_browser_1.By.css('textarea'));
        inputTextEl.nativeElement.dispatchEvent(new Event('focus'));
        fixture.detectChanges();
        inputTextEl.nativeElement.dispatchEvent(new Event('blur'));
        fixture.detectChanges();
        expect(onResizeSpy).toHaveBeenCalledTimes(4);
    });
    it('should increment height', function () {
        component.autoResize = true;
        fixture.detectChanges();
        var inputTextEl = fixture.debugElement.query(platform_browser_1.By.css('textarea'));
        var cachedHeight = inputTextEl.nativeElement.style.height;
        inputTextEl.nativeElement.value = "primeng";
        inputTextEl.nativeElement.dispatchEvent(new Event('input'));
        fixture.detectChanges();
        expect(inputTextEl.nativeElement.style.height).toBeGreaterThan(cachedHeight);
        expect(inputTextEl.nativeElement.style.overflow).toEqual("hidden");
    });
    it('should use resize with maxHeight', function () {
        component.autoResize = true;
        fixture.detectChanges();
        var inputTextEl = fixture.debugElement.query(platform_browser_1.By.css('textarea'));
        inputTextEl.nativeElement.style.maxHeight = 70 + 'px';
        fixture.detectChanges();
        inputTextEl.nativeElement.value = "primeng rocks!";
        inputTextEl.nativeElement.dispatchEvent(new Event('input'));
        fixture.detectChanges();
        expect(inputTextEl.nativeElement.style.height).toEqual(inputTextEl.nativeElement.style.maxHeight);
        expect(inputTextEl.nativeElement.style.overflowY).toEqual("scroll");
    });
});
//# sourceMappingURL=inputtextarea.spec.js.map