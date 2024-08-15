import React from "react";
import { ButtonProps } from "../Button";
import { ImgProps } from "../Img";
import { _TProps } from "fenextjs-interface";
export interface ImgGalleryBaseProps extends _TProps {
    imgs: ImgProps[];
    buttonShowMoreImg?: Omit<ButtonProps, "onClick">;
    buttonHiddenMoreImg?: Omit<ButtonProps, "onClick">;
    loader?: boolean;
    nLoader?: number;
}
export interface ImgGalleryClassProps {
    className?: string;
}
export interface ImgGalleryProps extends ImgGalleryBaseProps, ImgGalleryClassProps {
}
export declare const ImgGallery: ({ className, imgs, buttonShowMoreImg, buttonHiddenMoreImg, loader, nLoader, ...props }: ImgGalleryProps) => React.JSX.Element;
