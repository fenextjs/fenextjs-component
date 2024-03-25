"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Modal = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const Base_1 = require("../Base");
const Modal = ({ classNameElementActionModalActive = "", classNameModal = {}, ElementActionModalActive, disabledElementActionModalActive = false, children, active: activeProps = undefined, disabledClose = false, onClose: onCloseProps, onActive: onActiveProps, type = "center", typeClose = "out", useRender = false, }) => {
    const [activeValue, setActiveValue] = (0, react_1.useState)(false);
    const active = (0, react_1.useMemo)(() => activeProps ?? activeValue, [activeProps, activeValue]);
    const onActive = (0, react_1.useCallback)(() => {
        if (disabledElementActionModalActive) {
            return;
        }
        setActiveValue(true);
        onActiveProps?.();
    }, [disabledElementActionModalActive]);
    const onClose = () => {
        setActiveValue(false);
        onCloseProps?.();
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { onClick: onActive, className: `fenext-modal-element-active ${classNameElementActionModalActive}` }, ElementActionModalActive),
        react_1.default.createElement(Base_1.ModalBase, { ...classNameModal, onClose: onClose, active: active, type: type, typeClose: typeClose, disabledClose: disabledClose, useRender: useRender }, children)));
};
exports.Modal = Modal;
//# sourceMappingURL=index.js.map