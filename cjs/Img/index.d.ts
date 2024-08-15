import React, { SyntheticEvent } from "react";
import { ImgDataProps } from "fenextjs-interface/cjs/Img";
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
    layers?: Pick<React.CSSProperties, "background" | "mixBlendMode" | "filter" | "opacity">[];
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
export interface ImgProps extends ImgBaseProps, ImgClassProps {
}
export declare const Img: ({ className, classNameImg, id, name, src, srcMin1920, srcMin1680, srcMin1440, srcMin1024, srcMin992, srcMin768, srcMin575, imgIf404, layers, onErrorImg: onErrorImg_, onClick, loader, }: ImgProps) => React.JSX.Element;
