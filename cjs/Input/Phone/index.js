"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputPhone = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const Yup = tslib_1.__importStar(require("yup"));
const Text_1 = require("../Text");
const Select_1 = require("../Select");
const useData_1 = require("fenextjs-hook/cjs/useData");
const fenextjs_error_1 = require("fenextjs-error");
const Error_1 = require("../../Error");
const fenextjs_interface_1 = require("fenextjs-interface");
const fenextjs_hook_1 = require("fenextjs-hook");
const fenextjs_validator_1 = require("fenextjs-validator");
const fenextjs_functions_1 = require("fenextjs-functions");
/**
 * Component that renders a checkbox input.
 * Takes an InputPhoneProps object as props.
 */
const InputPhone = ({ classNameInputNumber = {}, classNameSelectCode = {}, classNamePhone = "", classNamePhoneCode = "", classNamePhoneLabel = "", classNamePhoneNumber = "", classNameError = "", disabledSelectCode = false, disabled, label, loader, yup = Yup.object().shape({
    code: Yup.string().required(),
    number: Yup.string().required(),
}), placeholderCode = "+57", placeholder = "xxx-xx-xx-xxxx", defaultValue = {
    code: "+57",
    number: "",
    tel: "",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/20px-Flag_of_Colombia.svg.png",
}, value = undefined, onChange, validator = undefined, _t = (e) => e, ...props }) => {
    const [error, setError] = (0, react_1.useState)(undefined);
    const [loadPhoneCodes, setlLoadPhoneCodes] = (0, react_1.useState)(false);
    const { dataMemo: data, onChangeData, onConcatData, isChange, } = (0, useData_1.useData)(defaultValue, {
        onChangeDataMemoAfter: onChange,
        onMemo: (d) => {
            const v = value ?? d;
            return {
                ...v,
                tel: `${v.code} ${v.number}`,
            };
        },
        onChangeDataAfter: (data) => onValidatePhone(data),
    });
    const [phones, setPhones] = (0, react_1.useState)([]);
    const onValidatePhone = async (data) => {
        try {
            const valid = await yup.validate(data);
            if (valid) {
                setError(undefined);
            }
        }
        catch (error) {
            setError(new fenextjs_error_1.ErrorFenextjs({
                code: fenextjs_interface_1.ErrorCode.ERROR,
                message: `${error.message}`,
            }));
        }
    };
    const loadPhones = async () => {
        const { phones } = await Promise.resolve().then(() => tslib_1.__importStar(require("world-phones")));
        setPhones(phones);
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
            react_1.default.createElement("div", { className: `fenext-input-phone-label fenext-input-label ${classNamePhoneLabel} ` }, (0, fenextjs_functions_1._tValidate)(label, _t)),
            react_1.default.createElement("div", { className: `fenext-input-phone-code ${classNamePhoneCode}` },
                react_1.default.createElement(Select_1.InputSelect, { ...classNameSelectCode, key: data.code, placeholder: placeholderCode, _t: _t, options: phones.map((phone) => {
                        return {
                            id: phone.code,
                            text: phone.code,
                            img: phone.img,
                            data: phone,
                        };
                    }), disabled: !loadPhoneCodes || disabled || disabledSelectCode, defaultValue: data?.code
                        ? {
                            id: data.code,
                            text: data.code,
                            img: data.img,
                            data: data,
                        }
                        : undefined, onChange: (option) => {
                        if (option?.data?.code) {
                            onConcatData({
                                code: option?.data?.code,
                                img: option?.data?.img,
                            });
                        }
                    }, regExp: /[^0-9+-]/g, regExpReplace: "", icon: data?.img ? (react_1.default.createElement(react_1.default.Fragment, null,
                        react_1.default.createElement("img", { src: data.img, alt: data.code }))) : (react_1.default.createElement(react_1.default.Fragment, null)) })),
            react_1.default.createElement("div", { className: `fenext-input-phone-text ${classNamePhoneNumber}` },
                react_1.default.createElement(Text_1.InputText, { ...classNameInputNumber, ...props, type: "number", onChange: onChangeData("number"), loader: !loadPhoneCodes || loader, disabled: !loadPhoneCodes || disabled, placeholder: placeholder, defaultValue: data?.number, value: value?.number, _t: _t, validator: validator?.getObjectValidator?.()?.number })),
            ((props?.error ?? error) || (errorFenext && isChange)) && (react_1.default.createElement(Error_1.ErrorComponent, { error: errorFenext ?? props?.error ?? error, className: `fenext-input-error ${classNameError}`, _t: _t })))));
};
exports.InputPhone = InputPhone;
//# sourceMappingURL=index.js.map