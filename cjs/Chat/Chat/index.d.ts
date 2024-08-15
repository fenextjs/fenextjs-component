import React, { ReactNode } from "react";
import { ChatUserProps } from "../User";
import { ChatMessageProps } from "../Message";
import { ChatFormSendMessageProps } from "../FormSendMessage";
import { ButtonProps } from "../../Button";
export interface ChatProps {
    loader?: boolean;
    useAccountOwner?: boolean;
    onScrollIfNewMessage?: boolean;
    onActionAfterNewMessage?: () => void;
    empty?: ReactNode;
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
export declare const Chat: ({ loader, empty, chatUser, loaderChatUser, chatMessage, loaderChatMessage, chatFormSendMessage, loaderChatFormSendMessage, useBtnLoadMoreMssages, btnLoadMoreMessages, fullPage, onScrollIfNewMessage, ...props }: ChatProps) => React.JSX.Element;
