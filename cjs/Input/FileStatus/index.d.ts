import React from "react";
import { InputFileBaseProps } from "../File";
import { FileProps, FileStatus } from "fenextjs-interface/cjs/File";
export type InputFileStatusContentByStatus = {
    [id in FileStatus]?: {
        title?: React.ReactNode;
        icon?: React.ReactNode;
        tag?: React.ReactNode;
    };
};
export interface InputFileStatusProps extends Omit<InputFileBaseProps, "onUploadFile"> {
    title?: React.ReactNode;
    text?: React.ReactNode;
    icon?: React.ReactNode;
    btn?: React.ReactNode;
    iconLoader?: React.ReactNode;
    className?: string;
    onUploadFile: (data: FileProps) => Promise<FileProps>;
    contentByStatus?: InputFileStatusContentByStatus;
}
export declare const InputFileStatus: ({ className, btn, icon, text, title, defaultValue, onChange, iconLoader, onUploadFile, contentByStatus: contentByStatusProps, ...props }: InputFileStatusProps) => React.JSX.Element;
