var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NgModule, Component, ElementRef, Input, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomHandler } from '../dom/domhandler';
import { RouterModule } from '@angular/router';
var MegaMenu = (function () {
    function MegaMenu(el, domHandler, renderer) {
        this.el = el;
        this.domHandler = domHandler;
        this.renderer = renderer;
        this.orientation = 'horizontal';
    }
    MegaMenu.prototype.onItemMouseEnter = function (event, item, menuitem) {
        if (menuitem.disabled) {
            return;
        }
        this.activeItem = item;
        var submenu = item.children[0].nextElementSibling;
        if (submenu) {
            submenu.style.zIndex = ++DomHandler.zindex;
            if (this.orientation === 'horizontal') {
                submenu.style.top = this.domHandler.getOuterHeight(item.children[0]) + 'px';
                submenu.style.left = '0px';
            }
            else if (this.orientation === 'vertical') {
                submenu.style.top = '0px';
                submenu.style.left = this.domHandler.getOuterWidth(item.children[0]) + 'px';
            }
        }
    };
    MegaMenu.prototype.onItemMouseLeave = function (event, link) {
        this.activeItem = null;
    };
    MegaMenu.prototype.itemClick = function (event, item) {
        if (item.disabled) {
            event.preventDefault();
            return;
        }
        if (!item.url) {
            event.preventDefault();
        }
        if (item.command) {
            item.command({
                originalEvent: event,
                item: item
            });
        }
        this.activeItem = null;
    };
    MegaMenu.prototype.getColumnClass = function (menuitem) {
        var length = menuitem.items ? menuitem.items.length : 0;
        var columnClass;
        switch (length) {
            case 2:
                columnClass = 'ui-g-6';
                break;
            case 3:
                columnClass = 'ui-g-4';
                break;
            case 4:
                columnClass = 'ui-g-3';
                break;
            case 6:
                columnClass = 'ui-g-2';
                break;
            default:
                columnClass = 'ui-g-12';
                break;
        }
        return columnClass;
    };
    return MegaMenu;
}());
__decorate([
    Input(),
    __metadata("design:type", Array)
], MegaMenu.prototype, "model", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], MegaMenu.prototype, "style", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], MegaMenu.prototype, "styleClass", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], MegaMenu.prototype, "orientation", void 0);
MegaMenu = __decorate([
    Component({
        selector: 'p-megaMenu',
        template: "\n        <div [class]=\"styleClass\" [ngStyle]=\"style\"\n            [ngClass]=\"{'ui-menu ui-menubar ui-megamenu ui-widget ui-widget-content ui-corner-all ui-helper-clearfix':true,'ui-megamenu-vertical': orientation == 'vertical'}\">\n            <ul class=\"ui-menu-list ui-helper-reset ui-menubar-root-list\">\n                <ng-template ngFor let-category [ngForOf]=\"model\">\n                    <li *ngIf=\"category.separator\" class=\"ui-menu-separator ui-widget-content\">\n                    <li *ngIf=\"!category.separator\" #item [ngClass]=\"{'ui-menuitem ui-widget ui-corner-all':true,'ui-menu-parent':category.items,'ui-menuitem-active':item==activeItem}\"\n                        (mouseenter)=\"onItemMouseEnter($event, item, category)\" (mouseleave)=\"onItemMouseLeave($event, item)\">\n                        <a class=\"ui-menuitem-link ui-corner-all ui-submenu-link\" [ngClass]=\"{'ui-state-disabled':category.disabled}\">\n                            <span class=\"ui-menuitem-icon fa fa-fw\" [ngClass]=\"category.icon\"></span>\n                            <span class=\"ui-menuitem-text\">{{category.label}}</span>\n                            <span class=\"ui-submenu-icon fa fa-fw\" [ngClass]=\"{'fa-caret-down':orientation=='horizontal','fa-caret-right':orientation=='vertical'}\"></span>\n                        </a>\n                        <div class=\"ui-megamenu-panel ui-widget-content ui-menu-list ui-corner-all ui-helper-clearfix ui-menu-child ui-shadow\">\n                            <div class=\"ui-g\">\n                                <ng-template ngFor let-column [ngForOf]=\"category.items\">\n                                    <div [class]=\"getColumnClass(category)\">\n                                        <ng-template ngFor let-submenu [ngForOf]=\"column\">\n                                            <ul class=\"ui-menu-list ui-helper-reset\">\n                                                <li class=\"ui-widget-header ui-corner-all\"><h3>{{submenu.label}}</h3></li>\n                                                <ng-template ngFor let-item [ngForOf]=\"submenu.items\">\n                                                    <li *ngIf=\"item.separator\" class=\"ui-menu-separator ui-widget-content\">\n                                                    <li *ngIf=\"!item.separator\" class=\"ui-menuitem ui-widget ui-corner-all\">\n                                                        <a *ngIf=\"!item.routerLink\" [href]=\"item.url||'#'\" class=\"ui-menuitem-link ui-corner-all\" [attr.target]=\"item.target\" [attr.title]=\"item.title\"\n                                                            [ngClass]=\"{'ui-state-disabled':item.disabled}\" (click)=\"itemClick($event, item)\">\n                                                            <span class=\"ui-menuitem-icon fa fa-fw\" *ngIf=\"item.icon\" [ngClass]=\"item.icon\"></span>\n                                                            <span class=\"ui-menuitem-text\">{{item.label}}</span>\n                                                        </a>\n                                                        <a *ngIf=\"item.routerLink\" [routerLink]=\"item.routerLink\" [routerLinkActive]=\"'ui-state-active'\" \n                                                            [routerLinkActiveOptions]=\"item.routerLinkActiveOptions||{exact:false}\" class=\"ui-menuitem-link ui-corner-all\" \n                                                             [attr.target]=\"item.target\" [attr.title]=\"item.title\"\n                                                            [ngClass]=\"{'ui-state-disabled':item.disabled}\" (click)=\"itemClick($event, item)\">\n                                                            <span class=\"ui-menuitem-icon fa fa-fw\" *ngIf=\"item.icon\" [ngClass]=\"item.icon\"></span>\n                                                            <span class=\"ui-menuitem-text\">{{item.label}}</span>\n                                                        </a>\n                                                    </li>\n                                                </ng-template>\n                                            </ul>\n                                        </ng-template>\n                                    </div>\n                                </ng-template>\n                            </div>\n                        </div>\n                    </li>\n                </ng-template>\n                <li class=\"ui-menuitem ui-menuitem-custom ui-widget ui-corner-all\" *ngIf=\"orientation === 'horizontal'\">\n                    <ng-content></ng-content>\n                </li>\n            </ul>\n        </div>\n    ",
        providers: [DomHandler]
    }),
    __metadata("design:paramtypes", [ElementRef, DomHandler, Renderer2])
], MegaMenu);
export { MegaMenu };
var MegaMenuModule = (function () {
    function MegaMenuModule() {
    }
    return MegaMenuModule;
}());
MegaMenuModule = __decorate([
    NgModule({
        imports: [CommonModule, RouterModule],
        exports: [MegaMenu, RouterModule],
        declarations: [MegaMenu]
    })
], MegaMenuModule);
export { MegaMenuModule };
//# sourceMappingURL=megamenu.js.map