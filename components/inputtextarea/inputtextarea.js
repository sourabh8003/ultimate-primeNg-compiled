"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var InputTextarea = /** @class */ (function () {
    function InputTextarea(el, ngModel) {
        this.el = el;
        this.ngModel = ngModel;
        this.onResize = new core_1.EventEmitter();
    }
    InputTextarea.prototype.ngDoCheck = function () {
        this.updateFilledState();
        if (this.autoResize) {
            this.resize();
        }
    };
    //To trigger change detection to manage ui-state-filled for material labels when there is no value binding
    InputTextarea.prototype.onInput = function (e) {
        this.updateFilledState();
        if (this.autoResize) {
            this.resize(e);
        }
    };
    InputTextarea.prototype.updateFilledState = function () {
        this.filled = (this.el.nativeElement.value && this.el.nativeElement.value.length) || (this.ngModel && this.ngModel.model);
    };
    InputTextarea.prototype.onFocus = function (e) {
        if (this.autoResize) {
            this.resize(e);
        }
    };
    InputTextarea.prototype.onBlur = function (e) {
        if (this.autoResize) {
            this.resize(e);
        }
    };
    InputTextarea.prototype.resize = function (event) {
        if (!this.cachedScrollHeight) {
            this.cachedScrollHeight = this.el.nativeElement.scrollHeight;
            this.el.nativeElement.style.overflow = "hidden";
        }
        if (this.cachedScrollHeight != this.el.nativeElement.scrollHeight) {
            this.el.nativeElement.style.height = '';
            this.el.nativeElement.style.height = this.el.nativeElement.scrollHeight + 'px';
            if (parseFloat(this.el.nativeElement.style.height) >= parseFloat(this.el.nativeElement.style.maxHeight)) {
                this.el.nativeElement.style.overflowY = "scroll";
                this.el.nativeElement.style.height = this.el.nativeElement.style.maxHeight;
            }
            else {
                this.el.nativeElement.style.overflow = "hidden";
            }
            this.cachedScrollHeight = this.el.nativeElement.scrollHeight;
        }
        this.onResize.emit(event || {});
    };
    InputTextarea.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[pInputTextarea]',
                    host: {
                        '[class.ui-inputtext]': 'true',
                        '[class.ui-corner-all]': 'true',
                        '[class.ui-inputtextarea-resizable]': 'autoResize',
                        '[class.ui-state-default]': 'true',
                        '[class.ui-widget]': 'true',
                        '[class.ui-state-filled]': 'filled'
                    }
                },] },
    ];
    /** @nocollapse */
    InputTextarea.ctorParameters = function () { return [
        { type: core_1.ElementRef },
        { type: forms_1.NgModel, decorators: [{ type: core_1.Optional }] }
    ]; };
    InputTextarea.propDecorators = {
        autoResize: [{ type: core_1.Input }],
        onResize: [{ type: core_1.Output }],
        onInput: [{ type: core_1.HostListener, args: ['input', ['$event'],] }],
        onFocus: [{ type: core_1.HostListener, args: ['focus', ['$event'],] }],
        onBlur: [{ type: core_1.HostListener, args: ['blur', ['$event'],] }]
    };
    return InputTextarea;
}());
exports.InputTextarea = InputTextarea;
var InputTextareaModule = /** @class */ (function () {
    function InputTextareaModule() {
    }
    InputTextareaModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [common_1.CommonModule],
                    exports: [InputTextarea],
                    declarations: [InputTextarea]
                },] },
    ];
    return InputTextareaModule;
}());
exports.InputTextareaModule = InputTextareaModule;
//# sourceMappingURL=inputtextarea.js.map