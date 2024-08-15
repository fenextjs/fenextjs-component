"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputPhone = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const Text_1 = require("../Text");
const useData_1 = require("fenextjs-hook/cjs/useData");
const Error_1 = require("../../Error");
const fenextjs_hook_1 = require("fenextjs-hook");
const fenextjs_validator_1 = require("fenextjs-validator");
const fenextjs_functions_1 = require("fenextjs-functions");
const useJsonString_1 = require("fenextjs-hook/cjs/useJsonString");
const country_state_city_nextjs_1 = require("country-state-city-nextjs");
const SelectT_1 = require("../SelectT");
const InputPhone = ({ classNameInputNumber = {}, classNameSelectCode = {}, classNamePhone = "", classNamePhoneCode = "", classNamePhoneLabel = "", classNamePhoneNumber = "", classNameError = "", disabledSelectCode = false, disabled, label, loader, placeholderCode = "+57", placeholder = "xxx-xx-xx-xxxx", validator = undefined, optional = false, optionalText = "(optional)", required = false, requiredText = "*", defaultValue: defaultValueProps = {
    code: "+57",
    number: "",
    tel: "",
}, value: valueProps = undefined, onChange: onChangeProps, defaultValueJsonString, valueJsonString, onChangeJsonString, parseJson_to_String, parseString_to_Json, ...props }) => {
    const { _t } = (0, fenextjs_hook_1.use_T)({ ...props });
    const { value, defaultValue, onChange } = (0, useJsonString_1.useJsonString)({
        parseJson_to_String: parseJson_to_String ?? fenextjs_functions_1.parsePhone_to_String,
        parseString_to_Json: parseString_to_Json ?? fenextjs_functions_1.parseString_to_Phone,
        defaultValueJsonString,
        valueJsonString,
        onChangeJsonString,
        value: valueProps,
        defaultValue: defaultValueProps,
        onChange: onChangeProps,
    });
    const [loadPhoneCodes, setlLoadPhoneCodes] = (0, react_1.useState)(false);
    const { dataMemo: data, onChangeData, onConcatData, isChange, } = (0, useData_1.useData)(defaultValue ?? {}, {
        onChangeDataMemoAfter: onChange,
        onMemo: (d) => {
            const v = value ?? d;
            return {
                ...v,
                tel: `${v.code} ${v.number}`,
            };
        },
    });
    const [phones, setPhones] = (0, react_1.useState)([]);
    const loadPhones = async () => {
        const countrys = await (0, country_state_city_nextjs_1.getDataCountrys)();
        setPhones(countrys);
        setlLoadPhoneCodes(true);
    };
    (0, react_1.useEffect)(() => {
        loadPhones();
    }, []);
    const { error: errorFenext } = (0, fenextjs_hook_1.useValidator)({
        data: data,
        validator: validator ?? (0, fenextjs_validator_1.FenextjsValidator)(),
    });
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: `fenext-input-phone ${classNamePhone}` },
            react_1.default.createElement("div", { className: `fenext-input-phone-label fenext-input-label ${classNamePhoneLabel} ` },
                _t(label),
                optional && (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement("small", { className: "fenext-input-optional" }, _t(optionalText)))),
                required && (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement("small", { className: "fenext-input-required" }, _t(requiredText))))),
            react_1.default.createElement("div", { className: `fenext-input-phone-code ${classNamePhoneCode}` },
                react_1.default.createElement(SelectT_1.InputSelectT, { ...classNameSelectCode, classNameList: `fenext-input-phone-select-code ${classNameSelectCode?.classNameList ?? ""}`, key: `${defaultValue?.code}-${value?.code}-${phones.length}`, placeholder: placeholderCode, _t: _t, options: phones, onParse: (e) => {
                        return {
                            id: e?.code_phone ?? "",
                            text: e?.code_phone ?? "",
                            data: e,
                            img: e ? `${(0, country_state_city_nextjs_1.getRuteCountryImg)(e)}` : undefined,
                        };
                    }, disabled: !loadPhoneCodes || disabled || disabledSelectCode, defaultValue: phones.find((e) => e.code_phone == defaultValue?.code), value: value
                        ? phones.find((e) => e.code_phone == value?.code)
                        : undefined, onChange: (e) => {
                        if (e?.code_phone) {
                            onConcatData({
                                code: e?.code_phone,
                                img: e
                                    ? `${(0, country_state_city_nextjs_1.getRuteCountryImg)(e)}`
                                    : undefined,
                            });
                        }
                    }, regExp: /[^0-9+-]/g, regExpReplace: "", icon: react_1.default.createElement(react_1.default.Fragment, null), optional: false, showOptionIconImg: true })),
            react_1.default.createElement("div", { className: `fenext-input-phone-text ${classNamePhoneNumber}` },
                react_1.default.createElement(Text_1.InputText, { ...classNameInputNumber, ...props, type: "text", onChange: onChangeData("number"), loader: !loadPhoneCodes || loader, disabled: !loadPhoneCodes || disabled, placeholder: placeholder, defaultValue: data?.number, value: value?.number, _t: _t, validator: validator?.getObjectValidator?.()?.number, inputMode: "numeric", regExpReplace: "", regExp: /[^0-9]/g, optional: false })),
            (props?.error || (errorFenext && isChange)) && (react_1.default.createElement(Error_1.ErrorComponent, { error: errorFenext ?? props?.error, className: `fenext-input-error ${classNameError}`, _t: _t })))));
};
exports.InputPhone = InputPhone;
//# sourceMappingURL=index.js.map