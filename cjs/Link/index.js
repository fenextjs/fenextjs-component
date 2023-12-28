"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Link = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const link_1 = tslib_1.__importDefault(require("next/link"));
const fenextjs_functions_1 = require("fenextjs-functions");
const Link = ({ className = "", children = "Link", _t, ...props }) => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(link_1.default, { ...props, className: `fenext-link ${className}` },
            react_1.default.createElement(react_1.default.Fragment, null, (0, fenextjs_functions_1._tValidate)(children, _t)))));
};
exports.Link = Link;
//# sourceMappingURL=index.js.map