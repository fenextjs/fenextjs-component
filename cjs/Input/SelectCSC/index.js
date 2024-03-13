"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputSelectCSC = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const Select_1 = require("../Select");
const useCSC_1 = require("fenextjs-hook/cjs/useCSC");
const InputSelectCSC = ({ classNameSelectCSC = "", defaultValue = undefined, defaultValueString = undefined, useContainer = true, onChange, country = {
    label: "Country",
    placeholder: "Country",
}, state = {
    label: "State",
    placeholder: "State",
}, city = {
    label: "City",
    placeholder: "City",
}, ifLoadImgCountry = false, ...props }) => {
    const { load, countrys, statesForCountrySelected, citysForStateSelected, onChangeCSC, value, } = (0, useCSC_1.useCSC)({
        defaultValue,
        defaultValueString,
        onChangeDataMemoAfter: onChange,
        ifLoadImgCountry,
    });
    const onChange_ = (id) => (v) => {
        if (v) {
            onChangeCSC(id)({
                id: parseInt(`${v?.id}`),
                text: v?.text ?? "",
                id_country: v?.data?.id_country,
                id_state: v?.data?.id_state,
                nameAve: v?.data?.nameAve,
            });
        }
        else {
            if (id == "country") {
                onChangeCSC("state")(undefined);
            }
            if (id == "state") {
                onChangeCSC("city")(undefined);
            }
        }
    };
    const CONTENT = (0, react_1.useMemo)(() => {
        let C = react_1.default.createElement(react_1.default.Fragment, null);
        if (load) {
            C = (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(Select_1.InputSelect, { ...props, ...country, key: value?.country?.id, options: countrys?.map((e) => {
                        return {
                            ...e,
                            data: e,
                        };
                    }), onChange: onChange_("country"), defaultValue: value?.country, loader: !load }),
                react_1.default.createElement(Select_1.InputSelect, { ...props, ...state, key: value?.state?.id, options: statesForCountrySelected?.map((e) => {
                        return {
                            ...e,
                            data: e,
                        };
                    }), onChange: onChange_("state"), defaultValue: value?.state, loader: !load }),
                react_1.default.createElement(Select_1.InputSelect, { ...props, ...city, key: value?.city?.id, options: citysForStateSelected?.map((e) => {
                        return {
                            ...e,
                            data: e,
                        };
                    }), onChange: onChange_("city"), defaultValue: value?.city, loader: !load })));
        }
        if (useContainer) {
            C = (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("div", { className: `fenext-select-csc ${classNameSelectCSC}` }, C)));
        }
        return C;
    }, [
        value,
        load,
        countrys,
        statesForCountrySelected,
        citysForStateSelected,
        useContainer,
        country,
        state,
        city,
    ]);
    return react_1.default.createElement(react_1.default.Fragment, null, CONTENT);
};
exports.InputSelectCSC = InputSelectCSC;
//# sourceMappingURL=index.js.map