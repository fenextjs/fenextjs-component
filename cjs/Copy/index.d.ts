import React, { ReactNode } from "react";
import { NotificationDataProps } from "fenextjs-hook/cjs/useNotification";
import { _TProps } from "fenextjs-interface";
export interface CopyBaseProps extends _TProps {
    text?: string;
    children?: ReactNode;
    onClickForCopy?: (text: string) => void;
    notification?: NotificationDataProps;
}
export interface CopyClassProps {
    className?: string;
}
export interface CopyProps extends CopyBaseProps, CopyClassProps {
}
export declare const Copy: ({ className, children, text, onClickForCopy, notification, ...props }: CopyProps) => React.JSX.Element;
