"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputPhone = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const Text_1 = require("../Text");
const Error_1 = require("../../Error");
const fenextjs_hook_1 = require("fenextjs-hook");
const fenextjs_hook_2 = require("fenextjs-hook");
const fenextjs_validator_1 = require("fenextjs-validator");
const country_state_city_nextjs_1 = require("country-state-city-nextjs");
const SelectT_1 = require("../SelectT");
const react_2 = require("react");
const InputPhone = ({ classNameInputNumber = {}, classNameSelectCode = {}, classNamePhone = "", classNamePhoneCode = "", classNamePhoneLabel = "", classNamePhoneNumber = "", classNameError = "", disabledSelectCode = false, disabled, label, loader, placeholderCode = "+57", placeholder = "xxx-xx-xx-xxxx", validator = undefined, optional = false, optionalText = "(optional)", required = false, requiredText = "*", maxLengthShowOptionsCodes, defaultValue = {
    code: "+57",
}, value = undefined, onChange: onChangeProps, parseCountrys, ...props }) => {
    const { _t } = (0, fenextjs_hook_1.use_T)({ ...props });
    const onChange = (v) => {
        onChangeProps?.({
            ...v,
            tel: `${v.code ?? ""} ${v.number ?? ""}`,
        });
    };
    const [loadPhoneCodes, setlLoadPhoneCodes] = (0, react_2.useState)(false);
    const { dataMemo: data, onChangeData, onConcatData, isChange, } = (0, fenextjs_hook_2.useData)(value ?? defaultValue ?? {}, {
        memoDependencies: [value],
        onMemo: (d) => {
            const v = value ?? d;
            return {
                ...v,
                tel: `${v.code ?? ""} ${v.number ?? ""}`,
            };
        },
    });
    const [phones, setPhones] = (0, react_2.useState)([]);
    const loadPhones = async () => {
        let countrys = await (0, country_state_city_nextjs_1.getDataCountrys)();
        if (parseCountrys) {
            countrys = parseCountrys(countrys);
        }
        setPhones(countrys);
        setlLoadPhoneCodes(true);
    };
    (0, react_2.useEffect)(() => {
        loadPhones();
    }, [parseCountrys]);
    const { error: errorFenext } = (0, fenextjs_hook_1.useValidator)({
        data: data,
        validator: validator ?? (0, fenextjs_validator_1.FenextjsValidator)(),
    });
    const getCountryPhone = (d) => {
        return (d?.country ??
            (d?.code_country
                ? phones.find((e) => e.code == d?.code_country)
                : undefined) ??
            (d?.code ? phones.find((e) => e.code_phone == d?.code) : undefined));
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: `fenext-input-phone ${classNamePhone}` },
            react_1.default.createElement("div", { className: `fenext-input-phone-label fenext-input-label ${classNamePhoneLabel} ` },
                _t(label),
                optional && (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement("small", { className: "fenext-input-optional" }, _t(optionalText)))),
                required && (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement("small", { className: "fenext-input-required" }, _t(requiredText))))),
            react_1.default.createElement("div", { className: `fenext-input-phone-code ${classNamePhoneCode}` },
                react_1.default.createElement(SelectT_1.InputSelectT, { ...classNameSelectCode, classNameList: `fenext-input-phone-select-code ${classNameSelectCode?.classNameList ?? ""}`, key: `${defaultValue?.code_country}-${defaultValue?.code}-${value?.code}-${phones.length}`, placeholder: placeholderCode, _t: _t, options: phones, onParse: (e) => {
                        return {
                            id: e?.code_phone ?? "",
                            text: e?.code_phone ?? "",
                            data: e,
                            img: e ? `${(0, country_state_city_nextjs_1.getRuteCountryImg)(e)}` : undefined,
                        };
                    }, disabled: !loadPhoneCodes || disabled || disabledSelectCode, defaultValue: getCountryPhone(defaultValue), value: getCountryPhone(value), onChange: (e) => {
                        if (e?.code_phone) {
                            const v = {
                                code: e?.code_phone,
                                country: e,
                                code_country: e?.code,
                                img: e
                                    ? `${(0, country_state_city_nextjs_1.getRuteCountryImg)(e)}`
                                    : undefined,
                            };
                            onConcatData({
                                ...v,
                            });
                            onChange?.({
                                ...data,
                                ...v,
                            });
                        }
                    }, regExp: /[^0-9+-]/g, regExpReplace: "", icon: react_1.default.createElement(react_1.default.Fragment, null), optional: false, showOptionIconImg: true, itemMaxLengthShowOptions: {
                        id: "fenext-item-max-length-show-options",
                        text: "...",
                    }, maxLengthShowOptions: maxLengthShowOptionsCodes, useTOption: false })),
            react_1.default.createElement("div", { className: `fenext-input-phone-text ${classNamePhoneNumber}` },
                react_1.default.createElement(Text_1.InputText, { ...classNameInputNumber, ...props, type: "text", onChange: (n) => {
                        onChangeData("number")(n);
                        onChange?.({
                            ...data,
                            number: n,
                        });
                    }, loader: !loadPhoneCodes || loader, disabled: !loadPhoneCodes || disabled, placeholder: placeholder, defaultValue: data?.number, value: data?.number, _t: _t, validator: validator?.getObjectValidator?.()?.number, inputMode: "numeric", regExpReplace: "", regExp: /[^0-9]/g, optional: false, error: undefined })),
            (props?.error || (errorFenext && isChange)) && (react_1.default.createElement(Error_1.ErrorComponent, { error: errorFenext ?? props?.error, className: `fenext-input-error ${classNameError}`, _t: _t })))));
};
exports.InputPhone = InputPhone;
//# sourceMappingURL=index.js.map