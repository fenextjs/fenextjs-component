import React from "react";
import { InputFileBaseProps } from "../File";
import { FileProps, FileStatus } from "fenextjs-interface/cjs/File";
export type InputFileStatusContentByStatus = {
    [id in FileStatus]?: {
        /**
         * The Title for the component.
         */
        title?: React.ReactNode;
        /**
         * The Icon for the component.
         */
        icon?: React.ReactNode;
        /**
         * The Tag for the component.
         */
        tag?: React.ReactNode;
    };
};
/**
 * Properties for the InputFileStatus component.
 */
export interface InputFileStatusProps extends Omit<InputFileBaseProps, "onUploadFile"> {
    /**
     * The Title for the component.
     */
    title?: React.ReactNode;
    /**
     * The Text for the component.
     */
    text?: React.ReactNode;
    /**
     * The Icon for the component.
     */
    icon?: React.ReactNode;
    /**
     * The Buton for the component.
     */
    btn?: React.ReactNode;
    /**
     * The Icon for the component.
     */
    iconLoader?: React.ReactNode;
    /**
     * className for the component.
     */
    className?: string;
    onUploadFile: (data: FileProps) => Promise<FileProps>;
    contentByStatus?: InputFileStatusContentByStatus;
}
export declare const InputFileStatus: ({ className, btn, icon, text, title, defaultValue, onChange, iconLoader, _t, onUploadFile, contentByStatus: contentByStatusProps, ...props }: InputFileStatusProps) => React.JSX.Element;
