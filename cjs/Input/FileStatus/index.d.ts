import React, { ReactNode } from "react";
import { InputFileBaseProps } from "../File";
import { FileProps, FileStatus } from "fenextjs-interface/cjs/File";
export type InputFileStatusContentByStatus = {
    [id in FileStatus]?: {
        title?: ReactNode;
        icon?: ReactNode;
        tag?: ReactNode;
    };
};
export interface InputFileStatusProps extends Omit<InputFileBaseProps, "onUploadFile"> {
    title?: ReactNode;
    text?: ReactNode;
    icon?: ReactNode;
    btn?: ReactNode;
    iconLoader?: ReactNode;
    className?: string;
    onUploadFile: (data: FileProps) => Promise<FileProps>;
    contentByStatus?: InputFileStatusContentByStatus;
}
export declare const InputFileStatus: ({ className, btn, icon, text, title, defaultValue, onChange, iconLoader, onUploadFile, contentByStatus: contentByStatusProps, ...props }: InputFileStatusProps) => React.JSX.Element;
