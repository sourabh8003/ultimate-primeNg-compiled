"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var animations_1 = require("@angular/animations");
var common_1 = require("@angular/common");
var domhandler_1 = require("../dom/domhandler");
var tooltip_1 = require("../tooltip/tooltip");
var router_1 = require("@angular/router");
var MenuItemContent = /** @class */ (function () {
    function MenuItemContent(menu) {
        this.menu = menu;
    }
    MenuItemContent.decorators = [
        { type: core_1.Component, args: [{
                    selector: '[pMenuItemContent]',
                    template: "\n        <a *ngIf=\"!item.routerLink\" [href]=\"item.url||'#'\" class=\"ui-menuitem-link ui-corner-all\" [attr.data-automationid]=\"item.automationId\" [attr.target]=\"item.target\" [attr.title]=\"item.title\" [attr.id]=\"item.id\"\n            [ngClass]=\"{'ui-state-disabled':item.disabled}\" (click)=\"menu.itemClick($event, item)\">\n            <span class=\"ui-menuitem-icon\" *ngIf=\"item.icon\" [ngClass]=\"item.icon\"></span>\n            <span class=\"ui-menuitem-text\">{{item.label}}</span>\n        </a>\n        <a *ngIf=\"item.routerLink\" [routerLink]=\"item.routerLink\" [attr.data-automationid]=\"item.automationId\"  [queryParams]=\"item.queryParams\" [routerLinkActive]=\"'ui-state-active'\"\n            [routerLinkActiveOptions]=\"item.routerLinkActiveOptions||{exact:false}\" class=\"ui-menuitem-link ui-corner-all\" [attr.target]=\"item.target\" [attr.id]=\"item.id\"\n             [attr.title]=\"item.title\" [ngClass]=\"{'ui-state-disabled':item.disabled}\" (click)=\"menu.itemClick($event, item)\">\n            <span class=\"ui-menuitem-icon\" *ngIf=\"item.icon\" [ngClass]=\"item.icon\"></span>\n            <span class=\"ui-menuitem-text\">{{item.label}}</span>\n        </a>\n    "
                },] },
    ];
    /** @nocollapse */
    MenuItemContent.ctorParameters = function () { return [
        { type: Menu, decorators: [{ type: core_1.Inject, args: [core_1.forwardRef(function () { return Menu; }),] }] }
    ]; };
    MenuItemContent.propDecorators = {
        item: [{ type: core_1.Input, args: ["pMenuItemContent",] }]
    };
    return MenuItemContent;
}());
exports.MenuItemContent = MenuItemContent;
var Menu = /** @class */ (function () {
    function Menu(el, domHandler, renderer) {
        this.el = el;
        this.domHandler = domHandler;
        this.renderer = renderer;
        this.autoZIndex = true;
        this.baseZIndex = 0;
        this.showTransitionOptions = '225ms ease-out';
        this.hideTransitionOptions = '195ms ease-in';
    }
    Menu.prototype.toggle = function (event) {
        if (this.visible)
            this.hide();
        else
            this.show(event);
        this.preventDocumentDefault = true;
    };
    Menu.prototype.show = function (event) {
        this.target = event.currentTarget;
        this.visible = true;
        this.preventDocumentDefault = true;
    };
    Menu.prototype.onOverlayAnimationStart = function (event) {
        switch (event.toState) {
            case 'visible':
                if (this.popup) {
                    this.container = event.element;
                    this.moveOnTop();
                    this.appendOverlay();
                    this.domHandler.absolutePosition(this.container, this.target);
                    this.bindDocumentClickListener();
                    this.bindDocumentResizeListener();
                }
                break;
            case 'void':
                this.onOverlayHide();
                break;
        }
    };
    Menu.prototype.appendOverlay = function () {
        if (this.appendTo) {
            if (this.appendTo === 'body')
                document.body.appendChild(this.container);
            else
                this.domHandler.appendChild(this.container, this.appendTo);
        }
    };
    Menu.prototype.restoreOverlayAppend = function () {
        if (this.container && this.appendTo) {
            this.el.nativeElement.appendChild(this.container);
        }
    };
    Menu.prototype.moveOnTop = function () {
        if (this.autoZIndex) {
            this.container.style.zIndex = String(this.baseZIndex + (++domhandler_1.DomHandler.zindex));
        }
    };
    Menu.prototype.hide = function () {
        this.visible = false;
    };
    Menu.prototype.onWindowResize = function () {
        this.hide();
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
    Menu.prototype.bindDocumentClickListener = function () {
        var _this = this;
        if (!this.documentClickListener) {
            this.documentClickListener = this.renderer.listen('document', 'click', function () {
                if (!_this.preventDocumentDefault) {
                    _this.hide();
                }
                _this.preventDocumentDefault = false;
            });
        }
    };
    Menu.prototype.unbindDocumentClickListener = function () {
        if (this.documentClickListener) {
            this.documentClickListener();
            this.documentClickListener = null;
        }
    };
    Menu.prototype.bindDocumentResizeListener = function () {
        this.documentResizeListener = this.onWindowResize.bind(this);
        window.addEventListener('resize', this.documentResizeListener);
    };
    Menu.prototype.unbindDocumentResizeListener = function () {
        if (this.documentResizeListener) {
            window.removeEventListener('resize', this.documentResizeListener);
            this.documentResizeListener = null;
        }
    };
    Menu.prototype.onOverlayHide = function () {
        this.unbindDocumentClickListener();
        this.unbindDocumentResizeListener();
        this.preventDocumentDefault = false;
        this.target = null;
    };
    Menu.prototype.ngOnDestroy = function () {
        if (this.popup) {
            this.restoreOverlayAppend();
            this.onOverlayHide();
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
    Menu.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'p-menu',
                    template: "\n        <div #container [ngClass]=\"{'ui-menu ui-widget ui-widget-content ui-corner-all': true, 'ui-menu-dynamic ui-shadow': popup}\"\n            [class]=\"styleClass\" [ngStyle]=\"style\" (click)=\"preventDocumentDefault=true\" *ngIf=\"!popup || visible\"\n            [@overlayAnimation]=\"{value: 'visible', params: {showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions}}\" [@.disabled]=\"popup !== true\" (@overlayAnimation.start)=\"onOverlayAnimationStart($event)\">\n            <ul>\n                <ng-template ngFor let-submenu [ngForOf]=\"model\" *ngIf=\"hasSubMenu()\">\n                    <li class=\"ui-menu-separator ui-widget-content\" *ngIf=\"submenu.separator\" [ngClass]=\"{'ui-helper-hidden': submenu.visible === false}\"></li>\n                    <li class=\"ui-submenu-header ui-widget-header ui-corner-all\" [attr.data-automationid]=\"submenu.automationId\" *ngIf=\"!submenu.separator\" [ngClass]=\"{'ui-helper-hidden': submenu.visible === false}\">{{submenu.label}}</li>\n                    <ng-template ngFor let-item [ngForOf]=\"submenu.items\">\n                        <li class=\"ui-menu-separator ui-widget-content\" *ngIf=\"item.separator\" [ngClass]=\"{'ui-helper-hidden': (item.visible === false ||\u00A0submenu.visible === false)}\"></li>\n                        <li class=\"ui-menuitem ui-widget ui-corner-all\" *ngIf=\"!item.separator\" [pMenuItemContent]=\"item\" [ngClass]=\"{'ui-helper-hidden': (item.visible === false || submenu.visible === false)}\" [ngStyle]=\"item.style\" [class]=\"item.styleClass\" [pTooltip]=\"item.toolTipMessage\" [tooltipPosition]=\"item.toolTipPosition\"  [positionStyle]=\"item.positionStyles\" [tooltipDisabled]=\"item.toolTipDisabled\" [tooltipStyleClass]=\"item.toolTipStyleClasses\" [escape]=\"item.toolTipEscape\"></li>\n                    </ng-template>\n                </ng-template>\n                <ng-template ngFor let-item [ngForOf]=\"model\" *ngIf=\"!hasSubMenu()\">\n                    <li class=\"ui-menu-separator ui-widget-content\" *ngIf=\"item.separator\" [ngClass]=\"{'ui-helper-hidden': item.visible === false}\"></li>\n                    <li class=\"ui-menuitem ui-widget ui-corner-all\" *ngIf=\"!item.separator\" [pMenuItemContent]=\"item\" [ngClass]=\"{'ui-helper-hidden': item.visible === false}\" [ngStyle]=\"item.style\" [class]=\"item.styleClass\" [pTooltip]=\"item.toolTipMessage\" [tooltipPosition]=\"item.toolTipPosition\"  [positionStyle]=\"item.positionStyles\" [tooltipDisabled]=\"item.toolTipDisabled\" [tooltipStyleClass]=\"item.toolTipStyleClasses\" [escape]=\"item.toolTipEscape\"></li>\n                </ng-template>\n            </ul>\n        </div>\n    ",
                    animations: [
                        animations_1.trigger('overlayAnimation', [
                            animations_1.state('void', animations_1.style({
                                transform: 'translateY(5%)',
                                opacity: 0
                            })),
                            animations_1.state('visible', animations_1.style({
                                transform: 'translateY(0)',
                                opacity: 1
                            })),
                            animations_1.transition('void => visible', animations_1.animate('{{showTransitionParams}}')),
                            animations_1.transition('visible => void', animations_1.animate('{{hideTransitionParams}}'))
                        ])
                    ],
                    providers: [domhandler_1.DomHandler]
                },] },
    ];
    /** @nocollapse */
    Menu.ctorParameters = function () { return [
        { type: core_1.ElementRef },
        { type: domhandler_1.DomHandler },
        { type: core_1.Renderer2 }
    ]; };
    Menu.propDecorators = {
        model: [{ type: core_1.Input }],
        popup: [{ type: core_1.Input }],
        style: [{ type: core_1.Input }],
        styleClass: [{ type: core_1.Input }],
        appendTo: [{ type: core_1.Input }],
        autoZIndex: [{ type: core_1.Input }],
        baseZIndex: [{ type: core_1.Input }],
        showTransitionOptions: [{ type: core_1.Input }],
        hideTransitionOptions: [{ type: core_1.Input }],
        containerViewChild: [{ type: core_1.ViewChild, args: ['container',] }]
    };
    return Menu;
}());
exports.Menu = Menu;
var MenuModule = /** @class */ (function () {
    function MenuModule() {
    }
    MenuModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [common_1.CommonModule, router_1.RouterModule, tooltip_1.TooltipModule],
                    exports: [Menu, router_1.RouterModule],
                    declarations: [Menu, MenuItemContent]
                },] },
    ];
    return MenuModule;
}());
exports.MenuModule = MenuModule;
//# sourceMappingURL=menu.js.map