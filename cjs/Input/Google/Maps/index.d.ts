import React from "react";
import { GoogleMapProps, MarkerProps } from "@react-google-maps/api";
import { LatLngBounds } from "fenextjs-interface";
export interface InputGoogleMapsBaseProps extends Omit<GoogleMapProps, "onBoundsChanged"> {
    markers?: MarkerProps[];
    useLoadCenterWithMarker?: boolean;
    useLoadFitBoundsWithMarker?: boolean;
    useLoadDirectionsWithMarker?: boolean;
    showDirectionsWaypoints?: boolean;
    onBoundsChanged?: (data: LatLngBounds | undefined) => void;
}
export interface InputGoogleMapsClassProps {
}
export interface InputGoogleMapsProps extends InputGoogleMapsBaseProps, InputGoogleMapsClassProps {
}
export declare const InputGoogleMaps: ({ mapContainerStyle, markers, useLoadCenterWithMarker, useLoadFitBoundsWithMarker, useLoadDirectionsWithMarker, showDirectionsWaypoints, center, ...props }: InputGoogleMapsProps) => React.JSX.Element;
