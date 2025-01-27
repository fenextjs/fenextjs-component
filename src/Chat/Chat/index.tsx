import React, { ReactNode, useCallback, useEffect, useState } from "react";

import { ChatUser, ChatUserProps } from "../User";
import { ChatMessage, ChatMessageProps } from "../Message";
import {
    ChatFormSendMessage,
    ChatFormSendMessageProps,
} from "../FormSendMessage";
import { Button, ButtonProps } from "../../Button";
import { Text } from "../../Text";
import { SvgTelegram } from "fenextjs-svg/cjs/Telegram";

export interface ChatProps {
    loader?: boolean;
    useAccountOwner?: boolean;
    onScrollIfNewMessage?: boolean;
    onActionAfterNewMessage?: () => void;

    empty?: ReactNode;
    customBack?: ReactNode;

    chatUser: ChatUserProps | ChatUserProps[];
    loaderChatUser?: boolean;

    chatMessage: ChatMessageProps[];
    loaderChatMessage?: boolean;

    chatFormSendMessage: ChatFormSendMessageProps;
    loaderChatFormSendMessage?: boolean;

    useBtnLoadMoreMssages?: boolean;
    btnLoadMoreMessages?: ButtonProps;

    fullPage?: boolean;
}
export const Chat = ({
    loader,

    empty = (
        <>
            <Text>There is not messages yet</Text>
            <SvgTelegram />
        </>
    ),
    customBack,

    chatUser,
    loaderChatUser,

    chatMessage,
    loaderChatMessage,

    chatFormSendMessage,
    loaderChatFormSendMessage,

    useBtnLoadMoreMssages = false,
    btnLoadMoreMessages = {
        children: "Load more messages",
    },

    fullPage = true,

    onScrollIfNewMessage = true,
    ...props
}: ChatProps) => {
    const onActionAfterNewMessage = () => {
        setTimeout(() => {
            if (onScrollIfNewMessage) {
                window.scrollTo(0, document.body.scrollHeight);
            }
            props?.onActionAfterNewMessage?.();
        }, 100);
    };

    const [lastMessage, setLastMessage] = useState<
        ChatMessageProps | undefined
    >(undefined);

    const onLoadLastMessage = useCallback(
        (newMessage: ChatMessageProps) => {
            if (
                !lastMessage ||
                (lastMessage.createdAt?.getTime() ?? 0) <
                    (newMessage.createdAt?.getTime() ?? 0)
            ) {
                setLastMessage(newMessage);
                onActionAfterNewMessage();
            }
        },
        [lastMessage],
    );
    useEffect(() => {
        if (chatMessage) {
            onLoadLastMessage(
                [...chatMessage].sort(
                    (a, b) =>
                        (b.createdAt?.getTime() ?? 0) -
                        (a.createdAt?.getTime() ?? 0),
                )[0],
            );
        }
    }, [chatMessage]);

    console.log({chatMessage});
    

    return (
        <>
            <div
                className={`fenext-chat fenext-chat-${
                    fullPage ? "full-page" : ""
                }`}
            >
                <div className="fenext-chat-contentTop">
                    {customBack}

                    {[chatUser].flat(2).map((e, i) => {
                        return (
                            <>
                                <ChatUser key={i} {...e} />
                            </>
                        );
                    })}
                    {(loader || loaderChatUser) &&
                        new Array(2).fill(<ChatUser loader={true} />)}
                </div>
                <div className="fenext-chat-contentMessage">
                    {loader || loaderChatMessage ? (
                        new Array(2).fill(1).map((e, i) => {
                            const n = e * i;
                            return (
                                <>
                                    <ChatMessage
                                        key={i}
                                        id={i}
                                        loader={true}
                                        right={n % 2 == 0}
                                    />
                                </>
                            );
                        })
                    ) : (
                        <>
                            {useBtnLoadMoreMssages && (
                                <div className="fenext-chat-contentBtnLoadMore">
                                    <Button {...btnLoadMoreMessages} />
                                </div>
                            )}
                        </>
                    )}
                    {chatMessage.map((e) => {
                        return (
                            <>
                                <ChatMessage key={e.id} {...e} />
                            </>
                        );
                    })}
                    {!loader &&
                        !loaderChatMessage &&
                        chatMessage.length == 0 && (
                            <div className="fenext-chat-empty">{empty}</div>
                        )}
                </div>
                <div className="fenext-chat-contentForm">
                    <ChatFormSendMessage
                        loader={loader || loaderChatFormSendMessage}
                        {...chatFormSendMessage}
                    />
                </div>
            </div>
        </>
    );
};
