"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var rxjs_1 = require("rxjs");
var domhandler_1 = require("../dom/domhandler");
var paginator_1 = require("../paginator/paginator");
var shared_1 = require("../common/shared");
var objectutils_1 = require("../utils/objectutils");
var TreeTableService = /** @class */ (function () {
    function TreeTableService() {
        this.sortSource = new rxjs_1.Subject();
        this.selectionSource = new rxjs_1.Subject();
        this.contextMenuSource = new rxjs_1.Subject();
        this.uiUpdateSource = new rxjs_1.Subject();
        this.sortSource$ = this.sortSource.asObservable();
        this.selectionSource$ = this.selectionSource.asObservable();
        this.contextMenuSource$ = this.contextMenuSource.asObservable();
        this.uiUpdateSource$ = this.uiUpdateSource.asObservable();
    }
    TreeTableService.prototype.onSort = function (sortMeta) {
        this.sortSource.next(sortMeta);
    };
    TreeTableService.prototype.onSelectionChange = function () {
        this.selectionSource.next();
    };
    TreeTableService.prototype.onContextMenu = function (data) {
        this.contextMenuSource.next(data);
    };
    TreeTableService.prototype.onUIUpdate = function (value) {
        this.uiUpdateSource.next(value);
    };
    TreeTableService.decorators = [
        { type: core_1.Injectable },
    ];
    return TreeTableService;
}());
exports.TreeTableService = TreeTableService;
var TreeTable = /** @class */ (function () {
    function TreeTable(el, domHandler, objectUtils, zone, tableService) {
        this.el = el;
        this.domHandler = domHandler;
        this.objectUtils = objectUtils;
        this.zone = zone;
        this.tableService = tableService;
        this.lazy = false;
        this.first = 0;
        this.totalRecords = 0;
        this.pageLinks = 5;
        this.alwaysShowPaginator = true;
        this.paginatorPosition = 'bottom';
        this.defaultSortOrder = 1;
        this.sortMode = 'single';
        this.resetPageOnSort = true;
        this.loadingIcon = 'fa fa-spin fa-2x fa-circle-o-notch';
        this.columnResizeMode = 'fit';
        this.rowTrackBy = function (index, item) { return item; };
        this.onNodeExpand = new core_1.EventEmitter();
        this.onNodeCollapse = new core_1.EventEmitter();
        this.onPage = new core_1.EventEmitter();
        this.onSort = new core_1.EventEmitter();
        this.onLazyLoad = new core_1.EventEmitter();
        this.sortFunction = new core_1.EventEmitter();
        this.onColResize = new core_1.EventEmitter();
        this.onColReorder = new core_1.EventEmitter();
        this._value = [];
        this._sortOrder = 1;
    }
    TreeTable.prototype.ngOnInit = function () {
        if (this.lazy) {
            this.onLazyLoad.emit(this.createLazyLoadMetadata());
        }
        this.initialized = true;
    };
    TreeTable.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.templates.forEach(function (item) {
            switch (item.getType()) {
                case 'caption':
                    _this.captionTemplate = item.template;
                    break;
                case 'header':
                    _this.headerTemplate = item.template;
                    break;
                case 'body':
                    _this.bodyTemplate = item.template;
                    break;
                case 'footer':
                    _this.footerTemplate = item.template;
                    break;
                case 'summary':
                    _this.summaryTemplate = item.template;
                    break;
                case 'colgroup':
                    _this.colGroupTemplate = item.template;
                    break;
                case 'emptymessage':
                    _this.emptyMessageTemplate = item.template;
                    break;
                case 'paginatorleft':
                    _this.paginatorLeftTemplate = item.template;
                    break;
                case 'paginatorright':
                    _this.paginatorRightTemplate = item.template;
                    break;
                case 'frozenheader':
                    _this.frozenHeaderTemplate = item.template;
                    break;
                case 'frozenbody':
                    _this.frozenBodyTemplate = item.template;
                    break;
                case 'frozenfooter':
                    _this.frozenFooterTemplate = item.template;
                    break;
                case 'frozencolgroup':
                    _this.frozenColGroupTemplate = item.template;
                    break;
            }
        });
    };
    Object.defineProperty(TreeTable.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (val) {
            this._value = val;
            if (!this.lazy) {
                this.totalRecords = (this._value ? this._value.length : 0);
                if (this.sortMode == 'single' && this.sortField)
                    this.sortSingle();
                else if (this.sortMode == 'multiple' && this.multiSortMeta)
                    this.sortMultiple();
            }
            this.updateSerializedValue();
            this.tableService.onUIUpdate(this.value);
        },
        enumerable: true,
        configurable: true
    });
    TreeTable.prototype.updateSerializedValue = function () {
        this.serializedValue = [];
        if (this.paginator)
            this.serializePageNodes();
        else
            this.serializeNodes(null, this.value, 0, true);
    };
    TreeTable.prototype.serializeNodes = function (parent, nodes, level, visible) {
        if (nodes && nodes.length) {
            for (var _i = 0, nodes_1 = nodes; _i < nodes_1.length; _i++) {
                var node = nodes_1[_i];
                var rowNode = {
                    node: node,
                    parent: parent,
                    level: level,
                    visible: visible && (parent ? parent.expanded : true)
                };
                this.serializedValue.push(rowNode);
                this.serializeNodes(node, node.children, level + 1, rowNode.visible);
            }
        }
    };
    TreeTable.prototype.serializePageNodes = function () {
        this.serializedValue = [];
        if (this.value && this.value.length) {
            var first = this.lazy ? 0 : this.first;
            for (var i = first; i < (first + this.rows); i++) {
                var node = this.value[i];
                if (node) {
                    this.serializedValue.push({
                        node: node,
                        parent: null,
                        level: 0,
                        visible: true
                    });
                    this.serializeNodes(node, node.children, 1, true);
                }
            }
        }
    };
    Object.defineProperty(TreeTable.prototype, "sortField", {
        get: function () {
            return this._sortField;
        },
        set: function (val) {
            this._sortField = val;
            //avoid triggering lazy load prior to lazy initialization at onInit
            if (!this.lazy || this.initialized) {
                if (this.sortMode === 'single') {
                    this.sortSingle();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeTable.prototype, "sortOrder", {
        get: function () {
            return this._sortOrder;
        },
        set: function (val) {
            this._sortOrder = val;
            //avoid triggering lazy load prior to lazy initialization at onInit
            if (!this.lazy || this.initialized) {
                if (this.sortMode === 'single') {
                    this.sortSingle();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeTable.prototype, "multiSortMeta", {
        get: function () {
            return this._multiSortMeta;
        },
        set: function (val) {
            this._multiSortMeta = val;
            if (this.sortMode === 'multiple') {
                this.sortMultiple();
            }
        },
        enumerable: true,
        configurable: true
    });
    TreeTable.prototype.onPageChange = function (event) {
        this.first = event.first;
        this.rows = event.rows;
        if (this.lazy)
            this.onLazyLoad.emit(this.createLazyLoadMetadata());
        else
            this.serializePageNodes();
        this.onPage.emit({
            first: this.first,
            rows: this.rows
        });
        this.tableService.onUIUpdate(this.value);
    };
    TreeTable.prototype.sort = function (event) {
        var originalEvent = event.originalEvent;
        if (this.sortMode === 'single') {
            this._sortOrder = (this.sortField === event.field) ? this.sortOrder * -1 : this.defaultSortOrder;
            this._sortField = event.field;
            this.sortSingle();
        }
        if (this.sortMode === 'multiple') {
            var metaKey = originalEvent.metaKey || originalEvent.ctrlKey;
            var sortMeta = this.getSortMeta(event.field);
            if (sortMeta) {
                if (!metaKey) {
                    this._multiSortMeta = [{ field: event.field, order: sortMeta.order * -1 }];
                }
                else {
                    sortMeta.order = sortMeta.order * -1;
                }
            }
            else {
                if (!metaKey || !this.multiSortMeta) {
                    this._multiSortMeta = [];
                }
                this.multiSortMeta.push({ field: event.field, order: this.defaultSortOrder });
            }
            this.sortMultiple();
        }
    };
    TreeTable.prototype.sortSingle = function () {
        if (this.sortField && this.sortOrder) {
            if (this.resetPageOnSort) {
                this.first = 0;
            }
            if (this.lazy) {
                this.onLazyLoad.emit(this.createLazyLoadMetadata());
            }
            else if (this.value) {
                this.sortNodes(this.value);
            }
            var sortMeta = {
                field: this.sortField,
                order: this.sortOrder
            };
            this.onSort.emit(sortMeta);
            this.tableService.onSort(sortMeta);
            this.updateSerializedValue();
        }
    };
    TreeTable.prototype.sortNodes = function (nodes) {
        var _this = this;
        if (!nodes || nodes.length === 0) {
            return;
        }
        if (this.customSort) {
            this.sortFunction.emit({
                data: nodes,
                mode: this.sortMode,
                field: this.sortField,
                order: this.sortOrder
            });
        }
        else {
            nodes.sort(function (node1, node2) {
                var value1 = _this.objectUtils.resolveFieldData(node1.data, _this.sortField);
                var value2 = _this.objectUtils.resolveFieldData(node2.data, _this.sortField);
                var result = null;
                if (value1 == null && value2 != null)
                    result = -1;
                else if (value1 != null && value2 == null)
                    result = 1;
                else if (value1 == null && value2 == null)
                    result = 0;
                else if (typeof value1 === 'string' && typeof value2 === 'string')
                    result = value1.localeCompare(value2, undefined, { numeric: true });
                else
                    result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;
                return (_this.sortOrder * result);
            });
        }
        for (var _i = 0, nodes_2 = nodes; _i < nodes_2.length; _i++) {
            var node = nodes_2[_i];
            this.sortNodes(node.children);
        }
    };
    TreeTable.prototype.sortMultiple = function () {
        if (this.multiSortMeta) {
            if (this.lazy) {
                this.onLazyLoad.emit(this.createLazyLoadMetadata());
            }
            else if (this.value) {
                this.sortMultipleNodes(this.value);
            }
            this.onSort.emit({
                multisortmeta: this.multiSortMeta
            });
            this.tableService.onSort(this.multiSortMeta);
            this.updateSerializedValue();
        }
    };
    TreeTable.prototype.sortMultipleNodes = function (nodes) {
        var _this = this;
        if (!nodes || nodes.length === 0) {
            return;
        }
        if (this.customSort) {
            this.sortFunction.emit({
                data: this.value,
                mode: this.sortMode,
                multiSortMeta: this.multiSortMeta
            });
        }
        else {
            this.value.sort(function (node1, node2) {
                return _this.multisortField(node1, node2, _this.multiSortMeta, 0);
            });
        }
        for (var _i = 0, nodes_3 = nodes; _i < nodes_3.length; _i++) {
            var node = nodes_3[_i];
            this.sortMultipleNodes(node.children);
        }
    };
    TreeTable.prototype.multisortField = function (node1, node2, multiSortMeta, index) {
        var value1 = this.objectUtils.resolveFieldData(node1.data, multiSortMeta[index].field);
        var value2 = this.objectUtils.resolveFieldData(node2.data, multiSortMeta[index].field);
        var result = null;
        if (value1 == null && value2 != null)
            result = -1;
        else if (value1 != null && value2 == null)
            result = 1;
        else if (value1 == null && value2 == null)
            result = 0;
        if (typeof value1 == 'string' || value1 instanceof String) {
            if (value1.localeCompare && (value1 != value2)) {
                return (multiSortMeta[index].order * value1.localeCompare(value2, undefined, { numeric: true }));
            }
        }
        else {
            result = (value1 < value2) ? -1 : 1;
        }
        if (value1 == value2) {
            return (multiSortMeta.length - 1) > (index) ? (this.multisortField(node1, node2, multiSortMeta, index + 1)) : 0;
        }
        return (multiSortMeta[index].order * result);
    };
    TreeTable.prototype.getSortMeta = function (field) {
        if (this.multiSortMeta && this.multiSortMeta.length) {
            for (var i = 0; i < this.multiSortMeta.length; i++) {
                if (this.multiSortMeta[i].field === field) {
                    return this.multiSortMeta[i];
                }
            }
        }
        return null;
    };
    TreeTable.prototype.isSorted = function (field) {
        if (this.sortMode === 'single') {
            return (this.sortField && this.sortField === field);
        }
        else if (this.sortMode === 'multiple') {
            var sorted = false;
            if (this.multiSortMeta) {
                for (var i = 0; i < this.multiSortMeta.length; i++) {
                    if (this.multiSortMeta[i].field == field) {
                        sorted = true;
                        break;
                    }
                }
            }
            return sorted;
        }
    };
    TreeTable.prototype.createLazyLoadMetadata = function () {
        return {
            first: this.first,
            rows: this.rows,
            sortField: this.sortField,
            sortOrder: this.sortOrder,
            multiSortMeta: this.multiSortMeta
        };
    };
    TreeTable.prototype.isEmpty = function () {
        return this.value == null || this.value.length == 0;
    };
    TreeTable.prototype.onColumnResizeBegin = function (event) {
        var containerLeft = this.domHandler.getOffset(this.containerViewChild.nativeElement).left;
        this.lastResizerHelperX = (event.pageX - containerLeft + this.containerViewChild.nativeElement.scrollLeft);
    };
    TreeTable.prototype.onColumnResize = function (event) {
        var containerLeft = this.domHandler.getOffset(this.containerViewChild.nativeElement).left;
        this.domHandler.addClass(this.containerViewChild.nativeElement, 'ui-unselectable-text');
        this.resizeHelperViewChild.nativeElement.style.height = this.containerViewChild.nativeElement.offsetHeight + 'px';
        this.resizeHelperViewChild.nativeElement.style.top = 0 + 'px';
        this.resizeHelperViewChild.nativeElement.style.left = (event.pageX - containerLeft + this.containerViewChild.nativeElement.scrollLeft) + 'px';
        this.resizeHelperViewChild.nativeElement.style.display = 'block';
    };
    TreeTable.prototype.onColumnResizeEnd = function (event, column) {
        var delta = this.resizeHelperViewChild.nativeElement.offsetLeft - this.lastResizerHelperX;
        var columnWidth = column.offsetWidth;
        var newColumnWidth = columnWidth + delta;
        var minWidth = column.style.minWidth || 15;
        if (columnWidth + delta > parseInt(minWidth)) {
            if (this.columnResizeMode === 'fit') {
                var nextColumn = column.nextElementSibling;
                while (!nextColumn.offsetParent) {
                    nextColumn = nextColumn.nextElementSibling;
                }
                if (nextColumn) {
                    var nextColumnWidth = nextColumn.offsetWidth - delta;
                    var nextColumnMinWidth = nextColumn.style.minWidth || 15;
                    if (newColumnWidth > 15 && nextColumnWidth > parseInt(nextColumnMinWidth)) {
                        if (this.scrollable) {
                            var scrollableBodyTable = this.domHandler.findSingle(this.el.nativeElement, 'table.ui-treetable-scrollable-body-table');
                            var scrollableHeaderTable = this.domHandler.findSingle(this.el.nativeElement, 'table.ui-treetable-scrollable-header-table');
                            var scrollableFooterTable = this.domHandler.findSingle(this.el.nativeElement, 'table.ui-treetable-scrollable-footer-table');
                            var resizeColumnIndex = this.domHandler.index(column);
                            this.resizeColGroup(scrollableHeaderTable, resizeColumnIndex, newColumnWidth, nextColumnWidth);
                            this.resizeColGroup(scrollableBodyTable, resizeColumnIndex, newColumnWidth, nextColumnWidth);
                            this.resizeColGroup(scrollableFooterTable, resizeColumnIndex, newColumnWidth, nextColumnWidth);
                        }
                        else {
                            column.style.width = newColumnWidth + 'px';
                            if (nextColumn) {
                                nextColumn.style.width = nextColumnWidth + 'px';
                            }
                        }
                    }
                }
            }
            else if (this.columnResizeMode === 'expand') {
                if (this.scrollable) {
                    var scrollableBodyTable = this.domHandler.findSingle(this.el.nativeElement, 'table.ui-treetable-scrollable-body-table');
                    var scrollableHeaderTable = this.domHandler.findSingle(this.el.nativeElement, 'table.ui-treetable-scrollable-header-table');
                    var scrollableFooterTable = this.domHandler.findSingle(this.el.nativeElement, 'table.ui-treetable-scrollable-footer-table');
                    scrollableBodyTable.style.width = scrollableBodyTable.offsetWidth + delta + 'px';
                    scrollableHeaderTable.style.width = scrollableHeaderTable.offsetWidth + delta + 'px';
                    if (scrollableFooterTable) {
                        scrollableFooterTable.style.width = scrollableHeaderTable.offsetWidth + delta + 'px';
                    }
                    var resizeColumnIndex = this.domHandler.index(column);
                    this.resizeColGroup(scrollableHeaderTable, resizeColumnIndex, newColumnWidth, null);
                    this.resizeColGroup(scrollableBodyTable, resizeColumnIndex, newColumnWidth, null);
                    this.resizeColGroup(scrollableFooterTable, resizeColumnIndex, newColumnWidth, null);
                }
                else {
                    this.tableViewChild.nativeElement.style.width = this.tableViewChild.nativeElement.offsetWidth + delta + 'px';
                    column.style.width = newColumnWidth + 'px';
                    var containerWidth = this.tableViewChild.nativeElement.style.width;
                    this.containerViewChild.nativeElement.style.width = containerWidth + 'px';
                }
            }
            this.onColResize.emit({
                element: column,
                delta: delta
            });
        }
        this.resizeHelperViewChild.nativeElement.style.display = 'none';
        this.domHandler.removeClass(this.containerViewChild.nativeElement, 'ui-unselectable-text');
    };
    TreeTable.prototype.resizeColGroup = function (table, resizeColumnIndex, newColumnWidth, nextColumnWidth) {
        if (table) {
            var colGroup = table.children[0].nodeName === 'COLGROUP' ? table.children[0] : null;
            if (colGroup) {
                var col = colGroup.children[resizeColumnIndex];
                var nextCol = col.nextElementSibling;
                col.style.width = newColumnWidth + 'px';
                if (nextCol && nextColumnWidth) {
                    nextCol.style.width = nextColumnWidth + 'px';
                }
            }
            else {
                throw "Scrollable tables require a colgroup to support resizable columns";
            }
        }
    };
    TreeTable.prototype.onColumnDragStart = function (event, columnElement) {
        this.reorderIconWidth = this.domHandler.getHiddenElementOuterWidth(this.reorderIndicatorUpViewChild.nativeElement);
        this.reorderIconHeight = this.domHandler.getHiddenElementOuterHeight(this.reorderIndicatorDownViewChild.nativeElement);
        this.draggedColumn = columnElement;
        event.dataTransfer.setData('text', 'b'); // For firefox
    };
    TreeTable.prototype.onColumnDragEnter = function (event, dropHeader) {
        if (this.reorderableColumns && this.draggedColumn && dropHeader) {
            event.preventDefault();
            var containerOffset = this.domHandler.getOffset(this.containerViewChild.nativeElement);
            var dropHeaderOffset = this.domHandler.getOffset(dropHeader);
            if (this.draggedColumn != dropHeader) {
                var targetLeft = dropHeaderOffset.left - containerOffset.left;
                var targetTop = containerOffset.top - dropHeaderOffset.top;
                var columnCenter = dropHeaderOffset.left + dropHeader.offsetWidth / 2;
                this.reorderIndicatorUpViewChild.nativeElement.style.top = dropHeaderOffset.top - containerOffset.top - (this.reorderIconHeight - 1) + 'px';
                this.reorderIndicatorDownViewChild.nativeElement.style.top = dropHeaderOffset.top - containerOffset.top + dropHeader.offsetHeight + 'px';
                if (event.pageX > columnCenter) {
                    this.reorderIndicatorUpViewChild.nativeElement.style.left = (targetLeft + dropHeader.offsetWidth - Math.ceil(this.reorderIconWidth / 2)) + 'px';
                    this.reorderIndicatorDownViewChild.nativeElement.style.left = (targetLeft + dropHeader.offsetWidth - Math.ceil(this.reorderIconWidth / 2)) + 'px';
                    this.dropPosition = 1;
                }
                else {
                    this.reorderIndicatorUpViewChild.nativeElement.style.left = (targetLeft - Math.ceil(this.reorderIconWidth / 2)) + 'px';
                    this.reorderIndicatorDownViewChild.nativeElement.style.left = (targetLeft - Math.ceil(this.reorderIconWidth / 2)) + 'px';
                    this.dropPosition = -1;
                }
                this.reorderIndicatorUpViewChild.nativeElement.style.display = 'block';
                this.reorderIndicatorDownViewChild.nativeElement.style.display = 'block';
            }
            else {
                event.dataTransfer.dropEffect = 'none';
            }
        }
    };
    TreeTable.prototype.onColumnDragLeave = function (event) {
        if (this.reorderableColumns && this.draggedColumn) {
            event.preventDefault();
            this.reorderIndicatorUpViewChild.nativeElement.style.display = 'none';
            this.reorderIndicatorDownViewChild.nativeElement.style.display = 'none';
        }
    };
    TreeTable.prototype.onColumnDrop = function (event, dropColumn) {
        event.preventDefault();
        if (this.draggedColumn) {
            var dragIndex = this.domHandler.indexWithinGroup(this.draggedColumn, 'ttreorderablecolumn');
            var dropIndex = this.domHandler.indexWithinGroup(dropColumn, 'ttreorderablecolumn');
            var allowDrop = (dragIndex != dropIndex);
            if (allowDrop && ((dropIndex - dragIndex == 1 && this.dropPosition === -1) || (dragIndex - dropIndex == 1 && this.dropPosition === 1))) {
                allowDrop = false;
            }
            if (allowDrop) {
                this.objectUtils.reorderArray(this.columns, dragIndex, dropIndex);
                this.onColReorder.emit({
                    dragIndex: dragIndex,
                    dropIndex: dropIndex,
                    columns: this.columns
                });
            }
            this.reorderIndicatorUpViewChild.nativeElement.style.display = 'none';
            this.reorderIndicatorDownViewChild.nativeElement.style.display = 'none';
            this.draggedColumn.draggable = false;
            this.draggedColumn = null;
            this.dropPosition = null;
        }
    };
    TreeTable.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'p-treeTable',
                    template: "\n        <div #container [ngStyle]=\"style\" [class]=\"styleClass\"\n                [ngClass]=\"{'ui-treetable ui-widget': true, 'ui-treetable-auto-layout': autoLayout,\n                'ui-treetable-resizable': resizableColumns, 'ui-treetable-resizable-fit': (resizableColumns && columnResizeMode === 'fit')}\">\n            <div class=\"ui-treetable-loading ui-widget-overlay\" *ngIf=\"loading\"></div>\n            <div class=\"ui-treetable-loading-content\" *ngIf=\"loading\">\n                <i [class]=\"'fa fa-spin fa-2x ' + loadingIcon\"></i>\n            </div>\n            <div *ngIf=\"captionTemplate\" class=\"ui-treetable-caption ui-widget-header\">\n                <ng-container *ngTemplateOutlet=\"captionTemplate\"></ng-container>\n            </div>\n            <p-paginator [rows]=\"rows\" [first]=\"first\" [totalRecords]=\"totalRecords\" [pageLinkSize]=\"pageLinks\" styleClass=\"ui-paginator-top\" [alwaysShow]=\"alwaysShowPaginator\"\n                (onPageChange)=\"onPageChange($event)\" [rowsPerPageOptions]=\"rowsPerPageOptions\" *ngIf=\"paginator && (paginatorPosition === 'top' || paginatorPosition =='both')\"\n                [templateLeft]=\"paginatorLeftTemplate\" [templateRight]=\"paginatorRightTemplate\" [dropdownAppendTo]=\"paginatorDropdownAppendTo\"></p-paginator>\n            \n            <div class=\"ui-treetable-wrapper\" *ngIf=\"!scrollable\">\n                <table #table class=\"ui-treetable-table\">\n                    <ng-container *ngTemplateOutlet=\"colGroupTemplate; context {$implicit: columns}\"></ng-container>\n                    <thead class=\"ui-treetable-thead\">\n                        <ng-container *ngTemplateOutlet=\"headerTemplate; context: {$implicit: columns}\"></ng-container>\n                    </thead>\n                    <tfoot class=\"ui-treetable-tfoot\">\n                        <ng-container *ngTemplateOutlet=\"footerTemplate; context {$implicit: columns}\"></ng-container>\n                    </tfoot>\n                    <tbody class=\"ui-treetable-tbody\" [pTreeTableBody]=\"columns\" [pTreeTableBodyTemplate]=\"bodyTemplate\"></tbody>\n                </table>\n            </div>\n\n            <div class=\"ui-treetable-scrollable-wrapper\" *ngIf=\"scrollable\">\n               <div class=\"ui-treetable-frozen-view\" *ngIf=\"frozenColumns||frozenBodyTemplate\" [ttScrollableView]=\"frozenColumns\" [frozen]=\"true\" [ngStyle]=\"{width: frozenWidth}\" [scrollHeight]=\"scrollHeight\"></div>\n               <div [ttScrollableView]=\"columns\" [frozen]=\"false\" [scrollHeight]=\"scrollHeight\"></div>\n            </div>\n\n            <p-paginator [rows]=\"rows\" [first]=\"first\" [totalRecords]=\"totalRecords\" [pageLinkSize]=\"pageLinks\" styleClass=\"ui-paginator-bottom\" [alwaysShow]=\"alwaysShowPaginator\"\n                (onPageChange)=\"onPageChange($event)\" [rowsPerPageOptions]=\"rowsPerPageOptions\" *ngIf=\"paginator && (paginatorPosition === 'bottom' || paginatorPosition =='both')\"\n                [templateLeft]=\"paginatorLeftTemplate\" [templateRight]=\"paginatorRightTemplate\" [dropdownAppendTo]=\"paginatorDropdownAppendTo\"></p-paginator>\n            <div *ngIf=\"summaryTemplate\" class=\"ui-treetable-summary ui-widget-header\">\n                <ng-container *ngTemplateOutlet=\"summaryTemplate\"></ng-container>\n            </div>\n\n            <div #resizeHelper class=\"ui-column-resizer-helper ui-state-highlight\" style=\"display:none\" *ngIf=\"resizableColumns\"></div>\n\n            <span #reorderIndicatorUp class=\"fa fa-arrow-down ui-table-reorder-indicator-up\" *ngIf=\"reorderableColumns\"></span>\n            <span #reorderIndicatorDown class=\"fa fa-arrow-up ui-table-reorder-indicator-down\" *ngIf=\"reorderableColumns\"></span>\n        </div>\n    ",
                    providers: [domhandler_1.DomHandler, objectutils_1.ObjectUtils, TreeTableService]
                },] },
    ];
    /** @nocollapse */
    TreeTable.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: domhandler_1.DomHandler, },
        { type: objectutils_1.ObjectUtils, },
        { type: core_1.NgZone, },
        { type: TreeTableService, },
    ]; };
    TreeTable.propDecorators = {
        "columns": [{ type: core_1.Input },],
        "style": [{ type: core_1.Input },],
        "styleClass": [{ type: core_1.Input },],
        "autoLayout": [{ type: core_1.Input },],
        "lazy": [{ type: core_1.Input },],
        "paginator": [{ type: core_1.Input },],
        "rows": [{ type: core_1.Input },],
        "first": [{ type: core_1.Input },],
        "totalRecords": [{ type: core_1.Input },],
        "pageLinks": [{ type: core_1.Input },],
        "rowsPerPageOptions": [{ type: core_1.Input },],
        "alwaysShowPaginator": [{ type: core_1.Input },],
        "paginatorPosition": [{ type: core_1.Input },],
        "paginatorDropdownAppendTo": [{ type: core_1.Input },],
        "defaultSortOrder": [{ type: core_1.Input },],
        "sortMode": [{ type: core_1.Input },],
        "resetPageOnSort": [{ type: core_1.Input },],
        "customSort": [{ type: core_1.Input },],
        "loading": [{ type: core_1.Input },],
        "loadingIcon": [{ type: core_1.Input },],
        "scrollable": [{ type: core_1.Input },],
        "scrollHeight": [{ type: core_1.Input },],
        "frozenWidth": [{ type: core_1.Input },],
        "frozenValue": [{ type: core_1.Input },],
        "frozenColumns": [{ type: core_1.Input },],
        "resizableColumns": [{ type: core_1.Input },],
        "columnResizeMode": [{ type: core_1.Input },],
        "reorderableColumns": [{ type: core_1.Input },],
        "rowTrackBy": [{ type: core_1.Input },],
        "onNodeExpand": [{ type: core_1.Output },],
        "onNodeCollapse": [{ type: core_1.Output },],
        "onPage": [{ type: core_1.Output },],
        "onSort": [{ type: core_1.Output },],
        "onLazyLoad": [{ type: core_1.Output },],
        "sortFunction": [{ type: core_1.Output },],
        "onColResize": [{ type: core_1.Output },],
        "onColReorder": [{ type: core_1.Output },],
        "containerViewChild": [{ type: core_1.ViewChild, args: ['container',] },],
        "resizeHelperViewChild": [{ type: core_1.ViewChild, args: ['resizeHelper',] },],
        "reorderIndicatorUpViewChild": [{ type: core_1.ViewChild, args: ['reorderIndicatorUp',] },],
        "reorderIndicatorDownViewChild": [{ type: core_1.ViewChild, args: ['reorderIndicatorDown',] },],
        "tableViewChild": [{ type: core_1.ViewChild, args: ['table',] },],
        "templates": [{ type: core_1.ContentChildren, args: [shared_1.PrimeTemplate,] },],
        "value": [{ type: core_1.Input },],
        "sortField": [{ type: core_1.Input },],
        "sortOrder": [{ type: core_1.Input },],
        "multiSortMeta": [{ type: core_1.Input },],
    };
    return TreeTable;
}());
exports.TreeTable = TreeTable;
var TreeTableBody = /** @class */ (function () {
    function TreeTableBody(tt) {
        this.tt = tt;
    }
    TreeTableBody.decorators = [
        { type: core_1.Component, args: [{
                    selector: '[pTreeTableBody]',
                    template: "\n        <ng-template ngFor let-serializedNode let-rowIndex=\"index\" [ngForOf]=\"tt.serializedValue\" [ngForTrackBy]=\"tt.rowTrackBy\">\n            <ng-container *ngIf=\"serializedNode.visible\">\n                <ng-container *ngTemplateOutlet=\"template; context: {$implicit: serializedNode, rowData: serializedNode.node.data, columns: columns}\"></ng-container>\n            </ng-container>\n        </ng-template>\n        <ng-container *ngIf=\"tt.isEmpty()\">\n            <ng-container *ngTemplateOutlet=\"tt.emptyMessageTemplate; context: {$implicit: columns}\"></ng-container>\n        </ng-container>\n    "
                },] },
    ];
    /** @nocollapse */
    TreeTableBody.ctorParameters = function () { return [
        { type: TreeTable, },
    ]; };
    TreeTableBody.propDecorators = {
        "columns": [{ type: core_1.Input, args: ["pTreeTableBody",] },],
        "template": [{ type: core_1.Input, args: ["pTreeTableBodyTemplate",] },],
    };
    return TreeTableBody;
}());
exports.TreeTableBody = TreeTableBody;
var ScrollableTreeTableView = /** @class */ (function () {
    function ScrollableTreeTableView(tt, el, domHandler, zone) {
        var _this = this;
        this.tt = tt;
        this.el = el;
        this.domHandler = domHandler;
        this.zone = zone;
        this.subscription = this.tt.tableService.uiUpdateSource$.subscribe(function () {
            _this.zone.runOutsideAngular(function () {
                setTimeout(function () {
                    _this.alignScrollBar();
                }, 50);
            });
        });
        this.initialized = false;
    }
    Object.defineProperty(ScrollableTreeTableView.prototype, "scrollHeight", {
        get: function () {
            return this._scrollHeight;
        },
        set: function (val) {
            this._scrollHeight = val;
            this.setScrollHeight();
        },
        enumerable: true,
        configurable: true
    });
    ScrollableTreeTableView.prototype.ngAfterViewChecked = function () {
        if (!this.initialized && this.el.nativeElement.offsetParent) {
            this.alignScrollBar();
            this.initialized = true;
        }
    };
    ScrollableTreeTableView.prototype.ngAfterViewInit = function () {
        this.bindEvents();
        this.setScrollHeight();
        this.alignScrollBar();
        if (!this.frozen) {
            if (this.tt.frozenColumns || this.tt.frozenBodyTemplate) {
                this.domHandler.addClass(this.el.nativeElement, 'ui-treetable-unfrozen-view');
            }
            if (this.tt.frozenWidth) {
                this.el.nativeElement.style.left = this.tt.frozenWidth;
                this.el.nativeElement.style.width = 'calc(100% - ' + this.tt.frozenWidth + ')';
            }
            var frozenView = this.el.nativeElement.previousElementSibling;
            if (frozenView) {
                this.frozenSiblingBody = this.domHandler.findSingle(frozenView, '.ui-treetable-scrollable-body');
            }
        }
        else {
            this.scrollBodyViewChild.nativeElement.style.paddingBottom = this.domHandler.calculateScrollbarWidth() + 'px';
        }
    };
    ScrollableTreeTableView.prototype.bindEvents = function () {
        var _this = this;
        this.zone.runOutsideAngular(function () {
            var scrollBarWidth = _this.domHandler.calculateScrollbarWidth();
            if (_this.scrollHeaderViewChild && _this.scrollHeaderViewChild.nativeElement) {
                _this.headerScrollListener = _this.onHeaderScroll.bind(_this);
                _this.scrollHeaderBoxViewChild.nativeElement.addEventListener('scroll', _this.headerScrollListener);
            }
            if (_this.scrollFooterViewChild && _this.scrollFooterViewChild.nativeElement) {
                _this.footerScrollListener = _this.onFooterScroll.bind(_this);
                _this.scrollFooterViewChild.nativeElement.addEventListener('scroll', _this.footerScrollListener);
            }
            if (!_this.frozen) {
                _this.bodyScrollListener = _this.onBodyScroll.bind(_this);
                _this.scrollBodyViewChild.nativeElement.addEventListener('scroll', _this.bodyScrollListener);
            }
        });
    };
    ScrollableTreeTableView.prototype.unbindEvents = function () {
        if (this.scrollHeaderViewChild && this.scrollHeaderViewChild.nativeElement) {
            this.scrollHeaderBoxViewChild.nativeElement.removeEventListener('scroll', this.headerScrollListener);
        }
        if (this.scrollFooterViewChild && this.scrollFooterViewChild.nativeElement) {
            this.scrollFooterViewChild.nativeElement.removeEventListener('scroll', this.footerScrollListener);
        }
        this.scrollBodyViewChild.nativeElement.addEventListener('scroll', this.bodyScrollListener);
    };
    ScrollableTreeTableView.prototype.onHeaderScroll = function (event) {
        this.scrollHeaderViewChild.nativeElement.scrollLeft = 0;
    };
    ScrollableTreeTableView.prototype.onFooterScroll = function (event) {
        this.scrollFooterViewChild.nativeElement.scrollLeft = 0;
    };
    ScrollableTreeTableView.prototype.onBodyScroll = function (event) {
        if (this.scrollHeaderViewChild && this.scrollHeaderViewChild.nativeElement) {
            this.scrollHeaderBoxViewChild.nativeElement.style.marginLeft = -1 * this.scrollBodyViewChild.nativeElement.scrollLeft + 'px';
        }
        if (this.scrollFooterViewChild && this.scrollFooterViewChild.nativeElement) {
            this.scrollFooterBoxViewChild.nativeElement.style.marginLeft = -1 * this.scrollBodyViewChild.nativeElement.scrollLeft + 'px';
        }
        if (this.frozenSiblingBody) {
            this.frozenSiblingBody.scrollTop = this.scrollBodyViewChild.nativeElement.scrollTop;
        }
    };
    ScrollableTreeTableView.prototype.setScrollHeight = function () {
        if (this.scrollHeight && this.scrollBodyViewChild && this.scrollBodyViewChild.nativeElement) {
            if (this.scrollHeight.indexOf('%') !== -1) {
                this.scrollBodyViewChild.nativeElement.style.visibility = 'hidden';
                this.scrollBodyViewChild.nativeElement.style.height = '100px'; //temporary height to calculate static height
                var containerHeight = this.domHandler.getOuterHeight(this.tt.el.nativeElement.children[0]);
                var relativeHeight = this.domHandler.getOuterHeight(this.tt.el.nativeElement.parentElement) * parseInt(this.scrollHeight) / 100;
                var staticHeight = containerHeight - 100; //total height of headers, footers, paginators
                var scrollBodyHeight = (relativeHeight - staticHeight);
                if (this.frozen) {
                    scrollBodyHeight -= this.domHandler.calculateScrollbarWidth();
                }
                this.scrollBodyViewChild.nativeElement.style.height = 'auto';
                this.scrollBodyViewChild.nativeElement.style.maxHeight = scrollBodyHeight + 'px';
                this.scrollBodyViewChild.nativeElement.style.visibility = 'visible';
            }
            else {
                if (this.frozen)
                    this.scrollBodyViewChild.nativeElement.style.maxHeight = (parseInt(this.scrollHeight) - this.domHandler.calculateScrollbarWidth()) + 'px';
                else
                    this.scrollBodyViewChild.nativeElement.style.maxHeight = this.scrollHeight;
            }
        }
    };
    ScrollableTreeTableView.prototype.hasVerticalOverflow = function () {
        return this.domHandler.getOuterHeight(this.scrollTableViewChild.nativeElement) > this.domHandler.getOuterHeight(this.scrollBodyViewChild.nativeElement);
    };
    ScrollableTreeTableView.prototype.alignScrollBar = function () {
        if (!this.frozen) {
            var scrollBarWidth = this.hasVerticalOverflow() ? this.domHandler.calculateScrollbarWidth() : 0;
            this.scrollHeaderBoxViewChild.nativeElement.style.marginRight = scrollBarWidth + 'px';
            if (this.scrollFooterBoxViewChild && this.scrollFooterBoxViewChild.nativeElement) {
                this.scrollFooterBoxViewChild.nativeElement.style.marginRight = scrollBarWidth + 'px';
            }
        }
        this.initialized = false;
    };
    ScrollableTreeTableView.prototype.ngOnDestroy = function () {
        this.unbindEvents();
        this.frozenSiblingBody = null;
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
        this.initialized = false;
    };
    ScrollableTreeTableView.decorators = [
        { type: core_1.Component, args: [{
                    selector: '[ttScrollableView]',
                    template: "\n        <div #scrollHeader class=\"ui-treetable-scrollable-header ui-widget-header\">\n            <div #scrollHeaderBox class=\"ui-treetable-scrollable-header-box\">\n                <table class=\"ui-treetable-scrollable-header-table\">\n                    <ng-container *ngTemplateOutlet=\"frozen ? tt.frozenColGroupTemplate||tt.colGroupTemplate : tt.colGroupTemplate; context {$implicit: columns}\"></ng-container>\n                    <thead class=\"ui-treetable-thead\">\n                        <ng-container *ngTemplateOutlet=\"frozen ? tt.frozenHeaderTemplate||tt.headerTemplate : tt.headerTemplate; context {$implicit: columns}\"></ng-container>\n                    </thead>\n                    <tbody class=\"ui-treetable-tbody\">\n                        <ng-template ngFor let-rowData let-rowIndex=\"index\" [ngForOf]=\"tt.frozenValue\" [ngForTrackBy]=\"tt.rowTrackBy\">\n                            <ng-container *ngTemplateOutlet=\"tt.frozenRowsTemplate; context: {$implicit: rowData, rowIndex: rowIndex, columns: columns}\"></ng-container>\n                        </ng-template>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n        <div #scrollBody class=\"ui-treetable-scrollable-body\">\n            <table #scrollTable class=\"ui-treetable-scrollable-body-table\">\n                <ng-container *ngTemplateOutlet=\"frozen ? tt.frozenColGroupTemplate||tt.colGroupTemplate : tt.colGroupTemplate; context {$implicit: columns}\"></ng-container>\n                <tbody class=\"ui-treetable-tbody\" [pTreeTableBody]=\"columns\" [pTreeTableBodyTemplate]=\"frozen ? tt.frozenBodyTemplate||tt.bodyTemplate : tt.bodyTemplate\"></tbody>\n            </table>\n        </div>\n        <div #scrollFooter *ngIf=\"tt.footerTemplate\" class=\"ui-treetable-scrollable-footer ui-widget-header\">\n            <div #scrollFooterBox class=\"ui-treetable-scrollable-footer-box\">\n                <table class=\"ui-treetable-scrollable-footer-table\">\n                    <ng-container *ngTemplateOutlet=\"frozen ? tt.frozenColGroupTemplate||tt.colGroupTemplate : tt.colGroupTemplate; context {$implicit: columns}\"></ng-container>\n                    <tfoot class=\"ui-treetable-tfoot\">\n                        <ng-container *ngTemplateOutlet=\"frozen ? tt.frozenFooterTemplate||tt.footerTemplate : tt.footerTemplate; context {$implicit: columns}\"></ng-container>\n                    </tfoot>\n                </table>\n            </div>\n        </div>\n    "
                },] },
    ];
    /** @nocollapse */
    ScrollableTreeTableView.ctorParameters = function () { return [
        { type: TreeTable, },
        { type: core_1.ElementRef, },
        { type: domhandler_1.DomHandler, },
        { type: core_1.NgZone, },
    ]; };
    ScrollableTreeTableView.propDecorators = {
        "columns": [{ type: core_1.Input, args: ["ttScrollableView",] },],
        "frozen": [{ type: core_1.Input },],
        "scrollHeaderViewChild": [{ type: core_1.ViewChild, args: ['scrollHeader',] },],
        "scrollHeaderBoxViewChild": [{ type: core_1.ViewChild, args: ['scrollHeaderBox',] },],
        "scrollBodyViewChild": [{ type: core_1.ViewChild, args: ['scrollBody',] },],
        "scrollTableViewChild": [{ type: core_1.ViewChild, args: ['scrollTable',] },],
        "scrollFooterViewChild": [{ type: core_1.ViewChild, args: ['scrollFooter',] },],
        "scrollFooterBoxViewChild": [{ type: core_1.ViewChild, args: ['scrollFooterBox',] },],
        "scrollHeight": [{ type: core_1.Input },],
    };
    return ScrollableTreeTableView;
}());
exports.ScrollableTreeTableView = ScrollableTreeTableView;
var SortableColumn = /** @class */ (function () {
    function SortableColumn(tt, domHandler) {
        var _this = this;
        this.tt = tt;
        this.domHandler = domHandler;
        if (this.isEnabled()) {
            this.subscription = this.tt.tableService.sortSource$.subscribe(function (sortMeta) {
                _this.updateSortState();
            });
        }
    }
    SortableColumn.prototype.ngOnInit = function () {
        if (this.isEnabled()) {
            this.updateSortState();
        }
    };
    SortableColumn.prototype.updateSortState = function () {
        this.sorted = this.tt.isSorted(this.field);
    };
    SortableColumn.prototype.onClick = function (event) {
        if (this.isEnabled()) {
            this.updateSortState();
            this.tt.sort({
                originalEvent: event,
                field: this.field
            });
            this.domHandler.clearSelection();
        }
    };
    SortableColumn.prototype.isEnabled = function () {
        return this.pSortableColumnDisabled !== true;
    };
    SortableColumn.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    SortableColumn.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[pSortableColumn]',
                    providers: [domhandler_1.DomHandler],
                    host: {
                        '[class.ui-sortable-column]': 'true',
                        '[class.ui-state-highlight]': 'sorted'
                    }
                },] },
    ];
    /** @nocollapse */
    SortableColumn.ctorParameters = function () { return [
        { type: TreeTable, },
        { type: domhandler_1.DomHandler, },
    ]; };
    SortableColumn.propDecorators = {
        "field": [{ type: core_1.Input, args: ["pSortableColumn",] },],
        "pSortableColumnDisabled": [{ type: core_1.Input },],
        "onClick": [{ type: core_1.HostListener, args: ['click', ['$event'],] },],
    };
    return SortableColumn;
}());
exports.SortableColumn = SortableColumn;
var SortIcon = /** @class */ (function () {
    function SortIcon(dt) {
        var _this = this;
        this.dt = dt;
        this.subscription = this.dt.tableService.sortSource$.subscribe(function (sortMeta) {
            _this.updateSortState();
        });
    }
    SortIcon.prototype.ngOnInit = function () {
        this.updateSortState();
    };
    SortIcon.prototype.onClick = function (event) {
        event.preventDefault();
    };
    SortIcon.prototype.updateSortState = function () {
        if (this.dt.sortMode === 'single') {
            this.sortOrder = this.dt.isSorted(this.field) ? this.dt.sortOrder : 0;
        }
        else if (this.dt.sortMode === 'multiple') {
            var sortMeta = this.dt.getSortMeta(this.field);
            this.sortOrder = sortMeta ? sortMeta.order : 0;
        }
    };
    SortIcon.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    SortIcon.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'p-sortIcon',
                    template: "\n        <a href=\"#\" (click)=\"onClick($event)\" [attr.aria-label]=\" sortOrder === 1 ? ariaLabelAsc : sortOrder === -1 ? ariaLabelDesc : '' \">\n            <i class=\"ui-sortable-column-icon fa fa-fw fa-sort\" [ngClass]=\"{'fa-sort-asc': sortOrder === 1, 'fa-sort-desc': sortOrder === -1}\"></i>\n        </a>\n    "
                },] },
    ];
    /** @nocollapse */
    SortIcon.ctorParameters = function () { return [
        { type: TreeTable, },
    ]; };
    SortIcon.propDecorators = {
        "field": [{ type: core_1.Input },],
        "ariaLabelDesc": [{ type: core_1.Input },],
        "ariaLabelAsc": [{ type: core_1.Input },],
    };
    return SortIcon;
}());
exports.SortIcon = SortIcon;
var ResizableTreeTableColumn = /** @class */ (function () {
    function ResizableTreeTableColumn(tt, el, domHandler, zone) {
        this.tt = tt;
        this.el = el;
        this.domHandler = domHandler;
        this.zone = zone;
    }
    ResizableTreeTableColumn.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.isEnabled()) {
            this.domHandler.addClass(this.el.nativeElement, 'ui-resizable-column');
            this.resizer = document.createElement('span');
            this.resizer.className = 'ui-column-resizer ui-clickable';
            this.el.nativeElement.appendChild(this.resizer);
            this.zone.runOutsideAngular(function () {
                _this.resizerMouseDownListener = _this.onMouseDown.bind(_this);
                _this.resizer.addEventListener('mousedown', _this.resizerMouseDownListener);
            });
        }
    };
    ResizableTreeTableColumn.prototype.bindDocumentEvents = function () {
        var _this = this;
        this.zone.runOutsideAngular(function () {
            _this.documentMouseMoveListener = _this.onDocumentMouseMove.bind(_this);
            document.addEventListener('mousemove', _this.documentMouseMoveListener);
            _this.documentMouseUpListener = _this.onDocumentMouseUp.bind(_this);
            document.addEventListener('mouseup', _this.documentMouseUpListener);
        });
    };
    ResizableTreeTableColumn.prototype.unbindDocumentEvents = function () {
        if (this.documentMouseMoveListener) {
            document.removeEventListener('mousemove', this.documentMouseMoveListener);
            this.documentMouseMoveListener = null;
        }
        if (this.documentMouseUpListener) {
            document.removeEventListener('mouseup', this.documentMouseUpListener);
            this.documentMouseUpListener = null;
        }
    };
    ResizableTreeTableColumn.prototype.onMouseDown = function (event) {
        this.tt.onColumnResizeBegin(event);
        this.bindDocumentEvents();
    };
    ResizableTreeTableColumn.prototype.onDocumentMouseMove = function (event) {
        this.tt.onColumnResize(event);
    };
    ResizableTreeTableColumn.prototype.onDocumentMouseUp = function (event) {
        this.tt.onColumnResizeEnd(event, this.el.nativeElement);
        this.unbindDocumentEvents();
    };
    ResizableTreeTableColumn.prototype.isEnabled = function () {
        return this.ttResizableColumnDisabled !== true;
    };
    ResizableTreeTableColumn.prototype.ngOnDestroy = function () {
        if (this.resizerMouseDownListener) {
            this.resizer.removeEventListener('mousedown', this.resizerMouseDownListener);
        }
        this.unbindDocumentEvents();
    };
    ResizableTreeTableColumn.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[ttResizableColumn]'
                },] },
    ];
    /** @nocollapse */
    ResizableTreeTableColumn.ctorParameters = function () { return [
        { type: TreeTable, },
        { type: core_1.ElementRef, },
        { type: domhandler_1.DomHandler, },
        { type: core_1.NgZone, },
    ]; };
    ResizableTreeTableColumn.propDecorators = {
        "ttResizableColumnDisabled": [{ type: core_1.Input },],
    };
    return ResizableTreeTableColumn;
}());
exports.ResizableTreeTableColumn = ResizableTreeTableColumn;
var ReorderableTreeTableColumn = /** @class */ (function () {
    function ReorderableTreeTableColumn(tt, el, domHandler, zone) {
        this.tt = tt;
        this.el = el;
        this.domHandler = domHandler;
        this.zone = zone;
    }
    ReorderableTreeTableColumn.prototype.ngAfterViewInit = function () {
        if (this.isEnabled()) {
            this.bindEvents();
        }
    };
    ReorderableTreeTableColumn.prototype.bindEvents = function () {
        var _this = this;
        this.zone.runOutsideAngular(function () {
            _this.mouseDownListener = _this.onMouseDown.bind(_this);
            _this.el.nativeElement.addEventListener('mousedown', _this.mouseDownListener);
            _this.dragStartListener = _this.onDragStart.bind(_this);
            _this.el.nativeElement.addEventListener('dragstart', _this.dragStartListener);
            _this.dragOverListener = _this.onDragEnter.bind(_this);
            _this.el.nativeElement.addEventListener('dragover', _this.dragOverListener);
            _this.dragEnterListener = _this.onDragEnter.bind(_this);
            _this.el.nativeElement.addEventListener('dragenter', _this.dragEnterListener);
            _this.dragLeaveListener = _this.onDragLeave.bind(_this);
            _this.el.nativeElement.addEventListener('dragleave', _this.dragLeaveListener);
        });
    };
    ReorderableTreeTableColumn.prototype.unbindEvents = function () {
        if (this.mouseDownListener) {
            document.removeEventListener('mousedown', this.mouseDownListener);
            this.mouseDownListener = null;
        }
        if (this.dragOverListener) {
            document.removeEventListener('dragover', this.dragOverListener);
            this.dragOverListener = null;
        }
        if (this.dragEnterListener) {
            document.removeEventListener('dragenter', this.dragEnterListener);
            this.dragEnterListener = null;
        }
        if (this.dragEnterListener) {
            document.removeEventListener('dragenter', this.dragEnterListener);
            this.dragEnterListener = null;
        }
        if (this.dragLeaveListener) {
            document.removeEventListener('dragleave', this.dragLeaveListener);
            this.dragLeaveListener = null;
        }
    };
    ReorderableTreeTableColumn.prototype.onMouseDown = function (event) {
        if (event.target.nodeName === 'INPUT' || this.domHandler.hasClass(event.target, 'ui-column-resizer'))
            this.el.nativeElement.draggable = false;
        else
            this.el.nativeElement.draggable = true;
    };
    ReorderableTreeTableColumn.prototype.onDragStart = function (event) {
        this.tt.onColumnDragStart(event, this.el.nativeElement);
    };
    ReorderableTreeTableColumn.prototype.onDragOver = function (event) {
        event.preventDefault();
    };
    ReorderableTreeTableColumn.prototype.onDragEnter = function (event) {
        this.tt.onColumnDragEnter(event, this.el.nativeElement);
    };
    ReorderableTreeTableColumn.prototype.onDragLeave = function (event) {
        this.tt.onColumnDragLeave(event);
    };
    ReorderableTreeTableColumn.prototype.onDrop = function (event) {
        if (this.isEnabled()) {
            this.tt.onColumnDrop(event, this.el.nativeElement);
        }
    };
    ReorderableTreeTableColumn.prototype.isEnabled = function () {
        return this.ttReorderableColumnDisabled !== true;
    };
    ReorderableTreeTableColumn.prototype.ngOnDestroy = function () {
        this.unbindEvents();
    };
    ReorderableTreeTableColumn.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[ttReorderableColumn]'
                },] },
    ];
    /** @nocollapse */
    ReorderableTreeTableColumn.ctorParameters = function () { return [
        { type: TreeTable, },
        { type: core_1.ElementRef, },
        { type: domhandler_1.DomHandler, },
        { type: core_1.NgZone, },
    ]; };
    ReorderableTreeTableColumn.propDecorators = {
        "ttReorderableColumnDisabled": [{ type: core_1.Input },],
        "onDrop": [{ type: core_1.HostListener, args: ['drop', ['$event'],] },],
    };
    return ReorderableTreeTableColumn;
}());
exports.ReorderableTreeTableColumn = ReorderableTreeTableColumn;
var TreeTableToggler = /** @class */ (function () {
    function TreeTableToggler(tt) {
        this.tt = tt;
    }
    TreeTableToggler.prototype.onClick = function (event) {
        this.rowNode.node.expanded = !this.rowNode.node.expanded;
        if (this.rowNode.node.expanded) {
            this.tt.onNodeExpand.emit({
                originalEvent: event,
                node: this.rowNode.node
            });
        }
        else {
            this.tt.onNodeCollapse.emit({
                originalEvent: event,
                node: this.rowNode.node
            });
        }
        this.tt.updateSerializedValue();
        this.tt.tableService.onUIUpdate(this.tt.value);
        event.preventDefault();
    };
    TreeTableToggler.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'p-treeTableToggler',
                    template: "\n        <a href=\"#\" class=\"ui-treetable-toggler\" *ngIf=\"rowNode.node.leaf === false || rowNode.level !== 0 || rowNode.node.children && rowNode.node.children.length\" (click)=\"onClick($event)\" [style.visibility]=\"rowNode.node.leaf === false || (rowNode.node.children && rowNode.node.children.length) ? 'visible' : 'hidden'\" [style.marginLeft]=\"rowNode.level * 16 + 'px'\">\n            <i [ngClass]=\"rowNode.node.expanded ? 'fa fa-fw fa-chevron-circle-down' : 'fa fa-fw fa-chevron-circle-right'\"></i>\n        </a>\n    "
                },] },
    ];
    /** @nocollapse */
    TreeTableToggler.ctorParameters = function () { return [
        { type: TreeTable, },
    ]; };
    TreeTableToggler.propDecorators = {
        "rowNode": [{ type: core_1.Input },],
    };
    return TreeTableToggler;
}());
exports.TreeTableToggler = TreeTableToggler;
var TreeTableModule = /** @class */ (function () {
    function TreeTableModule() {
    }
    TreeTableModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [common_1.CommonModule, paginator_1.PaginatorModule],
                    exports: [TreeTable, TreeTableToggler, SortableColumn, SortIcon, ResizableTreeTableColumn, ReorderableTreeTableColumn],
                    declarations: [TreeTable, TreeTableBody, TreeTableToggler, ScrollableTreeTableView, SortableColumn, SortIcon, ResizableTreeTableColumn, ReorderableTreeTableColumn]
                },] },
    ];
    return TreeTableModule;
}());
exports.TreeTableModule = TreeTableModule;
//# sourceMappingURL=treetable.js.map