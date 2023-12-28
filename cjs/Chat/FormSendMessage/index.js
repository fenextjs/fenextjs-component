"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatFormSendMessage = void 0;
const tslib_1 = require("tslib");
const Button_1 = require("../../Button");
const Text_1 = require("../../Input/Text");
const react_1 = tslib_1.__importStar(require("react"));
const useData_1 = require("fenextjs-hook/cjs/useData");
const fenextjs_functions_1 = require("fenextjs-functions");
const ChatFormSendMessage = ({ useSubmitInEnter = true, btnChildren = "Send", placeholderMessage = "Message", _t, ...props }) => {
    const [__key, set__key] = (0, react_1.useState)(0);
    const [loader, setLoader] = (0, react_1.useState)(false);
    const { data, onChangeData } = (0, useData_1.useData)({
        message: "",
    });
    const onSubmit = async () => {
        setLoader(true);
        try {
            await props?.onSubmit?.(data);
        }
        finally {
            setLoader(false);
            set__key((a) => a + 1);
            onChangeData("message")("");
        }
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("form", { className: "fenext-chat-form-send-message", key: __key, onSubmit: onSubmit },
            react_1.default.createElement(Text_1.InputText, { type: "textarea", placeholder: (0, fenextjs_functions_1._tValidate)(placeholderMessage, _t), className: "fenext-chat-form-send-message-input-message", onChange: onChangeData("message"), value: data.message, onEnter: () => {
                    if (!data.message || data.message == "") {
                        return;
                    }
                    if (useSubmitInEnter) {
                        onSubmit();
                    }
                }, disabled: loader || props?.loader }),
            react_1.default.createElement(Button_1.Button, { loader: loader || props?.loader, disabled: !data.message || data.message == "" }, (0, fenextjs_functions_1._tValidate)(btnChildren, _t)))));
};
exports.ChatFormSendMessage = ChatFormSendMessage;
//# sourceMappingURL=index.js.map