"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputCardExpDate = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const Text_1 = require("../../Text");
const fenextjs_validator_1 = require("fenextjs-validator");
const useValidator_1 = require("fenextjs-hook/cjs/useValidator");
const useData_1 = require("fenextjs-hook/cjs/useData");
const fenextjs_functions_1 = require("fenextjs-functions");
const InputCardExpDate = ({ value: valueProps, defaultValue = {}, placeholder = "MM/YY", onChange, validator = undefined, maxExpDateLength = 4, ...props }) => {
    const { data, setData } = (0, useData_1.useData)(defaultValue, {
        onChangeDataAfter: onChange,
    });
    const value = (0, react_1.useMemo)(() => valueProps ?? data, [valueProps, data]);
    const { error: errorFenext } = (0, useValidator_1.useValidator)({
        data: value,
        validator: validator ?? (0, fenextjs_validator_1.FenextjsValidator)(),
    });
    const textToCardExpDateData = (e) => {
        const n = `${e}`.replace(/[^0-9]/g, "");
        let month = parseInt(n.slice(0, 2));
        if (Number.isNaN(month)) {
            month = undefined;
        }
        if ((month ?? 0) > 12) {
            return textToCardExpDateData(`0${e}`);
        }
        let year = parseInt(n.slice(2, Math.min(6, maxExpDateLength)));
        if (Number.isNaN(year)) {
            year = undefined;
        }
        return {
            month,
            year,
        };
    };
    const CardExpDateDataToText = (d) => {
        let m = parseInt(`${d?.month ?? ""}`);
        if (Number.isNaN(m) || m == 0) {
            m = "";
        }
        let y = parseInt(`${d?.year ?? ""}`);
        if (Number.isNaN(y) || y == 0) {
            y = "";
        }
        else {
            m = (0, fenextjs_functions_1.parseNumberCount)(m, {
                minimumIntegerDigits: 2,
                maximumFractionDigits: 0,
            });
        }
        const r = `${m}${y != "" ? "/" + y : ""}`;
        return r;
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Text_1.InputText, { ...props, value: CardExpDateDataToText(value), className: `fenext-input-card-exp-date ${props?.className}`, error: errorFenext, placeholder: placeholder, onChange: (v) => {
                setData(textToCardExpDateData(v));
            }, inputMode: "numeric" })));
};
exports.InputCardExpDate = InputCardExpDate;
