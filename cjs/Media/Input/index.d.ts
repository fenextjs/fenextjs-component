import React, { ReactNode } from "react";
import { ModalBaseBaseProps } from "../../Modal/Base";
import { ButtonProps } from "../../Button";
import { MediaPageProps } from "../Page";
import { ImgDataProps } from "fenextjs-interface/cjs/Img";
import { _TProps } from "fenextjs-interface";
/**
 * Properties for the base MediaInput component.
 */
export interface MediaInputBaseProps extends _TProps {
    /**
     * The titleView for the component.
     */
    titleView?: string;
    /**
     * The titleView for the component.
     */
    textView?: string;
    /**
     * The iconView for the component.
     */
    iconView?: ReactNode;
    /**
     * The defaultValue for the component.
     */
    defaultValue?: ImgDataProps[] | ImgDataProps;
    /**
     * The multiple for the component.
     */
    multiple?: boolean;
    /**
     * The onChange for the component.
     */
    onChange?: (data: ImgDataProps[] | ImgDataProps | undefined) => void;
    /**
     * The ButtonUploadProps for the component.
     */
    ButtonUploadProps?: Omit<ButtonProps, "onClick">;
    /**
     * The MediaPageProps for the component.
     */
    MediaPageProps?: Omit<MediaPageProps, "onChange" | "multiple" | "defaultValue">;
    /**
     * The ModalProps for the component.
     */
    ModalProps?: Pick<ModalBaseBaseProps, "type">;
}
/**
 * Properties for the class of the MediaInput component.
 */
export interface MediaInputClassProps {
    /**
     * The class name for the component.
     */
    className?: string;
}
/**
 * Properties for the MediaInput component.
 */
export interface MediaInputProps extends MediaInputBaseProps, MediaInputClassProps {
}
export declare const MediaInput: ({ className, titleView, textView, iconView, defaultValue, multiple, onChange, ButtonUploadProps, MediaPageProps, ModalProps, _t, }: MediaInputProps) => React.JSX.Element;
