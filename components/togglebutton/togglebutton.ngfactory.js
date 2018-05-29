"use strict";
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = require("@angular/core");
var i1 = require("./togglebutton");
var i2 = require("@angular/common");
var i3 = require("@angular/forms");
var ToggleButtonModuleNgFactory = i0.ɵcmf(i1.ToggleButtonModule, [], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, []], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(4608, i2.NgLocalization, i2.NgLocaleLocalization, [i0.LOCALE_ID, [2, i2.ɵangular_packages_common_common_a]]), i0.ɵmpd(1073742336, i2.CommonModule, i2.CommonModule, []), i0.ɵmpd(1073742336, i1.ToggleButtonModule, i1.ToggleButtonModule, [])]); });
exports.ToggleButtonModuleNgFactory = ToggleButtonModuleNgFactory;
var styles_ToggleButton = [];
var RenderType_ToggleButton = i0.ɵcrt({ encapsulation: 2, styles: styles_ToggleButton, data: {} });
exports.RenderType_ToggleButton = RenderType_ToggleButton;
function View_ToggleButton_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 0, "span", [], [[8, "className", 0]], null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.getIconClass(); _ck(_v, 0, 0, currVal_0); }); }
function View_ToggleButton_0(_l) { return i0.ɵvid(0, [i0.ɵqud(402653184, 1, { checkboxViewChild: 0 }), (_l()(), i0.ɵeld(1, 0, null, null, 9, "div", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.toggle($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i0.ɵdid(2, 278528, null, 0, i2.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i0.ɵpod(3, { "ui-button ui-togglebutton ui-widget ui-state-default ui-corner-all": 0, "ui-button-text-only": 1, "ui-button-text-icon-left": 2, "ui-button-icon-only": 3, "ui-state-active": 4, "ui-state-focus": 5, "ui-state-disabled": 6 }), i0.ɵdid(4, 278528, null, 0, i2.NgStyle, [i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { ngStyle: [0, "ngStyle"] }, null), (_l()(), i0.ɵeld(5, 0, null, null, 1, "div", [["class", "ui-helper-hidden-accessible"]], null, null, null, null, null)), (_l()(), i0.ɵeld(6, 0, [[1, 0], ["checkbox", 1]], null, 0, "input", [["type", "checkbox"]], [[1, "id", 0], [8, "checked", 0], [1, "tabindex", 0]], [[null, "focus"], [null, "blur"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("focus" === en)) {
        var pd_0 = (_co.onFocus() !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_co.onBlur() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_ToggleButton_1)), i0.ɵdid(8, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵeld(9, 0, null, null, 1, "span", [["class", "ui-button-text ui-unselectable-text"]], null, null, null, null, null)), (_l()(), i0.ɵted(10, null, ["", ""]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.styleClass; var currVal_1 = _ck(_v, 3, 0, true, (!_co.onIcon && !_co.offIcon), (((_co.onIcon && _co.offIcon) && _co.hasOnLabel) && _co.hasOffLabel), (((_co.onIcon && _co.offIcon) && !_co.hasOnLabel) && !_co.hasOffLabel), _co.checked, _co.focus, _co.disabled); _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_2 = _co.style; _ck(_v, 4, 0, currVal_2); var currVal_6 = (_co.onIcon || _co.offIcon); _ck(_v, 8, 0, currVal_6); }, function (_ck, _v) { var _co = _v.component; var currVal_3 = _co.inputId; var currVal_4 = _co.checked; var currVal_5 = _co.tabindex; _ck(_v, 6, 0, currVal_3, currVal_4, currVal_5); var currVal_7 = (_co.checked ? (_co.hasOnLabel ? _co.onLabel : "ui-btn") : (_co.hasOffLabel ? _co.offLabel : "ui-btn")); _ck(_v, 10, 0, currVal_7); }); }
exports.View_ToggleButton_0 = View_ToggleButton_0;
function View_ToggleButton_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 2, "p-toggleButton", [], null, null, null, View_ToggleButton_0, RenderType_ToggleButton)), i0.ɵprd(5120, null, i3.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i1.ToggleButton]), i0.ɵdid(2, 4243456, null, 0, i1.ToggleButton, [], null, null)], null, null); }
exports.View_ToggleButton_Host_0 = View_ToggleButton_Host_0;
var ToggleButtonNgFactory = i0.ɵccf("p-toggleButton", i1.ToggleButton, View_ToggleButton_Host_0, { onLabel: "onLabel", offLabel: "offLabel", onIcon: "onIcon", offIcon: "offIcon", disabled: "disabled", style: "style", styleClass: "styleClass", inputId: "inputId", tabindex: "tabindex" }, { onChange: "onChange" }, []);
exports.ToggleButtonNgFactory = ToggleButtonNgFactory;
//# sourceMappingURL=togglebutton.ngfactory.js.map