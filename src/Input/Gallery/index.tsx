import { FileProps } from "fenextjs-interface/cjs/File";
import { GridGallery } from "../../GridGallery";
import { Button, ButtonClassProps } from "../../Button";
import { InputImg, InputImgBaseProps } from "../Img";
import React, { useMemo, useState } from "react";
import { _TProps } from "fenextjs-interface";
import { use_T } from "fenextjs-hook";

/**
 * Properties for the base InputGallery component.
 */
export interface InputGalleryBaseProps
    extends Omit<InputImgBaseProps, "defaultValue" | "onRemove" | "onChange">,
        _TProps {
    /**
     * Default value for the input element
     */
    defaultValue?: FileProps[];
    /**
     * Default value for the input element
     */
    value?: FileProps[];
    /**
     * The class name for the component.
     */
    textBtn?: string;
    /**
     * on Remove Img for the component.
     */
    onChange?: (items: FileProps[]) => void;
}

/**
 * Properties for the class of the InputGallery component.
 */
export interface InputGalleryClassProps {
    /**
     * The class name for the component.
     */
    className?: string;
    /**
     * The class name for the component.
     */
    classNameContentButton?: string;
    /**
     * The class name for the component.
     */
    classNameButton?: ButtonClassProps;
}

/**
 * Properties for the InputGallery component.
 */
export interface InputGalleryProps
    extends InputGalleryBaseProps,
        InputGalleryClassProps {}

export const InputGallery = ({
    className = "",
    classNameContentButton = "",
    classNameButton = {},

    textBtn = "Add More Images",
    defaultValue = [
        {
            fileData: "",
            text: "",
        },
        {
            fileData: "",
            text: "",
        },
        {
            fileData: "",
            text: "",
        },
        {
            fileData: "",
            text: "",
        },
        {
            fileData: "",
            text: "",
        },
    ],
    value = undefined,
    onChange,
   
    ...props
}: InputGalleryProps) => {
    const {_t} = use_T({...props})
    const [items_, setItems] = useState<FileProps[]>(defaultValue);

    const onChangeItem = (i: number) => (data: FileProps) => {
        setItems((pre) => {
            const n = [...pre];
            n[i] = data;
            onChange?.(n);
            return n;
        });
    };
    const onAddItem = () => {
        setItems((pre) => {
            const n = [
                ...pre,
                {
                    fileData: "",
                    text: "",
                },
            ];
            onChange?.(n);
            return n;
        });
    };
    const onRemoveItem = (i: number) => () => {
        setItems((pre) => {
            const n = [...pre].filter((e, j) => e && i != j);
            onChange?.(n);
            return n;
        });
    };

    const items = useMemo(() => {
        return (value ?? items_).map((item, i) => {
            return (
                <>
                    <InputImg
                        {...props}
                        defaultValue={item}
                        onChange={onChangeItem(i)}
                        onRemove={onRemoveItem(i)}
                        _t={_t}
                    />
                </>
            );
        });
    }, [items_, value, _t]);

    return (
        <>
            <div className={`fenext-input-gallery ${className} `}>
                <GridGallery
                    items={[
                        ...items,
                        <>
                            <div
                                className={`fenext-input-gallery-content-btn ${classNameContentButton}`}
                            >
                                <Button
                                    {...classNameButton}
                                    className={`fenext-input-gallery-btn-add ${classNameButton.className}`}
                                    onClick={onAddItem}
                                >
                                    {_t(textBtn)}
                                </Button>
                            </div>
                        </>,
                    ]}
                    _t={_t}
                />
            </div>
        </>
    );
};
