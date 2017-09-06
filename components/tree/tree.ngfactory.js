"use strict";
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = require("@angular/core");
var i1 = require("./tree");
var i2 = require("@angular/common");
var i3 = require("../common/shared");
var i4 = require("../common/treedragdropservice");
exports.TreeModuleNgFactory = i0.ɵcmf(i1.TreeModule, [], function (_l) {
    return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, []], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(4608, i2.NgLocalization, i2.NgLocaleLocalization, [i0.LOCALE_ID]), i0.ɵmpd(512, i2.CommonModule, i2.CommonModule, []), i0.ɵmpd(512, i3.SharedModule, i3.SharedModule, []), i0.ɵmpd(512, i1.TreeModule, i1.TreeModule, [])]);
});
var styles_Tree = [];
exports.RenderType_Tree = i0.ɵcrt({ encapsulation: 2, styles: styles_Tree,
    data: {} });
function View_Tree_2(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 0, 'div', [['class',
                'ui-tree-loading-mask ui-widget-overlay']], null, null, null, null, null))], null, null);
}
function View_Tree_3(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 3, 'div', [['class',
                'ui-tree-loading-content']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                '])), (_l()(),
            i0.ɵeld(0, null, null, 0, 'i', [], [[8, 'className', 0]], null, null, null, null)), (_l()(), i0.ɵted(null, ['\n            ']))], null, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = ('fa fa-spin fa-2x ' + _co.loadingIcon);
        _ck(_v, 2, 0, currVal_0);
    });
}
function View_Tree_4(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 1, 'p-treeNode', [], null, null, null, View_UITreeNode_0, exports.RenderType_UITreeNode)),
        i0.ɵdid(114688, null, 0, i1.UITreeNode, [i1.Tree], { node: [0, 'node'], index: [1,
                'index'], firstChild: [2, 'firstChild'], lastChild: [3, 'lastChild'] }, null)], function (_ck, _v) {
        var currVal_0 = _v.context.$implicit;
        var currVal_1 = _v.context.index;
        var currVal_2 = _v.context.first;
        var currVal_3 = _v.context.last;
        _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3);
    }, null);
}
function View_Tree_1(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 16, 'div', [], null, [[null, 'drop'], [null, 'dragover'], [null,
                'dragenter'], [null, 'dragleave']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('drop' === en)) {
                var pd_0 = (_co.onDrop($event) !== false);
                ad = (pd_0 && ad);
            }
            if (('dragover' === en)) {
                var pd_1 = (_co.onDragOver($event) !== false);
                ad = (pd_1 && ad);
            }
            if (('dragenter' === en)) {
                var pd_2 = (_co.onDragEnter($event) !== false);
                ad = (pd_2 && ad);
            }
            if (('dragleave' === en)) {
                var pd_3 = (_co.onDragLeave($event) !== false);
                ad = (pd_3 && ad);
            }
            return ad;
        }, null, null)), i0.ɵdid(278528, null, 0, i2.NgClass, [i0.IterableDiffers,
            i0.KeyValueDiffers, i0.ElementRef, i0.Renderer], { klass: [0, 'klass'], ngClass: [1,
                'ngClass'] }, null), i0.ɵpod({ 'ui-tree ui-widget ui-widget-content ui-corner-all': 0,
            'ui-tree-selectable': 1, 'ui-treenode-dragover': 2, 'ui-tree-loading': 3 }), i0.ɵdid(278528, null, 0, i2.NgStyle, [i0.KeyValueDiffers, i0.ElementRef, i0.Renderer], { ngStyle: [0,
                'ngStyle'] }, null), (_l()(), i0.ɵted(null, ['\n            '])),
        (_l()(), i0.ɵand(16777216, null, null, 1, null, View_Tree_2)),
        i0.ɵdid(16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0,
                'ngIf'] }, null), (_l()(), i0.ɵted(null, ['\n            '])),
        (_l()(), i0.ɵand(16777216, null, null, 1, null, View_Tree_3)),
        i0.ɵdid(16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0,
                'ngIf'] }, null), (_l()(), i0.ɵted(null, ['\n            '])),
        (_l()(), i0.ɵeld(0, null, null, 4, 'ul', [['class', 'ui-tree-container']], null, null, null, null, null)),
        (_l()(), i0.ɵted(null, ['\n                '])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_Tree_4)), i0.ɵdid(802816, null, 0, i2.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, 'ngForOf'] }, null), (_l()(), i0.ɵted(null, ['\n            '])),
        (_l()(), i0.ɵted(null, ['\n        ']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.styleClass;
        var currVal_1 = _ck(_v, 2, 0, true, _co.selectionMode, _co.dragHover, _co.loading);
        _ck(_v, 1, 0, currVal_0, currVal_1);
        var currVal_2 = _co.style;
        _ck(_v, 3, 0, currVal_2);
        var currVal_3 = _co.loading;
        _ck(_v, 6, 0, currVal_3);
        var currVal_4 = _co.loading;
        _ck(_v, 9, 0, currVal_4);
        var currVal_5 = _co.value;
        _ck(_v, 14, 0, currVal_5);
    }, null);
}
function View_Tree_6(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 0, 'div', [['class',
                'ui-tree-loading ui-widget-overlay']], null, null, null, null, null))], null, null);
}
function View_Tree_7(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 3, 'div', [['class',
                'ui-tree-loading-content']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                '])), (_l()(),
            i0.ɵeld(0, null, null, 0, 'i', [], [[8, 'className', 0]], null, null, null, null)), (_l()(), i0.ɵted(null, ['\n            ']))], null, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = ('fa fa-spin fa-2x ' + _co.loadingIcon);
        _ck(_v, 2, 0, currVal_0);
    });
}
function View_Tree_8(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 4, 'table', [], null, null, null, null, null)), (_l()(),
            i0.ɵted(null, ['\n                '])), (_l()(), i0.ɵeld(0, null, null, 1, 'p-treeNode', [], null, null, null, View_UITreeNode_0, exports.RenderType_UITreeNode)), i0.ɵdid(114688, null, 0, i1.UITreeNode, [i1.Tree], { node: [0, 'node'], root: [1, 'root'] }, null), (_l()(), i0.ɵted(null, ['\n            ']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.value[0];
        var currVal_1 = true;
        _ck(_v, 3, 0, currVal_0, currVal_1);
    }, null);
}
function View_Tree_5(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 13, 'div', [], null, null, null, null, null)), i0.ɵdid(278528, null, 0, i2.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef,
            i0.Renderer], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null), i0.ɵpod({ 'ui-tree ui-tree-horizontal ui-widget ui-widget-content ui-corner-all': 0,
            'ui-tree-selectable': 1 }), i0.ɵdid(278528, null, 0, i2.NgStyle, [i0.KeyValueDiffers,
            i0.ElementRef, i0.Renderer], { ngStyle: [0, 'ngStyle'] }, null), (_l()(), i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_Tree_6)), i0.ɵdid(16384, null, 0, i2.NgIf, [i0.ViewContainerRef,
            i0.TemplateRef], { ngIf: [0, 'ngIf'] }, null), (_l()(), i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_Tree_7)), i0.ɵdid(16384, null, 0, i2.NgIf, [i0.ViewContainerRef,
            i0.TemplateRef], { ngIf: [0, 'ngIf'] }, null), (_l()(), i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_Tree_8)), i0.ɵdid(16384, null, 0, i2.NgIf, [i0.ViewContainerRef,
            i0.TemplateRef], { ngIf: [0, 'ngIf'] }, null), (_l()(), i0.ɵted(null, ['\n        ']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.styleClass;
        var currVal_1 = _ck(_v, 2, 0, true, _co.selectionMode);
        _ck(_v, 1, 0, currVal_0, currVal_1);
        var currVal_2 = _co.style;
        _ck(_v, 3, 0, currVal_2);
        var currVal_3 = _co.loading;
        _ck(_v, 6, 0, currVal_3);
        var currVal_4 = _co.loading;
        _ck(_v, 9, 0, currVal_4);
        var currVal_5 = (_co.value && _co.value[0]);
        _ck(_v, 12, 0, currVal_5);
    }, null);
}
function View_Tree_0(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵted(null, ['\n        '])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_Tree_1)), i0.ɵdid(16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, 'ngIf'] }, null),
        (_l()(), i0.ɵted(null, ['\n        '])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_Tree_5)), i0.ɵdid(16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, 'ngIf'] }, null),
        (_l()(), i0.ɵted(null, ['\n    ']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = !_co.horizontal;
        _ck(_v, 2, 0, currVal_0);
        var currVal_1 = _co.horizontal;
        _ck(_v, 5, 0, currVal_1);
    }, null);
}
exports.View_Tree_0 = View_Tree_0;
function View_Tree_Host_0(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 2, 'p-tree', [], null, null, null, View_Tree_0, exports.RenderType_Tree)), i0.ɵdid(1294336, null, 1, i1.Tree, [[2, i4.TreeDragDropService]], null, null),
        i0.ɵqud(603979776, 1, { templates: 1 })], function (_ck, _v) {
        _ck(_v, 1, 0);
    }, null);
}
exports.View_Tree_Host_0 = View_Tree_Host_0;
exports.TreeNgFactory = i0.ɵccf('p-tree', i1.Tree, View_Tree_Host_0, { value: 'value', selectionMode: 'selectionMode', selection: 'selection',
    style: 'style', styleClass: 'styleClass', contextMenu: 'contextMenu', layout: 'layout',
    draggableScope: 'draggableScope', droppableScope: 'droppableScope', draggableNodes: 'draggableNodes',
    droppableNodes: 'droppableNodes', metaKeySelection: 'metaKeySelection', propagateSelectionUp: 'propagateSelectionUp',
    propagateSelectionDown: 'propagateSelectionDown', loading: 'loading', loadingIcon: 'loadingIcon' }, { selectionChange: 'selectionChange', onNodeSelect: 'onNodeSelect', onNodeUnselect: 'onNodeUnselect',
    onNodeExpand: 'onNodeExpand', onNodeCollapse: 'onNodeCollapse', onNodeContextMenuSelect: 'onNodeContextMenuSelect',
    onNodeDrop: 'onNodeDrop' }, []);
