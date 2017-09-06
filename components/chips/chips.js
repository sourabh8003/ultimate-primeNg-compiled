"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var shared_1 = require("../common/shared");
var inputtext_1 = require("../inputtext/inputtext");
var tooltip_1 = require("../tooltip/tooltip");
var domhandler_1 = require("../dom/domhandler");
var forms_1 = require("@angular/forms");
exports.CHIPS_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return Chips; }),
    multi: true
};
var Chips = (function () {
    function Chips(el, domHandler) {
        this.el = el;
        this.domHandler = domHandler;
        this.onAdd = new core_1.EventEmitter();
        this.onRemove = new core_1.EventEmitter();
        this.allowDuplicate = true;
        this.onModelChange = function () { };
        this.onModelTouched = function () { };
    }
    Chips.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.templates.forEach(function (item) {
            switch (item.getType()) {
                case 'item':
                    _this.itemTemplate = item.template;
                    break;
                default:
                    _this.itemTemplate = item.template;
                    break;
            }
        });
    };
    Chips.prototype.writeValue = function (value) {
        this.value = value;
    };
    Chips.prototype.registerOnChange = function (fn) {
        this.onModelChange = fn;
    };
    Chips.prototype.registerOnTouched = function (fn) {
        this.onModelTouched = fn;
    };
    Chips.prototype.setDisabledState = function (val) {
        this.disabled = val;
    };
    Chips.prototype.resolveFieldData = function (data, field) {
        if (data && field) {
            if (field.indexOf('.') == -1) {
                return data[field];
            }
            else {
                var fields = field.split('.');
                var value = data;
                for (var i = 0, len = fields.length; i < len; ++i) {
                    value = value[fields[i]];
                }
                return value;
            }
        }
        else {
            return null;
        }
    };
    Chips.prototype.onFocus = function () {
        this.focus = true;
    };
    Chips.prototype.onBlur = function () {
        this.focus = false;
        this.onModelTouched();
    };
    Chips.prototype.removeItem = function (event, index) {
        if (this.disabled) {
            return;
        }
        var removedItem = this.value[index];
        this.value = this.value.filter(function (val, i) { return i != index; });
        this.onModelChange(this.value);
        this.onRemove.emit({
            originalEvent: event,
            value: removedItem
        });
    };
    Chips.prototype.addItem = function (event, item) {
        this.value = this.value || [];
        if (item && item.trim().length && (!this.max || this.max > item.length)) {
            if (this.allowDuplicate || !this.value.includes(item)) {
                this.value = this.value.concat([item]);
                this.onModelChange(this.value);
                this.onAdd.emit({
                    originalEvent: event,
                    value: item
                });
            }
        }
    };
    Chips.prototype.onKeydown = function (event, inputEL) {
        switch (event.which) {
            //backspace
            case 8:
                if (inputEL.value.length === 0 && this.value && this.value.length > 0) {
                    this.value = this.value.slice();
                    var removedItem = this.value.pop();
                    this.onModelChange(this.value);
                    this.onRemove.emit({
                        originalEvent: event,
                        value: removedItem
                    });
                }
                break;
            //enter
            case 13:
                this.value = this.value || [];
                if (inputEL.value && inputEL.value.trim().length && (!this.max || this.max > this.value.length)) {
                    if (this.allowDuplicate || !this.value.includes(inputEL.value)) {
                        this.value = this.value.concat([inputEL.value]);
                        this.onModelChange(this.value);
                        this.onAdd.emit({
                            originalEvent: event,
                            value: inputEL.value
                        });
                    }
                }
                inputEL.value = '';
                event.preventDefault();
                break;
            //tab key (remove unwanted chips on click of Tab keywords)
            case 9:
                this.value = this.value || [];
                if (inputEL.value && inputEL.value.trim().length && (!this.max || this.max > this.value.length)) {
                    if (this.allowDuplicate || !this.value.includes(inputEL.value)) {
                        this.value = this.value.concat([inputEL.value]);
                        this.onModelChange(this.value);
                        this.onAdd.emit({
                            originalEvent: event,
                            value: inputEL.value
                        });
                    }
                }
                inputEL.value = '';
                break;
            default:
                if (this.max && this.value && this.max === this.value.length) {
                    event.preventDefault();
                }
                break;
        }
    };
    Object.defineProperty(Chips.prototype, "maxedOut", {
        get: function () {
            return this.max && this.value && this.max === this.value.length;
        },
        enumerable: true,
        configurable: true
    });
    return Chips;
}());
Chips.decorators = [
    { type: core_1.Component, args: [{
                selector: 'p-chips',
                template: "\n\t\t<div [ngClass]=\"'ui-chips ui-widget'\" [ngStyle]=\"style\" [class]=\"styleClass\">\n\t\t\t<ul [ngClass]=\"{'ui-inputtext ui-state-default ui-corner-all':true,'ui-state-focus':focus,'ui-state-disabled':disabled}\" (click)=\"inputtext.focus()\">\n\t\t\t\t<li #token *ngFor=\"let item of value; let i = index;\" class=\"ui-chips-token ui-state-highlight ui-corner-all\">\n\t\t\t\t\t<span *ngIf=\"!disabled\" class=\"ui-chips-token-icon fa fa-fw fa-close\" (click)=\"removeItem($event,i)\"></span>\n\t\t\t\t\t<span *ngIf=\"!itemTemplate\" class=\"ui-chips-token-label\">{{field ? resolveFieldData(item, field) : item}}</span>\n\t\t\t\t\t<ng-template *ngIf=\"itemTemplate\" [pTemplateWrapper]=\"itemTemplate\" [item]=\"item\"></ng-template>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"ui-chips-input-token\">\n\t\t\t\t\t<input #inputtext type=\"text\" [attr.id]=\"inputId\" [attr.placeholder]=\"placeholder\" [attr.tabindex]=\"tabindex\" (keydown)=\"onKeydown($event,inputtext)\"\n\t\t\t\t\t\t\t\t (focus)=\"onFocus()\" (blur)=\"onBlur()\" [disabled]=\"maxedOut||disabled\" [disabled]=\"disabled\" [pTooltip]=\"toolTipMessage\" [tooltipPosition]=\"toolTipPosition\" [tooltipEvent]=\"toolTipEvent\"\n\t\t\t\t\t\t\t\t [positionStyle]=\"positionStyles\" [tooltipDisabled]=\"toolTipDisabled\" [tooltipStyleClass]=\"toolTipStyleClasses\" [escape]=\"toolTipEscape\" [ngStyle]=\"inputStyle\" [class]=\"inputStyleClass\">\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t",
                providers: [domhandler_1.DomHandler, exports.CHIPS_VALUE_ACCESSOR]
            },] },
];
/** @nocollapse */
Chips.ctorParameters = function () { return [
    { type: core_1.ElementRef, },
    { type: domhandler_1.DomHandler, },
]; };
Chips.propDecorators = {
    'toolTipMessage': [{ type: core_1.Input },],
    'toolTipPosition': [{ type: core_1.Input },],
    'toolTipEvent': [{ type: core_1.Input },],
    'positionStyles': [{ type: core_1.Input },],
    'toolTipDisabled': [{ type: core_1.Input },],
    'toolTipAppendTo': [{ type: core_1.Input },],
    'toolTipStyleClasses': [{ type: core_1.Input },],
    'toolTipEscape': [{ type: core_1.Input },],
    'style': [{ type: core_1.Input },],
    'styleClass': [{ type: core_1.Input },],
    'disabled': [{ type: core_1.Input },],
    'onAdd': [{ type: core_1.Output },],
    'onRemove': [{ type: core_1.Output },],
    'field': [{ type: core_1.Input },],
    'placeholder': [{ type: core_1.Input },],
    'max': [{ type: core_1.Input },],
    'tabindex': [{ type: core_1.Input },],
    'inputId': [{ type: core_1.Input },],
    'allowDuplicate': [{ type: core_1.Input },],
    'inputStyle': [{ type: core_1.Input },],
    'inputStyleClass': [{ type: core_1.Input },],
    'addOnTab': [{ type: core_1.Input },],
    'templates': [{ type: core_1.ContentChildren, args: [shared_1.PrimeTemplate,] },],
};
exports.Chips = Chips;
var ChipsModule = (function () {
    function ChipsModule() {
    }
    return ChipsModule;
}());
ChipsModule.decorators = [
    { type: core_1.NgModule, args: [{
                imports: [common_1.CommonModule, inputtext_1.InputTextModule, shared_1.SharedModule, tooltip_1.TooltipModule],
                exports: [Chips, inputtext_1.InputTextModule, shared_1.SharedModule],
                declarations: [Chips]
            },] },
];
/** @nocollapse */
ChipsModule.ctorParameters = function () { return []; };
exports.ChipsModule = ChipsModule;
//# sourceMappingURL=chips.js.map