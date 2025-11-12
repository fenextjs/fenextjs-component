"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentScrollLeft = void 0;
const tslib_1 = require("tslib");
const fenextjs_hook_1 = require("fenextjs-hook");
const react_1 = tslib_1.__importDefault(require("react"));
const ContentScrollLeft = ({ className = "", classNameContent = "", children, ...props }) => {
    const { _t } = (0, fenextjs_hook_1.use_T)({ ...props });
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: `fenext-content-scroll-left ${className}` },
            react_1.default.createElement("div", { className: `fenext-content-scroll-left-content ${classNameContent}` }, _t(children)))));
};
exports.ContentScrollLeft = ContentScrollLeft;