var styles_UITreeNode = [];
exports.RenderType_UITreeNode = i0.ɵcrt({ encapsulation: 2, styles: styles_UITreeNode,
    data: {} });
function View_UITreeNode_2(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 2, 'li', [['class',
                'ui-treenode-droppoint']], null, [[null, 'drop'], [null,
                'dragover'], [null, 'dragenter'], [null, 'dragleave']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('drop' === en)) {
                var pd_0 = (_co.onDropPoint($event, (0 - 1)) !== false);
                ad = (pd_0 && ad);
            }
            if (('dragover' === en)) {
                var pd_1 = (_co.onDropPointDragOver($event) !== false);
                ad = (pd_1 && ad);
            }
            if (('dragenter' === en)) {
                var pd_2 = (_co.onDropPointDragEnter($event, (0 - 1)) !== false);
                ad = (pd_2 && ad);
            }
            if (('dragleave' === en)) {
                var pd_3 = (_co.onDropPointDragLeave($event) !== false);
                ad = (pd_3 && ad);
            }
            return ad;
        }, null, null)), i0.ɵdid(278528, null, 0, i2.NgClass, [i0.IterableDiffers,
            i0.KeyValueDiffers, i0.ElementRef, i0.Renderer], { klass: [0, 'klass'], ngClass: [1,
                'ngClass'] }, null), i0.ɵpod({ 'ui-treenode-droppoint-active ui-state-highlight': 0 })], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = 'ui-treenode-droppoint';
        var currVal_1 = _ck(_v, 2, 0, _co.draghoverPrev);
        _ck(_v, 1, 0, currVal_0, currVal_1);
    }, null);
}
function View_UITreeNode_4(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 5, 'div', [['class',
                'ui-chkbox']], null, null, null, null, null)),
        (_l()(), i0.ɵeld(0, null, null, 4, 'div', [['class', 'ui-chkbox-box ui-widget ui-corner-all ui-state-default']], null, null, null, null, null)),
        (_l()(), i0.ɵted(null, ['\n                        '])), (_l()(), i0.ɵeld(0, null, null, 2, 'span', [['class', 'ui-chkbox-icon ui-clickable fa']], null, null, null, null, null)),
        i0.ɵdid(278528, null, 0, i2.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers,
            i0.ElementRef, i0.Renderer], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
        i0.ɵpod({ 'fa-check': 0, 'fa-minus': 1 })], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = 'ui-chkbox-icon ui-clickable fa';
        var currVal_1 = _ck(_v, 5, 0, _co.isSelected(), _co.node.partialSelected);
        _ck(_v, 4, 0, currVal_0, currVal_1);
    }, null);
}
function View_UITreeNode_5(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 0, 'span', [], [[8, 'className', 0]], null, null, null, null))], null, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.getIcon();
        _ck(_v, 0, 0, currVal_0);
    });
}
function View_UITreeNode_6(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 1, 'span', [], null, null, null, null, null)), (_l()(),
            i0.ɵted(null, ['', '']))], null, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.node.label;
        _ck(_v, 1, 0, currVal_0);
    });
}
function View_UITreeNode_7(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 4, 'span', [], null, null, null, null, null)), (_l()(),
            i0.ɵted(null, ['\n                                '])), (_l()(), i0.ɵeld(16777216, null, null, 1, 'p-treeNodeTemplateLoader', [], null, null, null, View_TreeNodeTemplateLoader_0, exports.RenderType_TreeNodeTemplateLoader)),
        i0.ɵdid(245760, null, 0, i1.TreeNodeTemplateLoader, [i0.ViewContainerRef], { node: [0, 'node'], template: [1, 'template'] }, null), (_l()(), i0.ɵted(null, ['\n                            ']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.node;
        var currVal_1 = _co.tree.getTemplateForNode(_co.node);
        _ck(_v, 3, 0, currVal_0, currVal_1);
    }, null);
}
function View_UITreeNode_9(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 1, 'p-treeNode', [], null, null, null, View_UITreeNode_0, exports.RenderType_UITreeNode)),
        i0.ɵdid(114688, null, 0, i1.UITreeNode, [i1.Tree], { node: [0, 'node'], parentNode: [1,
                'parentNode'], index: [2, 'index'], firstChild: [3, 'firstChild'], lastChild: [4,
                'lastChild'] }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _v.context.$implicit;
        var currVal_1 = _co.node;
        var currVal_2 = _v.context.index;
        var currVal_3 = _v.context.first;
        var currVal_4 = _v.context.last;
        _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4);
    }, null);
}
function View_UITreeNode_8(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 4, 'ul', [['class',
                'ui-treenode-children'], ['style', 'display: none;']], [[4, 'display', null]], null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                    '])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_UITreeNode_9)), i0.ɵdid(802816, null, 0, i2.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, 'ngForOf'] }, null), (_l()(), i0.ɵted(null, ['\n                ']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_1 = _co.node.children;
        _ck(_v, 3, 0, currVal_1);
    }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = (_co.node.expanded ? 'block' : 'none');
        _ck(_v, 0, 0, currVal_0);
    });
}
function View_UITreeNode_3(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 29, 'li', [], null, null, null, null, null)), i0.ɵdid(278528, null, 0, i2.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef,
            i0.Renderer], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null), i0.ɵpod({ 'ui-treenode-leaf': 0 }),
        (_l()(), i0.ɵted(null, ['\n                '])), (_l()(), i0.ɵeld(0, null, null, 21, 'div', [['class', 'ui-treenode-content']], [[8, 'draggable',
                0]], [[null, 'click'], [null, 'contextmenu'], [null,
                'touchend'], [null, 'drop'], [null, 'dragover'], [null,
                'dragenter'], [null, 'dragleave'], [null, 'dragstart'],
            [null, 'dragend']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (_co.onNodeClick($event) !== false);
                ad = (pd_0 && ad);
            }
            if (('contextmenu' === en)) {
                var pd_1 = (_co.onNodeRightClick($event) !== false);
                ad = (pd_1 && ad);
            }
            if (('touchend' === en)) {
                var pd_2 = (_co.onNodeTouchEnd() !== false);
                ad = (pd_2 && ad);
            }
            if (('drop' === en)) {
                var pd_3 = (_co.onDropNode($event) !== false);
                ad = (pd_3 && ad);
            }
            if (('dragover' === en)) {
                var pd_4 = (_co.onDropNodeDragOver($event) !== false);
                ad = (pd_4 && ad);
            }
            if (('dragenter' === en)) {
                var pd_5 = (_co.onDropNodeDragEnter($event) !== false);
                ad = (pd_5 && ad);
            }
            if (('dragleave' === en)) {
                var pd_6 = (_co.onDropNodeDragLeave($event) !== false);
                ad = (pd_6 && ad);
            }
            if (('dragstart' === en)) {
                var pd_7 = (_co.onDragStart($event) !== false);
                ad = (pd_7 && ad);
            }
            if (('dragend' === en)) {
                var pd_8 = (_co.onDragStop($event) !== false);
                ad = (pd_8 && ad);
            }
            return ad;
        }, null, null)), i0.ɵdid(278528, null, 0, i2.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer], { klass: [0,
                'klass'], ngClass: [1, 'ngClass'] }, null), i0.ɵpod({ 'ui-treenode-selectable': 0,
            'ui-treenode-dragover': 1, 'ui-treenode-content-selected': 2 }), (_l()(), i0.ɵted(null, ['\n                    '])), (_l()(), i0.ɵeld(0, null, null, 2, 'span', [['class', 'ui-tree-toggler  fa fa-fw']], null, [[null,
                'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (_co.toggle($event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), i0.ɵdid(278528, null, 0, i2.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer], { klass: [0,
                'klass'], ngClass: [1, 'ngClass'] }, null), i0.ɵpod({ 'fa-caret-right': 0,
            'fa-caret-down': 1 }), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_UITreeNode_4)), i0.ɵdid(16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, 'ngIf'] }, null), (_l()(),
            i0.ɵand(16777216, null, null, 1, null, View_UITreeNode_5)),
        i0.ɵdid(16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0,
                'ngIf'] }, null), (_l()(), i0.ɵeld(0, null, null, 9, 'span', [['class', 'ui-treenode-label ui-corner-all']], null, null, null, null, null)), i0.ɵdid(278528, null, 0, i2.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null), i0.ɵpod({ 'ui-state-highlight': 0 }),
        (_l()(), i0.ɵted(null, ['\n                            '])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_UITreeNode_6)), i0.ɵdid(16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, 'ngIf'] }, null), (_l()(), i0.ɵted(null, ['\n                            '])),
        (_l()(), i0.ɵand(16777216, null, null, 1, null, View_UITreeNode_7)),
        i0.ɵdid(16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0,
                'ngIf'] }, null), (_l()(), i0.ɵted(null, ['\n                    '])),
        (_l()(), i0.ɵted(null, ['\n                '])), (_l()(), i0.ɵted(null, ['\n                '])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_UITreeNode_8)), i0.ɵdid(16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, 'ngIf'] }, null), (_l()(),
            i0.ɵted(null, ['\n            ']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = i0.ɵinlineInterpolate(1, 'ui-treenode ', _co.node.styleClass, '');
        var currVal_1 = _ck(_v, 2, 0, _co.isLeaf());
        _ck(_v, 1, 0, currVal_0, currVal_1);
        var currVal_3 = 'ui-treenode-content';
        var currVal_4 = _ck(_v, 6, 0, (_co.tree.selectionMode && (_co.node.selectable !== false)), _co.draghoverNode, _co.isSelected());
        _ck(_v, 5, 0, currVal_3, currVal_4);
        var currVal_5 = 'ui-tree-toggler  fa fa-fw';
        var currVal_6 = _ck(_v, 10, 0, !_co.node.expanded, _co.node.expanded);
        _ck(_v, 9, 0, currVal_5, currVal_6);
        var currVal_7 = (_co.tree.selectionMode == 'checkbox');
        _ck(_v, 12, 0, currVal_7);
        var currVal_8 = ((_co.node.icon || _co.node.expandedIcon) || _co.node.collapsedIcon);
        _ck(_v, 14, 0, currVal_8);
        var currVal_9 = 'ui-treenode-label ui-corner-all';
        var currVal_10 = _ck(_v, 17, 0, _co.isSelected());
        _ck(_v, 16, 0, currVal_9, currVal_10);
        var currVal_11 = !_co.tree.getTemplateForNode(_co.node);
        _ck(_v, 20, 0, currVal_11);
        var currVal_12 = _co.tree.getTemplateForNode(_co.node);
        _ck(_v, 23, 0, currVal_12);
        var currVal_13 = (_co.node.children && _co.node.expanded);
        _ck(_v, 28, 0, currVal_13);
    }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_2 = _co.tree.draggableNodes;
        _ck(_v, 4, 0, currVal_2);
    });
}
function View_UITreeNode_10(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 2, 'li', [['class',
                'ui-treenode-droppoint']], null, [[null, 'drop'], [null,
                'dragover'], [null, 'dragenter'], [null, 'dragleave']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('drop' === en)) {
                var pd_0 = (_co.onDropPoint($event, 1) !== false);
                ad = (pd_0 && ad);
            }
            if (('dragover' === en)) {
                var pd_1 = (_co.onDropPointDragOver($event) !== false);
                ad = (pd_1 && ad);
            }
            if (('dragenter' === en)) {
                var pd_2 = (_co.onDropPointDragEnter($event, 1) !== false);
                ad = (pd_2 && ad);
            }
            if (('dragleave' === en)) {
                var pd_3 = (_co.onDropPointDragLeave($event) !== false);
                ad = (pd_3 && ad);
            }
            return ad;
        }, null, null)), i0.ɵdid(278528, null, 0, i2.NgClass, [i0.IterableDiffers,
            i0.KeyValueDiffers, i0.ElementRef, i0.Renderer], { klass: [0, 'klass'], ngClass: [1,
                'ngClass'] }, null), i0.ɵpod({ 'ui-treenode-droppoint-active ui-state-highlight': 0 })], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = 'ui-treenode-droppoint';
        var currVal_1 = _ck(_v, 2, 0, _co.draghoverNext);
        _ck(_v, 1, 0, currVal_0, currVal_1);
    }, null);
}
function View_UITreeNode_12(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 21, 'td', [['class',
                'ui-treenode-connector']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                            '])),
        (_l()(), i0.ɵeld(0, null, null, 18, 'table', [['class', 'ui-treenode-connector-table']], null, null, null, null, null)),
        (_l()(), i0.ɵted(null, ['\n                                '])), (_l()(),
            i0.ɵeld(0, null, null, 15, 'tbody', [], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                                    '])), (_l()(), i0.ɵeld(0, null, null, 5, 'tr', [], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                                        '])),
        (_l()(), i0.ɵeld(0, null, null, 2, 'td', [], null, null, null, null, null)), i0.ɵdid(278528, null, 0, i2.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef,
            i0.Renderer], { ngClass: [0, 'ngClass'] }, null), i0.ɵpod({ 'ui-treenode-connector-line': 0 }),
        (_l()(), i0.ɵted(null, ['\n                                    '])), (_l()(),
            i0.ɵted(null, ['\n                                    '])), (_l()(),
            i0.ɵeld(0, null, null, 5, 'tr', [], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                                        '])), (_l()(), i0.ɵeld(0, null, null, 2, 'td', [], null, null, null, null, null)), i0.ɵdid(278528, null, 0, i2.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer], { ngClass: [0,
                'ngClass'] }, null), i0.ɵpod({ 'ui-treenode-connector-line': 0 }),
        (_l()(), i0.ɵted(null, ['\n                                    '])), (_l()(),
            i0.ɵted(null, ['\n                                '])), (_l()(), i0.ɵted(null, ['\n                            '])), (_l()(), i0.ɵted(null, ['\n                        ']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _ck(_v, 10, 0, !_co.firstChild);
        _ck(_v, 9, 0, currVal_0);
        var currVal_1 = _ck(_v, 17, 0, !_co.lastChild);
        _ck(_v, 16, 0, currVal_1);
    }, null);
}
function View_UITreeNode_13(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 2, 'span', [['class',
                'ui-tree-toggler fa fa-fw']], null, [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (_co.toggle($event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), i0.ɵdid(278528, null, 0, i2.NgClass, [i0.IterableDiffers,
            i0.KeyValueDiffers, i0.ElementRef, i0.Renderer], { klass: [0, 'klass'], ngClass: [1,
                'ngClass'] }, null), i0.ɵpod({ 'fa-plus': 0, 'fa-minus': 1 })], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = 'ui-tree-toggler fa fa-fw';
        var currVal_1 = _ck(_v, 2, 0, !_co.node.expanded, _co.node.expanded);
        _ck(_v, 1, 0, currVal_0, currVal_1);
    }, null);
}
function View_UITreeNode_14(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 0, 'span', [], [[8, 'className', 0]], null, null, null, null))], null, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.getIcon();
        _ck(_v, 0, 0, currVal_0);
    });
}
function View_UITreeNode_15(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 1, 'span', [], null, null, null, null, null)), (_l()(),
            i0.ɵted(null, ['', '']))], null, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.node.label;
        _ck(_v, 1, 0, currVal_0);
    });
}
function View_UITreeNode_16(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 4, 'span', [], null, null, null, null, null)), (_l()(),
            i0.ɵted(null, ['\n                                            '])), (_l()(),
            i0.ɵeld(16777216, null, null, 1, 'p-treeNodeTemplateLoader', [], null, null, null, View_TreeNodeTemplateLoader_0, exports.RenderType_TreeNodeTemplateLoader)), i0.ɵdid(245760, null, 0, i1.TreeNodeTemplateLoader, [i0.ViewContainerRef], { node: [0, 'node'], template: [1, 'template'] }, null),
        (_l()(), i0.ɵted(null, ['\n                                        ']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.node;
        var currVal_1 = _co.tree.getTemplateForNode(_co.node);
        _ck(_v, 3, 0, currVal_0, currVal_1);
    }, null);
}
function View_UITreeNode_18(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 1, 'p-treeNode', [], null, null, null, View_UITreeNode_0, exports.RenderType_UITreeNode)),
        i0.ɵdid(114688, null, 0, i1.UITreeNode, [i1.Tree], { node: [0, 'node'], firstChild: [1,
                'firstChild'], lastChild: [2, 'lastChild'] }, null)], function (_ck, _v) {
        var currVal_0 = _v.context.$implicit;
        var currVal_1 = _v.context.first;
        var currVal_2 = _v.context.last;
        _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2);
    }, null);
}
function View_UITreeNode_17(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 7, 'td', [['class',
                'ui-treenode-children-container']], [[4, 'display', null]], null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                            '])),
        (_l()(), i0.ɵeld(0, null, null, 4, 'div', [['class', 'ui-treenode-children']], null, null, null, null, null)),
        (_l()(), i0.ɵted(null, ['\n                                '])), (_l()(),
            i0.ɵand(16777216, null, null, 1, null, View_UITreeNode_18)),
        i0.ɵdid(802816, null, 0, i2.NgForOf, [i0.ViewContainerRef, i0.TemplateRef,
            i0.IterableDiffers], { ngForOf: [0, 'ngForOf'] }, null), (_l()(), i0.ɵted(null, ['\n                            '])), (_l()(), i0.ɵted(null, ['\n                        ']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_1 = _co.node.children;
        _ck(_v, 5, 0, currVal_1);
    }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = (_co.node.expanded ? 'table-cell' : 'none');
        _ck(_v, 0, 0, currVal_0);
    });
}
function View_UITreeNode_11(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 36, 'table', [], [[8, 'className', 0]], null, null, null, null)),
        (_l()(), i0.ɵted(null, ['\n                '])), (_l()(), i0.ɵeld(0, null, null, 33, 'tbody', [], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                    '])),
        (_l()(), i0.ɵeld(0, null, null, 30, 'tr', [], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                        '])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_UITreeNode_12)), i0.ɵdid(16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, 'ngIf'] }, null),
        (_l()(), i0.ɵted(null, ['\n                        '])), (_l()(), i0.ɵeld(0, null, null, 21, 'td', [['class', 'ui-treenode']], null, null, null, null, null)), i0.ɵdid(278528, null, 0, i2.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef,
            i0.Renderer], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
        i0.ɵpod({ 'ui-treenode-collapsed': 0 }), (_l()(), i0.ɵted(null, ['\n                            '])),
        (_l()(), i0.ɵeld(0, null, null, 16, 'div', [['class', 'ui-treenode-content ui-state-default ui-corner-all']], null, [[null, 'click'], [null, 'contextmenu'], [null,
                'touchend']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (_co.onNodeClick($event) !== false);
                ad = (pd_0 && ad);
            }
            if (('contextmenu' === en)) {
                var pd_1 = (_co.onNodeRightClick($event) !== false);
                ad = (pd_1 && ad);
            }
            if (('touchend' === en)) {
                var pd_2 = (_co.onNodeTouchEnd() !== false);
                ad = (pd_2 && ad);
            }
            return ad;
        }, null, null)), i0.ɵdid(278528, null, 0, i2.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer], { klass: [0,
                'klass'], ngClass: [1, 'ngClass'] }, null), i0.ɵpod({ 'ui-treenode-selectable': 0,
            'ui-state-highlight': 1 }), (_l()(), i0.ɵted(null, ['\n                                '])),
        (_l()(), i0.ɵand(16777216, null, null, 1, null, View_UITreeNode_13)),
        i0.ɵdid(16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0,
                'ngIf'] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_UITreeNode_14)), i0.ɵdid(16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, 'ngIf'] }, null), (_l()(),
            i0.ɵeld(0, null, null, 7, 'span', [['class', 'ui-treenode-label ui-corner-all']], null, null, null, null, null)),
        (_l()(), i0.ɵted(null, ['\n                                        '])),
        (_l()(), i0.ɵand(16777216, null, null, 1, null, View_UITreeNode_15)),
        i0.ɵdid(16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0,
                'ngIf'] }, null), (_l()(), i0.ɵted(null, ['\n                                        '])),
        (_l()(), i0.ɵand(16777216, null, null, 1, null, View_UITreeNode_16)),
        i0.ɵdid(16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0,
                'ngIf'] }, null), (_l()(), i0.ɵted(null, ['\n                                '])),
        (_l()(), i0.ɵted(null, ['\n                            '])), (_l()(), i0.ɵted(null, ['\n                        '])), (_l()(), i0.ɵted(null, ['\n                        '])),
        (_l()(), i0.ɵand(16777216, null, null, 1, null, View_UITreeNode_17)),
        i0.ɵdid(16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0,
                'ngIf'] }, null), (_l()(), i0.ɵted(null, ['\n                    '])),
        (_l()(), i0.ɵted(null, ['\n                '])), (_l()(), i0.ɵted(null, ['\n            ']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_1 = !_co.root;
        _ck(_v, 7, 0, currVal_1);
        var currVal_2 = 'ui-treenode';
        var currVal_3 = _ck(_v, 11, 0, !_co.node.expanded);
        _ck(_v, 10, 0, currVal_2, currVal_3);
        var currVal_4 = 'ui-treenode-content ui-state-default ui-corner-all';
        var currVal_5 = _ck(_v, 15, 0, _co.tree.selectionMode, _co.isSelected());
        _ck(_v, 14, 0, currVal_4, currVal_5);
        var currVal_6 = !_co.isLeaf();
        _ck(_v, 18, 0, currVal_6);
        var currVal_7 = ((_co.node.icon || _co.node.expandedIcon) || _co.node.collapsedIcon);
        _ck(_v, 20, 0, currVal_7);
        var currVal_8 = !_co.tree.getTemplateForNode(_co.node);
        _ck(_v, 24, 0, currVal_8);
        var currVal_9 = _co.tree.getTemplateForNode(_co.node);
        _ck(_v, 27, 0, currVal_9);
        var currVal_10 = (_co.node.children && _co.node.expanded);
        _ck(_v, 33, 0, currVal_10);
    }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.node.styleClass;
        _ck(_v, 0, 0, currVal_0);
    });
}
function View_UITreeNode_1(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_UITreeNode_2)), i0.ɵdid(16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, 'ngIf'] }, null), (_l()(), i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_UITreeNode_3)), i0.ɵdid(16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, 'ngIf'] }, null), (_l()(), i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_UITreeNode_10)), i0.ɵdid(16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, 'ngIf'] }, null), (_l()(), i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_UITreeNode_11)), i0.ɵdid(16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, 'ngIf'] }, null), (_l()(), i0.ɵted(null, ['\n        ']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.tree.droppableNodes;
        _ck(_v, 2, 0, currVal_0);
        var currVal_1 = !_co.tree.horizontal;
        _ck(_v, 5, 0, currVal_1);
        var currVal_2 = (_co.tree.droppableNodes && _co.lastChild);
        _ck(_v, 8, 0, currVal_2);
        var currVal_3 = _co.tree.horizontal;
        _ck(_v, 11, 0, currVal_3);
    }, null);
}
function View_UITreeNode_0(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵted(null, ['\n        '])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_UITreeNode_1)), i0.ɵdid(16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, 'ngIf'] }, null), (_l()(), i0.ɵted(null, ['\n    ']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.node;
        _ck(_v, 2, 0, currVal_0);
    }, null);
}
exports.View_UITreeNode_0 = View_UITreeNode_0;
function View_UITreeNode_Host_0(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 1, 'p-treeNode', [], null, null, null, View_UITreeNode_0, exports.RenderType_UITreeNode)),
        i0.ɵdid(114688, null, 0, i1.UITreeNode, [i1.Tree], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
    }, null);
}
exports.View_UITreeNode_Host_0 = View_UITreeNode_Host_0;
exports.UITreeNodeNgFactory = i0.ɵccf('p-treeNode', i1.UITreeNode, View_UITreeNode_Host_0, { node: 'node', parentNode: 'parentNode', root: 'root',
    index: 'index', firstChild: 'firstChild', lastChild: 'lastChild' }, {}, []);
