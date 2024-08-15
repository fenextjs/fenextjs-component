"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Form = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const useNotification_1 = require("fenextjs-hook/cjs/useNotification");
const Request_1 = require("fenextjs-interface/cjs/Request");
const fenextjs_hook_1 = require("fenextjs-hook");
const Form = ({ id = "", data, disabled = true, children, className = "", ...props }) => {
    const { _t } = (0, fenextjs_hook_1.use_T)({ ...props });
    const { pop } = (0, useNotification_1.useNotification)({});
    const onSendForm = async () => {
        try {
            const result = await props?.onSubmit?.(data);
            pop({
                type: result?.type,
                message: _t(result?.message ?? ""),
            });
            if (result?.type == Request_1.RequestResultTypeProps.OK) {
                if (id != "") {
                    const w = window;
                    if (w?.dataLayer?.push) {
                        w.dataLayer?.push?.({
                            event: `form-${id}`,
                        });
                    }
                }
                props?.onAfterSubmit?.(result);
            }
        }
        catch (error) {
            pop({
                type: Request_1.RequestResultTypeProps.ERROR,
                message: _t(error?.message ?? error ?? ""),
            });
        }
    };
    const onSubmit = async (e) => {
        e.preventDefault();
        if (disabled) {
            return;
        }
        onSendForm();
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("form", { className: `fenext-form ${className}`, onSubmit: onSubmit }, _t(children))));
};
exports.Form = Form;
//# sourceMappingURL=index.js.map