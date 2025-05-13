import React, { ReactNode, useMemo, useState } from "react";
import { InputFile, InputFileBaseProps } from "../File";
import { Title, TitleProps } from "../../Title";
import { Button, ButtonProps } from "../../Button";
import { Text, TextProps } from "../../Text";
import { SvgUpload2 } from "fenextjs-svg/cjs/Upload";
import { useData } from "fenextjs-hook/cjs/useData";
import { FileProps } from "fenextjs-interface/cjs/File";
import { ErrorProps } from "fenextjs-interface/cjs/Error";
import { SvgClose } from "fenextjs-svg/cjs/Close";
import { Collapse } from "../../Collapse";
import { use_T } from "fenextjs-hook";
import { LoaderSpinner } from "../../Loader";

/**
 * Properties for the base InputUpload component.
 */
export interface InputUploadBaseProps extends InputFileBaseProps {
    /**
     * The Title for the component.
     */
    title?: ReactNode;
    /**
     * The Text for the component.
     */
    text?: ReactNode;
    /**
     * The Title for the component.
     */
    titleFile?: ReactNode;
    /**
     * The Text for the component.
     */
    textFile?: ReactNode;
    /**
     * The Text for the component.
     */
    textPreview?: ReactNode;
    /**
     * The Icon for the component.
     */
    icon?: ReactNode;
    /**
     * The Icon for the component.
     */
    iconFile?: ReactNode;
    /**
     * The Buton for the component.
     */
    btn?: ReactNode;
    /**
     * The tagPreview for the component.
     */
    tagPreview?: "embed" | "img";
    /**
     * The tagPreview for the component.
     */
    customPreview?: (data: FileProps) => ReactNode;
    /**
     * The loader for the component.
     */
    loader?: boolean;
    /**
     * The Icon for the component.
     */
    iconLoader?: ReactNode;
}

/**
 * Properties for the class of the InputUpload component.
 */
export interface InputUploadClassProps {
    /**
     * The class name for the component.
     */
    className?: string;
    /**
     * The class name for the component.
     */
    classNameUp?: string;
    /**
     * The class name for the component.
     */
    classNameTitle?: Omit<TitleProps, "children">;
    /**
     * The class name for the component.
     */
    classNameContentIcon?: string;
    /**
     * The class name for the component.
     */
    classNameBtn?: Omit<ButtonProps, "children">;
    /**
     * The class name for the component.
     */
    classNameText?: Omit<TextProps, "children">;
    /**
     * The class name for the component.
     */
    classNameProgress?: string;
    /**
     * The class name for the component.
     */
    classNamePreview?: string;
    /**
     * The class name for the component.
     */
    classNameRemove?: string;
}

/**
 * Properties for the InputUpload component.
 */
export interface InputUploadProps
    extends InputUploadBaseProps,
        InputUploadClassProps {}

