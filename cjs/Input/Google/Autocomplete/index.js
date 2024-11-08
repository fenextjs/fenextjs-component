"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputGoogleAutocomplete = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const Text_1 = require("../../Text");
const api_1 = require("@react-google-maps/api");
const Close_1 = require("fenextjs-svg/cjs/Close");
const useData_1 = require("fenextjs-hook/cjs/useData");
const fenextjs_error_1 = require("fenextjs-error");
const fenextjs_hook_1 = require("fenextjs-hook");
const fenextjs_functions_1 = require("fenextjs-functions");
const InputGoogleAutocomplete = ({ defaultValueJsonString, valueJsonString, onChangeJsonString, defaultValue: defaultValueProps = undefined, value: valueProps = undefined, onChange: onChangeProps, parseJson_to_String, parseString_to_Json, className = "", validator, ...props }) => {
    const { defaultValue, value, onChange } = (0, fenextjs_hook_1.useJsonString)({
        parseJson_to_String: parseJson_to_String ?? fenextjs_functions_1.parseAddress_to_String,
        parseString_to_Json: parseString_to_Json ?? fenextjs_functions_1.parseString_to_Address,
        defaultValueJsonString,
        valueJsonString,
        onChangeJsonString,
        value: valueProps,
        defaultValue: defaultValueProps,
        onChange: onChangeProps,
    });
    const [valueText, setValueText] = (0, react_1.useState)(value?.formatted_address ?? defaultValue?.formatted_address ?? "");
    const [error, setError] = (0, react_1.useState)(undefined);
    const { setData, isValidData } = (0, useData_1.useData)(defaultValue, {
        onChangeDataAfter: (d) => {
            onChange?.(d);
            if (d) {
                setValueText(d?.formatted_address ?? "");
            }
        },
        validator,
    });
    const [autocompleteValue, setAutocompleteValue] = (0, react_1.useState)(undefined);
    const onPlaceChanged = () => {
        if (autocompleteValue) {
            const place = autocompleteValue?.getPlace?.();
            if (place == undefined) {
                setError(new fenextjs_error_1.ErrorGoogleKeyInvalid());
                return;
            }
            setData({
                ...place,
                lat: place?.geometry?.location?.lat?.(),
                lng: place?.geometry?.location?.lng?.(),
            });
        }
        else {
            setData(undefined);
        }
    };
    return (react_1.default.createElement("div", { className: `fenext-input-google-autocomplete ${className}` },
        react_1.default.createElement("div", { className: `fenext-input-google-autocomplete-content` },
            react_1.default.createElement("div", { className: `fenext-input-google-autocomplete-content-input` },
                react_1.default.createElement(api_1.Autocomplete, { ...props, onLoad: setAutocompleteValue, onPlaceChanged: onPlaceChanged },
                    react_1.default.createElement(Text_1.InputText, { ...props, validator: undefined, value: valueText, onChange: (e) => {
                            setValueText(e);
                            setData(undefined);
                        }, error: error ??
                            (isValidData instanceof fenextjs_error_1.ErrorFenextjs
                                ? isValidData
                                : undefined) }))),
            react_1.default.createElement("span", { className: `fenext-input-google-autocomplete-close` },
                react_1.default.createElement(Close_1.SvgClose, null)))));
};
exports.InputGoogleAutocomplete = InputGoogleAutocomplete;
//# sourceMappingURL=index.js.map