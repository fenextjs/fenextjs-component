"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Text = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const Line_1 = require("../Loader/Line");
const fenextjs_hook_1 = require("fenextjs-hook");
const Text = ({ className = "", tag = "p", loader = false, children, nLineLoader = 3, ...props }) => {
    const { _t } = (0, fenextjs_hook_1.use_T)({ ...props });
    const Tag = tag;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Tag, { className: `fenext-text fenext-text-${tag} ${className} ` }, loader ? (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("div", { className: "fenext-text-loader" }, new Array(nLineLoader).fill(react_1.default.createElement(Line_1.LoaderLine, null))))) : (react_1.default.createElement(react_1.default.Fragment, null, _t(children))))));
};
exports.Text = Text;
