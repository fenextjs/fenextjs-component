"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Modal = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const Base_1 = require("../Base");
const fenextjs_hook_1 = require("fenextjs-hook");
const Modal = ({ classNameElementActionModalActive = "", classNameModal = {}, ElementActionModalActive, disabledElementActionModalActive = false, children, active: activeProps = undefined, disabledClose = false, onClose: onCloseProps, onActive: onActiveProps, type = "center", typeClose = "out", useRender = false, name, }) => {
    const { active, onActive, onClose } = (0, fenextjs_hook_1.useModal)({
        active: activeProps,
        disabled: disabledElementActionModalActive,
        onActive: onActiveProps,
        onClose: onCloseProps,
        name,
    });
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { onClick: onActive, className: `fenext-modal-element-active ${classNameElementActionModalActive}` }, ElementActionModalActive),
        react_1.default.createElement(Base_1.ModalBase, { ...classNameModal, onClose: onClose, active: active, type: type, typeClose: typeClose, disabledClose: disabledClose, useRender: useRender }, children)));
};
exports.Modal = Modal;
//# sourceMappingURL=index.js.map