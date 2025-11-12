"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputPassword = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const Text_1 = require("../Text");
const Eye_1 = require("fenextjs-svg/cjs/Eye");
const InputPassword = ({ classNameContentEye = "", iconEye, iconEyeBar, ...props }) => {
    const [type, setType] = (0, react_1.useState)("password");
    const toggleTypePassword = () => {
        setType(type == "password" ? "text" : "password");
    };
    const ICON = (0, react_1.useMemo)(() => {
        return (react_1.default.createElement("span", { onClick: toggleTypePassword, className: `fenext-input-password-icon ${classNameContentEye}` }, type == "password"
            ? iconEye ?? react_1.default.createElement(Eye_1.SvgEye, null)
            : iconEyeBar ?? react_1.default.createElement(Eye_1.SvgEyeBar, null)));
    }, [type]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Text_1.InputText, { ...props, icon: ICON, type: type })));
};
exports.InputPassword = InputPassword;
