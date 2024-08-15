import React from "react";
import { ButtonProps } from "../Button";
import { ImgProps } from "../Img";
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
export interface ImgGalleryProps extends ImgGalleryBaseProps, ImgGalleryClassProps {
}
export declare const ImgGallery: ({ className, imgs, buttonShowMoreImg, buttonHiddenMoreImg, loader, nLoader, ...props }: ImgGalleryProps) => React.JSX.Element;
