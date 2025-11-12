"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatMessage = void 0;
const tslib_1 = require("tslib");
const Date_1 = require("fenextjs-functions/cjs/parse/Date");
const Img_1 = require("../../Img");
const Text_1 = require("../../Text");
const react_1 = tslib_1.__importDefault(require("react"));
const fenextjs_img_placeholder_1 = require("fenextjs-img-placeholder");
const Upload_1 = require("../../Input/Upload");
const ChatMessage = ({ message, file, createdAt, account, right = false, view = false, loader, imgProps = {
    imgIf404: fenextjs_img_placeholder_1.FenextImgUserPlaceholder,
}, }) => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: `
                    fenext-chat-message
                    fenext-chat-message-${right ? "right" : ""}
                    fenext-chat-message-${view ? "viewed" : ""}
                ` },
            react_1.default.createElement("div", { className: "fenext-chat-message-img" },
                react_1.default.createElement(Img_1.Img, { loader: loader, src: "", ...account?.img, ...imgProps })),
            react_1.default.createElement("div", { className: "fenext-chat-message-info" },
                react_1.default.createElement("div", { className: "fenext-chat-message-top" },
                    react_1.default.createElement(Text_1.Text, { loader: loader, nLineLoader: 1, className: "fenext-chat-message-name" }, account?.name),
                    react_1.default.createElement(Text_1.Text, { loader: loader, nLineLoader: 1, className: "fenext-chat-message-createdAt" }, createdAt && (react_1.default.createElement(react_1.default.Fragment, null,
                        (0, Date_1.parseDateToText)({
                            date: createdAt,
                            type: "date",
                        }),
                        ", ",
                        (0, Date_1.parseDateToText)({
                            date: createdAt,
                            type: "time",
                        }))))),
                react_1.default.createElement(Text_1.Text, { loader: loader, className: "fenext-chat-message-message" },
                    message,
                    react_1.default.createElement("br", null)),
                file && (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement("div", { className: "fenext-chat-message-file" },
                        react_1.default.createElement(Upload_1.InputUpload, { defaultValue: file, disabled: true }))))))));
};
exports.ChatMessage = ChatMessage;
//# sourceMappingURL=index.js.map