import React, { ReactNode, useState } from "react";
import { useData } from "fenextjs-hook";
import { ModalBase, ModalBaseBaseProps } from "../../Modal/Base";
import { InputUpload } from "../../Input/Upload";
import { Button, ButtonProps } from "../../Button";
import { GridGallery } from "../../GridGallery";
import { MediaPage, MediaPageProps } from "../Page";
import { ImgDataProps } from "fenextjs-interface/cjs/Img";
import { _TProps } from "fenextjs-interface";

/**
 * Properties for the base MediaInput component.
 */
export interface MediaInputBaseProps extends _TProps {
    /**
     * The titleView for the component.
     */
    titleView?: string;
    /**
     * The titleView for the component.
     */
    textView?: string;
    /**
     * The iconView for the component.
     */
    iconView?: ReactNode;
    /**
     * The defaultValue for the component.
     */
    defaultValue?: ImgDataProps[] | ImgDataProps;
    /**
     * The multiple for the component.
     */
    multiple?: boolean;
    /**
     * The onChange for the component.
     */
    onChange?: (data: ImgDataProps[] | ImgDataProps | undefined) => void;
    /**
     * The ButtonUploadProps for the component.
     */
    ButtonUploadProps?: Omit<ButtonProps, "onClick">;
    /**
     * The MediaPageProps for the component.
     */
    MediaPageProps?: Omit<
        MediaPageProps,
        "onChange" | "multiple" | "defaultValue"
    >;
    /**
     * The ModalProps for the component.
     */
    ModalProps?: Pick<ModalBaseBaseProps, "type">;
}

/**
 * Properties for the class of the MediaInput component.
 */
export interface MediaInputClassProps {
    /**
     * The class name for the component.
     */
    className?: string;
}

/**
 * Properties for the MediaInput component.
 */
export interface MediaInputProps
    extends MediaInputBaseProps,
        MediaInputClassProps {}

export const MediaInput = ({
    className = "",
    titleView = "Upload Image",
    textView = "Click for select or upload Image.",
    iconView = undefined,
    defaultValue = undefined,
    multiple = false,
    onChange,
    ButtonUploadProps = {
        children: "Upload Image",
        full: true,
    },
    MediaPageProps = {},
    ModalProps = {
        type: "full",
    },
    _t,
}: MediaInputProps) => {
    const [modalActive, setModalActive] = useState(false);
    const { data, onChangeData, onDeleteData, setData } = useData<
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
    const onOpen = () => {
        setModalActive(true);
    };
    const onClose = () => {
        setModalActive(false);
    };
    const onAddImg = (data: ImgDataProps | ImgDataProps[] | undefined = []) => {
        const d = [data].flat(2).map((e) => ({
            ...e,
            name: `${new Date().getTime()}_${e.name}`,
        }));
        setData(d);
    };
    const onAcepteImg = (data: ImgDataProps | ImgDataProps[]) => {
        onAddImg(data);
        onClose();
    };
    return (
        <>
            <div className={`fenext-media ${className} `}>
                {data == undefined || data.length == 0 ? (
                    <div
                        onClick={onOpen}
                        className="fenext-media-element-show-modal"
                    >
                        <InputUpload
                            disabled={true}
                            title={titleView}
                            text={textView}
                            icon={iconView}
                            _t={_t}
                        />
                        <div className="fenext-media-btn-modal"></div>
                    </div>
                ) : (
                    <></>
                )}
                <GridGallery
                    _t={_t}
                    items={[data]
                        ?.flat(2)
                        .splice(0, multiple ? data.length : 1)
                        .map((item, i) => {
                            return (
                                <InputUpload
                                    key={`${i}-${JSON.stringify(item ?? {})}`}
                                    disabled={data === undefined}
                                    title={titleView}
                                    text={textView}
                                    defaultValue={{
                                        fileData: item.src,
                                        text: item.name,
                                    }}
                                    onChange={(e) => {
                                        if (e.fileData) {
                                            onChangeData(i)({
                                                src: e.fileData,
                                                name: e.text,
                                            });
                                        } else {
                                            onDeleteData(i);
                                        }
                                    }}
                                    tagPreview="img"
                                    _t={_t}
                                />
                            );
                        })}
                />
                {multiple ? (
                    <>
                        <Button
                            {...ButtonUploadProps}
                            onClick={onOpen}
                            _t={_t}
                        />
                    </>
                ) : (
                    <></>
                )}
                <ModalBase
                    {...ModalProps}
                    onClose={onClose}
                    active={modalActive}
                >
                    <MediaPage
                        {...MediaPageProps}
                        key={JSON.stringify(data)}
                        multiple={multiple}
                        onChange={onAddImg}
                        defaultValue={data}
                        onAcepte={onAcepteImg}
                        isPage={false}
                        _t={_t}
                    />
                </ModalBase>
            </div>
        </>
    );
};
