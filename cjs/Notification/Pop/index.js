"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationPop = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const Fixed_1 = require("../Fixed");
const useNotification_1 = require("fenextjs-hook/cjs/useNotification");
const NotificationPop = ({ classNamePop = "", className = "", typePop = "down", time = 4000, ...props }) => {
    const { notification, reset } = (0, useNotification_1.useNotification)({ time });
    (0, react_1.useEffect)(() => {
        setTimeout(() => {
            reset();
        }, time);
    }, []);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: `
                        fenext-notification-pop
                        fenext-notification-pop-${typePop}
                        ${classNamePop}
                    `, style: {
                ["--time"]: `${time}ms`,
            } }, (notification ?? []).map((e, i) => {
            return (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(Fixed_1.Notification, { key: i, ...props, className: className, type: e?.type, children: e?.message })));
        }))));
};
exports.NotificationPop = NotificationPop;
//# sourceMappingURL=index.js.map