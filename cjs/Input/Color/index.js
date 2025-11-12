"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputColor = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const fenextjs_hook_1 = require("fenextjs-hook");
const InputColor = ({ className = "", defaultValue, value, onChange, disabled, }) => {
    const { data: data_, setData } = (0, fenextjs_hook_1.useData)(defaultValue ?? "", {
        onChangeDataAfter: onChange,
    });
    const data = (0, react_1.useMemo)(() => value ?? data_, [value, data_]);
    return (react_1.default.createElement("label", { className: `fenext-input-color ${className}` },
        react_1.default.createElement("input", { type: "color", className: "fenext-input-color-input", value: data, onChange: (e) => {
                setData(e.target.value);
            }, disabled: disabled })));
};
exports.InputColor = InputColor;
//# sourceMappingURL=index.js.map