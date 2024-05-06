"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tab = exports.parseTabCount = void 0;
const tslib_1 = require("tslib");
const fenextjs_functions_1 = require("fenextjs-functions");
const react_1 = tslib_1.__importStar(require("react"));
const parseTabCount = (d) => {
    if (!d.useCount) {
        return d;
    }
    return {
        ...d,
        head: (react_1.default.createElement(react_1.default.Fragment, null,
            ((d.count ?? 0) > 1 ? d.plural : d.singular) ?? d.head,
            " (",
            (0, fenextjs_functions_1.parseNumberCount)(d.count ?? 0),
            ")")),
    };
};
exports.parseTabCount = parseTabCount;
/**
 * Tab component that displays a set of tabs with content.
 * @param className CSS class name for the component.
 * @param classNameHead CSS class name for the tab header.
 * @param classNameHeadItem CSS class name for each item in the tab header.
 * @param classNameHeadItemActive CSS class name for the active item in the tab header.
 * @param classNameBody CSS class name for the tab body.
 * @param classNameBodyItem CSS class name for each item in the tab body.
 * @param items Array of `TabItemProps` objects representing the tabs.
 * @param defaultTab Index of the tab to be shown by default.
 */
const Tab = ({ className = "", classNameContentHead = "", classNameHead = "", classNameHeadItem = "", classNameHeadItemActive = "", classNameBody = "", classNameBodyItem = "", classNameContentAfterHead = "", classNameContentBeforeHead = "", items = [], defaultTab = 0, activeTab = undefined, afterTabs = undefined, beforeTabs = undefined, onChange, tabScrollActive = false, validataTabOneHiddenHeader = true, _t, useCount = false, }) => {
    const [_tabSelect, setTabSelect] = (0, react_1.useState)(Math.max(0, Math.min(defaultTab, items.length - 1)));
    const tabSelect = (0, react_1.useMemo)(() => activeTab ?? _tabSelect, [activeTab, _tabSelect]);
    const CHead = (0, react_1.useMemo)(() => {
        return items.map((item, i) => {
            const ITEM = (0, exports.parseTabCount)({
                ...item,
                useCount: item?.useCount ?? useCount ?? false,
            });
            return (react_1.default.createElement("div", { key: i, className: `fenext-tab-head-item ${classNameHeadItem} ${i == tabSelect
                    ? `fenext-tab-head-item-active ${classNameHeadItemActive}`
                    : ""} fenext-tab-head-item-id-${ITEM.id}`, onClick: () => {
                    setTabSelect(i);
                    onChange?.(ITEM);
                } }, (0, fenextjs_functions_1._tValidate)(ITEM.head, _t)));
        });
    }, [tabSelect, items, useCount]);
    const CBody = (0, react_1.useMemo)(() => {
        if (tabScrollActive) {
            return (react_1.default.createElement(react_1.default.Fragment, null, items.map((item, i) => {
                return (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement("div", { className: `fenext-tab-body-item fenext-tab-body-item-${i == tabSelect ? "active" : ""} ${classNameBodyItem}` }, (0, fenextjs_functions_1._tValidate)(item.body, _t))));
            })));
        }
        const item = items[tabSelect];
        return (react_1.default.createElement("div", { className: `fenext-tab-body-item ${classNameBodyItem}` }, item.body));
    }, [tabSelect, items, tabScrollActive]);
    const BEFORETAB = (0, react_1.useMemo)(() => {
        let b = beforeTabs;
        const item = items[tabSelect];
        if (item.beforeTab) {
            b = item.beforeTab;
        }
        return (react_1.default.createElement(react_1.default.Fragment, null, b && (react_1.default.createElement("div", { className: `fenext-tab-content-head-before ${classNameContentBeforeHead}` }, (0, fenextjs_functions_1._tValidate)(b, _t)))));
    }, [beforeTabs, classNameContentBeforeHead, tabSelect, items, _t]);
    const AFTERTAB = (0, react_1.useMemo)(() => {
        let a = afterTabs;
        const item = items[tabSelect];
        if (item.beforeTab) {
            a = item.afterTab;
        }
        return (react_1.default.createElement(react_1.default.Fragment, null, a && (react_1.default.createElement("div", { className: `fenext-tab-content-head-after ${classNameContentAfterHead}` }, (0, fenextjs_functions_1._tValidate)(a, _t)))));
    }, [afterTabs, classNameContentAfterHead, tabSelect, items, _t]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: `fenext-tab fenext-tab-${tabScrollActive ? "scroll-active" : ""} 
                fenext-tab-${validataTabOneHiddenHeader ? "validate-one-tab" : ""}
                
                ${className}` },
            react_1.default.createElement("div", { className: `fenext-tab-content-head ${classNameContentHead}` },
                BEFORETAB,
                react_1.default.createElement("div", { className: `fenext-tab-head ${classNameHead}` }, CHead),
                AFTERTAB),
            react_1.default.createElement("div", { className: `fenext-tab-body ${classNameBody}` }, CBody))));
};
exports.Tab = Tab;
//# sourceMappingURL=index.js.map