var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NgModule, Component, ElementRef, Input, Output, Renderer2, EventEmitter, ContentChildren, QueryList, ViewChild, forwardRef, ChangeDetectorRef, NgZone } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { SharedModule, PrimeTemplate } from '../common/shared';
import { DomHandler } from '../dom/domhandler';
import { ObjectUtils } from '../utils/objectutils';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
export var DROPDOWN_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return Dropdown; }),
    multi: true
};
var Dropdown = (function () {
    function Dropdown(el, domHandler, renderer, cd, objectUtils, zone) {
        this.el = el;
        this.domHandler = domHandler;
        this.renderer = renderer;
        this.cd = cd;
        this.objectUtils = objectUtils;
        this.zone = zone;
        this.scrollHeight = '200px';
        this.autoWidth = true;
        this.filterBy = 'label';
        this.lazy = true;
        this.onChange = new EventEmitter();
        this.onFocus = new EventEmitter();
        this.onBlur = new EventEmitter();
        this.onModelChange = function () { };
        this.onModelTouched = function () { };
        this.panelVisible = false;
    }
    Dropdown.prototype.ngAfterContentInit = function () {
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
    Dropdown.prototype.ngOnInit = function () {
        this.optionsToDisplay = this.options;
        this.updateSelectedOption(null);
    };
    Object.defineProperty(Dropdown.prototype, "options", {
        get: function () {
            return this._options;
        },
        set: function (opts) {
            this._options = opts;
            this.optionsToDisplay = this._options;
            this.updateSelectedOption(this.value);
            this.optionsChanged = true;
            if (this.filterValue && this.filterValue.length) {
                this.activateFilter();
            }
        },
        enumerable: true,
        configurable: true
    });
    Dropdown.prototype.ngAfterViewInit = function () {
        this.container = this.containerViewChild.nativeElement;
        this.panel = this.panelViewChild.nativeElement;
        this.itemsWrapper = this.itemsWrapperViewChild.nativeElement;
        if (this.editable) {
            this.updateEditableLabel();
        }
        this.updateDimensions();
        this.initialized = true;
        if (this.appendTo) {
            if (this.appendTo === 'body')
                document.body.appendChild(this.panel);
            else
                this.domHandler.appendChild(this.panel, this.appendTo);
        }
    };
    Object.defineProperty(Dropdown.prototype, "label", {
        get: function () {
            return (this.selectedOption ? this.selectedOption.label : null);
        },
        enumerable: true,
        configurable: true
    });
    Dropdown.prototype.updateEditableLabel = function () {
        if (this.editableInputViewChild && this.editableInputViewChild.nativeElement) {
            this.editableInputViewChild.nativeElement.value = (this.selectedOption ? this.selectedOption.label : this.value || '');
        }
    };
    Dropdown.prototype.onItemClick = function (event, option) {
        this.itemClick = true;
        this.selectItem(event, option);
        this.focusViewChild.nativeElement.focus();
        this.hide();
    };
    Dropdown.prototype.selectItem = function (event, option) {
        if (this.selectedOption != option) {
            this.selectedOption = option;
            this.value = option.value;
            this.onModelChange(this.value);
            this.updateEditableLabel();
            this.onChange.emit({
                originalEvent: event,
                value: this.value
            });
        }
    };
    Dropdown.prototype.ngAfterViewChecked = function () {
        var _this = this;
        if (this.shown) {
            this.onShow();
            this.shown = false;
        }
        if (this.optionsChanged && this.panelVisible) {
            this.optionsChanged = false;
            this.zone.runOutsideAngular(function () {
                setTimeout(function () {
                    _this.updateDimensions();
                    _this.alignPanel();
                }, 1);
            });
        }
        if (this.selectedOptionUpdated && this.itemsWrapper) {
            var selectedItem = this.domHandler.findSingle(this.panel, 'li.ui-state-highlight');
            if (selectedItem) {
                this.domHandler.scrollInView(this.itemsWrapper, this.domHandler.findSingle(this.panel, 'li.ui-state-highlight'));
            }
            this.selectedOptionUpdated = false;
        }
    };
    Dropdown.prototype.writeValue = function (value) {
        if (this.filter) {
            this.resetFilter();
        }
        this.value = value;
        this.updateSelectedOption(value);
        this.updateEditableLabel();
        this.cd.markForCheck();
    };
    Dropdown.prototype.resetFilter = function () {
        if (this.filterViewChild && this.filterViewChild.nativeElement) {
            this.filterViewChild.nativeElement.value = '';
        }
        this.optionsToDisplay = this.options;
    };
    Dropdown.prototype.updateSelectedOption = function (val) {
        this.selectedOption = this.findOption(val, this.optionsToDisplay);
        if (!this.placeholder && !this.selectedOption && this.optionsToDisplay && this.optionsToDisplay.length && !this.editable) {
            this.selectedOption = this.optionsToDisplay[0];
        }
        this.selectedOptionUpdated = true;
    };
    Dropdown.prototype.registerOnChange = function (fn) {
        this.onModelChange = fn;
    };
    Dropdown.prototype.registerOnTouched = function (fn) {
        this.onModelTouched = fn;
    };
    Dropdown.prototype.setDisabledState = function (val) {
        this.disabled = val;
    };
    Dropdown.prototype.updateDimensions = function () {
        if (this.autoWidth) {
            var select = this.domHandler.findSingle(this.el.nativeElement, 'select');
            if (!this.style || (!this.style['width'] && !this.style['min-width'])) {
                this.el.nativeElement.children[0].style.width = select.offsetWidth + 30 + 'px';
            }
        }
    };
    Dropdown.prototype.onMouseclick = function (event) {
        var _this = this;
        if (this.disabled || this.readonly) {
            return;
        }
        this.selfClick = true;
        if (!this.itemClick) {
            this.focusViewChild.nativeElement.focus();
            if (this.panelVisible)
                this.hide();
            else {
                this.show();
                if (this.filterViewChild != undefined) {
                    setTimeout(function () {
                        _this.filterViewChild.nativeElement.focus();
                    }, 200);
                }
            }
        }
    };
    Dropdown.prototype.onEditableInputClick = function (event) {
        this.itemClick = true;
        this.bindDocumentClickListener();
    };
    Dropdown.prototype.onEditableInputFocus = function (event) {
        this.focus = true;
        this.hide();
    };
    Dropdown.prototype.onEditableInputChange = function (event) {
        this.value = event.target.value;
        this.updateSelectedOption(this.value);
        this.onModelChange(this.value);
        this.onChange.emit({
            originalEvent: event,
            value: this.value
        });
    };
    Dropdown.prototype.onShow = function () {
        if (this.options && this.options.length) {
            this.alignPanel();
            this.bindDocumentClickListener();
            var selectedListItem = this.domHandler.findSingle(this.itemsWrapper, '.ui-dropdown-item.ui-state-highlight');
            if (selectedListItem) {
                this.domHandler.scrollInView(this.itemsWrapper, selectedListItem);
            }
        }
    };
    Dropdown.prototype.show = function () {
        if (this.appendTo) {
            this.panel.style.minWidth = this.domHandler.getWidth(this.container) + 'px';
        }
        this.panel.style.zIndex = String(++DomHandler.zindex);
        this.panelVisible = true;
        this.shown = true;
    };
    Dropdown.prototype.hide = function () {
        this.panelVisible = false;
    };
    Dropdown.prototype.alignPanel = function () {
        if (this.appendTo)
            this.domHandler.absolutePosition(this.panel, this.container);
        else
            this.domHandler.relativePosition(this.panel, this.container);
    };
    Dropdown.prototype.onInputFocus = function (event) {
        this.focus = true;
        this.onFocus.emit(event);
    };
    Dropdown.prototype.onInputBlur = function (event) {
        this.focus = false;
        this.onModelTouched();
        this.onBlur.emit(event);
    };
    Dropdown.prototype.onKeydown = function (event) {
        if (this.readonly) {
            return;
        }
        var selectedItemIndex = this.selectedOption ? this.findOptionIndex(this.selectedOption.value, this.optionsToDisplay) : -1;
        switch (event.which) {
            //down
            case 40:
                if (!this.panelVisible && event.altKey) {
                    this.show();
                }
                else {
                    if (selectedItemIndex !== -1) {
                        var nextItemIndex = selectedItemIndex + 1;
                        if (nextItemIndex != (this.optionsToDisplay.length)) {
                            this.selectItem(event, this.optionsToDisplay[nextItemIndex]);
                            this.selectedOptionUpdated = true;
                        }
                    }
                    else if (this.optionsToDisplay) {
                        this.selectItem(event, this.optionsToDisplay[0]);
                    }
                }
                event.preventDefault();
                break;
            //up
            case 38:
                if (selectedItemIndex > 0) {
                    var prevItemIndex = selectedItemIndex - 1;
                    this.selectItem(event, this.optionsToDisplay[prevItemIndex]);
                    this.selectedOptionUpdated = true;
                }
                event.preventDefault();
                break;
            //space
            case 32:
            case 32:
                if (!this.panelVisible) {
                    this.show();
                    event.preventDefault();
                }
                break;
            //enter
            case 13:
                this.hide();
                event.preventDefault();
                break;
            //escape and tab
            case 27:
            case 9:
                this.hide();
                break;
        }
    };
    Dropdown.prototype.findOptionIndex = function (val, opts) {
        var index = -1;
        if (opts) {
            for (var i = 0; i < opts.length; i++) {
                if ((val == null && opts[i].value == null) || this.objectUtils.equals(val, opts[i].value, this.dataKey)) {
                    index = i;
                    break;
                }
            }
        }
        return index;
    };
    Dropdown.prototype.findOption = function (val, opts) {
        var index = this.findOptionIndex(val, opts);
        return (index != -1) ? opts[index] : null;
    };
    Dropdown.prototype.onFilter = function (event) {
        var inputValue = event.target.value.toLowerCase();
        if (inputValue && inputValue.length) {
            this.filterValue = inputValue;
            this.activateFilter();
        }
        else {
            this.filterValue = null;
            this.optionsToDisplay = this.options;
        }
        this.optionsChanged = true;
    };
    Dropdown.prototype.activateFilter = function () {
        var searchFields = this.filterBy.split(',');
        if (this.options && this.options.length) {
            this.optionsToDisplay = this.objectUtils.filter(this.options, searchFields, this.filterValue);
            this.optionsChanged = true;
        }
    };
    Dropdown.prototype.applyFocus = function () {
        if (this.editable)
            this.domHandler.findSingle(this.el.nativeElement, '.ui-dropdown-label.ui-inputtext').focus();
        else
            this.domHandler.findSingle(this.el.nativeElement, 'input[readonly]').focus();
    };
    Dropdown.prototype.bindDocumentClickListener = function () {
        var _this = this;
        if (!this.documentClickListener) {
            this.documentClickListener = this.renderer.listen('document', 'click', function () {
                if (!_this.selfClick && !_this.itemClick) {
                    _this.panelVisible = false;
                    _this.unbindDocumentClickListener();
                }
                _this.selfClick = false;
                _this.itemClick = false;
                _this.cd.markForCheck();
            });
        }
    };
    Dropdown.prototype.unbindDocumentClickListener = function () {
        if (this.documentClickListener) {
            this.documentClickListener();
            this.documentClickListener = null;
        }
    };
    Dropdown.prototype.ngOnDestroy = function () {
        this.initialized = false;
        this.unbindDocumentClickListener();
        if (this.appendTo) {
            this.el.nativeElement.appendChild(this.panel);
        }
    };
    return Dropdown;
}());
__decorate([
    Input(),
    __metadata("design:type", String)
], Dropdown.prototype, "scrollHeight", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], Dropdown.prototype, "filter", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], Dropdown.prototype, "style", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], Dropdown.prototype, "panelStyle", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], Dropdown.prototype, "styleClass", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], Dropdown.prototype, "panelStyleClass", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], Dropdown.prototype, "disabled", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], Dropdown.prototype, "readonly", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], Dropdown.prototype, "autoWidth", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], Dropdown.prototype, "required", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], Dropdown.prototype, "editable", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], Dropdown.prototype, "appendTo", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], Dropdown.prototype, "tabindex", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], Dropdown.prototype, "placeholder", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], Dropdown.prototype, "filterPlaceholder", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], Dropdown.prototype, "inputId", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], Dropdown.prototype, "dataKey", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], Dropdown.prototype, "filterBy", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], Dropdown.prototype, "lazy", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], Dropdown.prototype, "autofocus", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Dropdown.prototype, "onChange", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Dropdown.prototype, "onFocus", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Dropdown.prototype, "onBlur", void 0);
__decorate([
    ViewChild('container'),
    __metadata("design:type", ElementRef)
], Dropdown.prototype, "containerViewChild", void 0);
__decorate([
    ViewChild('panel'),
    __metadata("design:type", ElementRef)
], Dropdown.prototype, "panelViewChild", void 0);
__decorate([
    ViewChild('itemswrapper'),
    __metadata("design:type", ElementRef)
], Dropdown.prototype, "itemsWrapperViewChild", void 0);
__decorate([
    ViewChild('filter'),
    __metadata("design:type", ElementRef)
], Dropdown.prototype, "filterViewChild", void 0);
__decorate([
    ViewChild('in'),
    __metadata("design:type", ElementRef)
], Dropdown.prototype, "focusViewChild", void 0);
__decorate([
    ViewChild('editableInput'),
    __metadata("design:type", ElementRef)
], Dropdown.prototype, "editableInputViewChild", void 0);
__decorate([
    ContentChildren(PrimeTemplate),
    __metadata("design:type", QueryList)
], Dropdown.prototype, "templates", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], Dropdown.prototype, "options", null);
Dropdown = __decorate([
    Component({
        selector: 'p-dropdown',
        template: "\n         <div #container [ngClass]=\"{'ui-dropdown ui-widget ui-state-default ui-corner-all ui-helper-clearfix':true,\n            'ui-state-disabled':disabled,'ui-dropdown-open':panelVisible,'ui-state-focus':focus}\"\n            (click)=\"onMouseclick($event)\" [ngStyle]=\"style\" [class]=\"styleClass\">\n            <div class=\"ui-helper-hidden-accessible\" *ngIf=\"autoWidth\">\n                <select [required]=\"required\" name=\"options\" [attr.aria-label]=\"selectedOption ? selectedOption.label : ' '\" tabindex=\"-1\" aria-hidden=\"true\">\n                    <option *ngFor=\"let option of options\" [value]=\"option.value\" [selected]=\"selectedOption == option\">{{option.label}}</option>\n                </select>\n            </div>\n            <div class=\"ui-helper-hidden-accessible\">\n                <input #in [attr.id]=\"inputId\" type=\"text\" [attr.aria-label]=\"selectedOption ? selectedOption.label : ' '\" readonly (focus)=\"onInputFocus($event)\" role=\"listbox\"\n                    (blur)=\"onInputBlur($event)\" (keydown)=\"onKeydown($event)\" [disabled]=\"disabled\" [attr.tabindex]=\"tabindex\" [attr.autofocus]=\"autofocus\">\n            </div>\n            <label [ngClass]=\"{'ui-dropdown-label ui-inputtext ui-corner-all':true,'ui-dropdown-label-empty':(label !== null)}\" *ngIf=\"!editable&&(label !== null)\">{{label||'empty'}}</label>\n            <label [ngClass]=\"{'ui-dropdown-label ui-inputtext ui-corner-all ui-placeholder':true}\" *ngIf=\"!editable&&(label === null)\">{{placeholder}}</label>\n            <input #editableInput type=\"text\" [attr.aria-label]=\"selectedOption ? selectedOption.label : ' '\" class=\"ui-dropdown-label ui-inputtext ui-corner-all\" *ngIf=\"editable\" [disabled]=\"disabled\" [attr.placeholder]=\"placeholder\"\n                        (click)=\"onEditableInputClick($event)\" (input)=\"onEditableInputChange($event)\" (focus)=\"onEditableInputFocus($event)\" (blur)=\"onInputBlur($event)\">\n            <div class=\"ui-dropdown-trigger ui-state-default ui-corner-right\">\n                <span class=\"fa fa-fw fa-caret-down ui-clickable\"></span>\n            </div>\n            <div #panel [ngClass]=\"'ui-dropdown-panel ui-widget-content ui-corner-all ui-helper-hidden ui-shadow'\" [@panelState]=\"panelVisible ? 'visible' : 'hidden'\"\n                [style.display]=\"panelVisible ? 'block' : 'none'\" [ngStyle]=\"panelStyle\" [class]=\"panelStyleClass\">\n                <div *ngIf=\"filter\" class=\"ui-dropdown-filter-container\" (input)=\"onFilter($event)\" (click)=\"$event.stopPropagation()\">\n                    <input #filter type=\"text\" autocomplete=\"off\" class=\"ui-dropdown-filter ui-inputtext ui-widget ui-state-default ui-corner-all\" [attr.placeholder]=\"filterPlaceholder\"\n                    (keydown.enter)=\"$event.preventDefault()\" (keydown)=\"onKeydown($event)\">\n                    <span class=\"fa fa-search\"></span>\n                </div>\n                <div #itemswrapper class=\"ui-dropdown-items-wrapper\" [style.max-height]=\"scrollHeight||'auto'\">\n                    <ul class=\"ui-dropdown-items ui-dropdown-list ui-widget-content ui-widget ui-corner-all ui-helper-reset\" *ngIf=\"lazy ? panelVisible : true\">\n                        <li *ngFor=\"let option of optionsToDisplay;let i=index\" \n                            [ngClass]=\"{'ui-dropdown-item ui-corner-all':true, 'ui-state-highlight':(selectedOption == option), \n                            'ui-dropdown-item-empty':!option.label||option.label.length === 0}\"\n                            (click)=\"onItemClick($event, option)\">\n                            <span *ngIf=\"!itemTemplate\">{{option.label||'empty'}}</span>\n                            <ng-template [pTemplateWrapper]=\"itemTemplate\" [item]=\"option\" *ngIf=\"itemTemplate\"></ng-template>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    ",
        animations: [
            trigger('panelState', [
                state('hidden', style({
                    opacity: 0
                })),
                state('visible', style({
                    opacity: 1
                })),
                transition('visible => hidden', animate('400ms ease-in')),
                transition('hidden => visible', animate('400ms ease-out'))
            ])
        ],
        providers: [DomHandler, ObjectUtils, DROPDOWN_VALUE_ACCESSOR]
    }),
    __metadata("design:paramtypes", [ElementRef, DomHandler, Renderer2, ChangeDetectorRef,
        ObjectUtils, NgZone])
], Dropdown);
export { Dropdown };
var DropdownModule = (function () {
    function DropdownModule() {
    }
    return DropdownModule;
}());
DropdownModule = __decorate([
    NgModule({
        imports: [CommonModule, SharedModule],
        exports: [Dropdown, SharedModule],
        declarations: [Dropdown]
    })
], DropdownModule);
export { DropdownModule };
//# sourceMappingURL=dropdown.js.map