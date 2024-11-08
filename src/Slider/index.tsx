import React, { ReactNode, useEffect, useRef, useState } from "react";
import {
    SvgPaginationPre,
    SvgPaginationNext,
} from "fenextjs-svg/cjs/Pagination";
import { _TProps } from "fenextjs-interface";
import { use_T } from "fenextjs-hook";

/**
 * Properties for the base Slider component.
 */
export interface SliderBaseProps extends _TProps {
    /**
     * Items of slider.
     */
    items?: ReactNode[];
    /**
     * N Items of slider in Desktop.
     */
    nItemsDesktop?: number;
    /**
     * N Items of slider in Table.
     */
    nItemsTable?: number;
    /**
     * N Items of slider in Phone.
     */
    nItemsPhone?: number;
    /**
     * Time of Delay by next move Slider.
     */
    timeDelay?: number;
    /**
     * Time of Dration by animation move Slider.
     */
    timeAnimation?: number;
    /**
     * If loop in Slider.
     */
    loop?: boolean;
    /**
     * Separation in Items Slider.
     */
    separationItems?: number;
}

/**
 * Properties for the class of the Slider component.
 */
export interface SliderClassProps {
    /**
     * The class name for the component.
     */
    className?: string;
    /**
     * The class name for the Content slider.
     */
    classNameContent?: string;
    /**
     * The class name for the item slider.
     */
    classNameItem?: string;
    /**
     * The class name for the Dogs slider.
     */
    classNameDogs?: string;
    /**
     * The class name for the Dog slider.
     */
    classNameDog?: string;
    /**
     * The class name for the Arrows slider.
     */
    classNameArrows?: string;
    /**
     * The class name for the Arrow Pre slider.
     */
    classNameArrowPre?: string;
    /**
     * The class name for the Arrow Next slider.
     */
    classNameArrowNext?: string;
}

/**
 * Properties for the Slider component.
 */
export interface SliderProps extends SliderBaseProps, SliderClassProps {}

export const Slider = ({
    className = "",
    classNameContent = "",
    classNameItem = "",
    classNameDogs = "",
    classNameDog = "",
    classNameArrows = "",
    classNameArrowPre = "",
    classNameArrowNext = "",

    items = [],
    nItemsDesktop = 3,
    nItemsTable = 2,
    nItemsPhone = 1,
    timeDelay = 4000,
    timeAnimation = 500,
    loop = true,
    separationItems = 16,
    ...props
}: SliderProps) => {
    const { _t } = use_T({ ...props });
    const SliderRef = useRef<HTMLDivElement>(null);
    const [currentDog, setCurrentDog] = useState(0);
    const [isHover, setIsHover] = useState(false);

    const getIsHover = () =>
        SliderRef.current?.classList.value.includes(
            "fenext-slider-content-hover",
        );

    const getNItems = () => {
        let nItems = nItemsDesktop;
        if (window.innerWidth <= 991) {
            nItems = nItemsTable;
        }
        if (window.innerWidth <= 575) {
            nItems = nItemsPhone;
        }
        return nItems;
    };

    const getSizeElement = () => {
        return (SliderRef.current?.clientWidth ?? 0) / getNItems();
    };

    const onSetCurrentDog = (f: (pre: number) => number) => (pre: number) => {
        const max = items.length - getNItems();
        const min = 0;
        const m = f(pre);

        let n = Math.max(min, Math.min(m, max));
        if (loop) {
            if (m > max) {
                n = 0;
            }
            if (m < 0) {
                n = max;
            }
        }
        SliderRef.current?.scrollTo?.(n * getSizeElement(), 0);
        return n;
    };

    const onScrollAdd = (add: number) => {
        setCurrentDog(onSetCurrentDog((pre) => pre + add));
    };
    const onScrollTo = (to: number) => {
        setCurrentDog(onSetCurrentDog(() => to));
    };

    const onScroll = (m: number) => () => {
        onScrollTo(m);
    };
    const onScrollToNext = () => {
        onScrollAdd(1);
    };
    const onScrollToPre = () => {
        onScrollAdd(-1);
    };
    const onLoop = async () => {
        if (loop) {
            await new Promise((r) => setTimeout(r, timeDelay));
            if (!getIsHover()) {
                onScrollToNext();
            }
            onLoop();
        }
    };
    const onLoadLoop = () => {
        onLoop();
    };
    const onLoadSlider = () => {
        if (SliderRef.current) {
            // onLoadTouchScroll(SliderRef.current);
            onLoadLoop();
        } else {
            setTimeout(onLoadSlider, 100);
        }
    };

    useEffect(onLoadSlider, []);

    return (
        <>
            <div
                className={`fenext-slider ${className} ${
                    loop ? "fenext-slider-loop" : ""
                }`}
                onMouseEnter={() => {
                    setIsHover(true);
                }}
                onMouseLeave={() => {
                    setIsHover(false);
                }}
                style={
                    {
                        ["--nItems"]: items.length,
                        ["--nItemsDesktop"]: nItemsDesktop,
                        ["--nItemsTable"]: nItemsTable,
                        ["--nItemsPhone"]: nItemsPhone,
                        ["--timeDelay"]: timeDelay,
                        ["--timeAnimation"]: timeAnimation,
                        ["--separationItems"]: `${separationItems / 16}rem`,
                    } as React.CSSProperties
                }
            >
                <div
                    ref={SliderRef}
                    className={`fenext-slider-content fenext-slider-content-${
                        isHover ? "hover" : ""
                    } ${classNameContent}`}
                >
                    {items?.map?.((item, i) => {
                        return (
                            <div
                                key={i}
                                className={`fenext-slider-item ${classNameItem}`}
                                style={
                                    {
                                        ["--i"]: i + 1,
                                    } as React.CSSProperties
                                }
                            >
                                {_t(item)}
                            </div>
                        );
                    })}
                </div>
                <div className={`fenext-slider-dogs ${classNameDogs}`}>
                    {new Array(
                        Math.max(1, Math.ceil(items.length - getNItems() + 1)),
                    )
                        .fill(1)
                        .map((e, i) => {
                            const n = e * i;
                            return (
                                <>
                                    <div
                                        onClick={onScroll(n)}
                                        className={`fenext-slider-dog ${classNameDog} ${
                                            currentDog == i ? "active" : ""
                                        }`}
                                    ></div>
                                </>
                            );
                        })}
                </div>
                <div
                    onClick={onScrollToPre}
                    className={`fenext-slider-arrow fenext-slider-arrow-pre ${classNameArrows} ${classNameArrowPre}`}
                >
                    <SvgPaginationPre />
                </div>
                <div
                    onClick={onScrollToNext}
                    className={`fenext-slider-arrow fenext-slider-arrow-next ${classNameArrows} ${classNameArrowNext}`}
                >
                    <SvgPaginationNext />
                </div>
            </div>
        </>
    );
};
