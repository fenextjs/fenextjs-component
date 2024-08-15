import React from "react";
import { _TProps } from "fenextjs-interface";
export interface ThemeBaseProps extends _TProps {
}
export interface ThemeClassProps {
    className?: string;
    classNameItem?: string;
}
export interface ThemeProps extends ThemeBaseProps, ThemeClassProps {
}
export declare const Theme: ({ className, classNameItem }: ThemeProps) => React.JSX.Element;
