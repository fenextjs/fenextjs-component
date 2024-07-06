"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Breadcrumb = void 0;
const tslib_1 = require("tslib");
const fenextjs_hook_1 = require("fenextjs-hook");
const react_1 = tslib_1.__importDefault(require("react"));
const Link_1 = require("../Link");
const Breadcrumb = ({ className = "", classNameItem = "", classNameLink = "", links, ...props }) => {
    const { _t } = (0, fenextjs_hook_1.use_T)({ ...props });
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("ul", { className: `fenext-breadcrumb ${className} ` }, links.map((link, i) => {
            return (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("li", { key: i, className: `fenext-breadcrumb-item ${classNameItem}` },
                    react_1.default.createElement(Link_1.Link, { href: link.href, className: `fenext-breadcrumb-item-link ${classNameLink}`, onClick: link?.onClick, _t: link?._t ?? _t, useT: link?.useT ?? props?.useT }, _t(link.children)))));
        }))));
};
exports.Breadcrumb = Breadcrumb;
//# sourceMappingURL=index.js.map