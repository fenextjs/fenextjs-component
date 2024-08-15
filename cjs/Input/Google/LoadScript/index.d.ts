import React from "react";
import { LoadScriptProps } from "@react-google-maps/api";
import { _TProps } from "fenextjs-interface";
export interface InputGoogleLoadScriptBaseProps extends Omit<LoadScriptProps, "googleMapsApiKey" | "id">, _TProps {
    googleMapsApiKey?: string;
    children?: React.ReactNode;
}
export interface InputGoogleLoadScriptClassProps {
    className?: string;
}
export interface InputGoogleLoadScriptProps extends InputGoogleLoadScriptBaseProps, InputGoogleLoadScriptClassProps {
}
export declare const InputGoogleLoadScript: ({ googleMapsApiKey, children, className, _t, useT, ...props }: InputGoogleLoadScriptProps) => React.JSX.Element;
