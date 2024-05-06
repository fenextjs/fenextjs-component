import { _TProps } from "fenextjs-interface";
import React, { ReactNode } from "react";
/**
 * Properties of a tab item.
 */
export interface TabItemProps<T = string> {
    /**
     * Unique identifier of the tab.
     */
    id: T;
    /**
     * Content to be displayed in the tab header.
     */
    head: React.ReactNode;
    /**
     * Content to be displayed in the tab body.
     */
    body: React.ReactNode;
    /**
     * Component of before list  Tabs Header;
     */
    beforeTab?: React.ReactNode;
    /**
     * Component of after list  Tabs Header;
     */
    afterTab?: React.ReactNode;
    /**
     * useCount  Tabs Header;
     */
    useCount?: boolean;
    /**
     * count  Tabs Header;
     */
    count?: number;
    /**
     * singular  Tabs Header;
     */
    singular?: ReactNode;
    /**
     * plural  Tabs Header;
     */
    plural?: ReactNode;
}
/**
 * Base properties of a tab component.
 */
export interface TabBaseProps<T = string> extends _TProps {
    /**
     * Array of `TabItemProps` objects representing the tabs.
     */
    items?: TabItemProps<T>[];
    /**
     * onChange Tab.
     */
    onChange?: (item: TabItemProps<T>) => void;
    /**
     * Index of the tab to be shown by default.
     */
    defaultTab?: number;
    /**
     * Index of the tab to be shown by default.
     */
    activeTab?: number;
    /**
     * Component of before list  Tabs Header;
     */
    beforeTabs?: React.ReactNode;
    /**
     * Component of after list  Tabs Header;
     */
    afterTabs?: React.ReactNode;
    /**
     * tabScrollActive if show all tabs in scroll in selecte.
     * @default false
     */
    tabScrollActive?: boolean;
    /**
     * validataTabOneHiddenHeader if one tab, header is hidden
     * @default true
     */
    validataTabOneHiddenHeader?: boolean;
    /**
     * useCount  Tabs;
     */
    useCount?: boolean;
}
/**
 * CSS class properties for a tab component.
 */
export interface TabClassProps {
    /**
     * Name of the CSS class for the component.
     */
    className?: string;
    /**
     * Name of the CSS class for the tab content header.
     */
    classNameContentHead?: string;
    /**
     * Name of the CSS class for the tab content before header.
     */
    classNameContentBeforeHead?: string;
    /**
     * Name of the CSS class for the tab content after header.
     */
    classNameContentAfterHead?: string;
    /**
     * Name of the CSS class for the tab header.
     */
    classNameHead?: string;
    /**
     * Name of the CSS class for an item in the tab header.
     */
    classNameHeadItem?: string;
    /**
     * Name of the CSS class for the active item in the tab header.
     */
    classNameHeadItemActive?: string;
    /**
     * Name of the CSS class for the tab body.
     */
    classNameBody?: string;
    /**
     * Name of the CSS class for an item in the tab body.
     */
    classNameBodyItem?: string;
}
/**
 * Properties for a tab component.
 * Combines `TabBaseProps` and `TabClassProps`.
 */
export interface TabProps<T = string> extends TabBaseProps<T>, TabClassProps {
}
export declare const parseTabCount: <T>(d: TabItemProps<T>) => TabItemProps<T>;
/**
 * Tab component that displays a set of tabs with content.
 * @param className CSS class name for the component.
 * @param classNameHead CSS class name for the tab header.
 * @param classNameHeadItem CSS class name for each item in the tab header.
 * @param classNameHeadItemActive CSS class name for the active item in the tab header.
 * @param classNameBody CSS class name for the tab body.
 * @param classNameBodyItem CSS class name for each item in the tab body.
 * @param items Array of `TabItemProps` objects representing the tabs.
 * @param defaultTab Index of the tab to be shown by default.
 */
export declare const Tab: <T = string>({ className, classNameContentHead, classNameHead, classNameHeadItem, classNameHeadItemActive, classNameBody, classNameBodyItem, classNameContentAfterHead, classNameContentBeforeHead, items, defaultTab, activeTab, afterTabs, beforeTabs, onChange, tabScrollActive, validataTabOneHiddenHeader, _t, useCount, }: TabProps<T>) => React.JSX.Element;
