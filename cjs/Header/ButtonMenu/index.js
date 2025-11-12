"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonMenu = void 0;
const tslib_1 = require("tslib");
const Loader_1 = require("../../Loader");
const react_1 = tslib_1.__importStar(require("react"));
const fenextjs_hook_1 = require("fenextjs-hook");
const ButtonMenu = ({ className = "", classNameIcon = "", classNameIconBarClose = "", classNameContent = "", loader = false, disabled = false, defaultActive: defaultActiveProps = undefined, children, target = "fenext-btn-menu-checkbox", ...props }) => {
    const { _t } = (0, fenextjs_hook_1.use_T)({ ...props });
    const [defaultActive, setDefaultActive] = (0, react_1.useState)(true);
    const onLoad = () => {
        if (typeof window == "undefined") {
            setTimeout(onLoad, 100);
        }
        else {
            setDefaultActive(window.innerWidth > 575);
        }
    };
    (0, react_1.useEffect)(() => {
        onLoad();
    }, []);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("label", { className: `fenext-btn-menu ${className}` },
            react_1.default.createElement("input", { type: "checkbox", className: `fenext-btn-menu-checkbox`, disabled: disabled || loader, defaultChecked: defaultActiveProps ?? defaultActive, key: defaultActiveProps ?? defaultActive ? "0" : "1", name: target, id: target }),
            loader ? (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(Loader_1.Loader, null))) : (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("div", { className: `fenext-btn-menu-icon ${classNameIcon}` },
                    react_1.default.createElement("div", { className: `fenext-btn-menu-icon-bar-close ${classNameIconBarClose}` })),
                react_1.default.createElement("div", { className: `fenext-btn-menu-content ${classNameContent}` }, _t(children)))))));
};
exports.ButtonMenu = ButtonMenu;
