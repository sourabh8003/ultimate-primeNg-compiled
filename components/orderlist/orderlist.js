"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var button_1 = require("../button/button");
var shared_1 = require("../common/shared");
var domhandler_1 = require("../dom/domhandler");
var objectutils_1 = require("../utils/objectutils");
var OrderList = /** @class */ (function () {
    function OrderList(el, domHandler, objectUtils) {
        this.el = el;
        this.domHandler = domHandler;
        this.objectUtils = objectUtils;
        this.metaKeySelection = true;
        this.controlsPosition = 'left';
        this.selectionChange = new core_1.EventEmitter();
        this.trackBy = function (index, item) { return item; };
        this.onReorder = new core_1.EventEmitter();
        this.onSelectionChange = new core_1.EventEmitter();
        this.onFilterEvent = new core_1.EventEmitter();
    }
    Object.defineProperty(OrderList.prototype, "selection", {
        get: function () {
            return this._selection;
        },
        set: function (val) {
            this._selection = val;
        },
        enumerable: true,
        configurable: true
    });
    OrderList.prototype.ngAfterContentInit = function () {
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
    OrderList.prototype.ngAfterViewChecked = function () {
        if (this.movedUp || this.movedDown) {
            var listItems = this.domHandler.find(this.listViewChild.nativeElement, 'li.ui-state-highlight');
            var listItem = void 0;
            if (listItems.length > 0) {
                if (this.movedUp)
                    listItem = listItems[0];
                else
                    listItem = listItems[listItems.length - 1];
                this.domHandler.scrollInView(this.listViewChild.nativeElement, listItem);
            }
            this.movedUp = false;
            this.movedDown = false;
        }
    };
    Object.defineProperty(OrderList.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (val) {
            this._value = val;
            if (this.filterValue) {
                this.filter();
            }
        },
        enumerable: true,
        configurable: true
    });
    OrderList.prototype.onItemClick = function (event, item, index) {
        this.itemTouched = false;
        var selectedIndex = this.objectUtils.findIndexInList(item, this.selection);
        var selected = (selectedIndex != -1);
        var metaSelection = this.itemTouched ? false : this.metaKeySelection;
        if (metaSelection) {
            var metaKey = (event.metaKey || event.ctrlKey);
            if (selected && metaKey) {
                this._selection = this._selection.filter(function (val, index) { return index !== selectedIndex; });
            }
            else {
                this._selection = (metaKey) ? this._selection ? this._selection.slice() : [] : [];
                this.objectUtils.insertIntoOrderedArray(item, index, this._selection, this.value);
            }
        }
        else {
            if (selected) {
                this._selection = this._selection.filter(function (val, index) { return index !== selectedIndex; });
            }
            else {
                this._selection = this._selection ? this._selection.slice() : [];
                this.objectUtils.insertIntoOrderedArray(item, index, this._selection, this.value);
            }
        }
        //binding
        this.selectionChange.emit(this._selection);
        //event
        this.onSelectionChange.emit({ originalEvent: event, value: this._selection });
    };
    OrderList.prototype.onFilterKeyup = function (event) {
        this.filterValue = event.target.value.trim().toLowerCase();
        this.filter();
        this.onFilterEvent.emit({
            originalEvent: event,
            value: this.visibleOptions
        });
    };
    OrderList.prototype.filter = function () {
        var searchFields = this.filterBy.split(',');
        this.visibleOptions = this.objectUtils.filter(this.value, searchFields, this.filterValue);
    };
    OrderList.prototype.isItemVisible = function (item) {
        if (this.filterValue && this.filterValue.trim().length) {
            for (var i = 0; i < this.visibleOptions.length; i++) {
                if (item == this.visibleOptions[i]) {
                    return true;
                }
            }
        }
        else {
            return true;
        }
    };
    OrderList.prototype.onItemTouchEnd = function (event) {
        this.itemTouched = true;
    };
    OrderList.prototype.isSelected = function (item) {
        return this.objectUtils.findIndexInList(item, this.selection) != -1;
    };
    OrderList.prototype.moveUp = function (event) {
        if (this.selection) {
            for (var i = 0; i < this.selection.length; i++) {
                var selectedItem = this.selection[i];
                var selectedItemIndex = this.objectUtils.findIndexInList(selectedItem, this.value);
                if (selectedItemIndex != 0) {
                    var movedItem = this.value[selectedItemIndex];
                    var temp = this.value[selectedItemIndex - 1];
                    this.value[selectedItemIndex - 1] = movedItem;
                    this.value[selectedItemIndex] = temp;
                }
                else {
                    break;
                }
            }
            this.movedUp = true;
            this.onReorder.emit(event);
        }
    };
    OrderList.prototype.moveTop = function (event) {
        if (this.selection) {
            for (var i = this.selection.length - 1; i >= 0; i--) {
                var selectedItem = this.selection[i];
                var selectedItemIndex = this.objectUtils.findIndexInList(selectedItem, this.value);
                if (selectedItemIndex != 0) {
                    var movedItem = this.value.splice(selectedItemIndex, 1)[0];
                    this.value.unshift(movedItem);
                }
                else {
                    break;
                }
            }
            this.onReorder.emit(event);
            this.listViewChild.nativeElement.scrollTop = 0;
        }
    };
    OrderList.prototype.moveDown = function (event) {
        if (this.selection) {
            for (var i = this.selection.length - 1; i >= 0; i--) {
                var selectedItem = this.selection[i];
                var selectedItemIndex = this.objectUtils.findIndexInList(selectedItem, this.value);
                if (selectedItemIndex != (this.value.length - 1)) {
                    var movedItem = this.value[selectedItemIndex];
                    var temp = this.value[selectedItemIndex + 1];
                    this.value[selectedItemIndex + 1] = movedItem;
                    this.value[selectedItemIndex] = temp;
                }
                else {
                    break;
                }
            }
            this.movedDown = true;
            this.onReorder.emit(event);
        }
    };
    OrderList.prototype.moveBottom = function (event) {
        if (this.selection) {
            for (var i = 0; i < this.selection.length; i++) {
                var selectedItem = this.selection[i];
                var selectedItemIndex = this.objectUtils.findIndexInList(selectedItem, this.value);
                if (selectedItemIndex != (this.value.length - 1)) {
                    var movedItem = this.value.splice(selectedItemIndex, 1)[0];
                    this.value.push(movedItem);
                }
                else {
                    break;
                }
            }
            this.onReorder.emit(event);
            this.listViewChild.nativeElement.scrollTop = this.listViewChild.nativeElement.scrollHeight;
        }
    };
    OrderList.prototype.onDragStart = function (event, index) {
        this.dragging = true;
        this.draggedItemIndex = index;
        if (this.dragdropScope) {
            event.dataTransfer.setData("text", this.dragdropScope);
        }
    };
    OrderList.prototype.onDragOver = function (event, index) {
        if (this.draggedItemIndex !== index && this.draggedItemIndex + 1 !== index) {
            this.dragOverItemIndex = index;
            event.preventDefault();
        }
    };
    OrderList.prototype.onDragLeave = function (event) {
        this.dragOverItemIndex = null;
    };
    OrderList.prototype.onDrop = function (event, index) {
        var dropIndex = (this.draggedItemIndex > index) ? index : (index === 0) ? 0 : index - 1;
        this.objectUtils.reorderArray(this.value, this.draggedItemIndex, dropIndex);
        this.dragOverItemIndex = null;
        this.onReorder.emit(event);
        event.preventDefault();
    };
    OrderList.prototype.onDragEnd = function (event) {
        this.dragging = false;
    };
    OrderList.prototype.onListMouseMove = function (event) {
        if (this.dragging) {
            var offsetY = this.listViewChild.nativeElement.getBoundingClientRect().top + document.body.scrollTop;
            var bottomDiff = (offsetY + this.listViewChild.nativeElement.clientHeight) - event.pageY;
            var topDiff = (event.pageY - offsetY);
            if (bottomDiff < 25 && bottomDiff > 0)
                this.listViewChild.nativeElement.scrollTop += 15;
            else if (topDiff < 25 && topDiff > 0)
                this.listViewChild.nativeElement.scrollTop -= 15;
        }
    };
    OrderList.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'p-orderList',
                    template: "\n        <div [ngClass]=\"{'ui-orderlist ui-widget': true, 'ui-orderlist-controls-left': controlsPosition === 'left',\n                    'ui-orderlist-controls-right': controlsPosition === 'right'}\" [ngStyle]=\"style\" [class]=\"styleClass\">\n            <div class=\"ui-orderlist-controls\">\n                <button type=\"button\" pButton icon=\"pi pi-angle-up\" (click)=\"moveUp($event)\"></button>\n                <button type=\"button\" pButton icon=\"pi pi-angle-double-up\" (click)=\"moveTop($event)\"></button>\n                <button type=\"button\" pButton icon=\"pi pi-angle-down\" (click)=\"moveDown($event)\"></button>\n                <button type=\"button\" pButton icon=\"pi pi-angle-double-down\" (click)=\"moveBottom($event)\"></button>\n            </div>\n            <div class=\"ui-orderlist-list-container\">\n                <div class=\"ui-orderlist-caption ui-widget-header ui-corner-top\" *ngIf=\"header\">{{header}}</div>\n                <div class=\"ui-orderlist-filter-container ui-widget-content\" *ngIf=\"filterBy\">\n                    <input type=\"text\" role=\"textbox\" (keyup)=\"onFilterKeyup($event)\" class=\"ui-inputtext ui-widget ui-state-default ui-corner-all\" [attr.placeholder]=\"filterPlaceholder\">\n                    <span class=\"ui-orderlist-filter-icon pi pi-search\"></span>\n                </div>\n                <ul #listelement class=\"ui-widget-content ui-orderlist-list ui-corner-bottom\" [ngStyle]=\"listStyle\" (dragover)=\"onListMouseMove($event)\">\n                    <ng-template ngFor [ngForTrackBy]=\"trackBy\" let-item [ngForOf]=\"value\" let-i=\"index\" let-l=\"last\">\n                        <li class=\"ui-orderlist-droppoint\" *ngIf=\"dragdrop && isItemVisible(item)\" (dragover)=\"onDragOver($event, i)\" (drop)=\"onDrop($event, i)\" (dragleave)=\"onDragLeave($event)\" \n                            [ngClass]=\"{'ui-state-highlight': (i === dragOverItemIndex)}\"></li>\n                        <li class=\"ui-orderlist-item\"\n                            [ngClass]=\"{'ui-state-highlight':isSelected(item)}\" \n                            (click)=\"onItemClick($event,item,i)\" (touchend)=\"onItemTouchEnd($event)\"\n                            [style.display]=\"isItemVisible(item) ? 'block' : 'none'\"\n                            [draggable]=\"dragdrop\" (dragstart)=\"onDragStart($event, i)\" (dragend)=\"onDragEnd($event)\">\n                            <ng-container *ngTemplateOutlet=\"itemTemplate; context: {$implicit: item, index: i}\"></ng-container>\n                        </li>\n                        <li class=\"ui-orderlist-droppoint\" *ngIf=\"dragdrop && l\" (dragover)=\"onDragOver($event, i + 1)\" (drop)=\"onDrop($event, i + 1)\" (dragleave)=\"onDragLeave($event)\" \n                            [ngClass]=\"{'ui-state-highlight': (i + 1 === dragOverItemIndex)}\"></li>\n                    </ng-template>\n                </ul>\n            </div>\n        </div>\n    ",
                    providers: [domhandler_1.DomHandler, objectutils_1.ObjectUtils]
                },] },
    ];
    /** @nocollapse */
    OrderList.ctorParameters = function () { return [
        { type: core_1.ElementRef },
        { type: domhandler_1.DomHandler },
        { type: objectutils_1.ObjectUtils }
    ]; };
    OrderList.propDecorators = {
        header: [{ type: core_1.Input }],
        style: [{ type: core_1.Input }],
        styleClass: [{ type: core_1.Input }],
        listStyle: [{ type: core_1.Input }],
        responsive: [{ type: core_1.Input }],
        filterBy: [{ type: core_1.Input }],
        filterPlaceholder: [{ type: core_1.Input }],
        metaKeySelection: [{ type: core_1.Input }],
        dragdrop: [{ type: core_1.Input }],
        dragdropScope: [{ type: core_1.Input }],
        controlsPosition: [{ type: core_1.Input }],
        selectionChange: [{ type: core_1.Output }],
        trackBy: [{ type: core_1.Input }],
        onReorder: [{ type: core_1.Output }],
        onSelectionChange: [{ type: core_1.Output }],
        onFilterEvent: [{ type: core_1.Output }],
        listViewChild: [{ type: core_1.ViewChild, args: ['listelement',] }],
        templates: [{ type: core_1.ContentChildren, args: [shared_1.PrimeTemplate,] }],
        selection: [{ type: core_1.Input }],
        value: [{ type: core_1.Input }]
    };
    return OrderList;
}());
exports.OrderList = OrderList;
var OrderListModule = /** @class */ (function () {
    function OrderListModule() {
    }
    OrderListModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [common_1.CommonModule, button_1.ButtonModule, shared_1.SharedModule],
                    exports: [OrderList, shared_1.SharedModule],
                    declarations: [OrderList]
                },] },
    ];
    return OrderListModule;
}());
exports.OrderListModule = OrderListModule;
//# sourceMappingURL=orderlist.js.map