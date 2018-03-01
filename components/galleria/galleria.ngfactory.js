"use strict";
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = require("@angular/core");
var i1 = require("./galleria");
var i2 = require("@angular/common");
var i3 = require("../dom/domhandler");
var GalleriaModuleNgFactory = i0.ɵcmf(i1.GalleriaModule, [], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, []], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(4608, i2.NgLocalization, i2.NgLocaleLocalization, [i0.LOCALE_ID, [2, i2.ɵa]]), i0.ɵmpd(512, i2.CommonModule, i2.CommonModule, []), i0.ɵmpd(512, i1.GalleriaModule, i1.GalleriaModule, [])]); });
exports.GalleriaModuleNgFactory = GalleriaModuleNgFactory;
var styles_Galleria = [];
var RenderType_Galleria = i0.ɵcrt({ encapsulation: 2, styles: styles_Galleria, data: {} });
exports.RenderType_Galleria = RenderType_Galleria;
function View_Galleria_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 5, "li", [["class", "ui-galleria-panel"]], [[4, "width", "px"], [4, "height", "px"]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.clickImage($event, _v.context.$implicit, _v.context.index) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i0.ɵdid(1, 278528, null, 0, i2.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i0.ɵpod(2, { "ui-helper-hidden": 0 }), (_l()(), i0.ɵted(-1, null, ["\n                    "])), (_l()(), i0.ɵeld(4, 0, null, null, 0, "img", [["class", "ui-panel-images"]], [[8, "src", 4], [8, "alt", 0], [8, "title", 0]], null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n                "]))], function (_ck, _v) { var _co = _v.component; var currVal_2 = "ui-galleria-panel"; var currVal_3 = _ck(_v, 2, 0, (_v.context.index != _co.activeIndex)); _ck(_v, 1, 0, currVal_2, currVal_3); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.panelWidth; var currVal_1 = _co.panelHeight; _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_4 = _v.context.$implicit.source; var currVal_5 = _v.context.$implicit.alt; var currVal_6 = _v.context.$implicit.title; _ck(_v, 4, 0, currVal_4, currVal_5, currVal_6); }); }
function View_Galleria_3(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, [["frame", 1]], null, 8, "li", [["class", "ui-galleria-frame"]], [[4, "width", "px"], [4, "height", "px"], [4, "transition", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.frameClick(i0.ɵnov(_v, 0)) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i0.ɵdid(1, 278528, null, 0, i2.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i0.ɵpod(2, { "ui-galleria-frame-active": 0 }), (_l()(), i0.ɵted(-1, null, ["\n                        "])), (_l()(), i0.ɵeld(4, 0, null, null, 3, "div", [["class", "ui-galleria-frame-content"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n                            "])), (_l()(), i0.ɵeld(6, 0, null, null, 0, "img", [["class", "ui-galleria-frame-image"]], [[8, "src", 4], [8, "alt", 0], [8, "title", 0], [4, "width", "px"], [4, "height", "px"]], null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n                        "])), (_l()(), i0.ɵted(-1, null, ["\n                    "]))], function (_ck, _v) { var _co = _v.component; var currVal_3 = "ui-galleria-frame"; var currVal_4 = _ck(_v, 2, 0, (_v.context.index == _co.activeIndex)); _ck(_v, 1, 0, currVal_3, currVal_4); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.frameWidth; var currVal_1 = _co.frameHeight; var currVal_2 = "opacity 0.75s ease"; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2); var currVal_5 = _v.context.$implicit.source; var currVal_6 = _v.context.$implicit.alt; var currVal_7 = _v.context.$implicit.title; var currVal_8 = _co.frameWidth; var currVal_9 = _co.frameHeight; _ck(_v, 6, 0, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9); }); }
function View_Galleria_2(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 9, "div", [], null, null, null, null, null)), i0.ɵdid(1, 278528, null, 0, i2.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { ngClass: [0, "ngClass"] }, null), i0.ɵpod(2, { "ui-galleria-filmstrip-wrapper": 0 }), (_l()(), i0.ɵted(-1, null, ["\n                "])), (_l()(), i0.ɵeld(4, 0, null, null, 4, "ul", [["class", "ui-galleria-filmstrip"], ["style", "transition:left 1s"]], [[4, "left", "px"]], null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n                    "])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_Galleria_3)), i0.ɵdid(7, 802816, null, 0, i2.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i0.ɵted(-1, null, ["\n                "])), (_l()(), i0.ɵted(-1, null, ["\n            "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _ck(_v, 2, 0, true); _ck(_v, 1, 0, currVal_0); var currVal_2 = _co.images; _ck(_v, 7, 0, currVal_2); }, function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.stripLeft; _ck(_v, 4, 0, currVal_1); }); }
function View_Galleria_4(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 0, "div", [["class", "ui-galleria-nav-prev fa fa-fw fa-chevron-circle-left"]], [[4, "bottom", "px"]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.clickNavLeft() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.frameHeight / 2); _ck(_v, 0, 0, currVal_0); }); }
function View_Galleria_5(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 6, "div", [["class", "ui-galleria-caption"], ["style", "display:block"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n                "])), (_l()(), i0.ɵeld(2, 0, null, null, 1, "h4", [], null, null, null, null, null)), (_l()(), i0.ɵted(3, null, ["", ""])), (_l()(), i0.ɵeld(4, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i0.ɵted(5, null, ["", ""])), (_l()(), i0.ɵted(-1, null, ["\n            "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.images[_co.activeIndex] == null) ? null : _co.images[_co.activeIndex].title); _ck(_v, 3, 0, currVal_0); var currVal_1 = ((_co.images[_co.activeIndex] == null) ? null : _co.images[_co.activeIndex].alt); _ck(_v, 5, 0, currVal_1); }); }
function View_Galleria_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵeld(1, 0, null, null, 21, "div", [], [[4, "width", "px"]], null, null, null, null)), i0.ɵdid(2, 278528, null, 0, i2.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i0.ɵpod(3, { "ui-galleria ui-widget ui-widget-content ui-corner-all": 0 }), i0.ɵdid(4, 278528, null, 0, i2.NgStyle, [i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { ngStyle: [0, "ngStyle"] }, null), (_l()(), i0.ɵted(-1, null, ["\n            "])), (_l()(), i0.ɵeld(6, 0, null, null, 4, "ul", [["class", "ui-galleria-panel-wrapper"]], [[4, "width", "px"], [4, "height", "px"]], null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n                "])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_Galleria_1)), i0.ɵdid(9, 802816, null, 0, i2.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i0.ɵted(-1, null, ["\n            "])), (_l()(), i0.ɵted(-1, null, ["\n            "])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_Galleria_2)), i0.ɵdid(13, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵted(-1, null, ["\n            "])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_Galleria_4)), i0.ɵdid(16, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵted(-1, null, ["\n            "])), (_l()(), i0.ɵeld(18, 0, null, null, 0, "div", [["class", "ui-galleria-nav-next fa fa-fw fa-chevron-circle-right"]], [[4, "bottom", "px"]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.clickNavRight() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i0.ɵted(-1, null, ["\n            "])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_Galleria_5)), i0.ɵdid(21, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵted(-1, null, ["\n    "]))], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.styleClass; var currVal_2 = _ck(_v, 3, 0, true); _ck(_v, 2, 0, currVal_1, currVal_2); var currVal_3 = _co.style; _ck(_v, 4, 0, currVal_3); var currVal_6 = _co.images; _ck(_v, 9, 0, currVal_6); var currVal_7 = _co.showFilmstrip; _ck(_v, 13, 0, currVal_7); var currVal_8 = (_co.activeIndex !== 0); _ck(_v, 16, 0, currVal_8); var currVal_10 = (_co.showCaption && _co.images); _ck(_v, 21, 0, currVal_10); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.panelWidth; _ck(_v, 1, 0, currVal_0); var currVal_4 = _co.panelWidth; var currVal_5 = _co.panelHeight; _ck(_v, 6, 0, currVal_4, currVal_5); var currVal_9 = (_co.frameHeight / 2); _ck(_v, 18, 0, currVal_9); }); }
exports.View_Galleria_0 = View_Galleria_0;
function View_Galleria_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 2, "p-galleria", [], null, null, null, View_Galleria_0, RenderType_Galleria)), i0.ɵprd(512, null, i3.DomHandler, i3.DomHandler, []), i0.ɵdid(2, 12763136, null, 0, i1.Galleria, [i0.ElementRef, i3.DomHandler], null, null)], null, null); }
exports.View_Galleria_Host_0 = View_Galleria_Host_0;
var GalleriaNgFactory = i0.ɵccf("p-galleria", i1.Galleria, View_Galleria_Host_0, { style: "style", styleClass: "styleClass", panelWidth: "panelWidth", panelHeight: "panelHeight", frameWidth: "frameWidth", frameHeight: "frameHeight", activeIndex: "activeIndex", showFilmstrip: "showFilmstrip", autoPlay: "autoPlay", transitionInterval: "transitionInterval", showCaption: "showCaption", images: "images" }, { onImageClicked: "onImageClicked", onImageChange: "onImageChange" }, []);
exports.GalleriaNgFactory = GalleriaNgFactory;
//# sourceMappingURL=galleria.ngfactory.js.map