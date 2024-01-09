"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorComponent = void 0;
const tslib_1 = require("tslib");
const fenextjs_functions_1 = require("fenextjs-functions");
const react_1 = tslib_1.__importStar(require("react"));
const ErrorComponent = ({ error, children, className = "", useDataError = true, useErrorInput = true, _t, }) => {
    const content = (0, react_1.useMemo)(() => {
        return (react_1.default.createElement(react_1.default.Fragment, null, error ? (react_1.default.createElement(react_1.default.Fragment, null,
            (0, fenextjs_functions_1._tValidate)(error?.msg ?? "", _t),
            useErrorInput && error?.input && (react_1.default.createElement(react_1.default.Fragment, null,
                " ",
                react_1.default.createElement("span", { className: "fenext-error-input" }, (0, fenextjs_functions_1._tValidate)(`[${error?.input ?? ""}]`, _t)))))) : ((0, fenextjs_functions_1._tValidate)(children, _t))));
    }, [error, _t, children, useErrorInput]);
    const dataError = (0, react_1.useMemo)(() => {
        const err = useDataError ? error?.data : undefined;
        return err ? JSON.stringify(error) : undefined;
    }, [useDataError, error]);
    return (react_1.default.createElement("div", { className: `fenext-error ${className} fenext-error-${error?.code}`, "data-error": dataError }, content));
};
exports.ErrorComponent = ErrorComponent;
//# sourceMappingURL=index.js.map