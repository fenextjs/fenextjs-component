import React, { useRef, PropsWithChildren } from "react";

import { env_log } from "fenextjs-functions/cjs/env_log";
import { parseFile } from "fenextjs-functions/cjs/parse/File";
import { useData } from "fenextjs-hook/cjs/useData";
import { ErrorProps } from "fenextjs-interface/cjs/Error";
import { FileProps } from "fenextjs-interface/cjs/File";
import { _TProps } from "fenextjs-interface";
import { use_T } from "fenextjs-hook";

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
    /**
     * Function to call when a file is received before uploading.
     */
    onFileReceived?: (file: File) => void;
}

/**
 * Properties for the input file component, combining the base properties and styling properties
 */
export interface InputFileProps
    extends InputFileBaseProps,
        InputFileClassProps,
        PropsWithChildren {}

export const InputFile = ({
    defaultValue = {
        fileData: "",
        text: "",
    },
    className = "",
    classNameLabel = "",
    classNameContent = "",
    classNameInput = "",
    classNameError = "",
    onChange = (v: FileProps) => {
        env_log(v, {
            name: "onChange File",
        });
    },
    accept = [],
    children,
    clearAfterUpload = false,
    MAX_SIZE_FILE = 5000000,
    parseProgress = (e) => e,
    onChangeProgress,
    onChangeError,
    disabled = false,
    textMaxSizeFile = "File max size",
    onFileReceived,
    ...props
}: InputFileProps) => {
    const { _t } = use_T({ ...props });
    const onUploadFile = async (
        data: InputFileUploadDataProps,
    ): Promise<FileProps> => {
        if (props?.onUploadFile) {
            const r = await props?.onUploadFile(data);
            if (r) {
                return r;
            }
        }
        const fileData = await parseFile(data.file, {
            updateProgress: data.setProgress,
        });
        return {
            fileData,
            base64: `${fileData ?? ""}`,
            text: data.nameFile,
            extend: data.extend,
        };
    };
    const { data: error, setData: setError } = useData<ErrorProps | undefined>(
        undefined,
        {
            onChangeDataAfter: onChangeError,
        },
    );
    const ref = useRef<any>(null);

    const { setData } = useData<FileProps>(defaultValue, {
        onChangeDataAfter: onChange,
    });

    const { data: progress, setData: setProgress } = useData<number>(-1, {
        onChangeDataAfter: onChangeProgress,
    });

    const validateAccept = (nameFile: string) => {
        const extend = nameFile.split(".").pop()?.toLowerCase();
        if (
            accept.length != 0 &&
            extend &&
            !accept.map((e) => e.toLowerCase()).includes(extend)
        ) {
            throw "File Invalid";
        }
        return extend;
    };
    const uploadFile = async (e: any) => {
        try {
            setError(undefined);
            const file = e.target.files[0];
            onFileReceived?.(file);
            if (!file) {
                setProgress(-2);
                setData({
                    fileData: "",
                    text: "",
                });
                return;
            }

            if (file?.size > MAX_SIZE_FILE) {
                throw `${_t(textMaxSizeFile)} ${MAX_SIZE_FILE / 1000000}mb`;
            }

            const nameFile = e.target.value.split("\\").pop();

            env_log(nameFile, {
                name: "nameFile",
            });
            const extend = validateAccept(nameFile);

            const result = await onUploadFile({
                file,
                setFileData: setData,
                nameFile,
                setProgress,
                extend: extend ?? "",
            });
            setData(result);

            if (clearAfterUpload) {
                e.target.value = null;
                e.target.type = "text";

                setTimeout(() => {
                    e.target.type = "file";
                }, 100);
                if (ref?.current) {
                    ref.current.value = null;
                }
            }
        } catch (e) {
            setError({
                message: `${e}`,
                data: e,
            });
            setProgress(-2);
            setData({
                fileData: "",
                text: "",
            });
            env_log(e, {
                name: "error upload file",
                color: "red",
            });
        }
    };

    return (
        <>
            <div className={`fenext-input-file ${className}`}>
                <label className={`fenext-input-file-label ${classNameLabel}`}>
                    <div
                        className={`fenext-input-file-content ${classNameContent}`}
                    >
                        {children}
                    </div>
                    <input
                        ref={ref}
                        type="file"
                        className={`fenext-input-file-input ${classNameInput}`}
                        onChange={uploadFile}
                        accept={accept.map((e: string) => `.${e}`).join(",")}
                        disabled={disabled}
                    />
                </label>
                {progress > 0 && progress < 100 && parseProgress(progress)}
                {error && (
                    <div className={`fenext-error ${classNameError}`}>
                        {error.message}
                    </div>
                )}
            </div>
        </>
    );
};
