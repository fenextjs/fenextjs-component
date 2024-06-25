"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const Loader_1 = require("../Loader");
const fenextjs_functions_1 = require("fenextjs-functions");
const Button = ({ className = "", classNameLoader = "", children, loader = false, disabled = false, onClick = () => { }, onClickDisabled = () => { }, icon = "", isBtn = true, full = false, size = "normal", _t, }) => {
    const Tag = isBtn ? "button" : "div";
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Tag, { onClick: disabled ? onClickDisabled : onClick, className: `
                    fenext-btn
                    fenext-btn-${loader ? "loader" : ""}
                    fenext-btn-size-${size}
                    ${full ? "fenext-btn-size-full" : ""}
                    ${className}
                `, disabled: loader || disabled },
            loader && react_1.default.createElement(Loader_1.Loader, { classNameLoader: classNameLoader }),
            icon,
            (0, fenextjs_functions_1._tValidate)(children, _t))));
};
exports.Button = Button;
//# sourceMappingURL=index.js.map