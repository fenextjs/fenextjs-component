"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notification = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const Request_1 = require("fenextjs-interface/cjs/Request");
const Close_1 = require("fenextjs-svg/cjs/Close");
const fenextjs_hook_1 = require("fenextjs-hook");
const fenextjs_hook_2 = require("fenextjs-hook");
const Notification = ({ className = "", type = Request_1.RequestResultTypeProps.NORMAL, children, ...props }) => {
    const { _t } = (0, fenextjs_hook_2.use_T)({ ...props });
    const { reset } = (0, fenextjs_hook_1.useNotification)({});
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: `fenext-notification fenext-notification-${type.toUpperCase()} ${className} ` },
            _t(children),
            react_1.default.createElement("div", { className: "fenext-notification-close", onClick: reset },
                react_1.default.createElement(Close_1.SvgClose, null)))));
};
exports.Notification = Notification;
//# sourceMappingURL=index.js.map