"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Back = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const fenextjs_hook_1 = require("fenextjs-hook");
const Loader_1 = require("../Loader");
const PaginationPre_1 = require("fenextjs-svg/cjs/PaginationPre");
const fenextjs_hook_2 = require("fenextjs-hook");
const Back = ({ className = "", classNameLoader = "", classNameDisabled = "", classNameIcon = "", classNameContent = "", children = "Back", loader = false, disabled = false, onClick = undefined, icon = react_1.default.createElement(PaginationPre_1.SvgPaginationPre, null), typeOnBack = "history", link = "", minLenght = 2, useHistoryMinLenght = false, onValidateRuteBack, useNextRouter, useRouterCustom = fenextjs_hook_1.useRouter, ...props }) => {
    const { onBack: onBackHistory } = (0, fenextjs_hook_2.useHistory)({});
    const { _t } = (0, fenextjs_hook_2.use_T)({ ...props });
    const router = useRouterCustom({ useNextRouter });
    const onBack = () => {
        if (loader || disabled) {
            return;
        }
        onClick?.();
        const actions = {
            "fenextjs-history": () => {
                onBackHistory({
                    onValidateRuteBack,
                });
            },
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
            react_1.default.createElement("div", { className: `fenext-back-content ${classNameContent}` }, _t(children)))));
};
exports.Back = Back;
//# sourceMappingURL=index.js.map