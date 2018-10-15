"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var platform_browser_1 = require("@angular/platform-browser");
var terminal_1 = require("./terminal");
var animations_1 = require("@angular/platform-browser/animations");
var terminalservice_1 = require("./terminalservice");
var forms_1 = require("@angular/forms");
var core_1 = require("@angular/core");
var TestTerminalComponent = /** @class */ (function () {
    function TestTerminalComponent(terminalService) {
        var _this = this;
        this.terminalService = terminalService;
        this.terminalService.commandHandler.subscribe(function (command) {
            var response = (command === 'd') ? "Command succeed" : 'Unknown command: ' + command;
            _this.terminalService.sendResponse(response);
        });
    }
    TestTerminalComponent.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    TestTerminalComponent.decorators = [
        { type: core_1.Component, args: [{
                    template: "<p-terminal welcomeMessage=\"Welcome to PrimeNG\" prompt=\"primeng $\"></p-terminal>"
                },] },
    ];
    /** @nocollapse */
    TestTerminalComponent.ctorParameters = function () { return [
        { type: terminalservice_1.TerminalService }
    ]; };
    return TestTerminalComponent;
}());
describe('Terminal', function () {
    var terminal;
    var fixture;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [
                animations_1.NoopAnimationsModule,
                forms_1.FormsModule
            ],
            declarations: [
                terminal_1.Terminal,
                TestTerminalComponent
            ],
            providers: [terminalservice_1.TerminalService]
        });
        fixture = testing_1.TestBed.createComponent(TestTerminalComponent);
        terminal = fixture.debugElement.children[0].componentInstance;
    });
    it('should display by default', function () {
        fixture.detectChanges();
        var terminalEl = fixture.debugElement.query(platform_browser_1.By.css('div'));
        expect(terminalEl.nativeElement).toBeTruthy();
    });
    it('should handle command', function () {
        fixture.detectChanges();
        terminal.command = 'd';
        var event = { 'keyCode': 13 };
        terminal.handleCommand(event);
        fixture.detectChanges();
        expect(terminal.command).toEqual('');
        var commandEl = fixture.debugElement.query(platform_browser_1.By.css('.ui-terminal-command'));
        var responseEl = fixture.debugElement.query(platform_browser_1.By.css('.ui-terminal-content')).queryAll(platform_browser_1.By.css('div'))[1];
        expect(commandEl.nativeElement.textContent).toEqual('d');
        expect(responseEl.nativeElement.textContent).toEqual('Command succeed');
    });
    it('should not handle command', function () {
        fixture.detectChanges();
        terminal.command = 'dd';
        var event = { 'keyCode': 13 };
        terminal.handleCommand(event);
        fixture.detectChanges();
        expect(terminal.command).toEqual('');
        var commandEl = fixture.debugElement.query(platform_browser_1.By.css('.ui-terminal-command'));
        var responseEl = fixture.debugElement.query(platform_browser_1.By.css('.ui-terminal-content')).queryAll(platform_browser_1.By.css('div'))[1];
        expect(commandEl.nativeElement.textContent).toEqual('dd');
        expect(responseEl.nativeElement.textContent).toEqual('Unknown command: dd');
    });
});
//# sourceMappingURL=terminal.spec.js.map