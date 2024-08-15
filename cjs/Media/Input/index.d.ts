import React, { ReactNode } from "react";
import { ModalBaseBaseProps } from "../../Modal/Base";
import { ButtonProps } from "../../Button";
import { MediaPageProps } from "../Page";
import { ImgDataProps } from "fenextjs-interface/cjs/Img";
import { _TProps } from "fenextjs-interface";
export interface MediaInputBaseProps extends _TProps {
    titleView?: string;
    textView?: string;
    iconView?: ReactNode;
    defaultValue?: ImgDataProps[] | ImgDataProps;
    multiple?: boolean;
    onChange?: (data: ImgDataProps[] | ImgDataProps | undefined) => void;
    ButtonUploadProps?: Omit<ButtonProps, "onClick">;
    MediaPageProps?: Omit<MediaPageProps, "onChange" | "multiple" | "defaultValue">;
    ModalProps?: Pick<ModalBaseBaseProps, "type">;
}
export interface MediaInputClassProps {
    className?: string;
}
export interface MediaInputProps extends MediaInputBaseProps, MediaInputClassProps {
}
export declare const MediaInput: ({ className, titleView, textView, iconView, defaultValue, multiple, onChange, ButtonUploadProps, MediaPageProps, ModalProps, ...props }: MediaInputProps) => React.JSX.Element;
