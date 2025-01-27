import React, { ReactNode } from "react";
import { _TProps, FileProps } from "fenextjs-interface";
import { InputFileProps } from "../../Input/File";
export interface ChatFormSendMessageDataProps {
    message?: string;
    file?: FileProps;
}
export interface ChatFormSendMessageProps extends _TProps {
    onSubmit?: (data: ChatFormSendMessageDataProps) => Promise<void>;
    loader?: boolean;
    useSubmitInEnter?: boolean;
    btnChildren?: ReactNode;
    btnFileChildren?: ReactNode;
    InputFileProps?: Omit<InputFileProps, "onChange">;
    placeholderMessage?: string;
}
export declare const ChatFormSendMessage: ({ useSubmitInEnter, btnChildren, btnFileChildren, placeholderMessage, InputFileProps, ...props }: ChatFormSendMessageProps) => React.JSX.Element;
