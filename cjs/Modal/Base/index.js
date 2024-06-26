"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalBase = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const Close_1 = require("fenextjs-svg/cjs/Close");
const useModalPos_1 = require("./useModalPos");
const ModalBase = ({ className = "", classNameBg = "", classNameContent = "", classNameClose = "", active = false, childrenUseActiveForShowHidden = false, disabledClose = false, type = "center", typeClose = "out", onClose, children, useRender = false, name, closeComponent = react_1.default.createElement(Close_1.Close, null), }) => {
    const uuid = (0, react_1.useMemo)(() => new Date().getTime(), [active]);
    const CLOSECOMPONENTE = (0, react_1.useMemo)(() => {
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("div", { onClick: disabledClose ? () => { } : onClose, className: `fenext-modal-base-close fenext-modal-base-close-${type}  fenext-modal-base-close-${active ? "active" : "inactive"} ${classNameClose}` }, closeComponent)));
    }, [onClose, type, active, classNameClose, disabledClose, closeComponent]);
    const CONTENT = (0, react_1.useMemo)(() => {
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("dialog", { open: active, className: `fenext-modal-base-dialog fenext-modal-base-dialog-close-${typeClose} fenext-modal-base-dialog-${active ? "active" : "inactive"} fenext-modal-base-dialog-disabled-close-${disabledClose ? "active" : "inactive"}`, "data-name": name },
                react_1.default.createElement("div", { className: `fenext-modal-base-bg fenext-modal-base-bg-${active ? "active" : "inactive"} ${classNameBg} ` }),
                react_1.default.createElement("div", { className: `fenext-modal-base fenext-modal-base-bg-close fenext-modal-base-bg-close-${uuid} fenext-modal-base-${active ? "active" : "inactive"} fenext-modal-base-${type} ${className} `, onClick: (e) => {
                        const ele = e.target;
                        if (ele.classList.value.includes(`fenext-modal-base-bg-close-${uuid}`) &&
                            !disabledClose) {
                            onClose?.();
                        }
                    } },
                    react_1.default.createElement("div", { className: `fenext-modal-base-content ${classNameContent} ` },
                        CLOSECOMPONENTE,
                        ((childrenUseActiveForShowHidden && active) ||
                            !childrenUseActiveForShowHidden) &&
                            children)),
                CLOSECOMPONENTE)));
    }, [
        CLOSECOMPONENTE,
        childrenUseActiveForShowHidden,
        active,
        children,
        uuid,
        classNameContent,
        className,
        type,
        classNameBg,
        disabledClose,
        typeClose,
    ]);
    (0, useModalPos_1.useModalPos)({
        id: "fenext-modal",
        children: react_1.default.createElement(react_1.default.Fragment, null, useRender && CONTENT),
    });
    return react_1.default.createElement(react_1.default.Fragment, null, !useRender && CONTENT);
};
exports.ModalBase = ModalBase;
//# sourceMappingURL=index.js.map