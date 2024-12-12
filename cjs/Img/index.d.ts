import React, { SyntheticEvent } from "react";
import { ImgDataProps } from "fenextjs-interface/cjs/Img";
export interface ImgBaseProps extends ImgDataProps {
    imgIf404?: string;
    layers?: Pick<React.CSSProperties, "background" | "mixBlendMode" | "filter" | "opacity">[];
    onErrorImg?: (e: SyntheticEvent<HTMLImageElement, Event>) => void;
    onClick?: () => void;
    loader?: boolean;
    onLoad?: () => void;
}
export interface ImgClassProps {
    className?: string;
    classNameImg?: string;
}
export interface ImgProps extends ImgBaseProps, ImgClassProps {
}
export declare const Img: ({ className, classNameImg, id, name, alt, src, srcMin1920, srcMin1680, srcMin1440, srcMin1024, srcMin992, srcMin768, srcMin575, imgIf404, layers, onErrorImg: onErrorImg_, onClick, loader, onLoad, }: ImgProps) => React.JSX.Element;
