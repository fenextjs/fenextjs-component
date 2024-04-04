"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputSelectCountryMultiple = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const SelectMultiple_1 = require("../SelectMultiple");
const country_state_city_nextjs_1 = require("country-state-city-nextjs");
const InputSelectCountryMultiple = ({ ...props }) => {
    const [loader, setLoader] = (0, react_1.useState)(false);
    const [options, setOptions] = (0, react_1.useState)([]);
    const onLoad = async () => {
        const r = await (0, country_state_city_nextjs_1.getDataCountrys)();
        setOptions(r);
        setLoader(false);
    };
    (0, react_1.useEffect)(() => {
        onLoad();
    }, []);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(SelectMultiple_1.InputSelectMultiple, { ...props, options: options, loader: loader, useLoader: true })));
};
exports.InputSelectCountryMultiple = InputSelectCountryMultiple;
//# sourceMappingURL=index.js.map