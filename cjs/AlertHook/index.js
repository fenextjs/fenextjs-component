"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertHook = exports.useAlert = exports.useAction = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const Alert_1 = require("../Alert");
const react_2 = require("react");
const react_3 = require("react");
const useAction = ({ name, onActionExecute, }) => {
    const onLoad = () => {
        if (!(window && typeof window != "undefined")) {
            setTimeout(onLoad, 500);
            return;
        }
        if (onActionExecute) {
            window.addEventListener(`fenext-action-element-${name}`, (e) => {
                const data = e?.detail;
                onActionExecute?.(data);
            }, false);
        }
    };
    (0, react_3.useEffect)(onLoad, [onActionExecute]);
    const onAction = (detail) => {
        window.dispatchEvent(new CustomEvent(`fenext-action-element-${name}`, {
            bubbles: true,
            detail,
        }));
    };
    return {
        onAction,
    };
};
exports.useAction = useAction;
const useAlert = ({ name = "fenextjs-alert", }) => {
    const [alert, setAlert] = (0, react_2.useState)(undefined);
    const { onAction } = (0, exports.useAction)({
        name,
        onActionExecute: setAlert,
    });
    return {
        alert,
        setAlert: onAction,
        onClearAlert: () => {
            onAction(undefined);
        },
    };
};
exports.useAlert = useAlert;
const AlertHook = ({ className = "", configHook = {}, ...props }) => {
    const { alert, onClearAlert } = (0, exports.useAlert)(configHook);
    return (react_1.default.createElement(react_1.default.Fragment, null, alert && (react_1.default.createElement("div", { className: `fenext-alert-hook ${className}` },
        react_1.default.createElement(Alert_1.Alert, { ...props, ...alert, onClose: onClearAlert })))));
};
exports.AlertHook = AlertHook;
//# sourceMappingURL=index.js.map