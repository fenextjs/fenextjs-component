"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatUser = void 0;
const tslib_1 = require("tslib");
const fenextjs_img_placeholder_1 = require("fenextjs-img-placeholder");
const Img_1 = require("../../Img");
const Text_1 = require("../../Text");
const react_1 = tslib_1.__importDefault(require("react"));
const ChatUser = ({ name, img, role, imgProps = {
    imgIf404: fenextjs_img_placeholder_1.FenextImgUserPlaceholder,
}, loader, extraData, }) => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: `fenext-chat-user fenext-chat-user-${role}` },
            react_1.default.createElement(Img_1.Img, { loader: loader, src: "", ...img, ...imgProps, className: `fenext-chat-user-img ${imgProps?.className ?? ""}` }),
            react_1.default.createElement("div", { className: "fenext-chat-user-content" },
                react_1.default.createElement(Text_1.Text, { className: "fenext-chat-user-text", loader: loader, nLineLoader: 1 }, name),
                extraData))));
};
exports.ChatUser = ChatUser;
