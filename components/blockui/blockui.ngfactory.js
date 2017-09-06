"use strict";
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = require("@angular/core");
var i1 = require("./blockui");
var i2 = require("@angular/common");
var i3 = require("../dom/domhandler");
exports.BlockUIModuleNgFactory = i0.ɵcmf(i1.BlockUIModule, [], function (_l) {
    return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, []], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(4608, i2.NgLocalization, i2.NgLocaleLocalization, [i0.LOCALE_ID]), i0.ɵmpd(512, i2.CommonModule, i2.CommonModule, []), i0.ɵmpd(512, i1.BlockUIModule, i1.BlockUIModule, [])]);
});
var styles_BlockUI = [];
exports.RenderType_BlockUI = i0.ɵcrt({ encapsulation: 2, styles: styles_BlockUI,
    data: {} });
function View_BlockUI_0(_l) {
    return i0.ɵvid(0, [i0.ɵqud(402653184, 1, { mask: 0 }), (_l()(), i0.ɵted(null, ['\n        '])),
        (_l()(), i0.ɵeld(0, [[1, 0], ['mask', 1]], null, 7, 'div', [['class', 'ui-blockui ui-widget-overlay']], null, null, null, null, null)),
        i0.ɵdid(278528, null, 0, i2.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers,
            i0.ElementRef, i0.Renderer], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
        i0.ɵpod({ 'ui-blockui-document': 0 }), i0.ɵdid(278528, null, 0, i2.NgStyle, [i0.KeyValueDiffers, i0.ElementRef, i0.Renderer], { ngStyle: [0, 'ngStyle'] }, null),
        i0.ɵpod({ display: 0 }), (_l()(), i0.ɵted(null, ['\n            '])), i0.ɵncd(null, 0), (_l()(), i0.ɵted(null, ['\n        '])), (_l()(), i0.ɵted(null, ['\n    ']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = 'ui-blockui ui-widget-overlay';
        var currVal_1 = _ck(_v, 4, 0, !_co.target);
        _ck(_v, 3, 0, currVal_0, currVal_1);
        var currVal_2 = _ck(_v, 6, 0, (_co.blocked ? 'block' : 'none'));
        _ck(_v, 5, 0, currVal_2);
    }, null);
}
exports.View_BlockUI_0 = View_BlockUI_0;
function View_BlockUI_Host_0(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 2, 'p-blockUI', [], null, null, null, View_BlockUI_0, exports.RenderType_BlockUI)),
        i0.ɵprd(512, null, i3.DomHandler, i3.DomHandler, []), i0.ɵdid(4374528, null, 0, i1.BlockUI, [i0.ElementRef, i3.DomHandler], null, null)], null, null);
}
exports.View_BlockUI_Host_0 = View_BlockUI_Host_0;
exports.BlockUINgFactory = i0.ɵccf('p-blockUI', i1.BlockUI, View_BlockUI_Host_0, { target: 'target', blocked: 'blocked' }, {}, ['*']);
//# sourceMappingURL=blockui.ngfactory.js.map