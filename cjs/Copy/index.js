"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Copy = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const useNotification_1 = require("fenextjs-hook/cjs/useNotification");
const fenextjs_interface_1 = require("fenextjs-interface");
const fenextjs_functions_1 = require("fenextjs-functions");
const Copy = ({ className = "", children, text = "", onClickForCopy, notification = {
    message: "Copy",
    type: fenextjs_interface_1.RequestResultTypeProps.OK,
}, _t, }) => {
    const { pop } = (0, useNotification_1.useNotification)({});
    const onCopy = () => {
        navigator.clipboard.writeText(text);
        onClickForCopy?.(text);
        if (notification) {
            pop(notification);
        }
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: `fenext-copy ${className} `, onClick: onCopy }, (0, fenextjs_functions_1._tValidate)(children, _t))));
};
exports.Copy = Copy;
//# sourceMappingURL=index.js.map