"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputSelectCountry = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const country_state_city_nextjs_1 = require("country-state-city-nextjs");
const SelectT_1 = require("../SelectT");
const InputSelectCountry = ({ ...props }) => {
    const [loader, setLoader] = (0, react_1.useState)(false);
    const [options, setOptions] = (0, react_1.useState)([]);
    const onLoad = async () => {
        const countrys = await (0, country_state_city_nextjs_1.getDataCountrys)();
        setOptions(countrys);
        setLoader(false);
    };
    (0, react_1.useEffect)(() => {
        onLoad();
    }, []);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(SelectT_1.InputSelectT, { ...props, useTOption: true, options: options, onParse: (e) => {
                const r = {
                    id: e?.id ?? "",
                    text: e?.text ?? "",
                    img: e ? `${(0, country_state_city_nextjs_1.getRuteCountryImg)(e)}` : undefined,
                    data: e,
                };
                return r;
            }, loader: loader, useLoader: true, maxLengthShowOptions: 50 })));
};
exports.InputSelectCountry = InputSelectCountry;
//# sourceMappingURL=index.js.map