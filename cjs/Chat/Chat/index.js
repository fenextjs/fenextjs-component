"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chat = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const User_1 = require("../User");
const Message_1 = require("../Message");
const FormSendMessage_1 = require("../FormSendMessage");
const Button_1 = require("../../Button");
const Text_1 = require("../../Text");
const Telegram_1 = require("fenextjs-svg/cjs/Telegram");
const Chat = ({ loader, empty = (react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement(Text_1.Text, null, "There is not messages yet"),
    react_1.default.createElement(Telegram_1.SvgTelegram, null))), customBack, chatUser, loaderChatUser, chatMessage, loaderChatMessage, chatFormSendMessage, loaderChatFormSendMessage, useBtnLoadMoreMssages = false, btnLoadMoreMessages = {
    children: "Load more messages",
}, fullPage = true, onScrollIfNewMessage = true, ...props }) => {
    const onActionAfterNewMessage = () => {
        setTimeout(() => {
            if (onScrollIfNewMessage) {
                window.scrollTo(0, document.body.scrollHeight);
            }
            props?.onActionAfterNewMessage?.();
        }, 100);
    };
    const [lastMessage, setLastMessage] = (0, react_1.useState)(undefined);
    const onLoadLastMessage = (0, react_1.useCallback)((newMessage) => {
        if (!lastMessage ||
            (lastMessage.createdAt?.getTime() ?? 0) <
                (newMessage.createdAt?.getTime() ?? 0)) {
            setLastMessage(newMessage);
            onActionAfterNewMessage();
        }
    }, [lastMessage]);
    (0, react_1.useEffect)(() => {
        if (chatMessage) {
            onLoadLastMessage([...chatMessage].sort((a, b) => (b.createdAt?.getTime() ?? 0) -
                (a.createdAt?.getTime() ?? 0))[0]);
        }
    }, [chatMessage]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: `fenext-chat fenext-chat-${fullPage ? "full-page" : ""}` },
            react_1.default.createElement("div", { className: "fenext-chat-contentTop" },
                customBack,
                [chatUser].flat(2).map((e, i) => {
                    return (react_1.default.createElement(react_1.default.Fragment, null,
                        react_1.default.createElement(User_1.ChatUser, { key: i, ...e })));
                }),
                (loader || loaderChatUser) &&
                    new Array(2).fill(react_1.default.createElement(User_1.ChatUser, { loader: true }))),
            react_1.default.createElement("div", { className: "fenext-chat-contentMessage" },
                loader || loaderChatMessage ? (new Array(2).fill(1).map((e, i) => {
                    const n = e * i;
                    return (react_1.default.createElement(react_1.default.Fragment, null,
                        react_1.default.createElement(Message_1.ChatMessage, { key: i, id: i, loader: true, right: n % 2 == 0 })));
                })) : (react_1.default.createElement(react_1.default.Fragment, null, useBtnLoadMoreMssages && (react_1.default.createElement("div", { className: "fenext-chat-contentBtnLoadMore" },
                    react_1.default.createElement(Button_1.Button, { ...btnLoadMoreMessages }))))),
                chatMessage.map((e) => {
                    return (react_1.default.createElement(react_1.default.Fragment, null,
                        react_1.default.createElement(Message_1.ChatMessage, { key: e.id, ...e })));
                }),
                !loader &&
                    !loaderChatMessage &&
                    chatMessage.length == 0 && (react_1.default.createElement("div", { className: "fenext-chat-empty" }, empty))),
            react_1.default.createElement("div", { className: "fenext-chat-contentForm" },
                react_1.default.createElement(FormSendMessage_1.ChatFormSendMessage, { loader: loader || loaderChatFormSendMessage, ...chatFormSendMessage })))));
};
exports.Chat = Chat;
//# sourceMappingURL=index.js.map