var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { NgModule, Component, ElementRef, Input, Renderer2, ViewChild, Inject, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomHandler } from '../dom/domhandler';
import { RouterModule } from '@angular/router';
var MenuItemContent = (function () {
    function MenuItemContent(menu) {
        this.menu = menu;
    }
    return MenuItemContent;
}());
__decorate([
    Input("pMenuItemContent"),
    __metadata("design:type", Object)
], MenuItemContent.prototype, "item", void 0);
MenuItemContent = __decorate([
    Component({
        selector: '[pMenuItemContent]',
        template: "\n        <a *ngIf=\"!item.routerLink\" [href]=\"item.url||'#'\" class=\"ui-menuitem-link ui-corner-all\" [attr.target]=\"item.target\" [attr.title]=\"item.title\"\n            [ngClass]=\"{'ui-state-disabled':item.disabled}\" (click)=\"menu.itemClick($event, item)\">\n            <span class=\"ui-menuitem-icon fa fa-fw\" *ngIf=\"item.icon\" [ngClass]=\"item.icon\"></span>\n            <span class=\"ui-menuitem-text\">{{item.label}}</span>\n        </a>\n        <a *ngIf=\"item.routerLink\" [routerLink]=\"item.routerLink\" [routerLinkActive]=\"'ui-state-active'\" \n            [routerLinkActiveOptions]=\"item.routerLinkActiveOptions||{exact:false}\" class=\"ui-menuitem-link ui-corner-all\" [attr.target]=\"item.target\"\n             [attr.title]=\"item.title\" [ngClass]=\"{'ui-state-disabled':item.disabled}\" (click)=\"menu.itemClick($event, item)\">\n            <span class=\"ui-menuitem-icon fa fa-fw\" *ngIf=\"item.icon\" [ngClass]=\"item.icon\"></span>\n            <span class=\"ui-menuitem-text\">{{item.label}}</span>\n        </a>\n    "
    }),
    __param(0, Inject(forwardRef(function () { return Menu; }))),
    __metadata("design:paramtypes", [Menu])
], MenuItemContent);
export { MenuItemContent };
var Menu = (function () {
    function Menu(el, domHandler, renderer) {
        this.el = el;
        this.domHandler = domHandler;
        this.renderer = renderer;
    }
    Menu.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.container = this.containerViewChild.nativeElement;
        if (this.popup) {
            if (this.appendTo) {
                if (this.appendTo === 'body')
                    document.body.appendChild(this.container);
                else
                    this.domHandler.appendChild(this.container, this.appendTo);
            }
            this.documentClickListener = this.renderer.listen('document', 'click', function () {
                if (!_this.preventDocumentDefault) {
                    _this.hide();
                }
                _this.preventDocumentDefault = false;
            });
        }
    };
    Menu.prototype.toggle = function (event) {
        if (this.container.offsetParent)
            this.hide();
        else
            this.show(event);
        this.preventDocumentDefault = true;
    };
    Menu.prototype.onResize = function (event) {
        if (this.onResizeTarget && this.container.offsetParent) {
            this.domHandler.absolutePosition(this.container, this.onResizeTarget);
        }
    };
    Menu.prototype.show = function (event) {
        var target = event.currentTarget;
        this.onResizeTarget = event.currentTarget;
        this.container.style.display = 'block';
        this.domHandler.absolutePosition(this.container, target);
        this.domHandler.fadeIn(this.container, 250);
        this.preventDocumentDefault = true;
    };
    Menu.prototype.hide = function () {
        this.container.style.display = 'none';
    };
    Menu.prototype.itemClick = function (event, item) {
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
        if (this.popup) {
            this.hide();
        }
    };
    Menu.prototype.ngOnDestroy = function () {
        if (this.popup) {
            if (this.documentClickListener) {
                this.documentClickListener();
            }
            if (this.appendTo) {
                this.el.nativeElement.appendChild(this.container);
            }
        }
    };
    Menu.prototype.hasSubMenu = function () {
        if (this.model) {
            for (var _i = 0, _a = this.model; _i < _a.length; _i++) {
                var item = _a[_i];
                if (item.items) {
                    return true;
                }
            }
        }
        return false;
    };
    return Menu;
}());
__decorate([
    Input(),
    __metadata("design:type", Array)
], Menu.prototype, "model", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], Menu.prototype, "popup", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], Menu.prototype, "style", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], Menu.prototype, "styleClass", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], Menu.prototype, "appendTo", void 0);
__decorate([
    ViewChild('container'),
    __metadata("design:type", ElementRef)
], Menu.prototype, "containerViewChild", void 0);
Menu = __decorate([
    Component({
        selector: 'p-menu',
        template: "\n        <div #container [ngClass]=\"{'ui-menu ui-widget ui-widget-content ui-corner-all ui-helper-clearfix':true,'ui-menu-dynamic ui-shadow':popup}\" \n            [class]=\"styleClass\" [ngStyle]=\"style\" (click)=\"preventDocumentDefault=true\">\n            <ul class=\"ui-menu-list ui-helper-reset\">\n                <ng-template ngFor let-submenu [ngForOf]=\"model\" *ngIf=\"hasSubMenu()\">\n                    <li class=\"ui-menu-separator ui-widget-content\" *ngIf=\"submenu.separator\" [ngClass]=\"{'ui-helper-hidden': submenu.visible === false}\"></li>\n                    <li class=\"ui-widget-header ui-corner-all\" *ngIf=\"!submenu.separator\" [ngClass]=\"{'ui-helper-hidden': submenu.visible === false}\"><h3>{{submenu.label}}</h3></li>\n                    <ng-template ngFor let-item [ngForOf]=\"submenu.items\">\n                        <li class=\"ui-menu-separator ui-widget-content\" *ngIf=\"item.separator\" [ngClass]=\"{'ui-helper-hidden': (item.visible === false ||\u00A0submenu.visible === false)}\"></li>\n                        <li class=\"ui-menuitem ui-widget ui-corner-all\" *ngIf=\"!item.separator\" [pMenuItemContent]=\"item\" [ngClass]=\"{'ui-helper-hidden': (item.visible === false || submenu.visible === false)}\"></li>\n                    </ng-template>\n                </ng-template>\n                <ng-template ngFor let-item [ngForOf]=\"model\" *ngIf=\"!hasSubMenu()\">\n                    <li class=\"ui-menu-separator ui-widget-content\" *ngIf=\"item.separator\" [ngClass]=\"{'ui-helper-hidden': item.visible === false}\"></li>\n                    <li class=\"ui-menuitem ui-widget ui-corner-all\" *ngIf=\"!item.separator\" [pMenuItemContent]=\"item\" [ngClass]=\"{'ui-helper-hidden': item.visible === false}\"></li>\n                </ng-template>\n            </ul>\n        </div>\n    ",
        providers: [DomHandler],
        host: { '(window:resize)': 'onResize($event)' }
    }),
    __metadata("design:paramtypes", [ElementRef, DomHandler, Renderer2])
], Menu);
export { Menu };
var MenuModule = (function () {
    function MenuModule() {
    }
    return MenuModule;
}());
MenuModule = __decorate([
    NgModule({
        imports: [CommonModule, RouterModule],
        exports: [Menu, RouterModule],
        declarations: [Menu, MenuItemContent]
    })
], MenuModule);
export { MenuModule };
//# sourceMappingURL=menu.js.map