import { _TProps } from "fenextjs-interface";
import React from "react";

/**
 * Properties for the Template component.
 */
export interface TemplateProps extends _TProps {
    /**
     * The class name for the component.
     */
    className?: string;
}

export const Template = ({ className = "" }: TemplateProps) => {
    return (
        <>
            <div className={`fenext-template ${className} `}></div>
        </>
    );
};
