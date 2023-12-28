import { ImgProps } from "../../Img";
import { UserProps } from "fenextjs-interface/cjs/User";
import React, { ReactNode } from "react";
export interface ChatUserProps extends Partial<UserProps> {
    loader?: boolean;
    imgProps?: Partial<ImgProps>;
    extraData?: ReactNode;
}
export declare const ChatUser: ({ name, img, role, imgProps, loader, extraData, }: ChatUserProps) => React.JSX.Element;
