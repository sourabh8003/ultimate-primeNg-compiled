"use strict";
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = require("@angular/core");
var i1 = require("./datagrid");
var i2 = require("@angular/common");
var i3 = require("@angular/forms");
var i4 = require("../common/shared");
var i5 = require("../dropdown/dropdown");
var i6 = require("../paginator/paginator");
var i7 = require("../paginator/paginator.ngfactory");
var DataGridModuleNgFactory = i0.ɵcmf(i1.DataGridModule, [], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, []], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(4608, i2.NgLocalization, i2.NgLocaleLocalization, [i0.LOCALE_ID, [2, i2.ɵa]]), i0.ɵmpd(4608, i3.ɵi, i3.ɵi, []), i0.ɵmpd(512, i2.CommonModule, i2.CommonModule, []), i0.ɵmpd(512, i4.SharedModule, i4.SharedModule, []), i0.ɵmpd(512, i5.DropdownModule, i5.DropdownModule, []), i0.ɵmpd(512, i3.ɵba, i3.ɵba, []), i0.ɵmpd(512, i3.FormsModule, i3.FormsModule, []), i0.ɵmpd(512, i6.PaginatorModule, i6.PaginatorModule, []), i0.ɵmpd(512, i1.DataGridModule, i1.DataGridModule, [])]); });
exports.DataGridModuleNgFactory = DataGridModuleNgFactory;
var styles_DataGrid = [];
var RenderType_DataGrid = i0.ɵcrt({ encapsulation: 2, styles: styles_DataGrid, data: {} });
exports.RenderType_DataGrid = RenderType_DataGrid;
function View_DataGrid_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 3, "div", [["class", "ui-datagrid-header ui-widget-header ui-corner-top"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n                "])), i0.ɵncd(null, 0), (_l()(), i0.ɵted(-1, null, ["\n            "]))], null, null); }
function View_DataGrid_2(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "p-paginator", [["styleClass", "ui-paginator-top"]], null, [[null, "onPageChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("onPageChange" === en)) {
        var pd_0 = (_co.paginate($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, i7.View_Paginator_0, i7.RenderType_Paginator)), i0.ɵdid(1, 114688, null, 0, i6.Paginator, [], { pageLinkSize: [0, "pageLinkSize"], styleClass: [1, "styleClass"], alwaysShow: [2, "alwaysShow"], dropdownAppendTo: [3, "dropdownAppendTo"], totalRecords: [4, "totalRecords"], first: [5, "first"], rows: [6, "rows"], rowsPerPageOptions: [7, "rowsPerPageOptions"] }, { onPageChange: "onPageChange" })], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.pageLinks; var currVal_1 = "ui-paginator-top"; var currVal_2 = _co.alwaysShowPaginator; var currVal_3 = _co.paginatorDropdownAppendTo; var currVal_4 = _co.totalRecords; var currVal_5 = _co.first; var currVal_6 = _co.rows; var currVal_7 = _co.rowsPerPageOptions; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); }, null); }
function View_DataGrid_3(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(0, null, null, 0))], null, null); }
function View_DataGrid_4(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "div", [["class", "ui-widget-content ui-g-12"]], null, null, null, null, null)), (_l()(), i0.ɵted(1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.emptyMessage; _ck(_v, 1, 0, currVal_0); }); }
function View_DataGrid_5(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "p-paginator", [["styleClass", "ui-paginator-bottom"]], null, [[null, "onPageChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("onPageChange" === en)) {
        var pd_0 = (_co.paginate($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, i7.View_Paginator_0, i7.RenderType_Paginator)), i0.ɵdid(1, 114688, null, 0, i6.Paginator, [], { pageLinkSize: [0, "pageLinkSize"], styleClass: [1, "styleClass"], alwaysShow: [2, "alwaysShow"], dropdownAppendTo: [3, "dropdownAppendTo"], totalRecords: [4, "totalRecords"], first: [5, "first"], rows: [6, "rows"], rowsPerPageOptions: [7, "rowsPerPageOptions"] }, { onPageChange: "onPageChange" })], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.pageLinks; var currVal_1 = "ui-paginator-bottom"; var currVal_2 = _co.alwaysShowPaginator; var currVal_3 = _co.paginatorDropdownAppendTo; var currVal_4 = _co.totalRecords; var currVal_5 = _co.first; var currVal_6 = _co.rows; var currVal_7 = _co.rowsPerPageOptions; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); }, null); }
