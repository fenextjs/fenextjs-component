"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Title = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const Line_1 = require("../Loader/Line");
const fenextjs_functions_1 = require("fenextjs-functions");
const Title = ({ className = "", tag = "h1", loader = false, children, _t, }) => {
    const Tag = tag;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Tag, { className: `fenext-title fenext-title-${tag} ${className} ` }, loader ? react_1.default.createElement(Line_1.LoaderLine, null) : react_1.default.createElement(react_1.default.Fragment, null, (0, fenextjs_functions_1._tValidate)(children, _t)))));
};
exports.Title = Title;
//# sourceMappingURL=index.js.map