import React, { PropsWithChildren } from "react";
import { ErrorProps } from "fenextjs-interface/cjs/Error";
import { FileProps } from "fenextjs-interface/cjs/File";
import { _TProps } from "fenextjs-interface";
export interface InputFileClassProps {
    className?: string;
    classNameLabel?: string;
    classNameContent?: string;
    classNameInput?: string;
    classNameError?: string;
}
export interface InputFileUploadDataProps {
    file: any;
    nameFile: string;
    extend: string;
    setProgress: (progress: number) => void;
    setFileData: (data: FileProps) => void;
}
export interface InputFileBaseProps extends _TProps {
    accept?: string[];
    defaultValue?: FileProps;
    onChange?: (v: FileProps) => void;
    onChangeProgress?: (v: number) => void;
    onChangeError?: (v: ErrorProps | undefined) => void;
    onUploadFile?: (data: InputFileUploadDataProps) => Promise<FileProps>;
    clearAfterUpload?: boolean;
    MAX_SIZE_FILE?: number;
    parseProgress?: (progres: number) => any;
    disabled?: boolean;
    textMaxSizeFile?: string;
    capture?: React.InputHTMLAttributes<HTMLInputElement>["capture"];
}
export interface InputFileProps extends InputFileBaseProps, InputFileClassProps, PropsWithChildren {
}
export declare const InputFile: ({ defaultValue, className, classNameLabel, classNameContent, classNameInput, classNameError, onChange, accept, children, clearAfterUpload, MAX_SIZE_FILE, parseProgress, onChangeProgress, onChangeError, disabled, textMaxSizeFile, capture, ...props }: InputFileProps) => React.JSX.Element;
