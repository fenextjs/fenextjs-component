import React, { useEffect, useState } from "react";
import { LoadScript, LoadScriptProps } from "@react-google-maps/api";
import { ErrorComponent } from "../../../Error";
import { ErrorFenextjs, ErrorGoogleKeyInvalid } from "fenextjs-error";
import { _tValidate } from "fenextjs-functions";
import { _TProps } from "fenextjs-interface";

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
export interface InputGoogleLoadScriptProps
    extends InputGoogleLoadScriptBaseProps,
        InputGoogleLoadScriptClassProps {}

export const InputGoogleLoadScript = ({
    googleMapsApiKey = process.env["NEXT_PUBLIC_GOOGLE_KEY"],
    children,
    className = "",
    _t,
    ...props
}: InputGoogleLoadScriptProps) => {
    const [error, setError] = useState<ErrorFenextjs | undefined>(undefined);
    const [load, setLoad] = useState(false);

    const onLoad = () => {
        if (typeof window == undefined) {
            setTimeout(onLoad, 500);
            return;
        }
        setLoad(true);
    };
    useEffect(onLoad, []);

    return (
        <div className={`fenext-input-google-load-script ${className}`}>
            <LoadScript
                {...props}
                key={load ? "load" : "not-load"}
                googleMapsApiKey={googleMapsApiKey ?? ""}
                libraries={["places", "geometry", "marker"]}
                onError={() => {
                    setError(new ErrorGoogleKeyInvalid());
                }}
            >
                {children}
            </LoadScript>
            {error && <ErrorComponent error={error} _t={_t} />}
        </div>
    );
};
