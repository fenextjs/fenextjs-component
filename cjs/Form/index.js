"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Form = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const fenextjs_hook_1 = require("fenextjs-hook");
const Form = ({ id = "", disabled = true, children, className = "", onSubmit = async () => { }, }) => {
    const { push } = (0, fenextjs_hook_1.useDataLayer)({});
    const onSendForm = async (e) => {
        e.preventDefault();
        if (disabled) {
            return;
        }
        try {
            await onSubmit?.();
            if (id != "") {
                push({
                    event: `form-${id}`,
                });
            }
        }
        catch (error) {
            error;
        }
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("form", { className: `fenext-form ${className}`, onSubmit: onSendForm }, children)));
};
exports.Form = Form;
//# sourceMappingURL=index.js.map