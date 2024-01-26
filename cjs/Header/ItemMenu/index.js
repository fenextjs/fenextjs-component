"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemMenu = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const router_1 = require("next/router");
const Simple_1 = require("../../Collapse/Simple");
const fenextjs_functions_1 = require("fenextjs-functions");
const Arrow_1 = require("fenextjs-svg/cjs/Arrow");
const Link_1 = require("../../Link");
const ItemMenu = ({ className = "", classNameA = "", classNameIcon = "", classNameText = "", text, url, icon = react_1.default.createElement(react_1.default.Fragment, null), subItems = [], defaultActive = false, iconArrow = react_1.default.createElement(Arrow_1.Arrow, null), nameNumber = 1, typeCollapse, isLink = true, onClick, _t, }) => {
    const router = (0, router_1.useRouter)();
    const urlInter = (0, react_1.useMemo)(() => {
        const nlLink = router?.asPath.split("/");
        const nlUrl = url.split("/");
        const common = nlLink.filter((x) => nlUrl.indexOf(x) !== -1);
        return common.length;
    }, [router?.asPath, url]);
    const urlActive = (0, react_1.useCallback)((url) => {
        return (router?.asPath?.indexOf?.(url) == 0 &&
            ((router?.asPath != "/" && url != "/") ||
                (url == "/" && router?.asPath == "/")));
    }, [router?.asPath]);
    const subItemsActive = (0, react_1.useCallback)((sub) => {
        return sub?.some((e) => {
            return (urlActive(e?.url) ||
                (e?.subItems && subItemsActive(e?.subItems)));
        });
    }, [router?.asPath]);
    const contentSubItemAtive = (0, react_1.useMemo)(() => subItemsActive(subItems), [subItems, router?.asPath]);
    const Tag = isLink ? Link_1.Link : "div";
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: `fenext-menu-item ${className}` },
            react_1.default.createElement(Simple_1.Collapse, { key: router?.asPath ?? "", name: `fenext-menu-item-${nameNumber}`, defaultActive: defaultActive || contentSubItemAtive, type: typeCollapse, header: react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement(Tag, { href: url, className: `fenext-menu-item-a ${classNameA} ${urlActive(url)
                            ? `fenext-menu-item-a-active fenext-menu-item-a-url-inter-${urlInter}`
                            : ""}`, "data-url": url, onClick: onClick },
                        react_1.default.createElement("div", { className: `fenext-menu-item-a-icon ${classNameIcon}` }, icon),
                        react_1.default.createElement("div", { className: `fenext-menu-item-a-text ${classNameText}` }, (0, fenextjs_functions_1._tValidate)(text, _t)))), iconArrow: iconArrow }, subItems?.map((sub, i) => (react_1.default.createElement(exports.ItemMenu, { key: i, ...sub, _t: _t, iconArrow: sub?.iconArrow ?? iconArrow, nameNumber: nameNumber + 1 })))))));
};
exports.ItemMenu = ItemMenu;
//# sourceMappingURL=index.js.map