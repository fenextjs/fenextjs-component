import React, { ReactNode, useState } from "react";
import { LoadScript, LoadScriptProps } from "@react-google-maps/api";
import { ErrorComponent } from "../../../Error";
import { ErrorFenextjs, ErrorGoogleKeyInvalid } from "fenextjs-error";
import { _TProps } from "fenextjs-interface";
import { getProcessEnv } from "fenextjs-functions";

/**
 * Properties for the base InputGoogleLoadScript component.
 */
export interface InputGoogleLoadScriptBaseProps
    extends Omit<LoadScriptProps, "googleMapsApiKey" | "id">,
        _TProps {
    /**
     * GOOGLE_KEY of Google maps.
     * @default process.env["NEXT_PUBLIC_GOOGLE_KEY"]
     */
    googleMapsApiKey?: string;

    children?: ReactNode;
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
export interface InputGoogleLoadScriptProps
    extends InputGoogleLoadScriptBaseProps,
        InputGoogleLoadScriptClassProps {}

export const InputGoogleLoadScript = ({
    googleMapsApiKey = undefined,
    children,
    className = "",
    _t,
    useT,
    ...props
}: InputGoogleLoadScriptProps) => {
    const [error, setError] = useState<ErrorFenextjs | undefined>(undefined);

    return (
        <div className={`fenext-input-google-load-script ${className}`}>
            <LoadScript
                {...props}
                googleMapsApiKey={googleMapsApiKey ?? getProcessEnv("NEXT_PUBLIC_GOOGLE_KEY") ?? ""}
                libraries={["places", "geometry", "marker"]}
                onError={() => {
                    setError(new ErrorGoogleKeyInvalid());
                }}
            >
                {children}
            </LoadScript>
            {error && <ErrorComponent error={error} _t={_t} useT={useT} />}
        </div>
    );
};
