import React, { useState } from "react";
import { Button, ButtonProps } from "../Button";
import { GridGallery } from "../GridGallery";
import { ModalBase } from "../Modal/Base";
import { Img, ImgProps } from "../Img";
import { ImgSlider } from "../ImgSlider";
import { _TProps } from "fenextjs-interface";

/**
 * Properties for the base ImgGallery component.
 */
export interface ImgGalleryBaseProps extends _TProps {
    /**
     * List of Img.
     */
    imgs: ImgProps[];
    /**
     * Props of Button for show more Imgs.
     */
    buttonShowMoreImg?: Omit<ButtonProps, "onClick">;
    /**
     * Props of Button for hidden more Imgs.
     */
    buttonHiddenMoreImg?: Omit<ButtonProps, "onClick">;
    /**
     * loader.
     */
    loader?: boolean;
    /**
     * n items loader.
     * @default 5
     */
    nLoader?: number;
}

/**
 * Properties for the class of the ImgGallery component.
 */
export interface ImgGalleryClassProps {
    /**
     * The class name for the component.
     */
    className?: string;
}

/**
 * Properties for the ImgGallery component.
 */
export interface ImgGalleryProps
    extends ImgGalleryBaseProps,
        ImgGalleryClassProps {}

export const ImgGallery = ({
    className = "",
    imgs,
    buttonShowMoreImg = {
        children: "Show more pictures",
    },
    buttonHiddenMoreImg = {
        children: "Hidden pictures",
    },
    loader = false,
    nLoader = 5,
    ...props
}: ImgGalleryProps) => {
    const [showAllImg, setShowAllImg] = useState(false);
    const [activeModal, setActiveModal] = useState(false);
    const [steps, setSteps] = useState(0);

    const onClickImg = (i: number) => () => {
        setActiveModal(true);
        setSteps(i);
    };

    const onClose = () => {
        setActiveModal(false);
    };
    return (
        <>
            <div className={`fenext-img-gallery ${className} `}>
                <ModalBase active={activeModal} onClose={onClose} type="full">
                    <ImgSlider
                        imgs={imgs}
                        step={steps}
                        setStep={setSteps}
                        {...props}
                    />
                </ModalBase>
                {loader ? (
                    <GridGallery
                        items={new Array(nLoader).fill(1).map((e, i) => {
                            return <Img key={i * e} src="" loader={true} />;
                        })}
                        {...props}
                    />
                ) : (
                    <>
                        <GridGallery
                            {...props}
                            items={[...imgs]
                                .splice(0, showAllImg ? imgs.length + 1 : 5)
                                .map((e, i) => {
                                    return (
                                        <Img
                                            key={i}
                                            {...e}
                                            onClick={onClickImg(i)}
                                        />
                                    );
                                })}
                        />
                        {imgs.length > 5 && !showAllImg ? (
                            <>
                                <div
                                    className={`fenext-img-gallery-content-btn`}
                                >
                                    <Button
                                        {...buttonShowMoreImg}
                                        onClick={() => {
                                            setShowAllImg(true);
                                        }}
                                        {...props}
                                    />
                                </div>
                            </>
                        ) : (
                            <></>
                        )}
                        {showAllImg && (
                            <div className={`fenext-img-gallery-content-btn`}>
                                <Button
                                    {...buttonHiddenMoreImg}
                                    {...props}
                                    onClick={() => {
                                        setShowAllImg(false);
                                    }}
                                />
                            </div>
                        )}
                    </>
                )}
            </div>
        </>
    );
};
