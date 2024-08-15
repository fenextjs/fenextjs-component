import { getTimeToTextProps } from "fenextjs-functions";
import React from "react";
export interface ChronometerBaseProps {
    time?: number;
    onChange?: (time: number) => void;
    min?: number;
    optionsTimeToText?: getTimeToTextProps;
}
export interface ChronometerClassProps {
    className?: string;
}
export interface ChronometerProps extends ChronometerBaseProps, ChronometerClassProps {
}
export declare const Chronometer: ({ className, time, min, onChange, optionsTimeToText, }: ChronometerProps) => React.JSX.Element;
