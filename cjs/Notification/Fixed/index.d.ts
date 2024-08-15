import React, { PropsWithChildren } from "react";
import { RequestResultTypeProps } from "fenextjs-interface/cjs/Request";
import { _TProps } from "fenextjs-interface";
export interface NotificationBaseProps extends PropsWithChildren, _TProps {
    type?: RequestResultTypeProps | keyof typeof RequestResultTypeProps;
}
export interface NotificationClassProps {
    className?: string;
}
export interface NotificationProps extends NotificationBaseProps, NotificationClassProps {
}
export declare const Notification: ({ className, type, children, ...props }: NotificationProps) => React.JSX.Element;
