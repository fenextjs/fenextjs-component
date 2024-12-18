"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputRadio = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const Check_1 = require("fenextjs-svg/cjs/Check");
const env_log_1 = require("fenextjs-functions/cjs/env_log");
const fenextjs_hook_1 = require("fenextjs-hook");
const InputRadio = ({ classNameContent = "", classNameLabel = "", classNameLabelActive = "", classNameLabelInactive = "", classNameText = "", classNameContentRadio = "", classNameContentRadioActive = "", classNameContentRadioInactive = "", classNameRadio = "", classNameRadioActive = "", classNameRadioInactive = "", labelPosition = "right", name = "", onChange = (e) => {
    (0, env_log_1.env_log)(e, {
        name: "input radio onchange",
    });
}, onChangeData, defaultValue = undefined, value = undefined, disabled = false, icon = react_1.default.createElement(Check_1.SvgCheck, null), items = [], ...props }) => {
    const { _t } = (0, fenextjs_hook_1.use_T)({ ...props });
    const [checked, setChecked] = (0, react_1.useState)(defaultValue);
    const onChecked = (i) => () => {
        if (disabled) {
            return;
        }
        setChecked(i);
        onChange(i);
        onChangeData?.(i?.data);
    };
    return (react_1.default.createElement("div", { className: `fenext-content-radio ${classNameContent}` }, items.map((item, i) => {
        const isCheck = (value?.id ?? checked?.id) == item.id;
        return (react_1.default.createElement("label", { key: i, className: `fenext-input-radio ${labelPosition} ${classNameLabel}  ${isCheck
                ? classNameLabelActive
                : classNameLabelInactive}`, onClick: onChecked(item) },
            react_1.default.createElement("input", { type: "radio", name: name, defaultChecked: item?.id == defaultValue?.id, className: `fenext-input-radio-input fenext-input-radio-input-id-${item.id}` }),
            react_1.default.createElement("span", { className: `fenext-input-radio-box ${classNameContentRadio} ${isCheck
                    ? classNameContentRadioActive
                    : classNameContentRadioInactive}` },
                react_1.default.createElement("span", { className: `
                                fenext-input-radio-box-icon
                                ${classNameRadio} ${isCheck
                        ? classNameRadioActive
                        : classNameRadioInactive}` }, isCheck && icon)),
            react_1.default.createElement("span", { className: `fenext-input-radio-text ${classNameText}` }, _t(item.label))));
    })));
};
exports.InputRadio = InputRadio;
//# sourceMappingURL=index.js.map