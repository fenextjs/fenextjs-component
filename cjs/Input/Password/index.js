"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputPassword = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const Text_1 = require("../Text");
const eye_1 = require("fenextjs-svg/cjs/eye");
const InputPassword = ({ classNameContentEye = "", ...props }) => {
    const [type, setType] = (0, react_1.useState)("password");
    const toggleTypePassword = () => {
        setType(type == "password" ? "text" : "password");
    };
    const ICON = (0, react_1.useMemo)(() => {
        return (react_1.default.createElement("span", { onClick: toggleTypePassword, className: `fenext-input-password-icon ${classNameContentEye}` }, type == "password" ? react_1.default.createElement(eye_1.Eye, null) : react_1.default.createElement(eye_1.EyeBar, null)));
    }, [type]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Text_1.InputText, { ...props, icon: ICON, type: type })));
};
exports.InputPassword = InputPassword;
//# sourceMappingURL=index.js.map