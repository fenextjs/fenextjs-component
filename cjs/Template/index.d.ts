import { _TProps } from "fenextjs-interface";
import React from "react";
/**
 * Properties for the base Template component.
 */
export interface TemplateBaseProps extends _TProps {
}
/**
 * Properties for the class of the Template component.
 */
export interface TemplateClassProps {
    /**
     * The class name for the component.
     */
    className?: string;
}
/**
 * Properties for the Template component.
 */
export interface TemplateProps extends TemplateBaseProps, TemplateClassProps {
}
export declare const Template: ({ className }: TemplateProps) => React.JSX.Element;
