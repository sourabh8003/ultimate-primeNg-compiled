import { MenuItem } from '../common/menuitem';
export declare class BasePanelMenuItem {
    handleClick(event: any, item: any): void;
}
export declare class PanelMenuSub extends BasePanelMenuItem {
    item: MenuItem;
    expanded: boolean;
    transitionOptions: string;
}
export declare class PanelMenu extends BasePanelMenuItem {
    model: MenuItem[];
    style: any;
    styleClass: string;
    multiple: boolean;
    transitionOptions: string;
    animating: boolean;
    collapseAll(): void;
    handleClick(event: any, item: any): void;
    onToggleDone(): void;
}
export declare class PanelMenuModule {
}
