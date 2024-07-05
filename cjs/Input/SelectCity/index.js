"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputSelectCity = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const country_state_city_nextjs_1 = require("country-state-city-nextjs");
const SelectT_1 = require("../SelectT");
const InputSelectCity = ({ country = undefined, state = undefined, ...props }) => {
    const [loader, setLoader] = (0, react_1.useState)(true);
    const [options, setOptions] = (0, react_1.useState)([]);
    const onLoad = async () => {
        const getData = async () => {
            if (country && state) {
                return await (0, country_state_city_nextjs_1.getDataCitysByStateAndCountry)(country, state);
            }
            if (country) {
                return await (0, country_state_city_nextjs_1.getDataCitysByCountry)(country);
            }
            return await (0, country_state_city_nextjs_1.getDataCitys)();
        };
        const r = await getData();
        setOptions(r);
        setLoader(false);
    };
    (0, react_1.useEffect)(() => {
        onLoad();
    }, []);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(SelectT_1.InputSelectT, { ...props, useTOption: false, options: options, onParse: (e) => {
                const r = {
                    id: e?.id ?? "",
                    text: e?.text ?? "",
                    data: e,
                };
                return r;
            }, loader: loader, useLoader: true })));
};
exports.InputSelectCity = InputSelectCity;
//# sourceMappingURL=index.js.map