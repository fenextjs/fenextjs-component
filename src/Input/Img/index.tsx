import React, { useState } from "react";
import { InputFile, InputFileBaseProps } from "../File";
import { Title, TitleProps } from "../../Title";
import { Text, TextProps } from "../../Text";
import { SvgImg } from "fenextjs-svg/cjs/Img";
import { useData } from "fenextjs-hook/cjs/useData";
import { FileProps } from "fenextjs-interface/cjs/File";
import { ErrorProps } from "fenextjs-interface/cjs/Error";
import { Close } from "fenextjs-svg/cjs/Close";
import { use_T } from "fenextjs-hook";

/**
 * Properties for the base InputImg component.
 */
export interface InputImgBaseProps extends Omit<InputFileBaseProps, "accept"> {
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
     * on Remove Img for the component.
     */
    onRemove?: () => void;
}

/**
 * Properties for the class of the InputImg component.
 */
export interface InputImgClassProps {
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
    classNameText?: Omit<TextProps, "children">;
    /**
     * The class name for the component.
     */
    classNameProgress?: string;
    /**
     * The class name for the component.
     */
    classNameRemove?: string;
    /**
     * The class name for the component.
     */
    classNameImg?: string;
}

/**
 * Properties for the InputImg component.
 */
export interface InputImgProps extends InputImgBaseProps, InputImgClassProps {}

export const InputImg = ({
    className = "",
    classNameContentIcon = "",
    classNameText = {},
    classNameTitle = {
        tag: "h2",
    },
    classNameUp = "",
    classNameProgress = "",
    classNameRemove = "",
    classNameImg = "",
    icon = (
        <>
            <SvgImg />
        </>
    ),
    text = "Drag Image",
    title = "Add Image",

    defaultValue = {
        fileData: "",
        text: "",
    },
    parseProgress = (e) => `Imging . . . ${e.toFixed(0)}%`,
    onChange,
    onRemove,

   
    ...props
}: InputImgProps) => {
    const {_t} = use_T({...props})
    const { data, setData } = useData<FileProps>(defaultValue, {
        onChangeDataAfter: onChange,
    });

    const [progress, setProgress] = useState(-1);
    const { data: error, setData: setError } = useData<ErrorProps | undefined>(
        undefined,
    );
    return (
        <>
            <div
                className={`fenext-input-img ${className} ${
                    progress > 0 && progress < 100
                        ? "fenext-input-img-in-progress"
                        : ""
                } ${
                    data?.fileData && data?.fileData != ""
                        ? "fenext-input-img-ok"
                        : ""
                } ${error ? "fenext-input-img-error" : ""}`}
            >
                {data.fileData && data.fileData != "" ? (
                    <>
                        <div className={`fenext-input-img-up ${classNameUp}`}>
                            <img
                                src={data.fileData}
                                className={`fenext-input-img-img ${classNameImg}`}
                            />
                            <div
                                className={`fenext-input-img-remove ${classNameRemove}`}
                                onClick={() => {
                                    setData({
                                        fileData: "",
                                        text: "",
                                    });
                                    onRemove?.();
                                }}
                            >
                                <Close />
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <InputFile
                            onChange={setData}
                            parseProgress={() => ""}
                            onChangeProgress={setProgress}
                            onChangeError={setError}
                            accept={[
                                "jpg",
                                "jpeg",
                                "png",
                                "gif",
                                "svg",
                                "bmp",
                                "webp",
                            ]}
                            {...props}
                            _t={_t}
                        >
                            <div
                                className={`fenext-input-img-up ${classNameUp}`}
                            >
                                <div
                                    className={`fenext-input-img-content-icon ${classNameContentIcon}`}
                                >
                                    {icon}
                                </div>
                                {progress > 0 && progress < 100 ? (
                                    <Title
                                        {...classNameTitle}
                                        className={`fenext-input-img-progress ${classNameProgress}`}
                                    >
                                        {parseProgress(progress)}
                                    </Title>
                                ) : (
                                    <Title
                                        {...classNameTitle}
                                        className={`fenext-input-img-title ${classNameTitle.className}`}
                                    >
                                        {_t(title)}
                                    </Title>
                                )}
                                <Text
                                    {...classNameText}
                                    className={`fenext-input-img-text ${classNameText.className}`}
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
