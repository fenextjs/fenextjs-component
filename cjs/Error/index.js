"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorComponent = void 0;
const tslib_1 = require("tslib");
const fenextjs_hook_1 = require("fenextjs-hook");
const react_1 = tslib_1.__importStar(require("react"));
const ErrorComponent = ({ error, children, className = "", useDataError = true, useErrorInput = true, ...props }) => {
    const { _t } = (0, fenextjs_hook_1.use_T)({ ...props });
    const dataError = (0, react_1.useMemo)(() => {
        const err = useDataError ? error?.data : undefined;
        return err ? JSON.stringify(error) : undefined;
    }, [useDataError, error]);
    return (react_1.default.createElement("div", { className: `fenext-error ${className} fenext-error-${error?.code}`, "data-error": dataError }, error ? (react_1.default.createElement(react_1.default.Fragment, null, error?.content ?? (react_1.default.createElement(react_1.default.Fragment, null,
        _t(error?.msg ?? ""),
        useErrorInput && error?.input && (react_1.default.createElement(react_1.default.Fragment, null,
            " ",
            react_1.default.createElement("span", { className: "fenext-error-input" }, _t(`[${error?.input ?? ""}]`)))))))) : (_t(children))));
};
exports.ErrorComponent = ErrorComponent;
