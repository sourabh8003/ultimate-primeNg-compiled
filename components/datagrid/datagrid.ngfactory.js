"use strict";
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = require("@angular/core");
var i1 = require("./datagrid");
var i2 = require("@angular/common");
var i3 = require("../common/shared");
var i4 = require("../paginator/paginator");
var i5 = require("../paginator/paginator.ngfactory");
exports.DataGridModuleNgFactory = i0.ɵcmf(i1.DataGridModule, [], function (_l) {
    return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, []], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(4608, i2.NgLocalization, i2.NgLocaleLocalization, [i0.LOCALE_ID]), i0.ɵmpd(512, i2.CommonModule, i2.CommonModule, []), i0.ɵmpd(512, i3.SharedModule, i3.SharedModule, []), i0.ɵmpd(512, i4.PaginatorModule, i4.PaginatorModule, []),
        i0.ɵmpd(512, i1.DataGridModule, i1.DataGridModule, [])]);
});
var styles_DataGrid = [];
exports.RenderType_DataGrid = i0.ɵcrt({ encapsulation: 2, styles: styles_DataGrid,
    data: {} });
function View_DataGrid_1(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 3, 'div', [['class',
                'ui-datagrid-header ui-widget-header ui-corner-top']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                '])),
        i0.ɵncd(null, 0), (_l()(), i0.ɵted(null, ['\n            ']))], null, null);
}
function View_DataGrid_2(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 1, 'p-paginator', [['styleClass', 'ui-paginator-bottom']], null, [[null, 'onPageChange']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('onPageChange' === en)) {
                var pd_0 = (_co.paginate($event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, i5.View_Paginator_0, i5.RenderType_Paginator)), i0.ɵdid(49152, null, 0, i4.Paginator, [], { pageLinkSize: [0, 'pageLinkSize'], styleClass: [1,
                'styleClass'], rowsPerPageOptions: [2, 'rowsPerPageOptions'], alwaysShow: [3,
                'alwaysShow'], totalRecords: [4, 'totalRecords'], first: [5, 'first'], rows: [6,
                'rows'] }, { onPageChange: 'onPageChange' })], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.pageLinks;
        var currVal_1 = 'ui-paginator-bottom';
        var currVal_2 = _co.rowsPerPageOptions;
        var currVal_3 = _co.alwaysShowPaginator;
        var currVal_4 = _co.totalRecords;
        var currVal_5 = _co.first;
        var currVal_6 = _co.rows;
        _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);
    }, null);
}
function View_DataGrid_3(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵand(0, null, null, 0))], null, null);
}
function View_DataGrid_4(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 1, 'div', [['class',
                'ui-widget-content ui-g-12']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['', '']))], null, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.emptyMessage;
        _ck(_v, 1, 0, currVal_0);
    });
}
function View_DataGrid_5(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 1, 'p-paginator', [['styleClass', 'ui-paginator-bottom']], null, [[null, 'onPageChange']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('onPageChange' === en)) {
                var pd_0 = (_co.paginate($event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, i5.View_Paginator_0, i5.RenderType_Paginator)), i0.ɵdid(49152, null, 0, i4.Paginator, [], { pageLinkSize: [0, 'pageLinkSize'], styleClass: [1,
                'styleClass'], rowsPerPageOptions: [2, 'rowsPerPageOptions'], alwaysShow: [3,
                'alwaysShow'], totalRecords: [4, 'totalRecords'], first: [5, 'first'], rows: [6,
                'rows'] }, { onPageChange: 'onPageChange' })], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.pageLinks;
        var currVal_1 = 'ui-paginator-bottom';
        var currVal_2 = _co.rowsPerPageOptions;
        var currVal_3 = _co.alwaysShowPaginator;
        var currVal_4 = _co.totalRecords;
        var currVal_5 = _co.first;
        var currVal_6 = _co.rows;
        _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);
    }, null);
}
function View_DataGrid_6(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 3, 'div', [['class',
                'ui-datagrid-footer ui-widget-header ui-corner-top']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                '])),
        i0.ɵncd(null, 1), (_l()(), i0.ɵted(null, ['\n            ']))], null, null);
}
function View_DataGrid_0(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵted(null, ['\n        '])), (_l()(), i0.ɵeld(0, null, null, 27, 'div', [], null, null, null, null, null)), i0.ɵdid(278528, null, 0, i2.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer], { klass: [0,
                'klass'], ngClass: [1, 'ngClass'] }, null), i0.ɵdid(278528, null, 0, i2.NgStyle, [i0.KeyValueDiffers, i0.ElementRef, i0.Renderer], { ngStyle: [0, 'ngStyle'] }, null), (_l()(), i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_DataGrid_1)), i0.ɵdid(16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, 'ngIf'] }, null), (_l()(), i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_DataGrid_2)), i0.ɵdid(16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, 'ngIf'] }, null), (_l()(), i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵeld(0, null, null, 10, 'div', [['class', 'ui-datagrid-content ui-widget-content']], null, null, null, null, null)), (_l()(),
            i0.ɵted(null, ['\n                '])), (_l()(), i0.ɵeld(0, null, null, 7, 'div', [['class', 'ui-g']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                    '])),
        (_l()(), i0.ɵand(16777216, null, null, 1, null, View_DataGrid_3)),
        i0.ɵdid(802816, null, 0, i2.NgForOf, [i0.ViewContainerRef, i0.TemplateRef,
            i0.IterableDiffers], { ngForOf: [0, 'ngForOf'], ngForTrackBy: [1, 'ngForTrackBy'],
            ngForTemplate: [2, 'ngForTemplate'] }, null), (_l()(), i0.ɵted(null, ['\n                    '])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_DataGrid_4)), i0.ɵdid(16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, 'ngIf'] }, null), (_l()(),
            i0.ɵted(null, ['\n                '])), (_l()(), i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵted(null, ['\n            '])),
        (_l()(), i0.ɵand(16777216, null, null, 1, null, View_DataGrid_5)),
        i0.ɵdid(16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0,
                'ngIf'] }, null), (_l()(), i0.ɵted(null, ['\n            '])),
        (_l()(), i0.ɵand(16777216, null, null, 1, null, View_DataGrid_6)),
        i0.ɵdid(16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0,
                'ngIf'] }, null), (_l()(), i0.ɵted(null, ['\n        '])), (_l()(),
            i0.ɵted(null, ['\n    ']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.styleClass;
        var currVal_1 = 'ui-datagrid ui-widget';
        _ck(_v, 2, 0, currVal_0, currVal_1);
        var currVal_2 = _co.style;
        _ck(_v, 3, 0, currVal_2);
        var currVal_3 = _co.header;
        _ck(_v, 6, 0, currVal_3);
        var currVal_4 = ((_co.paginator && (_co.paginatorPosition != 'bottom')) || (_co.paginatorPosition == 'both'));
        _ck(_v, 9, 0, currVal_4);
        var currVal_5 = _co.dataToRender;
        var currVal_6 = _co.trackBy;
        var currVal_7 = _co.itemTemplate;
        _ck(_v, 16, 0, currVal_5, currVal_6, currVal_7);
        var currVal_8 = _co.isEmpty();
        _ck(_v, 19, 0, currVal_8);
        var currVal_9 = ((_co.paginator && (_co.paginatorPosition != 'top')) || (_co.paginatorPosition == 'both'));
        _ck(_v, 24, 0, currVal_9);
        var currVal_10 = _co.footer;
        _ck(_v, 27, 0, currVal_10);
    }, null);
}
exports.View_DataGrid_0 = View_DataGrid_0;
function View_DataGrid_Host_0(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 4, 'p-dataGrid', [], null, null, null, View_DataGrid_0, exports.RenderType_DataGrid)),
        i0.ɵdid(5554176, null, 3, i1.DataGrid, [i0.ElementRef, i0.IterableDiffers], null, null), i0.ɵqud(335544320, 1, { header: 0 }), i0.ɵqud(335544320, 2, { footer: 0 }), i0.ɵqud(603979776, 3, { templates: 1 })], function (_ck, _v) {
        _ck(_v, 1, 0);
    }, null);
}
exports.View_DataGrid_Host_0 = View_DataGrid_Host_0;
exports.DataGridNgFactory = i0.ɵccf('p-dataGrid', i1.DataGrid, View_DataGrid_Host_0, { paginator: 'paginator', rows: 'rows', totalRecords: 'totalRecords',
    pageLinks: 'pageLinks', rowsPerPageOptions: 'rowsPerPageOptions', lazy: 'lazy',
    emptyMessage: 'emptyMessage', style: 'style', styleClass: 'styleClass', paginatorPosition: 'paginatorPosition',
    alwaysShowPaginator: 'alwaysShowPaginator', trackBy: 'trackBy', immutable: 'immutable',
    value: 'value' }, { onLazyLoad: 'onLazyLoad', onPage: 'onPage' }, ['p-header', 'p-footer']);
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL3NvdXJhYmhzaW5naC9Eb2N1bWVudHMvTXlQcm9qZWN0cy9PcGVuIFNvdXJjZS91bHRpbWF0ZS1wcmltZU5nL3NyYy9hcHAvY29tcG9uZW50cy9kYXRhZ3JpZC9kYXRhZ3JpZC5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9Vc2Vycy9zb3VyYWJoc2luZ2gvRG9jdW1lbnRzL015UHJvamVjdHMvT3BlbiBTb3VyY2UvdWx0aW1hdGUtcHJpbWVOZy9zcmMvYXBwL2NvbXBvbmVudHMvZGF0YWdyaWQvZGF0YWdyaWQudHMiLCJuZzovLy9Vc2Vycy9zb3VyYWJoc2luZ2gvRG9jdW1lbnRzL015UHJvamVjdHMvT3BlbiBTb3VyY2UvdWx0aW1hdGUtcHJpbWVOZy9zcmMvYXBwL2NvbXBvbmVudHMvZGF0YWdyaWQvZGF0YWdyaWQudHMuRGF0YUdyaWQuaHRtbCIsIm5nOi8vL1VzZXJzL3NvdXJhYmhzaW5naC9Eb2N1bWVudHMvTXlQcm9qZWN0cy9PcGVuIFNvdXJjZS91bHRpbWF0ZS1wcmltZU5nL3NyYy9hcHAvY29tcG9uZW50cy9kYXRhZ3JpZC9kYXRhZ3JpZC50cy5EYXRhR3JpZF9Ib3N0Lmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiICIsIlxuICAgICAgICA8ZGl2IFtuZ0NsYXNzXT1cIid1aS1kYXRhZ3JpZCB1aS13aWRnZXQnXCIgW25nU3R5bGVdPVwic3R5bGVcIiBbY2xhc3NdPVwic3R5bGVDbGFzc1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVpLWRhdGFncmlkLWhlYWRlciB1aS13aWRnZXQtaGVhZGVyIHVpLWNvcm5lci10b3BcIiAqbmdJZj1cImhlYWRlclwiPlxuICAgICAgICAgICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cInAtaGVhZGVyXCI+PC9uZy1jb250ZW50PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8cC1wYWdpbmF0b3IgW3Jvd3NdPVwicm93c1wiIFtmaXJzdF09XCJmaXJzdFwiIFt0b3RhbFJlY29yZHNdPVwidG90YWxSZWNvcmRzXCIgW3BhZ2VMaW5rU2l6ZV09XCJwYWdlTGlua3NcIiBbYWx3YXlzU2hvd109XCJhbHdheXNTaG93UGFnaW5hdG9yXCJcbiAgICAgICAgICAgICAgICAob25QYWdlQ2hhbmdlKT1cInBhZ2luYXRlKCRldmVudClcIiBzdHlsZUNsYXNzPVwidWktcGFnaW5hdG9yLWJvdHRvbVwiIFtyb3dzUGVyUGFnZU9wdGlvbnNdPVwicm93c1BlclBhZ2VPcHRpb25zXCIgKm5nSWY9XCJwYWdpbmF0b3IgJiYgcGFnaW5hdG9yUG9zaXRpb24hPSdib3R0b20nIHx8IHBhZ2luYXRvclBvc2l0aW9uID09J2JvdGgnXCI+PC9wLXBhZ2luYXRvcj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1aS1kYXRhZ3JpZC1jb250ZW50IHVpLXdpZGdldC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVpLWdcIj5cbiAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIG5nRm9yIFtuZ0Zvck9mXT1cImRhdGFUb1JlbmRlclwiIFtuZ0ZvclRlbXBsYXRlXT1cIml0ZW1UZW1wbGF0ZVwiIFtuZ0ZvclRyYWNrQnldPVwidHJhY2tCeVwiPjwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJpc0VtcHR5KClcIiBjbGFzcz1cInVpLXdpZGdldC1jb250ZW50IHVpLWctMTJcIj57e2VtcHR5TWVzc2FnZX19PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxwLXBhZ2luYXRvciBbcm93c109XCJyb3dzXCIgW2ZpcnN0XT1cImZpcnN0XCIgW3RvdGFsUmVjb3Jkc109XCJ0b3RhbFJlY29yZHNcIiBbcGFnZUxpbmtTaXplXT1cInBhZ2VMaW5rc1wiIFthbHdheXNTaG93XT1cImFsd2F5c1Nob3dQYWdpbmF0b3JcIlxuICAgICAgICAgICAgICAgIChvblBhZ2VDaGFuZ2UpPVwicGFnaW5hdGUoJGV2ZW50KVwiIHN0eWxlQ2xhc3M9XCJ1aS1wYWdpbmF0b3ItYm90dG9tXCIgW3Jvd3NQZXJQYWdlT3B0aW9uc109XCJyb3dzUGVyUGFnZU9wdGlvbnNcIiAqbmdJZj1cInBhZ2luYXRvciAmJiBwYWdpbmF0b3JQb3NpdGlvbiE9J3RvcCcgfHwgcGFnaW5hdG9yUG9zaXRpb24gPT0nYm90aCdcIj48L3AtcGFnaW5hdG9yPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVpLWRhdGFncmlkLWZvb3RlciB1aS13aWRnZXQtaGVhZGVyIHVpLWNvcm5lci10b3BcIiAqbmdJZj1cImZvb3RlclwiPlxuICAgICAgICAgICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cInAtZm9vdGVyXCI+PC9uZy1jb250ZW50PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICIsIjxwLWRhdGFHcmlkPjwvcC1kYXRhR3JpZD4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JDRVk7TUFBQTtNQUFBLDRDQUE4RTthQUMxRSxrQkFBMkM7Ozs7b0JBRS9DO01BQUE7TUFBQTtRQUFBO1FBQUE7UUFDSTtVQUFBO1VBQUE7UUFBQTtRQURKO01BQUEsdURBQUE7TUFBQTtVQUFBO1VBQUE7VUFBQTs7SUFBeUU7SUFDbkM7SUFBaUM7SUFENkI7SUFBekQ7SUFBaEI7SUFBZDtJQUFiLFdBQXlFLFVBQ25DLFVBQWlDLFVBRDZCLFVBQXpELFVBQWhCLFVBQWQsU0FBYjs7Ozs7Ozs7b0JBS1E7TUFBQTtNQUFBLGdCQUF5RDs7O0lBQUE7SUFBQTs7OztvQkFHakU7TUFBQTtNQUFBO1FBQUE7UUFBQTtRQUNJO1VBQUE7VUFBQTtRQUFBO1FBREo7TUFBQSx1REFBQTtNQUFBO1VBQUE7VUFBQTtVQUFBOztJQUF5RTtJQUNuQztJQUFpQztJQUQ2QjtJQUF6RDtJQUFoQjtJQUFkO0lBQWIsV0FBeUUsVUFDbkMsVUFBaUMsVUFENkIsVUFBekQsVUFBaEIsVUFBZCxTQUFiOzs7O29CQUVBO01BQUE7TUFBQSw0Q0FBOEU7YUFDMUUsa0JBQTJDOzs7O29CQWhCM0QsK0NBQ1E7TUFBQTtNQUFBLG1EQUFBO01BQUE7VUFBQSxzREFBQTtNQUFBO01BQUEsZUFBZ0YsbURBQzVFO01BQUEscUVBQUE7TUFBQTtNQUFBLGVBRU0sbURBQ047TUFBQSxxRUFBQTtNQUFBO01BQUEsZUFDOE0sbURBQzlNO01BQUE7TUFBQSx3RUFBbUQ7YUFBQSx3Q0FDL0M7TUFBQTtNQUFBLDhCQUFrQjtNQUNkO2FBQUE7NEJBQUE7VUFBQSxrREFBa0g7VUFBQSw2QkFDbEg7VUFBQSx5Q0FBQTtVQUFBLHNFQUErRTtpQkFBQSx3Q0FDN0U7VUFBQSxxQkFDSjtNQUNOO2FBQUE7VUFBQSx3QkFDMk07TUFDM007YUFBQTtVQUFBLHdCQUVNLCtDQUNKO2lCQUFBOztJQWpCcUQ7SUFBdEQ7SUFBTCxXQUEyRCxVQUF0RCxTQUFMO0lBQXlDO0lBQXpDLFdBQXlDLFNBQXpDO0lBQ21FO0lBQS9ELFdBQStELFNBQS9EO0lBSWlIO0lBRGpILFdBQ2lILFNBRGpIO0lBSTJCO0lBQXdEO0lBQS9CO0lBQTVDLFlBQW1CLFVBQXdELFVBQS9CLFNBQTVDO0lBQ0s7SUFBTCxZQUFLLFNBQUw7SUFJeUc7SUFEakgsWUFDaUgsU0FEakg7SUFFK0Q7SUFBL0QsWUFBK0QsVUFBL0Q7Ozs7b0JDZlo7TUFBQTthQUFBO1VBQUE7VUFBQTtJQUFBOzs7Ozs7OzsifQ==
//# sourceMappingURL=datagrid.ngfactory.js.map