function View_DataGrid_6(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 3, "div", [["class", "ui-datagrid-footer ui-widget-header ui-corner-top"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n                "])), i0.ɵncd(null, 1), (_l()(), i0.ɵted(-1, null, ["\n            "]))], null, null); }
function View_DataGrid_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵeld(1, 0, null, null, 27, "div", [], null, null, null, null, null)), i0.ɵdid(2, 278528, null, 0, i2.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i0.ɵdid(3, 278528, null, 0, i2.NgStyle, [i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { ngStyle: [0, "ngStyle"] }, null), (_l()(), i0.ɵted(-1, null, ["\n            "])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_DataGrid_1)), i0.ɵdid(6, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵted(-1, null, ["\n            "])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_DataGrid_2)), i0.ɵdid(9, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵted(-1, null, ["\n            "])), (_l()(), i0.ɵeld(11, 0, null, null, 10, "div", [["class", "ui-datagrid-content ui-widget-content"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n                "])), (_l()(), i0.ɵeld(13, 0, null, null, 7, "div", [["class", "ui-g"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n                    "])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_DataGrid_3)), i0.ɵdid(16, 802816, null, 0, i2.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"], ngForTrackBy: [1, "ngForTrackBy"], ngForTemplate: [2, "ngForTemplate"] }, null), (_l()(), i0.ɵted(-1, null, ["\n                    "])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_DataGrid_4)), i0.ɵdid(19, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵted(-1, null, ["\n                "])), (_l()(), i0.ɵted(-1, null, ["\n            "])), (_l()(), i0.ɵted(-1, null, ["\n            "])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_DataGrid_5)), i0.ɵdid(24, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵted(-1, null, ["\n            "])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_DataGrid_6)), i0.ɵdid(27, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵted(-1, null, ["\n    "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.styleClass; var currVal_1 = "ui-datagrid ui-widget"; _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_2 = _co.style; _ck(_v, 3, 0, currVal_2); var currVal_3 = _co.header; _ck(_v, 6, 0, currVal_3); var currVal_4 = (_co.paginator && ((_co.paginatorPosition === "top") || (_co.paginatorPosition == "both"))); _ck(_v, 9, 0, currVal_4); var currVal_5 = _co.dataToRender; var currVal_6 = _co.trackBy; var currVal_7 = _co.itemTemplate; _ck(_v, 16, 0, currVal_5, currVal_6, currVal_7); var currVal_8 = _co.isEmpty(); _ck(_v, 19, 0, currVal_8); var currVal_9 = (_co.paginator && ((_co.paginatorPosition === "bottom") || (_co.paginatorPosition == "both"))); _ck(_v, 24, 0, currVal_9); var currVal_10 = _co.footer; _ck(_v, 27, 0, currVal_10); }, null); }
exports.View_DataGrid_0 = View_DataGrid_0;
function View_DataGrid_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 4, "p-dataGrid", [], null, null, null, View_DataGrid_0, RenderType_DataGrid)), i0.ɵdid(1, 5554176, null, 3, i1.DataGrid, [i0.ElementRef, i0.IterableDiffers], null, null), i0.ɵqud(335544320, 1, { header: 0 }), i0.ɵqud(335544320, 2, { footer: 0 }), i0.ɵqud(603979776, 3, { templates: 1 })], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_DataGrid_Host_0 = View_DataGrid_Host_0;
var DataGridNgFactory = i0.ɵccf("p-dataGrid", i1.DataGrid, View_DataGrid_Host_0, { paginator: "paginator", rows: "rows", totalRecords: "totalRecords", pageLinks: "pageLinks", rowsPerPageOptions: "rowsPerPageOptions", lazy: "lazy", emptyMessage: "emptyMessage", style: "style", styleClass: "styleClass", paginatorPosition: "paginatorPosition", alwaysShowPaginator: "alwaysShowPaginator", trackBy: "trackBy", immutable: "immutable", paginatorDropdownAppendTo: "paginatorDropdownAppendTo", value: "value" }, { onLazyLoad: "onLazyLoad", onPage: "onPage" }, ["p-header", "p-footer"]);
exports.DataGridNgFactory = DataGridNgFactory;
//# sourceMappingURL=datagrid.ngfactory.js.map