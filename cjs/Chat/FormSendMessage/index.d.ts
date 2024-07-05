import React, { ReactNode } from "react";
import { RequestProps, RequestResultProps } from "fenextjs-interface/cjs/Request";
import { _TProps } from "fenextjs-interface";
export interface ChatFormSendMessageDataProps {
    message: string;
}
export interface ChatFormSendMessageProps extends _TProps {
    onSubmit?: RequestProps<ChatFormSendMessageDataProps, RequestResultProps>;
    loader?: boolean;
    useSubmitInEnter?: boolean;
    btnChildren?: ReactNode;
    placeholderMessage?: string;
}
export declare const ChatFormSendMessage: ({ useSubmitInEnter, btnChildren, placeholderMessage, ...props }: ChatFormSendMessageProps) => React.JSX.Element;
