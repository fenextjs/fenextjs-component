"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const Loader_1 = require("../Loader");
const fenextjs_hook_1 = require("fenextjs-hook");
const Button = ({ className = "", classNameLoader = "", classNameInvert = "", classNameDisabled = "", classNameContentLoaderElement = "", classNameLoaderElement = "", children, loader = false, invert = false, disabled = false, onClick = () => { }, onClickDisabled: onClickDisabledProps, icon = "", iconLoader = undefined, isBtn = true, full = false, size = "normal", ...props }) => {
    const { _t } = (0, fenextjs_hook_1.use_T)({ ...props });
    const Tag = isBtn ? "button" : "div";
    const onClickDisabled = (e) => {
        e?.preventDefault?.();
        onClickDisabledProps?.(e);
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Tag, { onClick: disabled ? onClickDisabled : onClick, className: `
                    fenext-btn
                    fenext-btn-${loader ? `loader ${classNameLoader}` : ""}
                    fenext-btn-${invert ? `invert ${classNameInvert}` : ""}
                    fenext-btn-${disabled ? `disabled ${classNameDisabled}` : ""}
                    fenext-btn-size-${size}
                    ${full ? "fenext-btn-size-full" : ""}
                    ${className}
                `, disabled: loader },
            loader && (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("div", { className: `fenext-btn-content-loader-element ${classNameContentLoaderElement}` }, iconLoader ?? (react_1.default.createElement(Loader_1.Loader, { classNameLoader: `fenext-btn-loader-element ${classNameLoaderElement}` }))))),
            icon,
            _t(children))));
};
exports.Button = Button;
//# sourceMappingURL=index.js.map