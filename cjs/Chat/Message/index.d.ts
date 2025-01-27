import { ImgProps } from "../../Img";
import React, { ReactNode } from "react";
import { UserProps } from "fenextjs-interface/cjs/User";
import { FileProps } from "fenextjs-interface";
export interface ChatMessageProps {
    id: string | number;
    loader?: boolean;
    right?: boolean;
    account?: Partial<UserProps>;
    message?: ReactNode;
    file?: FileProps;
    createdAt?: Date;
    view?: boolean;
    imgProps?: Partial<ImgProps>;
}
export declare const ChatMessage: ({ message, file, createdAt, account, right, view, loader, imgProps, }: ChatMessageProps) => React.JSX.Element;
