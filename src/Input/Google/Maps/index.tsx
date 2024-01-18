import React, { useEffect, useState } from "react";
import {
    GoogleMap,
    GoogleMapProps,
    MarkerClusterer,
    Marker,
    MarkerProps,
    DirectionsRenderer,
} from "@react-google-maps/api";

/**
 * Properties for the base InputGoogleMaps component.
 */
export interface InputGoogleMapsBaseProps
    extends Omit<GoogleMapProps, "onBoundsChanged"> {
    markers?: MarkerProps[];
    useLoadCenterWithMarker?: boolean;
    useLoadFitBoundsWithMarker?: boolean;
    useLoadDirectionsWithMarker?: boolean;
    showDirectionsWaypoints?: boolean;

    onBoundsChanged?: (data: google.maps.LatLngBounds | undefined) => void;
}

/**
 * Properties for the class of the InputGoogleMaps component.
 */
export interface InputGoogleMapsClassProps {}

/**
 * Properties for the InputGoogleMaps component.
 */
export interface InputGoogleMapsProps
    extends InputGoogleMapsBaseProps,
        InputGoogleMapsClassProps {}

export const InputGoogleMaps = ({
    mapContainerStyle = {
        width: "100%",
        height: "100dvh",
    },
    markers = undefined,
    useLoadCenterWithMarker = true,
    useLoadFitBoundsWithMarker = true,
    useLoadDirectionsWithMarker = false,
    showDirectionsWaypoints = false,
    center = {
        lat: 0,
        lng: 0,
    },
    ...props
}: InputGoogleMapsProps) => {
    const [directionsResult, setDirectionsResult] = useState<
        google.maps.DirectionsResult | undefined
    >(undefined);
    const [map, setMap] = useState<google.maps.Map | undefined>(undefined);
    const [centerMarker, setCenterMarker] =
        useState<GoogleMapProps["center"]>(undefined);

    const onGetBounds = () => {
        const bounds = new google.maps.LatLngBounds();
        markers?.forEach((e) => {
            bounds.extend(e.position);
        });
        return bounds;
    };
    const onLoadCenterMarker = () => {
        if (!(useLoadCenterWithMarker && markers && markers?.length > 0)) {
            return;
        }
        const bounds = onGetBounds();
        setCenterMarker(bounds.getCenter());
    };

    const onLoadFitBounds = () => {
        if (!(useLoadFitBoundsWithMarker && markers && markers?.length > 0)) {
            return;
        }
        const bounds = onGetBounds();
        map?.fitBounds?.(bounds);
    };

    const onLoadDirectionsList = async () => {
        if (!(useLoadDirectionsWithMarker && markers && markers?.length > 0)) {
            return;
        }
        const directionsService = new window.google.maps.DirectionsService();

        const origin = markers[0];
        const destination = markers[markers.length - 1];
        const resultDirections = await directionsService.route({
            origin: origin.position,
            destination: destination.position,
            travelMode: google.maps.TravelMode.DRIVING,
            waypoints: [...markers].splice(1, markers.length - 2).map((e) => {
                return {
                    location: e.position,
                };
            }),
        });
        setDirectionsResult(resultDirections);
    };

    const onLoadMap = () => {
        if (typeof window == "undefined") {
            setTimeout(onLoadMap, 250);
            return;
        }
        onLoadCenterMarker();
        onLoadFitBounds();
        onLoadDirectionsList();
    };

    useEffect(onLoadMap, [map]);

    return (
        <div className={`fenext-input-google-maps `}>
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={centerMarker ?? center}
                {...props}
                onLoad={(e) => {
                    setMap(e);
                    props?.onLoad?.(e);
                }}
                onBoundsChanged={() => {
                    props?.onBoundsChanged?.(map?.getBounds?.());
                }}
            >
                {markers && !showDirectionsWaypoints && (
                    <>
                        <MarkerClusterer>
                            {() => (
                                <>
                                    {markers.map((e, i) => (
                                        <Marker key={i} {...e} />
                                    ))}
                                </>
                            )}
                        </MarkerClusterer>
                    </>
                )}

                {directionsResult && (
                    <DirectionsRenderer
                        directions={directionsResult}
                        options={{
                            markerOptions: {
                                opacity: showDirectionsWaypoints ? 1 : 0,
                            },
                        }}
                    />
                )}
            </GoogleMap>
        </div>
    );
};
