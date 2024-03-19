"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputCardNumber = exports.InputCardNumberIcons = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const Text_1 = require("../../Text");
const fenextjs_validator_1 = require("fenextjs-validator");
const useValidator_1 = require("fenextjs-hook/cjs/useValidator");
const useData_1 = require("fenextjs-hook/cjs/useData");
const fenextjs_svg_1 = require("fenextjs-svg");
const fenextjs_functions_1 = require("fenextjs-functions");
exports.InputCardNumberIcons = {
    AMEX: react_1.default.createElement(fenextjs_svg_1.CardAmericanExpress, null),
    DINERS: react_1.default.createElement(fenextjs_svg_1.CardDinersClub, null),
    DINERS_CARTE_BLANCHE: react_1.default.createElement(fenextjs_svg_1.CardDinersClub, null),
    DISCOVER: react_1.default.createElement(fenextjs_svg_1.CardDiscover, null),
    JCB: react_1.default.createElement(fenextjs_svg_1.CardJCB, null),
    MASTERCARD: react_1.default.createElement(fenextjs_svg_1.CardMasterCard, null),
    OTHER: react_1.default.createElement(react_1.default.Fragment, null),
    VISA: react_1.default.createElement(fenextjs_svg_1.CardVisa, null),
    VISA_ELECTRON: react_1.default.createElement(fenextjs_svg_1.CardVisaElectron, null),
};
const InputCardNumber = ({ value: valueProps, defaultValue = "", onChange, validator = undefined, maxNumberLength = 19, ...props }) => {
    const { data, setData } = (0, useData_1.useData)(defaultValue ?? "", {
        onChangeDataAfter: onChange,
    });
    const value = (0, react_1.useMemo)(() => valueProps ?? data, [valueProps, data]);
    const { error: errorFenext } = (0, useValidator_1.useValidator)({
        data: value,
        validator: validator ?? (0, fenextjs_validator_1.FenextjsValidator)(),
    });
    const numberToTextCard = (e) => {
        const n = `${e}`.split(" ").join("");
        const first3 = n.slice(0, 4);
        const secud3 = n.slice(4, 8);
        const eighthDigit = n.slice(8, 12);
        const lastNumbers = n.slice(12, Math.max(15, maxNumberLength));
        return `${first3 ?? ""}${secud3 ? " " + secud3 : ""}${eighthDigit ? " " + eighthDigit : ""}${lastNumbers ? " " + lastNumbers : ""}`;
    };
    const ICON = (0, react_1.useMemo)(() => exports.InputCardNumberIcons[(0, fenextjs_functions_1.GetCardType)(value)], [value]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Text_1.InputText, { ...props, value: numberToTextCard(value), className: `fenext-input-card-number ${props?.className}`, useLoader: false, error: errorFenext, icon: ICON, onChange: (v) => {
                setData(`${v}`
                    .replace(/[^0-9]/g, "")
                    .slice(0, Math.max(15, maxNumberLength)));
            }, inputMode: "numeric" })));
};
exports.InputCardNumber = InputCardNumber;
//# sourceMappingURL=index.js.map