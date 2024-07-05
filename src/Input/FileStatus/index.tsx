import React, { useMemo } from "react";
import { InputFile, InputFileBaseProps } from "../File";
import { Title } from "../../Title";
import { Button } from "../../Button";
import { Text } from "../../Text";
import { Upload2 } from "fenextjs-svg/cjs/Upload";
import { Check } from "fenextjs-svg/cjs/Check";
import { useData } from "fenextjs-hook/cjs/useData";
import { FileProps, FileStatus } from "fenextjs-interface/cjs/File";
import { Close } from "fenextjs-svg/cjs/Close";
import { use_T } from "fenextjs-hook";
import { LoaderSpinner } from "../../Loader";
import { ErrorComponent } from "../../Error";
import { Link } from "../../Link";

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
export interface InputFileStatusProps
    extends Omit<InputFileBaseProps, "onUploadFile"> {
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

export const InputFileStatus = ({
    className = "",
    btn = "Choose File",
    icon = (
        <>
            <Upload2 />
        </>
    ),
    text = "Drag and drop your file or template here.",
    title = "Drag and drop here",

    defaultValue = {
        fileData: "",
        text: "",
    },
    onChange,

    iconLoader = <LoaderSpinner />,

    onUploadFile,
    contentByStatus: contentByStatusProps = {},
    ...props
}: InputFileStatusProps) => {
    const { _t } = use_T({ ...props });
    const contentByStatus = useMemo(
        () => ({
            APPROVED: {
                title: "Approved!",
                tag: "Accepted",
                icon: <Check />,
            },
            REFUSED: {
                title: "Refused! go up again",
                tag: "Denied",
                icon: <Upload2 />,
            },
            PENDING: {
                title: "Pending",
                tag: "Pending",
                icon: <Upload2 />,
            },
            ...contentByStatusProps,
        }),
        [contentByStatusProps],
    );

    const { data, setData, dataError, onSubmitData, loaderSubmit } = useData<
        FileProps,
        any,
        FileProps
    >(defaultValue, {
        onChangeDataAfter: onChange,
        onSubmitData: onUploadFile,
    });

    return (
        <>
            <div
                className={`fenext-input-file-status fenext-input-file-status-${data.status ?? "NONE"} ${className}`}
            >
                {!dataError &&
                !loaderSubmit &&
                data?.fileData &&
                data?.fileData != "" ? (
                    <>
                        <div className={`fenext-input-file-status-up `}>
                            <Title
                                className={`fenext-input-file-status-title `}
                            >
                                {_t(
                                    contentByStatus?.[data?.status ?? "NONE"]
                                        ?.title ?? title,
                                )}
                            </Title>
                            <div
                                className={`fenext-input-file-status-content-icon`}
                            >
                                {contentByStatus?.[data?.status ?? "NONE"]
                                    ?.icon ?? icon}
                            </div>
                            <div className={`fenext-input-file-status-tag`}>
                                <Text>
                                    {_t(
                                        contentByStatus?.[
                                            data?.status ?? "NONE"
                                        ]?.tag,
                                    )}
                                </Text>
                            </div>
                            <Link
                                href={
                                    data?.url ?? data?.base64 ?? data?.fileData
                                }
                                target="_blank"
                                className={`fenext-input-file-status-link `}
                            >
                                {data.text}
                            </Link>
                            {!props.disabled && (
                                <div
                                    className={`fenext-input-file-status-remove `}
                                    onClick={() => {
                                        setData({
                                            fileData: "",
                                            text: "",
                                        });
                                    }}
                                >
                                    <Close />
                                </div>
                            )}
                        </div>
                    </>
                ) : (
                    <>
                        <InputFile
                            onChange={(e) => {
                                onSubmitData({
                                    data: e,
                                    onSaveData: ({ result }) => {
                                        return result;
                                    },
                                });
                            }}
                            parseProgress={() => ""}
                            {...props}
                            _t={_t}
                        >
                            <div className={`fenext-input-file-status-up `}>
                                <Title
                                    className={`fenext-input-file-status-title `}
                                >
                                    {_t(title)}
                                </Title>
                                <div
                                    className={`fenext-input-file-status-content-icon`}
                                >
                                    {loaderSubmit ? iconLoader : icon}
                                </div>
                                <Button
                                    className={`fenext-input-file-status-btn `}
                                >
                                    {_t(btn)}
                                </Button>
                                <Text
                                    className={`fenext-input-file-status-text `}
                                >
                                    {_t(text)}
                                </Text>
                                {dataError && (
                                    <ErrorComponent error={dataError} />
                                )}
                            </div>
                        </InputFile>
                    </>
                )}
            </div>
        </>
    );
};
