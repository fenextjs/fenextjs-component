import React, { SyntheticEvent } from "react";
import { ImgDataProps } from "fenextjs-interface/cjs/Img";
import { LoaderLine } from "../Loader/Line";

/**
 * Properties for the base Img component.
 */
export interface ImgBaseProps extends ImgDataProps {
    /**
     * Url of Img if img not load.
     */
    imgIf404?: string;
    /**
     * Layers for Img.
     */
    layers?: Pick<
        React.CSSProperties,
        "background" | "mixBlendMode" | "filter" | "opacity"
    >[];
    /**
     * onErrorImg.
     */
    onErrorImg?: (e: SyntheticEvent<HTMLImageElement, Event>) => void;
    /**
     * onClick.
     */
    onClick?: () => void;

    /**
     * loader.
     */
    loader?: boolean;

    /**
     * executes when image loads
     */
    onLoad?: React.ReactEventHandler<HTMLImageElement>;
}

/**
 * Properties for the class of the Img component.
 */
export interface ImgClassProps {
    /**
     * The class name for the component.
     */
    className?: string;
    /**
     * The class name for the component img.
     */
    classNameImg?: string;
}

/**
 * Properties for the Img component.
 */
export interface ImgProps extends ImgBaseProps, ImgClassProps {}

export const Img = ({
    className = "",
    classNameImg = "",
    id,
    name = "",
    alt,
    src,
    srcMin1920 = undefined,
    srcMin1680 = undefined,
    srcMin1440 = undefined,
    srcMin1024 = undefined,
    srcMin992 = undefined,
    srcMin768 = undefined,
    srcMin575 = undefined,
    imgIf404 = undefined,
    layers = [],
    onErrorImg: onErrorImg_,
    onClick,
    loader = false,
    onLoad,
}: ImgProps) => {
    const onErrorImg = (e: SyntheticEvent<HTMLImageElement, Event>) => {
        const img: any = e.target;
        if (imgIf404) {
            img.src = imgIf404;
        }
        onErrorImg_?.(e);
    };

    return (
        <>
            <picture
                className={`fenext-picture ${className} id-${id}`}
                onClick={onClick}
            >
                {srcMin1920 ? (
                    <>
                        <source
                            srcSet={`${srcMin1920}`}
                            media="(min-width: 1920px)"
                        />
                    </>
                ) : (
                    <></>
                )}
                {srcMin1680 ? (
                    <>
                        <source
                            srcSet={`${srcMin1680}`}
                            media="(min-width: 1680px)"
                        />
                    </>
                ) : (
                    <></>
                )}
                {srcMin1440 ? (
                    <>
                        <source
                            srcSet={`${srcMin1440}`}
                            media="(min-width: 1440px)"
                        />
                    </>
                ) : (
                    <></>
                )}
                {srcMin1024 ? (
                    <>
                        <source
                            srcSet={`${srcMin1024}`}
                            media="(min-width: 1024px)"
                        />
                    </>
                ) : (
                    <></>
                )}
                {srcMin992 ? (
                    <>
                        <source
                            srcSet={`${srcMin992}`}
                            media="(min-width: 992px)"
                        />
                    </>
                ) : (
                    <></>
                )}
                {srcMin768 ? (
                    <>
                        <source
                            srcSet={`${srcMin768}`}
                            media="(min-width: 768px)"
                        />
                    </>
                ) : (
                    <></>
                )}
                {srcMin575 ? (
                    <>
                        <source
                            srcSet={`${srcMin575}`}
                            media="(min-width: 575px)"
                        />
                    </>
                ) : (
                    <></>
                )}
                {loader && <LoaderLine />}
                <img
                    src={`${src}`}
                    alt={alt ?? name}
                    data-src={`${src}`}
                    data-name={name}
                    data-alt={alt}
                    className={`fenext-img ${classNameImg}`}
                    onError={onErrorImg}
                    onLoad={onLoad}
                />
                {layers?.map((e, i) => (
                    <div key={i} className="fenext-img-layer" style={e} />
                ))}
            </picture>
        </>
    );
};
