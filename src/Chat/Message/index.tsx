import { parseDateToText } from "fenextjs-functions/cjs/parse/Date";
import { Img, ImgProps } from "../../Img";
import { Text } from "../../Text";
import React, { ReactNode } from "react";
import { UserProps } from "fenextjs-interface/cjs/User";
import { FenextImgUserPlaceholder } from "fenextjs-img-placeholder";

export interface ChatMessageProps {
    id: string | number;
    loader?: boolean;
    right?: boolean;
    account?: Partial<UserProps>;
    message?: ReactNode;
    createdAt?: Date;
    view?: boolean;
    imgProps?: Partial<ImgProps>;
}
export const ChatMessage = ({
    message,
    createdAt,
    account,

    right = false,
    view = false,
    loader,
    imgProps = {
        imgIf404: FenextImgUserPlaceholder,
    },
}: ChatMessageProps) => {
    return (
        <>
            <div
                className={`
                    fenext-chat-message
                    fenext-chat-message-${right ? "right" : ""}
                    fenext-chat-message-${view ? "viewed" : ""}
                `}
            >
                <div className="fenext-chat-message-img">
                    <Img
                        loader={loader}
                        src=""
                        {...account?.img}
                        {...imgProps}
                    />
                </div>
                <div className="fenext-chat-message-info">
                    <div className="fenext-chat-message-top">
                        <Text
                            loader={loader}
                            nLineLoader={1}
                            className="fenext-chat-message-name"
                        >
                            {account?.name}
                        </Text>
                        <Text
                            loader={loader}
                            nLineLoader={1}
                            className="fenext-chat-message-createdAt"
                        >
                            {createdAt && (
                                <>
                                    {parseDateToText({
                                        date: createdAt,
                                        type: "date",
                                    })}
                                    {", "}
                                    {parseDateToText({
                                        date: createdAt,
                                        type: "time",
                                    })}
                                </>
                            )}
                        </Text>
                    </div>
                    <Text
                        loader={loader}
                        className="fenext-chat-message-message"
                    >
                        {message}
                    </Text>
                </div>
            </div>
        </>
    );
};
