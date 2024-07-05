import React, { PropsWithChildren } from "react";
import { ErrorProps } from "fenextjs-interface/cjs/Error";
import { FileProps } from "fenextjs-interface/cjs/File";
import { _TProps } from "fenextjs-interface";
/**
 * Properties for styling the various elements of the input file component
 */
export interface InputFileClassProps {
    /**
     * Class name for the component
     */
    className?: string;
    /**
     * Class name for the label element
     */
    classNameLabel?: string;
    /**
     * Class name for the content element
     */
    classNameContent?: string;
    /**
     * Class name for the input element
     */
    classNameInput?: string;
    /**
     * Class name for the error element
     */
    classNameError?: string;
}
/**
 * Properties needed for uploading a file
 */
export interface InputFileUploadDataProps {
    /**
     * The file to be uploaded
     */
    file: any;
    /**
     * The name of the file to be uploaded
     */
    nameFile: string;
    /**
     * The name of the file to be uploaded
     */
    extend: string;
    /**
     * Function to set the progress of the upload
     */
    setProgress: (progress: number) => void;
    /**
     * Function to set the data of the uploaded file
     */
    setFileData: (data: FileProps) => void;
}
/**
 * Base properties for the input file component
 */
export interface InputFileBaseProps extends _TProps {
    /**
     * Allowed file types for the input element
     */
    accept?: string[];
    /**
     * Default value for the input element
     */
    defaultValue?: FileProps;
    /**
     * Function to call when the value of the input element changes
     */
    onChange?: (v: FileProps) => void;
    /**
     * Function to call when the value of the input element changes progress
     */
    onChangeProgress?: (v: number) => void;
    /**
     * Function to call when the value of the input element changes error
     */
    onChangeError?: (v: ErrorProps | undefined) => void;
    /**
     * Function to call when a file is being uploaded
     */
    onUploadFile?: (data: InputFileUploadDataProps) => Promise<FileProps>;
    /**
     * Whether to clear the input element after a file has been uploaded
     */
    clearAfterUpload?: boolean;
    /**
     * Maximum size of file that can be uploaded
     */
    MAX_SIZE_FILE?: number;
    /**
     * Function to parse progress during file upload
     */
    parseProgress?: (progres: number) => any;
    /**
     * disabled upload.
     */
    disabled?: boolean;
    /**
     * textMaxSizeFile.
     */
    textMaxSizeFile?: string;
}
/**
 * Properties for the input file component, combining the base properties and styling properties
 */
export interface InputFileProps extends InputFileBaseProps, InputFileClassProps, PropsWithChildren {
}
export declare const InputFile: ({ defaultValue, className, classNameLabel, classNameContent, classNameInput, classNameError, onChange, accept, children, clearAfterUpload, MAX_SIZE_FILE, parseProgress, onChangeProgress, onChangeError, disabled, textMaxSizeFile, ...props }: InputFileProps) => React.JSX.Element;
