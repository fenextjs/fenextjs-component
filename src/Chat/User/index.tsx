import { FenextImgUserPlaceholder } from "fenextjs-img-placeholder";
import { Img, ImgProps } from "../../Img";
import { Text } from "../../Text";
import { UserProps } from "fenextjs-interface/cjs/User";
import React, { ReactNode } from "react";

export interface ChatUserProps extends Partial<UserProps> {
    loader?: boolean;
    imgProps?: Partial<ImgProps>;
    extraData?: ReactNode;
}
export const ChatUser = ({
    name,
    img,
    role,

    imgProps = {
        imgIf404: FenextImgUserPlaceholder,
    },
    loader,
    extraData,
}: ChatUserProps) => {
    return (
        <>
            <div className={`fenext-chat-user fenext-chat-user-${role}`}>
                <Img
                    loader={loader}
                    src=""
                    {...img}
                    {...imgProps}
                    className={`fenext-chat-user-img ${
                        imgProps?.className ?? ""
                    }`}
                />
                <div className="fenext-chat-user-content">
                    <Text
                        className="fenext-chat-user-text"
                        loader={loader}
                        nLineLoader={1}
                    >
                        {name}
                    </Text>
                    {extraData}
                </div>
            </div>
        </>
    );
};
