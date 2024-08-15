import React, { ReactNode } from "react";
import { ImgDataProps } from "fenextjs-interface/cjs/Img";
import { InputUploadProps } from "../../Input/Upload";
import { ButtonProps } from "../../Button";
import { _TProps } from "fenextjs-interface";
export interface MediaPageBaseProps extends _TProps {
    defaultValue?: ImgDataProps[] | ImgDataProps;
    disabledSelectImg?: boolean;
    images?: ImgDataProps[];
    loaderImages?: boolean;
    multiple?: boolean;
    isPage?: boolean;
    onRenderImg?: (data: ImgDataProps) => ReactNode;
    onChange?: (data: ImgDataProps[] | ImgDataProps | undefined) => void;
    onUploadImg?: (data: ImgDataProps) => void;
    onDeleteImg?: (data: ImgDataProps) => void;
    onAcepte?: (data: ImgDataProps[] | ImgDataProps) => void;
    HeaderPage?: ReactNode;
    ButtonAcceptProps?: Omit<ButtonProps, "onClick">;
    ButtonCancelProps?: Omit<ButtonProps, "onClick">;
    InputUploadProps?: Omit<InputUploadProps, "onChange" | "defaultValue" | "onChangeProgress" | "onUploadFile" | "clearAfterUpload">;
    extraContentImgs?: ReactNode;
}
export interface MediaPageClassProps {
    className?: string;
}
export interface MediaPageProps extends MediaPageBaseProps, MediaPageClassProps {
}
export declare const MediaPage: ({ className, multiple, onChange, onUploadImg, onDeleteImg, onAcepte, HeaderPage, defaultValue, images, loaderImages, disabledSelectImg, InputUploadProps, ButtonAcceptProps, ButtonCancelProps, isPage, extraContentImgs, onRenderImg, ...props }: MediaPageProps) => React.JSX.Element;
