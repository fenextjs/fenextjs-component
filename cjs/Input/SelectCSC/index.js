"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputSelectCSC = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const Select_1 = require("../Select");
const useCSC_1 = require("fenextjs-hook/cjs/useCSC");
const InputSelectCSC = ({ classNameSelectCSC = "", defaultValue = undefined, useContainer = true, onChange, country = {
    label: "Country",
    placeholder: "Country",
}, state = {
    label: "State",
    placeholder: "State",
}, city = {
    label: "City",
    placeholder: "City",
}, ifLoadImgCountry = false, ...props }) => {
    const { countrys, states, citys, onChangeCSC, value } = (0, useCSC_1.useCSC)({
        defaultValue,
        onChange,
        ifLoadImgCountry,
    });
    const CONTENT = (0, react_1.useMemo)(() => {
        let C = (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(Select_1.InputSelect, { ...props, ...country, key: value?.country?.id, options: countrys?.map((e) => {
                    return {
                        ...e,
                        data: e,
                    };
                }), onChangeData: onChangeCSC("country"), defaultValue: value?.country }),
            react_1.default.createElement(Select_1.InputSelect, { ...props, ...state, key: value?.state?.id, options: states?.map((e) => {
                    return {
                        ...e,
                        data: e,
                    };
                }), onChangeData: onChangeCSC("state"), defaultValue: value?.state }),
            react_1.default.createElement(Select_1.InputSelect, { ...props, ...city, key: value?.city?.id, options: citys?.map((e) => {
                    return {
                        ...e,
                        data: e,
                    };
                }), onChangeData: onChangeCSC("city"), defaultValue: value?.city })));
        if (useContainer) {
            C = (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("div", { className: `fenext-select-csc ${classNameSelectCSC}` }, C)));
        }
        return C;
    }, [value, countrys, states, citys, useContainer, country, state, city]);
    return react_1.default.createElement(react_1.default.Fragment, null, CONTENT);
};
exports.InputSelectCSC = InputSelectCSC;
//# sourceMappingURL=index.js.map