import React from "react";
import { GoogleMapProps, MarkerProps } from "@react-google-maps/api";
/**
 * Properties for the base InputGoogleMaps component.
 */
export interface InputGoogleMapsBaseProps extends GoogleMapProps {
    markers?: MarkerProps[];
    useLoadCenterWithMarker?: boolean;
    useLoadFitBoundsWithMarker?: boolean;
    useLoadDirectionsWithMarker?: boolean;
    showDirectionsWaypoints?: boolean;
}
/**
 * Properties for the class of the InputGoogleMaps component.
 */
export interface InputGoogleMapsClassProps {
}
/**
 * Properties for the InputGoogleMaps component.
 */
export interface InputGoogleMapsProps extends InputGoogleMapsBaseProps, InputGoogleMapsClassProps {
}
export declare const InputGoogleMaps: ({ mapContainerStyle, markers, useLoadCenterWithMarker, useLoadFitBoundsWithMarker, useLoadDirectionsWithMarker, showDirectionsWaypoints, center, ...props }: InputGoogleMapsProps) => React.JSX.Element;
