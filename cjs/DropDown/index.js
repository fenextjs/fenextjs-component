"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DropDown = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const Collapse_1 = require("../Collapse");
const GetSpaceParent_1 = require("fenextjs-functions/cjs/html/GetSpaceParent");
const DropDown = ({ classNameDropDown = "", show = "focus", ...props }) => {
    const dropDownRef = (0, react_1.useRef)(null);
    const [spaces, setSpaces] = (0, react_1.useState)({
        spaceBottom: 0,
        spaceLeft: 0,
        spaceRight: 0,
        spaceTop: 0,
    });
    const onDefDropDownPos = () => {
        if (dropDownRef.current) {
            setSpaces((0, GetSpaceParent_1.GetSpaceParent)(dropDownRef.current));
        }
    };
    (0, react_1.useEffect)(() => {
        onDefDropDownPos();
        window.addEventListener("resize", onDefDropDownPos);
        window.addEventListener("scroll", onDefDropDownPos);
        return () => {
            window.removeEventListener("resize", onDefDropDownPos);
            window.removeEventListener("scroll", onDefDropDownPos);
        };
    }, [dropDownRef.current]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { ref: dropDownRef, className: `fenext-dropdown fenext-dropdown-${spaces.spaceRight > spaces.spaceLeft ? "left" : "right"} fenext-dropdown-${spaces.spaceTop > spaces.spaceBottom ? "up" : "down"} ${classNameDropDown} `, style: {
                ["--fenext-space-top"]: spaces.spaceTop,
                ["--fenext-space-left"]: spaces.spaceLeft,
                ["--fenext-space-right"]: spaces.spaceRight,
                ["--fenext-space-bottom"]: spaces.spaceBottom,
            }, onMouseEnter: onDefDropDownPos },
            react_1.default.createElement(Collapse_1.Collapse, { ...props, show: show }))));
};
exports.DropDown = DropDown;
//# sourceMappingURL=index.js.map