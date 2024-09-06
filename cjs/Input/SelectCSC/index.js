"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputSelectCSC = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const useCSC_1 = require("fenextjs-hook/cjs/useCSC");
const fenextjs_functions_1 = require("fenextjs-functions");
const SelectT_1 = require("../SelectT");
const InputSelectCSC = ({ classNameSelectCSC = "", useContainer = true, country = {
    label: "Country",
    placeholder: "Country",
}, state = {
    label: "State",
    placeholder: "State",
}, city = {
    label: "City",
    placeholder: "City",
}, defaultValue: defaultValueProps, value: valueProps, onChange: onChangeProps, defaultValueJsonString, valueJsonString, onChangeJsonString, parseJson_to_String, parseString_to_Json, ...props }) => {
    const { countrys, states, citys, onChangeCSC, value, loadCitys, loadCountrys, loadStates, } = (0, useCSC_1.useCSC)({
        defaultValue: defaultValueProps,
        value: valueProps,
        onChange: onChangeProps,
        defaultValueJsonString,
        valueJsonString,
        onChangeJsonString,
        parseJson_to_String: parseJson_to_String ?? fenextjs_functions_1.parseCSC_to_CSCString,
        parseString_to_Json: parseString_to_Json ?? fenextjs_functions_1.parseCSCString_to_CSC,
    });
    const CONTENT = (0, react_1.useMemo)(() => {
        let C = (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(SelectT_1.InputSelectT, { ...props, ...country, useTOption: false, options: countrys, onChange: onChangeCSC("country"), defaultValue: value?.country, loader: !loadCountrys, onParse: (e) => {
                    return {
                        ...e,
                        id: e?.id ?? "",
                        text: e?.text ?? "",
                        data: e,
                    };
                } }),
            react_1.default.createElement(SelectT_1.InputSelectT, { ...props, ...state, useTOption: false, key: `state-${value?.country?.id}`, options: states, onChange: onChangeCSC("state"), value: value?.state, loader: !loadStates, onParse: (e) => {
                    return {
                        ...e,
                        id: e?.id ?? "",
                        text: e?.text ?? "",
                        data: e,
                    };
                } }),
            react_1.default.createElement(SelectT_1.InputSelectT, { ...props, ...city, useTOption: false, key: `city-${value?.state?.id}`, options: citys, onChange: onChangeCSC("city"), value: value?.city, loader: !loadCitys, onParse: (e) => {
                    return {
                        ...e,
                        id: e?.id ?? "",
                        text: e?.text ?? "",
                        data: e,
                    };
                } })));
        if (useContainer) {
            C = (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("div", { className: `fenext-select-csc ${classNameSelectCSC}` }, C)));
        }
        return C;
    }, [
        value,
        value?.country?.id,
        value?.state?.id,
        value?.city?.id,
        countrys,
        states,
        citys,
        useContainer,
        country,
        state,
        city,
        loadCitys,
        loadCountrys,
        loadStates,
    ]);
    return react_1.default.createElement(react_1.default.Fragment, null, CONTENT);
};
exports.InputSelectCSC = InputSelectCSC;
//# sourceMappingURL=index.js.map