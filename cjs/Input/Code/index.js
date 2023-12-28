"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputCode = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const Text_1 = require("../Text");
const fenextjs_hook_1 = require("fenextjs-hook");
const InputCode = ({ ...props }) => {
    const { data, setData } = (0, fenextjs_hook_1.useData)(props?.defaultValue ?? "", {
        onChangeDataAfter: props?.onChange,
    });
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Text_1.InputText, { ...props, onChange: setData, className: `${props?.className} fenext-input-code`, onKeyDown: ({ target }) => {
                const end = target.value.length;
                target.setSelectionRange(end, end);
                target.focus();
            }, extraInContentInput: react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("div", { className: "fenext-input-code-content-items" }, new Array(props?.maxLength ?? 1)
                    ?.fill(1)
                    .map((e, i) => {
                    return (react_1.default.createElement(react_1.default.Fragment, null,
                        react_1.default.createElement("div", { key: i * e, className: `fenext-input-code-item fenext-input-code-item-${data.length == i
                                ? "current"
                                : ""}` },
                            !data || data == ""
                                ? props?.placeholder?.[i] ??
                                    ""
                                : "",
                            data?.[i] ?? "")));
                }))) })));
};
exports.InputCode = InputCode;
//# sourceMappingURL=index.js.map