"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentLoading = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const Spinner_1 = require("../Loader/Spinner");
const fenextjs_functions_1 = require("fenextjs-functions");
const ContentLoading = ({ className = "", children, componentLoader = react_1.default.createElement(Spinner_1.LoaderSpinner, null), loader = false, isPage = false, _t, }) => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: `fenext-content-loading fenext-content-loading-${loader ? "loader" : ""} fenext-content-loading-${isPage ? "page" : ""} ${className} ` }, loader ? componentLoader : (0, fenextjs_functions_1._tValidate)(children, _t))));
};
exports.ContentLoading = ContentLoading;
//# sourceMappingURL=index.js.map