export const InputUpload = ({
    className = "",
    classNameBtn = {},
    classNameContentIcon = "",
    classNameText = {},
    classNamePreview = "",
    classNameTitle = {
        tag: "h2",
    },
    classNameUp = "",
    classNameProgress = "",
    classNameRemove = "",
    btn = "Choose File",
    icon = (
        <>
            <SvgUpload2 />
        </>
    ),
    text = "Drag and drop your file or template here.",
    title = "Drag and drop here",
    titleFile = undefined,
    textFile = undefined,
    iconFile = "",

    textPreview = "Preview File",

    defaultValue = {
        fileData: "",
        text: "",
    },
    parseProgress = (e) => `Uploading . . . ${e.toFixed(0)}%`,
    onChange,

    tagPreview = "embed",
    loader = false,
    iconLoader = <LoaderSpinner />,
    customPreview = undefined,

    ...props
}: InputUploadProps) => {
    const { _t } = use_T({ ...props });
    const { data, setData } = useData<FileProps>(defaultValue, {
        onChangeDataAfter: onChange,
    });

    const [progress, setProgress] = useState(-1);
    const { data: error, setData: setError } = useData<ErrorProps | undefined>(
        undefined,
    );

    const TAGPREVIEW = useMemo(() => {
        if (data.extend) {
            if (["png", "jpeg", "jpg", "gif", "webp"].includes(data.extend)) {
                return "img";
            }
        }
        return tagPreview;
    }, [tagPreview, data]);

    return (
        <>
            <div
                className={`fenext-input-upload ${className} ${
                    progress > 0 && progress < 100
                        ? "fenext-input-upload-in-progress"
                        : ""
                } ${
                    data?.fileData && data?.fileData != ""
                        ? "fenext-input-upload-ok"
                        : ""
                } ${error ? "fenext-input-upload-error" : ""}`}
            >
                {data.fileData && data.fileData != "" ? (
                    <>
                        <div
                            className={`fenext-input-upload-up ${classNameUp}`}
                        >
                            <Title
                                {...classNameTitle}
                                className={`fenext-input-upload-title ${classNameTitle.className}`}
                            >
                                {_t(titleFile ?? data?.text)}
                            </Title>
                            {textFile && (
                                <Text
                                    {...classNameText}
                                    className={`fenext-input-upload-text ${classNameText.className}`}
                                >
                                    {_t(textFile)}
                                </Text>
                            )}
                            <div
                                className={`fenext-input-upload-content-icon ${classNameContentIcon}`}
                            >
                                {loader ? iconLoader : iconFile}
                            </div>
                            <Collapse
                                header={
                                    <>
                                        <Text
                                            {...classNameText}
                                            className={`fenext-input-upload-text ${classNameText.className}`}
                                        >
                                            {_t(textPreview)}
                                        </Text>
                                    </>
                                }
                            >
                                {customPreview ? (
                                    <>{customPreview(data)}</>
                                ) : (
                                    <TAGPREVIEW
                                        src={
                                            data?.url && data?.url != ""
                                                ? data?.url
                                                : data.fileData
                                        }
                                        className={`fenext-input-upload-preview ${classNamePreview}`}
                                    />
                                )}
                            </Collapse>
                            {!props.disabled && (
                                <div
                                    className={`fenext-input-upload-remove ${classNameRemove}`}
                                    onClick={() => {
                                        setData({
                                            fileData: "",
                                            text: "",
                                        });
                                    }}
                                >
                                    <SvgClose />
                                </div>
                            )}
                        </div>
                    </>
                ) : (
                    <>
                        <InputFile
                            onChange={setData}
                            parseProgress={() => ""}
                            onChangeProgress={setProgress}
                            onChangeError={setError}
                            {...props}
                            _t={_t}
                        >
                            <div
                                className={`fenext-input-upload-up ${classNameUp}`}
                            >
                                {progress > 0 && progress < 100 ? (
                                    <Title
                                        {...classNameTitle}
                                        className={`fenext-input-upload-progress ${classNameProgress}`}
                                    >
                                        {parseProgress(progress)}
                                    </Title>
                                ) : (
                                    <Title
                                        {...classNameTitle}
                                        className={`fenext-input-upload-title ${classNameTitle.className}`}
                                    >
                                        {_t(title)}
                                    </Title>
                                )}
                                <div
                                    className={`fenext-input-upload-content-icon ${classNameContentIcon}`}
                                >
                                    {loader ? iconLoader : icon}
                                </div>
                                <Button
                                    {...classNameBtn}
                                    className={`fenext-input-upload-btn ${classNameBtn.className}`}
                                >
                                    {_t(btn)}
                                </Button>
                                <Text
                                    {...classNameText}
                                    className={`fenext-input-upload-text ${classNameText.className}`}
                                >
                                    {_t(text)}
                                </Text>
                            </div>
                        </InputFile>
                    </>
                )}
            </div>
        </>
    );
};
