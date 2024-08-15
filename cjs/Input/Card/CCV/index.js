"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputCardCCV = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const Text_1 = require("../../Text");
const InputCardCCV = ({ placeholder = "XXX", ...props }) => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Text_1.InputText, { ...props, placeholder: placeholder, maxLength: 4, regExpReplace: "", regExp: /[^0-9]/g, inputMode: "numeric", type: "number" })));
};
exports.InputCardCCV = InputCardCCV;
//# sourceMappingURL=index.js.map