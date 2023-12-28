"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorComponent = void 0;
const tslib_1 = require("tslib");
const fenextjs_functions_1 = require("fenextjs-functions");
const react_1 = tslib_1.__importStar(require("react"));
const ErrorComponent = ({ error, children, className = "", _t, }) => {
    const content = (0, react_1.useMemo)(() => {
        return (react_1.default.createElement(react_1.default.Fragment, null, error ? (react_1.default.createElement(react_1.default.Fragment, null, (0, fenextjs_functions_1._tValidate)(error.message ?? "", _t))) : ((0, fenextjs_functions_1._tValidate)(children, _t))));
    }, [error, _t, children]);
    return (react_1.default.createElement("div", { className: `fenext-error ${className} fenext-error-${error?.code}` }, content));
};
exports.ErrorComponent = ErrorComponent;
//# sourceMappingURL=index.js.map