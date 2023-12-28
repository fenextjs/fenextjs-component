"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputGoogleMaps = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const api_1 = require("@react-google-maps/api");
const InputGoogleMaps = ({ mapContainerStyle = {
    width: "100%",
    height: "100dvh",
}, markers = undefined, useLoadCenterWithMarker = true, useLoadFitBoundsWithMarker = true, useLoadDirectionsWithMarker = false, showDirectionsWaypoints = false, center = {
    lat: 0,
    lng: 0,
}, ...props }) => {
    const [directionsResult, setDirectionsResult] = (0, react_1.useState)(undefined);
    const [map, setMap] = (0, react_1.useState)(undefined);
    const [centerMarker, setCenterMarker] = (0, react_1.useState)(undefined);
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
    (0, react_1.useEffect)(onLoadMap, [map]);
    return (react_1.default.createElement("div", { className: `fenext-input-google-maps ` },
        react_1.default.createElement(api_1.GoogleMap, { mapContainerStyle: mapContainerStyle, center: centerMarker ?? center, onLoad: setMap, ...props },
            markers && !showDirectionsWaypoints && (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(api_1.MarkerClusterer, null, () => (react_1.default.createElement(react_1.default.Fragment, null, markers.map((e, i) => (react_1.default.createElement(api_1.Marker, { key: i, ...e })))))))),
            directionsResult && (react_1.default.createElement(api_1.DirectionsRenderer, { directions: directionsResult, options: {
                    markerOptions: {
                        opacity: showDirectionsWaypoints ? 1 : 0,
                    },
                } })))));
};
exports.InputGoogleMaps = InputGoogleMaps;
//# sourceMappingURL=index.js.map