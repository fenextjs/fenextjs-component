import { getTimeToTextProps } from "fenextjs-functions";
import React from "react";
/**
 * Properties for the base Chronometer component.
 */
export interface ChronometerBaseProps {
    /**
     * The time in seconds for the component.
     */
    time?: number;
    /**
     * The change time for the component.
     */
    onChange?: (time: number) => void;
    /**
     * The min in seconds for the component.
     */
    min?: number;
    /**
     * The optionsTimeToText for the component.
     */
    optionsTimeToText?: getTimeToTextProps;
}
/**
 * Properties for the class of the Chronometer component.
 */
export interface ChronometerClassProps {
    /**
     * The class name for the component.
     */
    className?: string;
}
/**
 * Properties for the Chronometer component.
 */
export interface ChronometerProps extends ChronometerBaseProps, ChronometerClassProps {
}
export declare const Chronometer: ({ className, time, min, onChange, optionsTimeToText, }: ChronometerProps) => React.JSX.Element;
