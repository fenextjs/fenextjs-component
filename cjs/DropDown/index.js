"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DropDown = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const fenextjs_svg_1 = require("fenextjs-svg");
const Loader_1 = require("../Loader");
const Portal_1 = require("../Portal");
const fenextjs_hook_1 = require("fenextjs-hook");
const DropDown = ({ className = "", classNameBody = "", classNameContentHeader = "", classNameContentIcon = "", header, active: activeProps, defaultActive, disabled, loader, onChange: onChangeProps, iconArrow = react_1.default.createElement(fenextjs_svg_1.SvgArrow, null), rotateIcon = true, name, children, type = "focus", }) => {
    const [tlrb, settlrb] = (0, react_1.useState)({
        top: "inherit",
        left: "inherit",
        right: "inherit",
        bottom: "inherit",
    });
    const refDropDownHeader = (0, react_1.useRef)(null);
    const refDropDownBody = (0, react_1.useRef)(null);
    const [isChange, setIsChange] = (0, react_1.useState)(false);
    const [active_, setActive] = (0, react_1.useState)(defaultActive);
    const active = (0, react_1.useMemo)(() => activeProps ?? active_, [activeProps, active_]);
    const onChange = (b) => {
        if (disabled) {
            return;
        }
        setActive(b ?? !active);
        onChangeProps?.(b ?? !active);
        setIsChange(true);
    };
    (0, fenextjs_hook_1.useActionDropDown)({
        name,
        onChange: (e) => {
            setTimeout(() => {
                onChange(e);
            }, 50);
        },
    });
    const onClick = () => {
        if (disabled) {
            return;
        }
        onChange();
        const element = refDropDownHeader?.current;
        const selectRect = element?.getBoundingClientRect?.();
        const { top, left, right, bottom } = selectRect;
        const swForTop = top > window.innerHeight - bottom;
        const swForLeft = left > window.innerWidth - right;
        settlrb({
            top: swForTop ? "inherit" : `${bottom}px`,
            bottom: !swForTop ? "inherit" : `${window.innerHeight - top}px`,
            left: swForLeft ? "inherit" : `${left}px`,
            right: !swForLeft ? "inherit" : `${window.innerWidth - right}px`,
        });
    };
    const onClickClose = (0, react_1.useCallback)((ev) => {
        if (active) {
            const element = ev.target;
            if (refDropDownHeader.current?.contains(element) ||
                refDropDownBody.current?.contains(element)) {
                return;
            }
            onChange();
        }
    }, [active, refDropDownBody, refDropDownHeader]);
    (0, react_1.useEffect)(() => {
        if (type == "focus") {
            window.addEventListener("click", onClickClose);
            return () => {
                window.removeEventListener("click", onClickClose);
            };
        }
        return;
    }, [type, active, refDropDownBody, refDropDownHeader]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { ref: refDropDownHeader, "data-component": "fenext-dropdown", className: `
                    fenext-dropdown 
                    fenext-dropdown-${active ? "active" : "inactive"}
                    fenext-dropdown-rotate-icon-${rotateIcon ? "yes" : "no"}
                    ${className}
                `, onClick: onClick },
            react_1.default.createElement("div", { className: `fenext-dropdown-header-content ${classNameContentHeader}` }, header),
            react_1.default.createElement("div", { className: `fenext-dropdown-header-icon ${classNameContentIcon}` }, loader ? (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(Loader_1.Loader, null))) : (react_1.default.createElement(react_1.default.Fragment, null, iconArrow)))),
        react_1.default.createElement(Portal_1.Portal, null,
            react_1.default.createElement("div", { ref: refDropDownBody, "data-component": "fenext-dropdown-body", className: `
                        fenext-dropdown-body
                        fenext-dropdown-body-${isChange ? "change" : "no-change"}
                        fenext-dropdown-body-${active ? "active" : "inactive"}
                        ${classNameBody}
                    `, style: {
                    ["--fenext-dropdown-top"]: tlrb.top,
                    ["--fenext-dropdown-left"]: tlrb.left,
                    ["--fenext-dropdown-right"]: tlrb.right,
                    ["--fenext-dropdown-bottom"]: tlrb.bottom,
                } }, children))));
};
exports.DropDown = DropDown;
//# sourceMappingURL=index.js.map