"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Back = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const router_1 = require("next/router");
const Loader_1 = require("../Loader");
const pagination_1 = require("fenextjs-svg/cjs/pagination");
const fenextjs_functions_1 = require("fenextjs-functions");
const Back = ({ className = "", classNameLoader = "", classNameDisabled = "", classNameIcon = "", classNameContent = "", children = "Back", loader = false, disabled = false, onClick = undefined, icon = react_1.default.createElement(pagination_1.PaginationPre, null), typeOnBack = "history", link = "", minLenght = 2, useHistoryMinLenght = false, _t, }) => {
    const router = (0, router_1.useRouter)();
    const onBack = () => {
        if (loader || disabled) {
            return;
        }
        onClick?.();
        const actions = {
            history: () => {
                history.back();
            },
            router: () => {
                router.back();
            },
            link: () => {
                router.push(link);
            },
            none: () => 1,
        };
        actions[typeOnBack]();
    };
    if (useHistoryMinLenght && typeof window != "undefined" && window) {
        if (window.history.length < minLenght) {
            return react_1.default.createElement(react_1.default.Fragment, null);
        }
    }
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { onClick: onBack, className: `fenext-back ${className} ${disabled ? `${classNameDisabled} fenext-back-disabled` : ""}` },
            react_1.default.createElement("div", { className: `fenext-back-icon ${classNameIcon}` }, loader ? (react_1.default.createElement(Loader_1.Loader, { classNameLoader: classNameLoader })) : (react_1.default.createElement(react_1.default.Fragment, null, icon))),
            react_1.default.createElement("div", { className: `fenext-back-content ${classNameContent}` }, (0, fenextjs_functions_1._tValidate)(children, _t)))));
};
exports.Back = Back;
//# sourceMappingURL=index.js.map