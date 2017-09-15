"use strict";
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = require("@angular/core");
var i1 = require("./paginator");
var i2 = require("@angular/common");
exports.PaginatorModuleNgFactory = i0.ɵcmf(i1.PaginatorModule, [], function (_l) {
    return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, []], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(4608, i2.NgLocalization, i2.NgLocaleLocalization, [i0.LOCALE_ID]), i0.ɵmpd(512, i2.CommonModule, i2.CommonModule, []), i0.ɵmpd(512, i1.PaginatorModule, i1.PaginatorModule, [])]);
});
var styles_Paginator = [];
exports.RenderType_Paginator = i0.ɵcrt({ encapsulation: 2, styles: styles_Paginator,
    data: {} });
function View_Paginator_2(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 3, 'a', [['class',
                'ui-paginator-page ui-paginator-element ui-state-default ui-corner-all'], ['href',
                '#']], null, [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (_co.changePage((_v.context.$implicit - 1), $event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), i0.ɵdid(278528, null, 0, i2.NgClass, [i0.IterableDiffers,
            i0.KeyValueDiffers, i0.ElementRef, i0.Renderer], { klass: [0, 'klass'], ngClass: [1,
                'ngClass'] }, null), i0.ɵpod({ 'ui-state-active': 0 }), (_l()(), i0.ɵted(null, ['', '']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = 'ui-paginator-page ui-paginator-element ui-state-default ui-corner-all';
        var currVal_1 = _ck(_v, 2, 0, ((_v.context.$implicit - 1) == _co.getPage()));
        _ck(_v, 1, 0, currVal_0, currVal_1);
    }, function (_ck, _v) {
        var currVal_2 = _v.context.$implicit;
        _ck(_v, 3, 0, currVal_2);
    });
}
function View_Paginator_4(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 1, 'option', [], [[8, 'value', 0], [8, 'selected', 0]], null, null, null, null)),
        (_l()(), i0.ɵted(null, ['', '']))], null, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _v.context.$implicit;
        var currVal_1 = (_co.rows == _v.context.$implicit);
        _ck(_v, 0, 0, currVal_0, currVal_1);
        var currVal_2 = _v.context.$implicit;
        _ck(_v, 1, 0, currVal_2);
    });
}
function View_Paginator_3(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 4, 'select', [['class',
                'ui-paginator-rpp-options ui-widget ui-state-default']], null, [[null,
                'change']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('change' === en)) {
                var pd_0 = (_co.onRppChange($event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), i0.ɵted(null, ['\n                '])),
        (_l()(), i0.ɵand(16777216, null, null, 1, null, View_Paginator_4)),
        i0.ɵdid(802816, null, 0, i2.NgForOf, [i0.ViewContainerRef, i0.TemplateRef,
            i0.IterableDiffers], { ngForOf: [0, 'ngForOf'] }, null), (_l()(), i0.ɵted(null, ['\n            ']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.rowsPerPageOptions;
        _ck(_v, 3, 0, currVal_0);
    }, null);
}
function View_Paginator_1(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 40, 'div', [], null, null, null, null, null)), i0.ɵdid(278528, null, 0, i2.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef,
            i0.Renderer], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null), i0.ɵdid(278528, null, 0, i2.NgStyle, [i0.KeyValueDiffers, i0.ElementRef, i0.Renderer], { ngStyle: [0,
                'ngStyle'] }, null), (_l()(), i0.ɵted(null, ['\n            '])),
        (_l()(), i0.ɵeld(0, null, null, 5, 'a', [['class', 'ui-paginator-first ui-paginator-element ui-state-default ui-corner-all'],
            ['href', '#']], [[8, 'tabIndex', 0]], [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (_co.changePageToFirst($event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), i0.ɵdid(278528, null, 0, i2.NgClass, [i0.IterableDiffers,
            i0.KeyValueDiffers, i0.ElementRef, i0.Renderer], { klass: [0, 'klass'], ngClass: [1,
                'ngClass'] }, null), i0.ɵpod({ 'ui-state-disabled': 0 }), (_l()(), i0.ɵted(null, ['\n                '])), (_l()(), i0.ɵeld(0, null, null, 0, 'span', [['class', 'fa fa-step-backward']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n            '])),
        (_l()(), i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵeld(0, null, null, 5, 'a', [['class', 'ui-paginator-prev ui-paginator-element ui-state-default ui-corner-all'],
            ['href', '#']], [[8, 'tabIndex', 0]], [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (_co.changePageToPrev($event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), i0.ɵdid(278528, null, 0, i2.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer], { klass: [0,
                'klass'], ngClass: [1, 'ngClass'] }, null), i0.ɵpod({ 'ui-state-disabled': 0 }),
        (_l()(), i0.ɵted(null, ['\n                '])), (_l()(), i0.ɵeld(0, null, null, 0, 'span', [['class', 'fa fa-backward']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵted(null, ['\n            '])),
        (_l()(), i0.ɵeld(0, null, null, 4, 'span', [['class', 'ui-paginator-pages']], null, null, null, null, null)),
        (_l()(), i0.ɵted(null, ['\n                '])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_Paginator_2)), i0.ɵdid(802816, null, 0, i2.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, 'ngForOf'] }, null), (_l()(), i0.ɵted(null, ['\n            '])),
        (_l()(), i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵeld(0, null, null, 5, 'a', [['class', 'ui-paginator-next ui-paginator-element ui-state-default ui-corner-all'],
            ['href', '#']], [[8, 'tabIndex', 0]], [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (_co.changePageToNext($event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), i0.ɵdid(278528, null, 0, i2.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer], { klass: [0,
                'klass'], ngClass: [1, 'ngClass'] }, null), i0.ɵpod({ 'ui-state-disabled': 0 }),
        (_l()(), i0.ɵted(null, ['\n                '])), (_l()(), i0.ɵeld(0, null, null, 0, 'span', [['class', 'fa fa-forward']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵted(null, ['\n            '])),
        (_l()(), i0.ɵeld(0, null, null, 5, 'a', [['class', 'ui-paginator-last ui-paginator-element ui-state-default ui-corner-all'],
            ['href', '#']], [[8, 'tabIndex', 0]], [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (_co.changePageToLast($event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), i0.ɵdid(278528, null, 0, i2.NgClass, [i0.IterableDiffers,
            i0.KeyValueDiffers, i0.ElementRef, i0.Renderer], { klass: [0, 'klass'], ngClass: [1,
                'ngClass'] }, null), i0.ɵpod({ 'ui-state-disabled': 0 }), (_l()(), i0.ɵted(null, ['\n                '])), (_l()(), i0.ɵeld(0, null, null, 0, 'span', [['class', 'fa fa-step-forward']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n            '])),
        (_l()(), i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_Paginator_3)), i0.ɵdid(16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, 'ngIf'] }, null), (_l()(), i0.ɵted(null, ['\n        ']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.styleClass;
        var currVal_1 = 'ui-paginator ui-widget ui-widget-header ui-unselectable-text';
        _ck(_v, 1, 0, currVal_0, currVal_1);
        var currVal_2 = _co.style;
        _ck(_v, 2, 0, currVal_2);
        var currVal_4 = 'ui-paginator-first ui-paginator-element ui-state-default ui-corner-all';
        var currVal_5 = _ck(_v, 6, 0, _co.isFirstPage());
        _ck(_v, 5, 0, currVal_4, currVal_5);
        var currVal_7 = 'ui-paginator-prev ui-paginator-element ui-state-default ui-corner-all';
        var currVal_8 = _ck(_v, 13, 0, _co.isFirstPage());
        _ck(_v, 12, 0, currVal_7, currVal_8);
        var currVal_9 = _co.pageLinks;
        _ck(_v, 21, 0, currVal_9);
        var currVal_11 = 'ui-paginator-next ui-paginator-element ui-state-default ui-corner-all';
        var currVal_12 = _ck(_v, 26, 0, _co.isLastPage());
        _ck(_v, 25, 0, currVal_11, currVal_12);
        var currVal_14 = 'ui-paginator-last ui-paginator-element ui-state-default ui-corner-all';
        var currVal_15 = _ck(_v, 33, 0, _co.isLastPage());
        _ck(_v, 32, 0, currVal_14, currVal_15);
        var currVal_16 = _co.rowsPerPageOptions;
        _ck(_v, 39, 0, currVal_16);
    }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_3 = (_co.isFirstPage() ? (0 - 1) : null);
        _ck(_v, 4, 0, currVal_3);
        var currVal_6 = (_co.isFirstPage() ? (0 - 1) : null);
        _ck(_v, 11, 0, currVal_6);
        var currVal_10 = (_co.isLastPage() ? (0 - 1) : null);
        _ck(_v, 24, 0, currVal_10);
        var currVal_13 = (_co.isLastPage() ? (0 - 1) : null);
        _ck(_v, 31, 0, currVal_13);
    });
}
function View_Paginator_0(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵted(null, ['\n        '])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_Paginator_1)), i0.ɵdid(16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, 'ngIf'] }, null), (_l()(), i0.ɵted(null, ['\n    ']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = (_co.alwaysShow ? true : (_co.pageLinks && (_co.pageLinks.length > 1)));
        _ck(_v, 2, 0, currVal_0);
    }, null);
}
exports.View_Paginator_0 = View_Paginator_0;
function View_Paginator_Host_0(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 1, 'p-paginator', [], null, null, null, View_Paginator_0, exports.RenderType_Paginator)),
        i0.ɵdid(49152, null, 0, i1.Paginator, [], null, null)], null, null);
}
exports.View_Paginator_Host_0 = View_Paginator_Host_0;
exports.PaginatorNgFactory = i0.ɵccf('p-paginator', i1.Paginator, View_Paginator_Host_0, { pageLinkSize: 'pageLinkSize', style: 'style',
    styleClass: 'styleClass', rowsPerPageOptions: 'rowsPerPageOptions', alwaysShow: 'alwaysShow',
    totalRecords: 'totalRecords', first: 'first', rows: 'rows' }, { onPageChange: 'onPageChange' }, []);
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL3NvdXJhYmhzaW5naC9Eb2N1bWVudHMvTXlQcm9qZWN0cy9PcGVuIFNvdXJjZS91bHRpbWF0ZS1wcmltZU5nL3NyYy9hcHAvY29tcG9uZW50cy9wYWdpbmF0b3IvcGFnaW5hdG9yLm5nZmFjdG9yeS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL1VzZXJzL3NvdXJhYmhzaW5naC9Eb2N1bWVudHMvTXlQcm9qZWN0cy9PcGVuIFNvdXJjZS91bHRpbWF0ZS1wcmltZU5nL3NyYy9hcHAvY29tcG9uZW50cy9wYWdpbmF0b3IvcGFnaW5hdG9yLnRzIiwibmc6Ly8vVXNlcnMvc291cmFiaHNpbmdoL0RvY3VtZW50cy9NeVByb2plY3RzL09wZW4gU291cmNlL3VsdGltYXRlLXByaW1lTmcvc3JjL2FwcC9jb21wb25lbnRzL3BhZ2luYXRvci9wYWdpbmF0b3IudHMuUGFnaW5hdG9yLmh0bWwiLCJuZzovLy9Vc2Vycy9zb3VyYWJoc2luZ2gvRG9jdW1lbnRzL015UHJvamVjdHMvT3BlbiBTb3VyY2UvdWx0aW1hdGUtcHJpbWVOZy9zcmMvYXBwL2NvbXBvbmVudHMvcGFnaW5hdG9yL3BhZ2luYXRvci50cy5QYWdpbmF0b3JfSG9zdC5odG1sIl0sInNvdXJjZXNDb250ZW50IjpbIiAiLCJcbiAgICAgICAgPGRpdiBbY2xhc3NdPVwic3R5bGVDbGFzc1wiIFtuZ1N0eWxlXT1cInN0eWxlXCIgW25nQ2xhc3NdPVwiJ3VpLXBhZ2luYXRvciB1aS13aWRnZXQgdWktd2lkZ2V0LWhlYWRlciB1aS11bnNlbGVjdGFibGUtdGV4dCdcIlxuICAgICAgICAgICAgKm5nSWY9XCJhbHdheXNTaG93ID8gdHJ1ZSA6IChwYWdlTGlua3MgJiYgcGFnZUxpbmtzLmxlbmd0aCA+IDEpXCI+XG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwidWktcGFnaW5hdG9yLWZpcnN0IHVpLXBhZ2luYXRvci1lbGVtZW50IHVpLXN0YXRlLWRlZmF1bHQgdWktY29ybmVyLWFsbFwiXG4gICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJjaGFuZ2VQYWdlVG9GaXJzdCgkZXZlbnQpXCIgW25nQ2xhc3NdPVwieyd1aS1zdGF0ZS1kaXNhYmxlZCc6aXNGaXJzdFBhZ2UoKX1cIiBbdGFiaW5kZXhdPVwiaXNGaXJzdFBhZ2UoKSA/IC0xIDogbnVsbFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3RlcC1iYWNrd2FyZFwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJ1aS1wYWdpbmF0b3ItcHJldiB1aS1wYWdpbmF0b3ItZWxlbWVudCB1aS1zdGF0ZS1kZWZhdWx0IHVpLWNvcm5lci1hbGxcIlxuICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwiY2hhbmdlUGFnZVRvUHJldigkZXZlbnQpXCIgW25nQ2xhc3NdPVwieyd1aS1zdGF0ZS1kaXNhYmxlZCc6aXNGaXJzdFBhZ2UoKX1cIiBbdGFiaW5kZXhdPVwiaXNGaXJzdFBhZ2UoKSA/IC0xIDogbnVsbFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtYmFja3dhcmRcIj48L3NwYW4+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInVpLXBhZ2luYXRvci1wYWdlc1wiPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgKm5nRm9yPVwibGV0IHBhZ2VMaW5rIG9mIHBhZ2VMaW5rc1wiIGNsYXNzPVwidWktcGFnaW5hdG9yLXBhZ2UgdWktcGFnaW5hdG9yLWVsZW1lbnQgdWktc3RhdGUtZGVmYXVsdCB1aS1jb3JuZXItYWxsXCJcbiAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cImNoYW5nZVBhZ2UocGFnZUxpbmsgLSAxLCAkZXZlbnQpXCIgW25nQ2xhc3NdPVwieyd1aS1zdGF0ZS1hY3RpdmUnOiAocGFnZUxpbmstMSA9PSBnZXRQYWdlKCkpfVwiPnt7cGFnZUxpbmt9fTwvYT5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJ1aS1wYWdpbmF0b3ItbmV4dCB1aS1wYWdpbmF0b3ItZWxlbWVudCB1aS1zdGF0ZS1kZWZhdWx0IHVpLWNvcm5lci1hbGxcIlxuICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwiY2hhbmdlUGFnZVRvTmV4dCgkZXZlbnQpXCIgW25nQ2xhc3NdPVwieyd1aS1zdGF0ZS1kaXNhYmxlZCc6aXNMYXN0UGFnZSgpfVwiIFt0YWJpbmRleF09XCJpc0xhc3RQYWdlKCkgPyAtMSA6IG51bGxcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLWZvcndhcmRcIj48L3NwYW4+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwidWktcGFnaW5hdG9yLWxhc3QgdWktcGFnaW5hdG9yLWVsZW1lbnQgdWktc3RhdGUtZGVmYXVsdCB1aS1jb3JuZXItYWxsXCJcbiAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cImNoYW5nZVBhZ2VUb0xhc3QoJGV2ZW50KVwiIFtuZ0NsYXNzXT1cInsndWktc3RhdGUtZGlzYWJsZWQnOmlzTGFzdFBhZ2UoKX1cIiBbdGFiaW5kZXhdPVwiaXNMYXN0UGFnZSgpID8gLTEgOiBudWxsXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGVwLWZvcndhcmRcIj48L3NwYW4+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVwidWktcGFnaW5hdG9yLXJwcC1vcHRpb25zIHVpLXdpZGdldCB1aS1zdGF0ZS1kZWZhdWx0XCIgKm5nSWY9XCJyb3dzUGVyUGFnZU9wdGlvbnNcIiAoY2hhbmdlKT1cIm9uUnBwQ2hhbmdlKCRldmVudClcIj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cImxldCBvcHQgb2Ygcm93c1BlclBhZ2VPcHRpb25zXCIgW3ZhbHVlXT1cIm9wdFwiIFtzZWxlY3RlZF09XCJyb3dzID09IG9wdFwiPnt7b3B0fX08L29wdGlvbj5cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8L2Rpdj5cbiAgICAiLCI8cC1wYWdpbmF0b3I+PC9wLXBhZ2luYXRvcj4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkNZZ0I7TUFBQTtNQUFBO0lBQUE7SUFBQTtJQUNJO01BQUE7TUFBQTtJQUFBO0lBREo7RUFBQSx1Q0FBQTtrREFBQTtNQUFBLGtDQUMrQyx3QkFBMkQ7TUFBQTs7SUFEM0Q7SUFDQTtJQUQvQyxXQUErQyxVQUNBLFNBRC9DOztJQUMwRztJQUFBOzs7O29CQVcxRztNQUFBO01BQXNGOztJQUF2QztJQUFjO0lBQTdELFdBQStDLFVBQWMsU0FBN0Q7SUFBc0Y7SUFBQTs7OztvQkFEMUY7TUFBQTtNQUFBO0lBQUE7SUFBQTtJQUErRjtNQUFBO01BQUE7SUFBQTtJQUEvRjtFQUFBLGdDQUE4SDtNQUMxSDthQUFBOzRCQUFBLHlDQUFzRztVQUFBOztJQUE5RjtJQUFSLFdBQVEsU0FBUjs7OztvQkF2QlI7TUFBQSwrRUFBQTtNQUFBO3FCQUFBLGtFQUFBO01BQUE7VUFBQSwyQkFDb0U7TUFDaEU7VUFBQTtRQUFBO1FBQUE7UUFDUTtVQUFBO1VBQUE7UUFBQTtRQURSO01BQUEsdUNBQUE7c0RBQUE7VUFBQSxrQ0FDNEMsMEJBQXVGO1VBQUEseUJBQy9IO1VBQUE7VUFBQSw4QkFBeUM7TUFDekMsbURBQ0o7VUFBQTtjQUFBO1lBQUE7WUFBQTtZQUNRO2NBQUE7Y0FBQTtZQUFBO1lBRFI7VUFBQSx1Q0FBQTtVQUFBO2NBQUEsc0RBQzJDO01BQXVGLHVEQUM5SDtVQUFBO1VBQUEsNENBQW9DO1VBQUEscUJBQ3BDO01BQ0o7VUFBQTtNQUFpQyx1REFDN0I7VUFBQSxzRUFBQTtVQUFBO1VBQUEsdUNBQzBIO01BQ3ZILG1EQUNQO1VBQUE7Y0FBQTtZQUFBO1lBQUE7WUFDUTtjQUFBO2NBQUE7WUFBQTtZQURSO1VBQUEsdUNBQUE7VUFBQTtjQUFBLHNEQUMyQztNQUFxRix1REFDNUg7VUFBQTtVQUFBLDRDQUFtQztVQUFBLHFCQUNuQztNQUNKO1VBQUE7UUFBQTtRQUFBO1FBQ1E7VUFBQTtVQUFBO1FBQUE7UUFEUjtNQUFBLHVDQUFBO3NEQUFBO1VBQUEsa0NBQzJDLDBCQUFxRjtVQUFBLHlCQUM1SDtVQUFBO1VBQUEsOEJBQXdDO01BQ3hDLG1EQUNKO1VBQUEsc0VBQUE7VUFBQTtVQUFBLGVBRVM7O0lBeEJSO0lBQXVDO0lBQTVDLFdBQUssVUFBdUMsU0FBNUM7SUFBMEI7SUFBMUIsV0FBMEIsU0FBMUI7SUFFZ0I7SUFDZ0M7SUFENUMsV0FBWSxVQUNnQyxTQUQ1QztJQUlZO0lBQytCO0lBRDNDLFlBQVksVUFDK0IsU0FEM0M7SUFLZ0I7SUFBWixZQUFZLFNBQVo7SUFHUTtJQUMrQjtJQUQzQyxZQUFZLFdBQytCLFVBRDNDO0lBSVk7SUFDK0I7SUFEM0MsWUFBWSxXQUMrQixVQUQzQztJQUlvRTtJQUFwRSxZQUFvRSxVQUFwRTs7O0lBbkI0RjtJQUQ1RixXQUM0RixTQUQ1RjtJQUsyRjtJQUQzRixZQUMyRixTQUQzRjtJQVMwRjtJQUQxRixZQUMwRixVQUQxRjtJQUswRjtJQUQxRixZQUMwRixVQUQxRjs7OztvQkFuQlosK0NBQ1E7TUFBQSxzRUFBQTtNQUFBO01BQUEsZUF5Qk07O0lBeEJGO0lBREosV0FDSSxTQURKOzs7O29CQ0RSO01BQUE7YUFBQTs7Ozs7OzsifQ==
//# sourceMappingURL=paginator.ngfactory.js.map