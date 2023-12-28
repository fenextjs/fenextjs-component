"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Text = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const Line_1 = require("../Loader/Line");
const fenextjs_functions_1 = require("fenextjs-functions");
const Text = ({ className = "", tag = "p", loader = false, children, nLineLoader = 3, _t, }) => {
    const Tag = tag;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Tag, { className: `fenext-text fenext-text-${tag} ${className} ` }, loader ? (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("div", { className: "fenext-text-loader" }, new Array(nLineLoader).fill(react_1.default.createElement(Line_1.LoaderLine, null))))) : (react_1.default.createElement(react_1.default.Fragment, null, (0, fenextjs_functions_1._tValidate)(children, _t))))));
};
exports.Text = Text;
//# sourceMappingURL=index.js.map