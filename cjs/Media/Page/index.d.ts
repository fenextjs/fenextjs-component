import React, { ReactNode } from "react";
import { ImgDataProps } from "fenextjs-interface/cjs/Img";
import { InputUploadProps } from "../../Input/Upload";
import { ButtonProps } from "../../Button";
import { _TProps } from "fenextjs-interface";
/**
 * Properties for the base MediaPage component.
 */
export interface MediaPageBaseProps extends _TProps {
    /**
     * The defaultValue for the component.
     */
    defaultValue?: ImgDataProps[] | ImgDataProps;
    /**
     * The disabledSelectImg for the component.
     */
    disabledSelectImg?: boolean;
    /**
     * The images for the component.
     */
    images?: ImgDataProps[];
    /**
     * The loaderImages for the component.
     */
    loaderImages?: boolean;
    /**
     * The multiple for the component.
     */
    multiple?: boolean;
    /**
     * The isPage for the component.
     */
    isPage?: boolean;
    /**
     * The onChange for the component.
     */
    onRenderImg?: (data: ImgDataProps) => ReactNode;
    /**
     * The onChange for the component.
     */
    onChange?: (data: ImgDataProps[] | ImgDataProps | undefined) => void;
    /**
     * The onUploadImg for the component.
     */
    onUploadImg?: (data: ImgDataProps) => void;
    /**
     * The onDeleteImg for the component.
     */
    onDeleteImg?: (data: ImgDataProps) => void;
    /**
     * The onAcepte for the component.
     */
    onAcepte?: (data: ImgDataProps[] | ImgDataProps) => void;
    /**
     * The HeaderPage for the component.
     */
    HeaderPage?: ReactNode;
    /**
     * The ButtonAcceptProps for the component.
     */
    ButtonAcceptProps?: Omit<ButtonProps, "onClick">;
    /**
     * The ButtonCancelProps for the component.
     */
    ButtonCancelProps?: Omit<ButtonProps, "onClick">;
    /**
     * The HeaderPage for the component.
     */
    InputUploadProps?: Omit<InputUploadProps, "onChange" | "defaultValue" | "onChangeProgress" | "onUploadFile" | "clearAfterUpload">;
    /**
     * The extraContentImgs for the component.
     */
    extraContentImgs?: ReactNode;
}
/**
 * Properties for the class of the MediaPage component.
 */
export interface MediaPageClassProps {
    /**
     * The class name for the component.
     */
    className?: string;
}
/**
 * Properties for the MediaPage component.
 */
export interface MediaPageProps extends MediaPageBaseProps, MediaPageClassProps {
}
export declare const MediaPage: ({ className, multiple, onChange, onUploadImg, onDeleteImg, onAcepte, HeaderPage, defaultValue, images, loaderImages, disabledSelectImg, InputUploadProps, ButtonAcceptProps, ButtonCancelProps, isPage, extraContentImgs, onRenderImg, _t, }: MediaPageProps) => React.JSX.Element;
