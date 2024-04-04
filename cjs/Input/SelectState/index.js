"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputSelectState = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const Select_1 = require("../Select");
const country_state_city_nextjs_1 = require("country-state-city-nextjs");
const InputSelectState = ({ countryId = undefined, ...props }) => {
    const [loader, setLoader] = (0, react_1.useState)(false);
    const [options, setOptions] = (0, react_1.useState)([]);
    const onLoad = async () => {
        let r = await (0, country_state_city_nextjs_1.getDataStates)();
        if (countryId) {
            r = [...r].filter((e) => e.id_country === countryId);
        }
        setOptions(r);
        setLoader(false);
    };
    (0, react_1.useEffect)(() => {
        onLoad();
    }, []);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Select_1.InputSelect, { ...props, options: options, loader: loader, useLoader: true, maxLengthShowOptions: 50 })));
};
exports.InputSelectState = InputSelectState;
//# sourceMappingURL=index.js.map