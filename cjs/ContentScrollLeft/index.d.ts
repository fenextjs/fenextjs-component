import { _TProps } from "fenextjs-interface";
import React, { PropsWithChildren } from "react";
export interface ContentScrollLeftProps extends PropsWithChildren, _TProps {
    className?: string;
    classNameContent?: string;
}
export declare const ContentScrollLeft: ({ className, classNameContent, children, ...props }: ContentScrollLeftProps) => React.JSX.Element;
