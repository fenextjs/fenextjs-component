import { use_T } from "fenextjs-hook";
import { _TProps } from "fenextjs-interface";
import React, { ReactNode } from "react";
export interface TabItemProps<T = string> {
    id: T;
    head: React.ReactNode;
    body: React.ReactNode;
    beforeTab?: React.ReactNode;
    afterTab?: React.ReactNode;
    useCount?: boolean;
    count?: number;
    singular?: ReactNode;
    plural?: ReactNode;
}
export interface TabBaseProps<T = string> extends _TProps {
    items?: TabItemProps<T>[];
    onChange?: (item: TabItemProps<T>) => void;
    defaultTab?: number;
    activeTab?: number;
    beforeTabs?: React.ReactNode;
    afterTabs?: React.ReactNode;
    tabScrollActive?: boolean;
    validataTabOneHiddenHeader?: boolean;
    useCount?: boolean;
}
export interface TabClassProps {
    className?: string;
    classNameContentHead?: string;
    classNameContentBeforeHead?: string;
    classNameContentAfterHead?: string;
    classNameHead?: string;
    classNameHeadItem?: string;
    classNameHeadItemActive?: string;
    classNameBody?: string;
    classNameBodyItem?: string;
}
export interface TabProps<T = string> extends TabBaseProps<T>, TabClassProps {
}
export declare const parseTabCount: <T>(d: TabItemProps<T>, _t: ReturnType<typeof use_T>["_t"]) => TabItemProps<T>;
export declare const Tab: <T = string>({ className, classNameContentHead, classNameHead, classNameHeadItem, classNameHeadItemActive, classNameBody, classNameBodyItem, classNameContentAfterHead, classNameContentBeforeHead, items, defaultTab, activeTab, afterTabs, beforeTabs, onChange, tabScrollActive, validataTabOneHiddenHeader, useCount, ...props }: TabProps<T>) => React.JSX.Element;
