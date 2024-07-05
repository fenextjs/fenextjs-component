import React, { ReactNode, useMemo, useState } from "react";
import { useData } from "fenextjs-hook";
import { Img } from "../../Img";
import { ImgDataProps } from "fenextjs-interface/cjs/Img";
import { InputUpload, InputUploadProps } from "../../Input/Upload";
import { Title } from "../../Title";
import { Text } from "../../Text";
import { Button, ButtonProps } from "../../Button";
import { LoaderSpinner } from "../../Loader";
import { FileProps, _TProps } from "fenextjs-interface";
import { parseBase64ToImgData } from "fenextjs-functions/cjs/parse/Img/Base64ToImgData";
import { env_log } from "fenextjs-functions/cjs/env_log";
import { Trash } from "fenextjs-svg/cjs/Trash";
import { Save } from "fenextjs-svg/cjs/Save";
import { use_T } from "fenextjs-hook";

/**
 * Properties for the base MediaPage component.
 */
export interface MediaPageBaseProps extends _TProps {
    /**
     * The defaultValue for the component.
     */
    defaultValue?: ImgDataProps[] | ImgDataProps;
    /**
     * The disabledSelectImg for the component.
     */
    disabledSelectImg?: boolean;
    /**
     * The images for the component.
     */
    images?: ImgDataProps[];
    /**
     * The loaderImages for the component.
     */
    loaderImages?: boolean;
    /**
     * The multiple for the component.
     */
    multiple?: boolean;
    /**
     * The isPage for the component.
     */
    isPage?: boolean;
    /**
     * The onChange for the component.
     */
    onRenderImg?: (data: ImgDataProps) => ReactNode;
    /**
     * The onChange for the component.
     */
    onChange?: (data: ImgDataProps[] | ImgDataProps | undefined) => void;
    /**
     * The onUploadImg for the component.
     */
    onUploadImg?: (data: ImgDataProps) => void;
    /**
     * The onDeleteImg for the component.
     */
    onDeleteImg?: (data: ImgDataProps) => void;
    /**
     * The onAcepte for the component.
     */
    onAcepte?: (data: ImgDataProps[] | ImgDataProps) => void;
    /**
     * The HeaderPage for the component.
     */
    HeaderPage?: ReactNode;
    /**
     * The ButtonAcceptProps for the component.
     */
    ButtonAcceptProps?: Omit<ButtonProps, "onClick">;
    /**
     * The ButtonCancelProps for the component.
     */
    ButtonCancelProps?: Omit<ButtonProps, "onClick">;
    /**
     * The HeaderPage for the component.
     */
    InputUploadProps?: Omit<
        InputUploadProps,
        | "onChange"
        | "defaultValue"
        | "onChangeProgress"
        | "onUploadFile"
        | "clearAfterUpload"
    >;
    /**
     * The extraContentImgs for the component.
     */
    extraContentImgs?: ReactNode;
}

/**
 * Properties for the class of the MediaPage component.
 */
export interface MediaPageClassProps {
    /**
     * The class name for the component.
     */
    className?: string;
}

/**
 * Properties for the MediaPage component.
 */
export interface MediaPageProps
    extends MediaPageBaseProps,
        MediaPageClassProps {}

