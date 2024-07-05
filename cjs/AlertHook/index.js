"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertHook = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const fenextjs_hook_1 = require("fenextjs-hook");
const Alert_1 = require("../Alert");
const AlertHook = ({ className = "", configHook = {}, ...props }) => {
    const { alert, onClearAlert } = (0, fenextjs_hook_1.useAlert)(configHook);
    return (react_1.default.createElement(react_1.default.Fragment, null, alert && (react_1.default.createElement("div", { className: `fenext-alert-hook ${className}` },
        react_1.default.createElement(Alert_1.Alert, { ...props, ...alert, onClose: onClearAlert })))));
};
exports.AlertHook = AlertHook;
//# sourceMappingURL=index.js.map