"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputAutocompleteGoogleMaps = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const Text_1 = require("../Text");
const api_1 = require("@react-google-maps/api");
const close_1 = require("fenextjs-svg/cjs/close");
const useData_1 = require("fenextjs-hook/cjs/useData");
const Error_1 = require("../../Error");
const fenextjs_error_1 = require("fenextjs-error");
/**
 * Component that renders a AutocompleteGoogleMaps input.
 * Takes an InputAutocompleteGoogleMapsProps object as props.
 */
const InputAutocompleteGoogleMaps = ({ onChange, defaultValue = undefined, GOOGLE_KEY = process.env["NEXT_PUBLIC_GOOGLE_KEY"], _t = (e) => e, ...props }) => {
    const [valueText, setValueText] = (0, react_1.useState)(defaultValue?.formatted_address ?? "");
    const [error, setError] = (0, react_1.useState)(undefined);
    const { setData } = (0, useData_1.useData)(defaultValue, {
        onChangeDataAfter: (d) => {
            onChange?.(d);
            setValueText(d?.formatted_address ?? "");
        },
    });
    const [autocompleteValue, setAutocompleteValue] = (0, react_1.useState)(undefined);
    const onPlaceChanged = () => {
        if (autocompleteValue) {
            const place = autocompleteValue?.getPlace?.();
            if (place == undefined) {
                setError(new fenextjs_error_1.ErrorGoogleKeyInvalid());
                return;
            }
            setData(place);
        }
    };
    return (react_1.default.createElement("div", { className: `fenext-input-autocomplete-google-maps` },
        react_1.default.createElement("div", { className: `fenext-input-autocomplete-google-maps-content` },
            react_1.default.createElement("div", { className: `fenext-input-autocomplete-google-maps-content-input` },
                react_1.default.createElement(api_1.LoadScript, { googleMapsApiKey: GOOGLE_KEY ?? "", libraries: ["places", "geometry"], onError: () => {
                        setError(new fenextjs_error_1.ErrorGoogleKeyInvalid());
                    } },
                    react_1.default.createElement(api_1.Autocomplete, { ...props, onLoad: setAutocompleteValue, onPlaceChanged: onPlaceChanged },
                        react_1.default.createElement(Text_1.InputText, { ...props, _t: _t, value: valueText, onChange: setValueText })))),
            react_1.default.createElement("span", { className: `fenext-input-autocomplete-google-maps-close` },
                react_1.default.createElement(close_1.Close, null))),
        error && react_1.default.createElement(Error_1.ErrorComponent, { error: error, _t: _t }),
        (GOOGLE_KEY == "" || !GOOGLE_KEY) && (react_1.default.createElement(Error_1.ErrorComponent, { error: new fenextjs_error_1.ErrorGoogleKeyNotFound(), _t: _t }))));
};
exports.InputAutocompleteGoogleMaps = InputAutocompleteGoogleMaps;
//# sourceMappingURL=index.js.map