"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoaderSpinner = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const LoaderSpinner = ({ classNameLoaderSpinner = "", }) => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: `fenext-loader-spinner ${classNameLoaderSpinner}` })));
};
exports.LoaderSpinner = LoaderSpinner;
//# sourceMappingURL=index.js.map