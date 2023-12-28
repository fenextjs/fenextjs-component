"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalBase = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const close_1 = require("fenextjs-svg/cjs/close");
const fenextjs_functions_1 = require("fenextjs-functions");
const ModalBase = ({ className = "", classNameBg = "", classNameContent = "", classNameClose = "", active = false, type = "center", onClose, children, _t, }) => {
    const uuid = (0, react_1.useMemo)(() => new Date().getTime(), [active]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("dialog", { open: active, className: `fenext-modal-base-dialog fenext-modal-base-dialog-${active ? "active" : "inactive"}` },
            react_1.default.createElement("div", { className: `fenext-modal-base-bg fenext-modal-base-bg-${active ? "active" : "inactive"} ${classNameBg} ` }),
            react_1.default.createElement("div", { className: `fenext-modal-base fenext-modal-base-bg-close fenext-modal-base-bg-close-${uuid} fenext-modal-base-${active ? "active" : "inactive"} fenext-modal-base-${type} ${className} `, onClick: (e) => {
                    const ele = e.target;
                    if (ele.classList.value.includes(`fenext-modal-base-bg-close-${uuid}`)) {
                        onClose?.();
                    }
                } },
                react_1.default.createElement("div", { className: `fenext-modal-base-content ${classNameContent} ` }, (0, fenextjs_functions_1._tValidate)(children, _t))),
            react_1.default.createElement("div", { onClick: onClose, className: `fenext-modal-base-close fenext-modal-base-close-${type}  fenext-modal-base-close-${active ? "active" : "inactive"} ${classNameClose}` },
                react_1.default.createElement(close_1.Close, null)))));
};
exports.ModalBase = ModalBase;
//# sourceMappingURL=index.js.map