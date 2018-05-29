"use strict";
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = require("@angular/core");
var i1 = require("./menu");
var i2 = require("@angular/common");
var i3 = require("@angular/router");
var i4 = require("../tooltip/tooltip");
var i5 = require("../dom/domhandler");
var MenuModuleNgFactory = i0.ɵcmf(i1.MenuModule, [], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, []], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(4608, i2.NgLocalization, i2.NgLocaleLocalization, [i0.LOCALE_ID, [2, i2.ɵangular_packages_common_common_a]]), i0.ɵmpd(1073742336, i2.CommonModule, i2.CommonModule, []), i0.ɵmpd(1073742336, i3.RouterModule, i3.RouterModule, [[2, i3.ɵangular_packages_router_router_a], [2, i3.Router]]), i0.ɵmpd(1073742336, i4.TooltipModule, i4.TooltipModule, []), i0.ɵmpd(1073742336, i1.MenuModule, i1.MenuModule, [])]); });
exports.MenuModuleNgFactory = MenuModuleNgFactory;
var styles_MenuItemContent = [];
var RenderType_MenuItemContent = i0.ɵcrt({ encapsulation: 2, styles: styles_MenuItemContent, data: {} });
exports.RenderType_MenuItemContent = RenderType_MenuItemContent;
function View_MenuItemContent_2(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "span", [["class", "ui-menuitem-icon fa fa-fw"]], null, null, null, null, null)), i0.ɵdid(1, 278528, null, 0, i2.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "ui-menuitem-icon fa fa-fw"; var currVal_1 = _co.item.icon; _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_MenuItemContent_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 6, "a", [["class", "ui-menuitem-link ui-corner-all"]], [[8, "href", 4], [1, "data-automationid", 0], [1, "target", 0], [1, "title", 0], [1, "id", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.menu.itemClick($event, _co.item) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i0.ɵdid(1, 278528, null, 0, i2.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i0.ɵpod(2, { "ui-state-disabled": 0 }), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_MenuItemContent_2)), i0.ɵdid(4, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵeld(5, 0, null, null, 1, "span", [["class", "ui-menuitem-text"]], null, null, null, null, null)), (_l()(), i0.ɵted(6, null, ["", ""]))], function (_ck, _v) { var _co = _v.component; var currVal_5 = "ui-menuitem-link ui-corner-all"; var currVal_6 = _ck(_v, 2, 0, _co.item.disabled); _ck(_v, 1, 0, currVal_5, currVal_6); var currVal_7 = _co.item.icon; _ck(_v, 4, 0, currVal_7); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.item.url || "#"); var currVal_1 = _co.item.automationId; var currVal_2 = _co.item.target; var currVal_3 = _co.item.title; var currVal_4 = _co.item.id; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4); var currVal_8 = _co.item.label; _ck(_v, 6, 0, currVal_8); }); }
function View_MenuItemContent_4(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "span", [["class", "ui-menuitem-icon fa fa-fw"]], null, null, null, null, null)), i0.ɵdid(1, 278528, null, 0, i2.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "ui-menuitem-icon fa fa-fw"; var currVal_1 = _co.item.icon; _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_MenuItemContent_3(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 11, "a", [["class", "ui-menuitem-link ui-corner-all"]], [[1, "data-automationid", 0], [1, "target", 0], [1, "id", 0], [1, "title", 0], [1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (i0.ɵnov(_v, 3).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_co.menu.itemClick($event, _co.item) !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), i0.ɵdid(1, 278528, null, 0, i2.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i0.ɵpod(2, { "ui-state-disabled": 0 }), i0.ɵdid(3, 671744, [[2, 4]], 0, i3.RouterLinkWithHref, [i3.Router, i3.ActivatedRoute, i2.LocationStrategy], { queryParams: [0, "queryParams"], routerLink: [1, "routerLink"] }, null), i0.ɵdid(4, 1720320, null, 2, i3.RouterLinkActive, [i3.Router, i0.ElementRef, i0.Renderer2, i0.ChangeDetectorRef], { routerLinkActiveOptions: [0, "routerLinkActiveOptions"], routerLinkActive: [1, "routerLinkActive"] }, null), i0.ɵqud(603979776, 1, { links: 1 }), i0.ɵqud(603979776, 2, { linksWithHrefs: 1 }), i0.ɵpod(7, { exact: 0 }), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_MenuItemContent_4)), i0.ɵdid(9, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵeld(10, 0, null, null, 1, "span", [["class", "ui-menuitem-text"]], null, null, null, null, null)), (_l()(), i0.ɵted(11, null, ["", ""]))], function (_ck, _v) { var _co = _v.component; var currVal_6 = "ui-menuitem-link ui-corner-all"; var currVal_7 = _ck(_v, 2, 0, _co.item.disabled); _ck(_v, 1, 0, currVal_6, currVal_7); var currVal_8 = _co.item.queryParams; var currVal_9 = _co.item.routerLink; _ck(_v, 3, 0, currVal_8, currVal_9); var currVal_10 = (_co.item.routerLinkActiveOptions || _ck(_v, 7, 0, false)); var currVal_11 = "ui-state-active"; _ck(_v, 4, 0, currVal_10, currVal_11); var currVal_12 = _co.item.icon; _ck(_v, 9, 0, currVal_12); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.item.automationId; var currVal_1 = _co.item.target; var currVal_2 = _co.item.id; var currVal_3 = _co.item.title; var currVal_4 = i0.ɵnov(_v, 3).target; var currVal_5 = i0.ɵnov(_v, 3).href; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5); var currVal_13 = _co.item.label; _ck(_v, 11, 0, currVal_13); }); }
function View_MenuItemContent_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(16777216, null, null, 1, null, View_MenuItemContent_1)), i0.ɵdid(1, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_MenuItemContent_3)), i0.ɵdid(3, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = !_co.item.routerLink; _ck(_v, 1, 0, currVal_0); var currVal_1 = _co.item.routerLink; _ck(_v, 3, 0, currVal_1); }, null); }
exports.View_MenuItemContent_0 = View_MenuItemContent_0;
function View_MenuItemContent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "div", [["pMenuItemContent", ""]], null, null, null, View_MenuItemContent_0, RenderType_MenuItemContent)), i0.ɵdid(1, 49152, null, 0, i1.MenuItemContent, [i1.Menu], { item: [0, "item"] }, null)], function (_ck, _v) { var currVal_0 = ""; _ck(_v, 1, 0, currVal_0); }, null); }
exports.View_MenuItemContent_Host_0 = View_MenuItemContent_Host_0;
var MenuItemContentNgFactory = i0.ɵccf("[pMenuItemContent]", i1.MenuItemContent, View_MenuItemContent_Host_0, { item: "pMenuItemContent" }, {}, []);
exports.MenuItemContentNgFactory = MenuItemContentNgFactory;
var styles_Menu = [];
var RenderType_Menu = i0.ɵcrt({ encapsulation: 2, styles: styles_Menu, data: {} });
exports.RenderType_Menu = RenderType_Menu;
function View_Menu_3(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 2, "li", [["class", "ui-menu-separator ui-widget-content"]], null, null, null, null, null)), i0.ɵdid(1, 278528, null, 0, i2.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i0.ɵpod(2, { "ui-helper-hidden": 0 })], function (_ck, _v) { var currVal_0 = "ui-menu-separator ui-widget-content"; var currVal_1 = _ck(_v, 2, 0, (_v.parent.context.$implicit.visible === false)); _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_Menu_4(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 3, "li", [["class", "ui-submenu-header ui-widget-header ui-corner-all"]], [[1, "data-automationid", 0]], null, null, null, null)), i0.ɵdid(1, 278528, null, 0, i2.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i0.ɵpod(2, { "ui-helper-hidden": 0 }), (_l()(), i0.ɵted(3, null, ["", ""]))], function (_ck, _v) { var currVal_1 = "ui-submenu-header ui-widget-header ui-corner-all"; var currVal_2 = _ck(_v, 2, 0, (_v.parent.context.$implicit.visible === false)); _ck(_v, 1, 0, currVal_1, currVal_2); }, function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit.automationId; _ck(_v, 0, 0, currVal_0); var currVal_3 = _v.parent.context.$implicit.label; _ck(_v, 3, 0, currVal_3); }); }
function View_Menu_6(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 2, "li", [["class", "ui-menu-separator ui-widget-content"]], null, null, null, null, null)), i0.ɵdid(1, 278528, null, 0, i2.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i0.ɵpod(2, { "ui-helper-hidden": 0 })], function (_ck, _v) { var currVal_0 = "ui-menu-separator ui-widget-content"; var currVal_1 = _ck(_v, 2, 0, ((_v.parent.context.$implicit.visible === false) || (_v.parent.parent.context.$implicit.visible === false))); _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_Menu_7(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 6, "li", [["class", "ui-menuitem ui-widget ui-corner-all"]], null, null, null, View_MenuItemContent_0, RenderType_MenuItemContent)), i0.ɵdid(1, 278528, null, 0, i2.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i0.ɵpod(2, { "ui-helper-hidden": 0 }), i0.ɵdid(3, 278528, null, 0, i2.NgStyle, [i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { ngStyle: [0, "ngStyle"] }, null), i0.ɵprd(512, null, i5.DomHandler, i5.DomHandler, []), i0.ɵdid(5, 4341760, null, 0, i4.Tooltip, [i0.ElementRef, i5.DomHandler, i0.NgZone], { tooltipPosition: [0, "tooltipPosition"], positionStyle: [1, "positionStyle"], tooltipStyleClass: [2, "tooltipStyleClass"], disabled: [3, "disabled"], escape: [4, "escape"], text: [5, "text"] }, null), i0.ɵdid(6, 49152, null, 0, i1.MenuItemContent, [i1.Menu], { item: [0, "item"] }, null)], function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit.styleClass; var currVal_1 = _ck(_v, 2, 0, ((_v.parent.context.$implicit.visible === false) || (_v.parent.parent.context.$implicit.visible === false))); _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_2 = _v.parent.context.$implicit.style; _ck(_v, 3, 0, currVal_2); var currVal_3 = _v.parent.context.$implicit.toolTipPosition; var currVal_4 = _v.parent.context.$implicit.positionStyles; var currVal_5 = _v.parent.context.$implicit.toolTipStyleClasses; var currVal_6 = _v.parent.context.$implicit.toolTipDisabled; var currVal_7 = _v.parent.context.$implicit.toolTipEscape; var currVal_8 = _v.parent.context.$implicit.toolTipMessage; _ck(_v, 5, 0, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8); var currVal_9 = _v.parent.context.$implicit; _ck(_v, 6, 0, currVal_9); }, null); }
function View_Menu_5(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(16777216, null, null, 1, null, View_Menu_6)), i0.ɵdid(1, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_Menu_7)), i0.ɵdid(3, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(0, null, null, 0))], function (_ck, _v) { var currVal_0 = _v.context.$implicit.separator; _ck(_v, 1, 0, currVal_0); var currVal_1 = !_v.context.$implicit.separator; _ck(_v, 3, 0, currVal_1); }, null); }
function View_Menu_2(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(16777216, null, null, 1, null, View_Menu_3)), i0.ɵdid(1, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_Menu_4)), i0.ɵdid(3, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_Menu_5)), i0.ɵdid(5, 802816, null, 0, i2.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i0.ɵand(0, null, null, 0))], function (_ck, _v) { var currVal_0 = _v.context.$implicit.separator; _ck(_v, 1, 0, currVal_0); var currVal_1 = !_v.context.$implicit.separator; _ck(_v, 3, 0, currVal_1); var currVal_2 = _v.context.$implicit.items; _ck(_v, 5, 0, currVal_2); }, null); }
function View_Menu_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(16777216, null, null, 1, null, View_Menu_2)), i0.ɵdid(1, 802816, null, 0, i2.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i0.ɵand(0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.model; _ck(_v, 1, 0, currVal_0); }, null); }
function View_Menu_10(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 2, "li", [["class", "ui-menu-separator ui-widget-content"]], null, null, null, null, null)), i0.ɵdid(1, 278528, null, 0, i2.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i0.ɵpod(2, { "ui-helper-hidden": 0 })], function (_ck, _v) { var currVal_0 = "ui-menu-separator ui-widget-content"; var currVal_1 = _ck(_v, 2, 0, (_v.parent.context.$implicit.visible === false)); _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_Menu_11(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 6, "li", [["class", "ui-menuitem ui-widget ui-corner-all"]], null, null, null, View_MenuItemContent_0, RenderType_MenuItemContent)), i0.ɵdid(1, 278528, null, 0, i2.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i0.ɵpod(2, { "ui-helper-hidden": 0 }), i0.ɵdid(3, 278528, null, 0, i2.NgStyle, [i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { ngStyle: [0, "ngStyle"] }, null), i0.ɵprd(512, null, i5.DomHandler, i5.DomHandler, []), i0.ɵdid(5, 4341760, null, 0, i4.Tooltip, [i0.ElementRef, i5.DomHandler, i0.NgZone], { tooltipPosition: [0, "tooltipPosition"], positionStyle: [1, "positionStyle"], tooltipStyleClass: [2, "tooltipStyleClass"], disabled: [3, "disabled"], escape: [4, "escape"], text: [5, "text"] }, null), i0.ɵdid(6, 49152, null, 0, i1.MenuItemContent, [i1.Menu], { item: [0, "item"] }, null)], function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit.styleClass; var currVal_1 = _ck(_v, 2, 0, (_v.parent.context.$implicit.visible === false)); _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_2 = _v.parent.context.$implicit.style; _ck(_v, 3, 0, currVal_2); var currVal_3 = _v.parent.context.$implicit.toolTipPosition; var currVal_4 = _v.parent.context.$implicit.positionStyles; var currVal_5 = _v.parent.context.$implicit.toolTipStyleClasses; var currVal_6 = _v.parent.context.$implicit.toolTipDisabled; var currVal_7 = _v.parent.context.$implicit.toolTipEscape; var currVal_8 = _v.parent.context.$implicit.toolTipMessage; _ck(_v, 5, 0, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8); var currVal_9 = _v.parent.context.$implicit; _ck(_v, 6, 0, currVal_9); }, null); }
function View_Menu_9(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(16777216, null, null, 1, null, View_Menu_10)), i0.ɵdid(1, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_Menu_11)), i0.ɵdid(3, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(0, null, null, 0))], function (_ck, _v) { var currVal_0 = _v.context.$implicit.separator; _ck(_v, 1, 0, currVal_0); var currVal_1 = !_v.context.$implicit.separator; _ck(_v, 3, 0, currVal_1); }, null); }
function View_Menu_8(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(16777216, null, null, 1, null, View_Menu_9)), i0.ɵdid(1, 802816, null, 0, i2.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i0.ɵand(0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.model; _ck(_v, 1, 0, currVal_0); }, null); }
function View_Menu_0(_l) { return i0.ɵvid(0, [i0.ɵqud(402653184, 1, { containerViewChild: 0 }), (_l()(), i0.ɵeld(1, 0, [[1, 0], ["container", 1]], null, 8, "div", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = ((_co.preventDocumentDefault = true) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i0.ɵdid(2, 278528, null, 0, i2.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i0.ɵpod(3, { "ui-menu ui-widget ui-widget-content ui-corner-all": 0, "ui-menu-dynamic ui-shadow": 1 }), i0.ɵdid(4, 278528, null, 0, i2.NgStyle, [i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { ngStyle: [0, "ngStyle"] }, null), (_l()(), i0.ɵeld(5, 0, null, null, 4, "ul", [], null, null, null, null, null)), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_Menu_1)), i0.ɵdid(7, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_Menu_8)), i0.ɵdid(9, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.styleClass; var currVal_1 = _ck(_v, 3, 0, true, _co.popup); _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_2 = _co.style; _ck(_v, 4, 0, currVal_2); var currVal_3 = _co.hasSubMenu(); _ck(_v, 7, 0, currVal_3); var currVal_4 = !_co.hasSubMenu(); _ck(_v, 9, 0, currVal_4); }, null); }
exports.View_Menu_0 = View_Menu_0;
function View_Menu_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 2, "p-menu", [], null, [["window", "resize"]], function (_v, en, $event) { var ad = true; if (("window:resize" === en)) {
        var pd_0 = (i0.ɵnov(_v, 2).onResize($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, View_Menu_0, RenderType_Menu)), i0.ɵprd(512, null, i5.DomHandler, i5.DomHandler, []), i0.ɵdid(2, 4374528, null, 0, i1.Menu, [i0.ElementRef, i5.DomHandler, i0.Renderer2], null, null)], null, null); }
exports.View_Menu_Host_0 = View_Menu_Host_0;
var MenuNgFactory = i0.ɵccf("p-menu", i1.Menu, View_Menu_Host_0, { model: "model", popup: "popup", style: "style", styleClass: "styleClass", appendTo: "appendTo", autoZIndex: "autoZIndex", baseZIndex: "baseZIndex" }, {}, []);
exports.MenuNgFactory = MenuNgFactory;
//# sourceMappingURL=menu.ngfactory.js.map