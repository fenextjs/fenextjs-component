"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputScannerTextQr = void 0;
const tslib_1 = require("tslib");
const Text_1 = require("../../Text");
const react_1 = tslib_1.__importDefault(require("react"));
const Qr_1 = require("../Qr");
const fenextjs_hook_1 = require("fenextjs-hook");
const InputScannerTextQr = ({ className = "", defaultValue = "", onChange, ...props }) => {
    const { data, setData } = (0, fenextjs_hook_1.useData)(defaultValue ?? "", {
        onChangeDataAfter: onChange,
    });
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Text_1.InputText, { ...props, className: `
                    fenext-input-scanner-text-qr
                    ${className ?? ""}
                `, value: data, onChange: setData, icon: react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(Qr_1.InputScannerQr, { ...props, onChange: setData })) })));
};
exports.InputScannerTextQr = InputScannerTextQr;
