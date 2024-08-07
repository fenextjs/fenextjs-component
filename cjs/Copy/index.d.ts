import React, { ReactNode } from "react";
import { NotificationDataProps } from "fenextjs-hook/cjs/useNotification";
import { _TProps } from "fenextjs-interface";
/**
 * Properties for the base Copy component.
 */
export interface CopyBaseProps extends _TProps {
    /**
     * The text for the copy.
     */
    text?: string;
    /**
     * The children for the component.
     */
    children?: ReactNode;
    /**
     * The onClickForCopy for the component.
     */
    onClickForCopy?: (text: string) => void;
    /**
     * The notification for the component.
     */
    notification?: NotificationDataProps;
}
/**
 * Properties for the class of the Copy component.
 */
export interface CopyClassProps {
    /**
     * The class name for the component.
     */
    className?: string;
}
/**
 * Properties for the Copy component.
 */
export interface CopyProps extends CopyBaseProps, CopyClassProps {
}
export declare const Copy: ({ className, children, text, onClickForCopy, notification, ...props }: CopyProps) => React.JSX.Element;
