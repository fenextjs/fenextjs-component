"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputSelectCountryMultiple = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const SelectMultipleT_1 = require("../SelectMultipleT");
const country_state_city_nextjs_1 = require("country-state-city-nextjs");
const InputSelectCountryMultiple = ({ ...props }) => {
    const [loader, setLoader] = (0, react_1.useState)(false);
    const [options, setOptions] = (0, react_1.useState)([]);
    const onLoad = async () => {
        const countrys = await (0, country_state_city_nextjs_1.getDataCountrys)();
        setOptions(countrys.map((e) => {
            return {
                ...e,
                img: `${(0, country_state_city_nextjs_1.getRuteCountryImg)(e)}`,
            };
        }));
        setLoader(false);
    };
    (0, react_1.useEffect)(() => {
        onLoad();
    }, []);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(SelectMultipleT_1.InputSelectMultipleT, { ...props, useTOption: true, options: options, loader: loader, useLoader: true, onParse: (e) => ({
                ...e,
                text: e?.text ?? "",
                id: e?.id ?? "",
                data: e,
            }) })));
};
exports.InputSelectCountryMultiple = InputSelectCountryMultiple;
