"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputSelectCSC = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const Select_1 = require("../Select");
const useCSC_1 = require("fenextjs-hook/cjs/useCSC");
const fenextjs_functions_1 = require("fenextjs-functions");
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
            react_1.default.createElement(Select_1.InputSelect, { ...props, ...country, 
                // key={value?.country?.id}
                useTOption: false, options: countrys?.map((e) => {
                    return {
                        ...e,
                        data: e,
                    };
                }), onChangeData: onChangeCSC("country"), defaultValue: value?.country, loader: !loadCountrys }),
            react_1.default.createElement(Select_1.InputSelect, { ...props, ...state, useTOption: false, key: value?.country?.id, options: states?.map((e) => {
                    return {
                        ...e,
                        data: e,
                    };
                }), onChangeData: onChangeCSC("state"), defaultValue: value?.state, loader: !loadStates }),
            react_1.default.createElement(Select_1.InputSelect, { ...props, ...city, useTOption: false, key: value?.state?.id, options: citys?.map((e) => {
                    return {
                        ...e,
                        data: e,
                    };
                }), onChangeData: onChangeCSC("city"), defaultValue: value?.city, loader: !loadCitys })));
        if (useContainer) {
            C = (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("div", { className: `fenext-select-csc ${classNameSelectCSC}` }, C)));
        }
        return C;
    }, [
        value,
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