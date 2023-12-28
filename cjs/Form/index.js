"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Form = void 0;
const tslib_1 = require("tslib");
const Yup = tslib_1.__importStar(require("yup"));
const react_1 = tslib_1.__importStar(require("react"));
const env_log_1 = require("fenextjs-functions/cjs/env_log");
const useNotification_1 = require("fenextjs-hook/cjs/useNotification");
const Request_1 = require("fenextjs-interface/cjs/Request");
const fenextjs_functions_1 = require("fenextjs-functions");
const Form = ({ id = "", data, disabled = true, onChangeDisable, onChangeLoader, children, yup = Yup.object().shape({}), validateAfterYup, className = "", _t = (e) => e, ...props }) => {
    const { pop } = (0, useNotification_1.useNotification)({});
    const onSendForm = async () => {
        onChangeLoader?.(true);
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
        onChangeLoader?.(false);
    };
    const onSubmit = async (e) => {
        e.preventDefault();
        if (disabled) {
            return;
        }
        onValidateData(onSendForm, (error) => {
            pop({
                type: Request_1.RequestResultTypeProps.ERROR,
                message: _t(error),
            });
        });
    };
    const onValidateData = (onOk, onError) => {
        yup.validate(data)
            .then(async function () {
            try {
                if (validateAfterYup) {
                    await validateAfterYup(data);
                }
                onChangeDisable?.(false);
            }
            catch (error) {
                onChangeDisable?.(true);
                (0, env_log_1.env_log)(error, {
                    name: "error",
                });
                onError?.(error.message);
                return;
            }
            onOk?.();
        })
            .catch(function (error) {
            onChangeDisable?.(true);
            (0, env_log_1.env_log)(error, {
                name: "onValidateData error",
            });
            onError?.(error.message);
            return;
        });
    };
    (0, react_1.useEffect)(() => {
        onValidateData(null, null);
    }, [data, yup]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("form", { className: `fenext-form ${className}`, onSubmit: onSubmit }, (0, fenextjs_functions_1._tValidate)(children, _t))));
};
exports.Form = Form;
exports.default = exports.Form;
//# sourceMappingURL=index.js.map