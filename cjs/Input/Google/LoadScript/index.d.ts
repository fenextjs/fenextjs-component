import React from "react";
import { LoadScriptProps } from "@react-google-maps/api";
import { _TProps } from "fenextjs-interface";
/**
 * Properties for the base InputGoogleLoadScript component.
 */
export interface InputGoogleLoadScriptBaseProps extends Omit<LoadScriptProps, "googleMapsApiKey" | "id">, _TProps {
    /**
     * GOOGLE_KEY of Google maps.
     * @default process.env["NEXT_PUBLIC_GOOGLE_KEY"]
     */
    googleMapsApiKey?: string;
    children?: React.ReactNode;
}
/**
 * Properties for the class of the InputGoogleLoadScript component.
 */
export interface InputGoogleLoadScriptClassProps {
    /**
     * CSS class name for the component.
     */
    className?: string;
}
/**
 * Properties for the InputGoogleLoadScript component.
 */
export interface InputGoogleLoadScriptProps extends InputGoogleLoadScriptBaseProps, InputGoogleLoadScriptClassProps {
}
export declare const InputGoogleLoadScript: ({ googleMapsApiKey, children, className, _t, useT, ...props }: InputGoogleLoadScriptProps) => React.JSX.Element;
