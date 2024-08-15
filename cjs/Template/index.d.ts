import { _TProps } from "fenextjs-interface";
import React from "react";
export interface TemplateBaseProps extends _TProps {
}
export interface TemplateClassProps {
    className?: string;
}
export interface TemplateProps extends TemplateBaseProps, TemplateClassProps {
}
export declare const Template: ({ className }: TemplateProps) => React.JSX.Element;
