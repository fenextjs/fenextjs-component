"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputSelectOption = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const trash_1 = require("fenextjs-svg/cjs/trash");
const fenextjs_functions_1 = require("fenextjs-functions");
const InputSelectOption = ({ classNameOption = "", classNameOptionImg = "", classNameOptionDelete = "", id, text, img = undefined, icon = undefined, children, type = "div", onClick, onDelete, disabled = false, selected = false, isBtn = false, _t = (e) => e, data = {}, iconDelete = react_1.default.createElement(trash_1.Trash, null), }) => {
    const TAG = type == "option" ? "option" : "div";
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(TAG, { key: id, id: `${id}`, className: `fenext-select-option ${isBtn ? "fenext-select-option-btn" : ""} ${classNameOption} fenext-select-option-type-${type}`, onClick: () => {
                onClick?.({ id, text, children, data, img });
            }, disabled: disabled, selected: selected, value: text },
            img ? (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("img", { src: img, alt: text, className: `fenext-select-option-img ${classNameOptionImg}` }))) : (react_1.default.createElement(react_1.default.Fragment, null)),
            icon ? (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("div", { className: `fenext-select-option-icon` }, icon))) : (react_1.default.createElement(react_1.default.Fragment, null)),
            (0, fenextjs_functions_1._tValidate)(TAG == "option" ? text : children ?? text, _t),
            type == "multiple" ? (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("span", { className: `fenext-select-option-delete ${classNameOptionDelete} `, onClick: () => {
                        onDelete?.({ id, text, children, data, img });
                    } }, iconDelete))) : (react_1.default.createElement(react_1.default.Fragment, null)))));
};
exports.InputSelectOption = InputSelectOption;
//# sourceMappingURL=index.js.map