"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemMenu = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const link_1 = tslib_1.__importDefault(require("next/link"));
const router_1 = require("next/router");
const Simple_1 = require("../../Collapse/Simple");
const fenextjs_functions_1 = require("fenextjs-functions");
const arrowCollapse_1 = require("fenextjs-svg/cjs/arrowCollapse");
const ItemMenu = ({ className = "", classNameA = "", classNameIcon = "", classNameText = "", text, url, icon = react_1.default.createElement(react_1.default.Fragment, null), subItems = [], defaultActive = false, iconArrow = react_1.default.createElement(arrowCollapse_1.ArrowCollapse, null), _t, }) => {
    const router = (0, router_1.useRouter)();
    const urlInter = (0, react_1.useMemo)(() => {
        const nlLink = router?.asPath.split("/");
        const nlUrl = url.split("/");
        const common = nlLink.filter((x) => nlUrl.indexOf(x) !== -1);
        return common.length;
    }, [router?.asPath, url]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: `fenext-menu-item ${className}` },
            react_1.default.createElement(Simple_1.Collapse, { defaultActive: defaultActive, header: react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement(link_1.default, { href: url, legacyBehavior: true },
                        react_1.default.createElement("a", { className: `fenext-menu-item-a ${classNameA} ${router.asPath.indexOf(url) == 0
                                ? `fenext-menu-item-a-active fenext-menu-item-a-url-inter-${urlInter}`
                                : ""}`, ["data-url"]: url },
                            react_1.default.createElement("div", { className: `fenext-menu-item-a-icon ${classNameIcon}` }, icon),
                            react_1.default.createElement("div", { className: `fenext-menu-item-a-text ${classNameText}` }, (0, fenextjs_functions_1._tValidate)(text, _t))))), iconArrow: iconArrow }, subItems?.map((sub, i) => (react_1.default.createElement(exports.ItemMenu, { key: i, ...sub, _t: _t, iconArrow: sub?.iconArrow ?? iconArrow })))))));
};
exports.ItemMenu = ItemMenu;
//# sourceMappingURL=index.js.map