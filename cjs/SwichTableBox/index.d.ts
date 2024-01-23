import { _TProps } from "fenextjs-interface";
import React from "react";
export type SwichTableBoxType = "box" | "list";
/**
 * Properties for the base SwichTableBox component.
 */
export interface SwichTableBoxBaseProps extends _TProps {
    /**
     * The class name for the component.
     */
    defaultValue?: SwichTableBoxType;
    /**
     * The class name for the component.
     */
    onChange?: (e?: SwichTableBoxType) => void;
}
/**
 * Properties for the class of the SwichTableBox component.
 */
export interface SwichTableBoxClassProps {
    /**
     * The class name for the component.
     */
    className?: string;
}
/**
 * Properties for the SwichTableBox component.
 */
export interface SwichTableBoxProps extends SwichTableBoxBaseProps, SwichTableBoxClassProps {
}
export declare const SwichTableBox: ({ className, defaultValue, onChange, }: SwichTableBoxProps) => React.JSX.Element;