var styles_TreeNodeTemplateLoader = [];
exports.RenderType_TreeNodeTemplateLoader = i0.ɵcrt({ encapsulation: 2,
    styles: styles_TreeNodeTemplateLoader, data: {} });
function View_TreeNodeTemplateLoader_0(_l) {
    return i0.ɵvid(0, [], null, null);
}
exports.View_TreeNodeTemplateLoader_0 = View_TreeNodeTemplateLoader_0;
function View_TreeNodeTemplateLoader_Host_0(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(16777216, null, null, 1, 'p-treeNodeTemplateLoader', [], null, null, null, View_TreeNodeTemplateLoader_0, exports.RenderType_TreeNodeTemplateLoader)), i0.ɵdid(245760, null, 0, i1.TreeNodeTemplateLoader, [i0.ViewContainerRef], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
    }, null);
}
exports.View_TreeNodeTemplateLoader_Host_0 = View_TreeNodeTemplateLoader_Host_0;
exports.TreeNodeTemplateLoaderNgFactory = i0.ɵccf('p-treeNodeTemplateLoader', i1.TreeNodeTemplateLoader, View_TreeNodeTemplateLoader_Host_0, { node: 'node', template: 'template' }, {}, []);
//# sourceMappingURL=tree.ngfactory.js.map