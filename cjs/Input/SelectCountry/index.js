"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputSelectCountry = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const Select_1 = require("../Select");
const country_state_city_nextjs_1 = require("country-state-city-nextjs");
const InputSelectCountry = ({ ifLoadImgCountry = false, ...props }) => {
    const [loader, setLoader] = (0, react_1.useState)(false);
    const [options, setOptions] = (0, react_1.useState)([]);
    const onLoad = async () => {
        let countrys = [];
        if (ifLoadImgCountry) {
            countrys = await (0, country_state_city_nextjs_1.getDataCountrysWithImg)();
        }
        else {
            countrys = await (0, country_state_city_nextjs_1.getDataCountrys)();
        }
        setOptions(countrys);
        setLoader(false);
    };
    (0, react_1.useEffect)(() => {
        onLoad();
    }, []);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Select_1.InputSelect, { ...props, options: options, loader: loader, useLoader: true })));
};
exports.InputSelectCountry = InputSelectCountry;
//# sourceMappingURL=index.js.map