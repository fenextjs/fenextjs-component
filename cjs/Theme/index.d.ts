import React from "react";
import { _TProps } from "fenextjs-interface";
export interface ThemeProps extends _TProps {
    className?: string;
    classNameItem?: string;
}
export declare const Theme: ({ className, classNameItem }: ThemeProps) => React.JSX.Element;
