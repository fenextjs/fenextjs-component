"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alert = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const fenextjs_functions_1 = require("fenextjs-functions");
const fenextjs_svg_1 = require("fenextjs-svg");
const Alert = ({ className = "", message, iconClose = react_1.default.createElement(fenextjs_svg_1.Close, null), type, data, _t, onClose, }) => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: `fenext-alert fenext-alert-${type} ${className}`, "data-type": type, "meta-data": data },
            react_1.default.createElement("div", { className: `fenext-alert-content` }, (0, fenextjs_functions_1._tValidate)(message, _t)),
            react_1.default.createElement("div", { className: `fenext-alert-close`, onClick: onClose }, iconClose))));
};
exports.Alert = Alert;
//# sourceMappingURL=index.js.map