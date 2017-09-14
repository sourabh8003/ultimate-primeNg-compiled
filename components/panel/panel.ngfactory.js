"use strict";
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = require("@angular/core");
var i1 = require("./panel");
var i2 = require("@angular/common");
var i3 = require("../common/shared");
exports.PanelModuleNgFactory = i0.ɵcmf(i1.PanelModule, [], function (_l) {
    return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, []], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(4608, i2.NgLocalization, i2.NgLocaleLocalization, [i0.LOCALE_ID]), i0.ɵmpd(512, i2.CommonModule, i2.CommonModule, []), i0.ɵmpd(512, i3.SharedModule, i3.SharedModule, []), i0.ɵmpd(512, i1.PanelModule, i1.PanelModule, [])]);
});
var styles_Panel = [];
exports.RenderType_Panel = i0.ɵcrt({ encapsulation: 2, styles: styles_Panel,
    data: { 'animation': [{ type: 7, name: 'panelContent', definitions: [{ type: 0, name: 'hidden',
                        styles: { type: 6, styles: { height: '0' }, offset: null }, options: undefined },
                    { type: 0, name: 'visible', styles: { type: 6, styles: { height: '*' }, offset: null },
                        options: undefined }, { type: 1, expr: 'visible <=> hidden', animation: { type: 4,
                            styles: null, timings: '400ms cubic-bezier(0.86, 0, 0.07, 1)' }, options: null }],
                options: {} }] } });
