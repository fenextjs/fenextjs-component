"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Breadcrumb = void 0;
const tslib_1 = require("tslib");
const fenextjs_functions_1 = require("fenextjs-functions");
const link_1 = tslib_1.__importDefault(require("next/link"));
const react_1 = tslib_1.__importDefault(require("react"));
const Breadcrumb = ({ className = "", classNameItem = "", classNameLink = "", links, _t, }) => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("ul", { className: `fenext-breadcrumb ${className} ` }, links.map((link, i) => {
            return (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("li", { key: i, className: `fenext-breadcrumb-item ${classNameItem}` },
                    react_1.default.createElement(link_1.default, { href: link.href, legacyBehavior: true },
                        react_1.default.createElement("a", { className: `fenext-breadcrumb-item-link ${classNameLink}`, onClick: link?.onClick }, (0, fenextjs_functions_1._tValidate)(link.children, _t))))));
        }))));
};
exports.Breadcrumb = Breadcrumb;
//# sourceMappingURL=index.js.map