export const MediaPage = ({
    className = "",
    multiple = false,
    onChange,
    onUploadImg,
    onDeleteImg,
    onAcepte,
    HeaderPage = (
        <>
            <Title tag="h3">Media</Title>
            <Text>Upload or Select Imagen.</Text>
        </>
    ),
    defaultValue,
    images = [],
    loaderImages = false,
    disabledSelectImg = false,
    InputUploadProps = {
        accept: ["png", "jpg", "jpeg", "webp"],
        title: "Upload Imagen",
        text: "Click for select or upload Imagen.",
    },
    ButtonAcceptProps = {
        children: "Acepte",
    },
    ButtonCancelProps = {
        children: "Cancel",
    },
    isPage = true,
    extraContentImgs = undefined,
    onRenderImg = undefined,
    ...props
}: MediaPageProps) => {
    const { _t } = use_T({ ...props });
    const [keyInputUpload, setKeyInputUpload] = useState(0);
    const { data, onConcatData, onDeleteData, setData } = useData<
        ImgDataProps[]
    >([defaultValue ?? []].flat(2), {
        onChangeDataAfter: (d) => {
            if (multiple) {
                onChange?.(d);
            } else {
                onChange?.(d?.[0]);
            }
        },
    });
    const onSelectImg = (i: number) => () => {
        if (disabledSelectImg) {
            return;
        }
        const selected = images[i];
        const indexDelete = data.findIndex((e) => e.src == selected.src);
        if (indexDelete > -1) {
            onDeleteData(indexDelete);
            return;
        }
        if (multiple) {
            onConcatData([selected]);
        } else {
            setData([selected]);
        }
    };
    const onUploadImgFile = async (v: FileProps) => {
        setKeyInputUpload(new Date().getTime());
        const img = await parseBase64ToImgData({
            base64: v.fileData,
            name: v.text,
            quality: 0.7,
        });
        // console.log(img.srcThumbnail_100);
        env_log(img, {
            name: "Img upload",
        });
        onUploadImg?.(img);
    };
    const onClickAcepte = () => {
        if (multiple) {
            onAcepte?.(data);
        } else {
            onAcepte?.(data?.[0]);
        }
    };
    const onClickCancel = () => {
        setData([]);
    };

    const LISTIMAGES = useMemo(() => {
        return (
            <>
                {images.map((img, i) => {
                    const active =
                        data.find((e) => e.src == img.src) !== undefined;
                    return (
                        <>
                            <div
                                key={`${i}-${img.src}-${img?.id ?? ""}`}
                                className={`fenext-media-page-img fenext-media-page-img-${
                                    active ? "active" : ""
                                }`}
                                onClick={onSelectImg(i)}
                            >
                                <div
                                    className={`fenext-media-page-img-element`}
                                >
                                    {(onRenderImg ? (
                                        onRenderImg(img)
                                    ) : (
                                        <Img {...img} />
                                    )) ?? <Img {...img} />}
                                </div>
                                <div
                                    className={`fenext-media-page-img-capa`}
                                ></div>
                                <div
                                    className={`fenext-media-page-img-actions`}
                                >
                                    <a
                                        className={`fenext-media-page-img-action fenext-media-page-img-download`}
                                        href={img.src}
                                        download={img.name ?? "download.png"}
                                        target="_blank"
                                    >
                                        <Save />
                                    </a>
                                    <div
                                        className={`fenext-media-page-img-action fenext-media-page-img-delete`}
                                        onClick={() => {
                                            onDeleteImg?.(img);
                                        }}
                                    >
                                        <Trash />
                                    </div>
                                </div>
                            </div>
                        </>
                    );
                })}
            </>
        );
    }, [images, onRenderImg, onSelectImg, onDeleteImg, _t]);

    return (
        <>
            <div className={`fenext-media-page ${className} `}>
                <div className={`fenext-media-page-top`}>
                    <div className={`fenext-media-page-top-header`}>
                        {_t(HeaderPage)}
                    </div>
                    <div className={`fenext-media-page-top-btn-acepte`}>
                        {data.length != 0 && !isPage && (
                            <>
                                <Button
                                    {...ButtonCancelProps}
                                    onClick={onClickCancel}
                                    _t={_t}
                                />

                                <Button
                                    {...ButtonAcceptProps}
                                    onClick={onClickAcepte}
                                    _t={_t}
                                />
                            </>
                        )}
                    </div>
                </div>
                <div className={`fenext-media-page-upload`}>
                    <InputUpload
                        {...InputUploadProps}
                        key={keyInputUpload}
                        onChange={onUploadImgFile}
                        clearAfterUpload={true}
                        _t={_t}
                    />
                </div>
                <div className={`fenext-media-page-imgs`}>
                    {loaderImages ? (
                        <>
                            <div
                                className={`fenext-media-page-img fenext-media-page-img-loader`}
                            >
                                <LoaderSpinner />
                            </div>
                        </>
                    ) : (
                        <></>
                    )}
                    {LISTIMAGES}
                    {extraContentImgs && (
                        <div className={`fenext-media-page-extra-content-imgs`}>
                            {_t(extraContentImgs)}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};