function View_Panel_1(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 1, 'span', [['class',
                'ui-panel-title']], null, null, null, null, null)),
        (_l()(), i0.ɵted(null, ['', '']))], null, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.header;
        _ck(_v, 1, 0, currVal_0);
    });
}
function View_Panel_2(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 3, 'a', [['class',
                'ui-panel-titlebar-icon ui-panel-titlebar-toggler ui-corner-all ui-state-default'],
            ['href', '#']], null, [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (_co.toggle($event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), i0.ɵted(null, ['\n                    '])),
        (_l()(), i0.ɵeld(0, null, null, 0, 'span', [], [[8, 'className',
                0]], null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                ']))], null, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = (_co.collapsed ? ('fa fa-fw ' + _co.expandIcon) : ('fa fa-fw ' + _co.collapseIcon));
        _ck(_v, 2, 0, currVal_0);
    });
}
function View_Panel_3(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 3, 'div', [['class',
                'ui-panel-footer ui-widget-content']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                    '])),
        i0.ɵncd(null, 2), (_l()(), i0.ɵted(null, ['\n                ']))], null, null);
}
function View_Panel_0(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵted(null, ['\n        '])), (_l()(), i0.ɵeld(0, null, null, 27, 'div', [], null, null, null, null, null)), i0.ɵdid(278528, null, 0, i2.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer], { klass: [0,
                'klass'], ngClass: [1, 'ngClass'] }, null), i0.ɵdid(278528, null, 0, i2.NgStyle, [i0.KeyValueDiffers, i0.ElementRef, i0.Renderer], { ngStyle: [0, 'ngStyle'] }, null), (_l()(), i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵeld(0, null, null, 9, 'div', [['class', 'ui-panel-titlebar ui-widget-header ui-helper-clearfix ui-corner-all']], null, null, null, null, null)), (_l()(),
            i0.ɵted(null, ['\n                '])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_Panel_1)), i0.ɵdid(16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, 'ngIf'] }, null), (_l()(),
            i0.ɵted(null, ['\n                '])), i0.ɵncd(null, 0), (_l()(),
            i0.ɵted(null, ['\n                '])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_Panel_2)), i0.ɵdid(16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, 'ngIf'] }, null), (_l()(),
            i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵted(null, ['\n            '])),
        (_l()(), i0.ɵeld(0, null, null, 11, 'div', [['class', 'ui-panel-content-wrapper']], [[24, '@panelContent', 0]], [[null, '@panelContent.done']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('@panelContent.done' === en)) {
                var pd_0 = (_co.onToggleDone($event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), i0.ɵdid(278528, null, 0, i2.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer], { klass: [0,
                'klass'], ngClass: [1, 'ngClass'] }, null), i0.ɵpod({ 'ui-panel-content-wrapper-overflown': 0 }),
        (_l()(), i0.ɵted(null, ['\n                '])), (_l()(), i0.ɵeld(0, null, null, 3, 'div', [['class', 'ui-panel-content ui-widget-content']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                    '])), i0.ɵncd(null, 1), (_l()(), i0.ɵted(null, ['\n                '])), (_l()(), i0.ɵted(null, ['\n                \n                '])),
        (_l()(), i0.ɵand(16777216, null, null, 1, null, View_Panel_3)),
        i0.ɵdid(16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0,
                'ngIf'] }, null), (_l()(), i0.ɵted(null, ['\n            '])),
        (_l()(), i0.ɵted(null, ['\n        '])), (_l()(), i0.ɵted(null, ['\n    ']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.styleClass;
        var currVal_1 = 'ui-panel ui-widget ui-widget-content ui-corner-all';
        _ck(_v, 2, 0, currVal_0, currVal_1);
        var currVal_2 = _co.style;
        _ck(_v, 3, 0, currVal_2);
        var currVal_3 = _co.header;
        _ck(_v, 8, 0, currVal_3);
        var currVal_4 = _co.toggleable;
        _ck(_v, 13, 0, currVal_4);
        var currVal_6 = 'ui-panel-content-wrapper';
        var currVal_7 = _ck(_v, 18, 0, (_co.collapsed || _co.animating));
        _ck(_v, 17, 0, currVal_6, currVal_7);
        var currVal_8 = _co.footerFacet;
        _ck(_v, 26, 0, currVal_8);
    }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_5 = (_co.collapsed ? 'hidden' : 'visible');
        _ck(_v, 16, 0, currVal_5);
    });
}
exports.View_Panel_0 = View_Panel_0;
function View_Panel_Host_0(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 2, 'p-panel', [], null, null, null, View_Panel_0, exports.RenderType_Panel)), i0.ɵdid(49152, null, 1, i1.Panel, [i0.ElementRef], null, null), i0.ɵqud(335544320, 1, { footerFacet: 0 })], null, null);
}
exports.View_Panel_Host_0 = View_Panel_Host_0;
exports.PanelNgFactory = i0.ɵccf('p-panel', i1.Panel, View_Panel_Host_0, { toggleable: 'toggleable', header: 'header', collapsed: 'collapsed',
    style: 'style', styleClass: 'styleClass', expandIcon: 'expandIcon', collapseIcon: 'collapseIcon' }, { collapsedChange: 'collapsedChange', onBeforeToggle: 'onBeforeToggle', onAfterToggle: 'onAfterToggle' }, ['p-header', '*', 'p-footer']);
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL3NvdXJhYmhzaW5naC9Eb2N1bWVudHMvTXlQcm9qZWN0cy9PcGVuIFNvdXJjZS91bHRpbWF0ZS1wcmltZU5nL3NyYy9hcHAvY29tcG9uZW50cy9wYW5lbC9wYW5lbC5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9Vc2Vycy9zb3VyYWJoc2luZ2gvRG9jdW1lbnRzL015UHJvamVjdHMvT3BlbiBTb3VyY2UvdWx0aW1hdGUtcHJpbWVOZy9zcmMvYXBwL2NvbXBvbmVudHMvcGFuZWwvcGFuZWwudHMiLCJuZzovLy9Vc2Vycy9zb3VyYWJoc2luZ2gvRG9jdW1lbnRzL015UHJvamVjdHMvT3BlbiBTb3VyY2UvdWx0aW1hdGUtcHJpbWVOZy9zcmMvYXBwL2NvbXBvbmVudHMvcGFuZWwvcGFuZWwudHMuUGFuZWwuaHRtbCIsIm5nOi8vL1VzZXJzL3NvdXJhYmhzaW5naC9Eb2N1bWVudHMvTXlQcm9qZWN0cy9PcGVuIFNvdXJjZS91bHRpbWF0ZS1wcmltZU5nL3NyYy9hcHAvY29tcG9uZW50cy9wYW5lbC9wYW5lbC50cy5QYW5lbF9Ib3N0Lmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiICIsIlxuICAgICAgICA8ZGl2IFtuZ0NsYXNzXT1cIid1aS1wYW5lbCB1aS13aWRnZXQgdWktd2lkZ2V0LWNvbnRlbnQgdWktY29ybmVyLWFsbCdcIiBbbmdTdHlsZV09XCJzdHlsZVwiIFtjbGFzc109XCJzdHlsZUNsYXNzXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidWktcGFuZWwtdGl0bGViYXIgdWktd2lkZ2V0LWhlYWRlciB1aS1oZWxwZXItY2xlYXJmaXggdWktY29ybmVyLWFsbFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidWktcGFuZWwtdGl0bGVcIiAqbmdJZj1cImhlYWRlclwiPnt7aGVhZGVyfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwicC1oZWFkZXJcIj48L25nLWNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgPGEgKm5nSWY9XCJ0b2dnbGVhYmxlXCIgY2xhc3M9XCJ1aS1wYW5lbC10aXRsZWJhci1pY29uIHVpLXBhbmVsLXRpdGxlYmFyLXRvZ2dsZXIgdWktY29ybmVyLWFsbCB1aS1zdGF0ZS1kZWZhdWx0XCIgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwidG9nZ2xlKCRldmVudClcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gW2NsYXNzXT1cImNvbGxhcHNlZCA/ICdmYSBmYS1mdyAnICsgZXhwYW5kSWNvbiA6ICdmYSBmYS1mdyAnICsgY29sbGFwc2VJY29uXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVpLXBhbmVsLWNvbnRlbnQtd3JhcHBlclwiIFtAcGFuZWxDb250ZW50XT1cImNvbGxhcHNlZCA/ICdoaWRkZW4nIDogJ3Zpc2libGUnXCIgKEBwYW5lbENvbnRlbnQuZG9uZSk9XCJvblRvZ2dsZURvbmUoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwieyd1aS1wYW5lbC1jb250ZW50LXdyYXBwZXItb3ZlcmZsb3duJzogY29sbGFwc2VkfHxhbmltYXRpbmd9XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVpLXBhbmVsLWNvbnRlbnQgdWktd2lkZ2V0LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1aS1wYW5lbC1mb290ZXIgdWktd2lkZ2V0LWNvbnRlbnRcIiAqbmdJZj1cImZvb3RlckZhY2V0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cInAtZm9vdGVyXCI+PC9uZy1jb250ZW50PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICIsIjxwLXBhbmVsPjwvcC1wYW5lbD4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkNHZ0I7TUFBQTtNQUE0Qzs7SUFBQTtJQUFBOzs7O29CQUU1QztNQUFBO01BQUE7SUFBQTtJQUFBO0lBQ0k7TUFBQTtNQUFBO0lBQUE7SUFESjtFQUFBLGdDQUM2QjtNQUN6QjtVQUFBLDhEQUF5RjtVQUFBOztJQUFuRjtJQUFOLFdBQU0sU0FBTjs7OztvQkFTSjtNQUFBO01BQUEsOEJBQW1FO2FBQy9ELGtCQUEyQzs7OztvQkFqQi9ELCtDQUNRO01BQUE7TUFBQSxtREFBQTtNQUFBO1VBQUEsc0RBQUE7TUFBQTtNQUFBLGVBQTZHLG1EQUN6RztNQUFBO01BQUEsd0VBQWlGO2FBQUEsd0NBQzdFO01BQUEsb0RBQUE7TUFBQSxzRUFBNkQ7YUFBQSwrQ0FDN0Qsa0JBQTJDO2FBQUEsd0NBQzNDO01BQUEsb0RBQUE7TUFBQSxzRUFHSTthQUFBLG9DQUNGO01BQ047VUFBQTtZQUFBO1lBQUE7WUFBeUY7Y0FBQTtjQUFBO1lBQUE7WUFBekY7VUFBQSx1Q0FBQTtVQUFBO2NBQUEsc0RBQ0k7TUFBeUUsdURBQ3pFO1VBQUE7VUFBQSwwREFBZ0Q7VUFBQSxvQ0FDNUMsa0JBQXlCO1VBQUEseUJBQ3ZCO01BRU47YUFBQTtVQUFBLHdCQUVNO01BQ0osK0NBQ0o7VUFBQTs7SUFuQmtGO0lBQW5GO0lBQUwsV0FBd0YsVUFBbkYsU0FBTDtJQUFzRTtJQUF0RSxXQUFzRSxTQUF0RTtJQUVxQztJQUE3QixXQUE2QixTQUE3QjtJQUVHO0lBQUgsWUFBRyxTQUFIO0lBS0M7SUFDRDtJQURKLFlBQUssVUFDRCxTQURKO0lBTW1EO0lBQS9DLFlBQStDLFNBQS9DOzs7SUFOa0M7SUFBdEMsWUFBc0MsU0FBdEM7Ozs7b0JDVlo7TUFBQSxpRkFBQTtNQUFBO01BQUE7Ozs7OzsifQ==
//# sourceMappingURL=panel.ngfactory.js.map