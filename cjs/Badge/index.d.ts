import React, { ReactNode } from "react";
import { _TProps } from "fenextjs-interface";
export type BadgeType = "pendding" | "loader" | "completed" | "error" | "processed";
export interface BadgeProps extends _TProps {
    className?: string;
    children: ReactNode;
    type: BadgeType;
}
export declare const Badge: ({ className, children, type, ...props }: BadgeProps) => React.JSX.Element;
