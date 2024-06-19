import { _TProps } from "fenextjs-interface";
import React from "react";

/**
 * Properties for the base DesignTypography component.
 */
export interface DesignTypographyBaseProps extends _TProps {}

/**
 * Properties for the class of the DesignTypography component.
 */
export interface DesignTypographyClassProps {
    /**
     * The class name for the component.
     */
    className?: string;
}

/**
 * Properties for the DesignTypography component.
 */
export interface DesignTypographyProps extends DesignTypographyBaseProps, DesignTypographyClassProps {}

export const DesignTypography = ({ className = "" }: DesignTypographyProps) => {
    return (
        <>
            <div className={`fenext-design-typography ${className} `}></div>
        </>
    );
};
