"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatFormSendMessage = void 0;
const tslib_1 = require("tslib");
const Button_1 = require("../../Button");
const Text_1 = require("../../Input/Text");
const react_1 = tslib_1.__importStar(require("react"));
const useData_1 = require("fenextjs-hook/cjs/useData");
const fenextjs_hook_1 = require("fenextjs-hook");
const fenextjs_svg_1 = require("fenextjs-svg");
const File_1 = require("../../Input/File");
const ChatFormSendMessage = ({ useSubmitInEnter = true, btnChildren = react_1.default.createElement(fenextjs_svg_1.SvgSend, null), btnFileChildren = react_1.default.createElement(fenextjs_svg_1.SvgPaperClip, null), placeholderMessage = "Message", InputFileProps = {}, ...props }) => {
    const { _t } = (0, fenextjs_hook_1.use_T)({ ...props });
    const ref = (0, react_1.useRef)(null);
    const [__key, set__key] = (0, react_1.useState)(0);
    const { data, setData, onChangeData, loaderSubmit, onSubmitData } = (0, useData_1.useData)({}, {
        onSubmitData: async (data) => {
            try {
                await props?.onSubmit?.(data);
            }
            finally {
                set__key((a) => a + 1);
                setData({});
                const label = ref?.current?.querySelector?.(`.fenext-chat-form-send-message-label`);
                const chat = document.querySelector(".fenext-chat");
                setTimeout(function () {
                    label?.click?.();
                }, 0);
                setTimeout(function () {
                    chat?.scrollTo?.(0, chat?.scrollTop + 99990000009);
                }, 10);
            }
        },
    });
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: "fenext-chat-form-send-message", ref: ref },
            react_1.default.createElement(Text_1.InputText, { classNameLabel: "fenext-chat-form-send-message-label", type: "textarea", placeholder: _t(placeholderMessage), className: "fenext-chat-form-send-message-input-message", onChange: onChangeData("message"), value: data.message ?? "", onEnter: () => {
                    if (!data.message || data.message == "") {
                        return;
                    }
                    if (useSubmitInEnter) {
                        onSubmitData();
                    }
                }, disabled: loaderSubmit || props?.loader }),
            react_1.default.createElement("div", { className: "fenext-chat-form-send-message-content-btn" },
                react_1.default.createElement(Button_1.Button, { loader: loaderSubmit || props?.loader, disabled: !data.message || data.message == "", _t: _t, size: "extra-small" }, btnChildren),
                react_1.default.createElement(File_1.InputFile, { ...InputFileProps, key: __key, onChange: (e) => {
                        onSubmitData({
                            data: {
                                ...data,
                                file: e,
                            },
                        });
                    } },
                    react_1.default.createElement(Button_1.Button, { loader: loaderSubmit || props?.loader, _t: _t, size: "extra-small" }, btnFileChildren))))));
};
exports.ChatFormSendMessage = ChatFormSendMessage;
