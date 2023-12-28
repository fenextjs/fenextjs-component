import React, { CSSProperties } from "react";

export interface LavaLampGetNumberRandomProps {
    /**
     * The min number for generator number random.
     */
    min: number;
    /**
     * The max number for generator number random.
     */
    max: number;
}

/**
 * Properties for the base LavaLamp component.
 */
export interface LavaLampRangeStylesProps {
    top?: LavaLampGetNumberRandomProps;
    left?: LavaLampGetNumberRandomProps;
    scale?: LavaLampGetNumberRandomProps;
    moveX?: LavaLampGetNumberRandomProps;
    moveY?: LavaLampGetNumberRandomProps;
    time?: LavaLampGetNumberRandomProps;
}

export type LavaLampStylesElement = Pick<
    CSSProperties,
    | "borderRadius"
    | "aspectRatio"
    | "width"
    | "background"
    | "animationTimingFunction"
>;

/**
 * Properties for the base LavaLamp component.
 */
export interface LavaLampBaseProps {
    /**
     * The number items elements.
     */
    nItems?: number;
    /**
     * The styles of elements.
     */
    styles?: CSSProperties;
    /**
     * The styles of elements.
     */
    ranges?: LavaLampRangeStylesProps;
    /**
     * The styles of elemens.
     */
    stylesElement?: LavaLampStylesElement[];
}

/**
 * Properties for the class of the LavaLamp component.
 */
export interface LavaLampClassProps {
    /**
     * The class name for the component.
     */
    className?: string;
}

/**
 * Properties for the LavaLamp component.
 */
export interface LavaLampProps extends LavaLampBaseProps, LavaLampClassProps {}

export const LavaLamp = ({
    className = "",
    nItems = 20,
    styles = {
        width: "100%",
        height: "500px",
        background: `linear-gradient(45deg,var(--fenext-color-blue) 0%,var(--fenext-color-teal) 100%)`,
    },
    stylesElement = [
        {
            width: "150px",
            aspectRatio: "2/1.5",
            borderRadius: "30% 70% 70% 30% / 68% 30% 70% 32% ",
            background: `linear-gradient(45deg,var(--fenext-color-blue) 0%,var(--fenext-color-teal) 100%)`,
            animationTimingFunction: "ease",
        },
        {
            width: "100px",
            aspectRatio: "1 / 1",
            borderRadius: "30% 70% 44% 56% / 23% 46% 54% 77% ",
            background: `linear-gradient(75deg,var(--fenext-color-info) 0%,var(--fenext-color-indigo) 100%)`,
            animationTimingFunction: "ease-out",
        },
        {
            width: "100px",
            aspectRatio: "1 / 1",
            borderRadius: "87% 13% 65% 35% / 46% 46% 54% 54% ",
            background: `linear-gradient(135deg,var(--fenext-color-cyan) 0%,var(--fenext-color-purple) 100%)`,
            animationTimingFunction: "linear",
        },
    ],
    ranges = {},
}: LavaLampProps) => {
    const getNumberRandom = ({ min, max }: LavaLampGetNumberRandomProps) => {
        return Math.trunc(Math.random() * (max - min) + min);
    };
    const getPosRandom = () => {
        const pos: Pick<CSSProperties, "top" | "left"> = {
            top: `${getNumberRandom(ranges?.top ?? { min: 20, max: 80 })}%`,
            left: `${getNumberRandom(ranges?.left ?? { min: 20, max: 80 })}%`,
        };
        return pos;
    };
    const getVarRandom = () => {
        return {
            ["--scale"]:
                getNumberRandom(ranges?.scale ?? { min: 50, max: 100 }) / 10,
            ["--move-X"]: `${getNumberRandom(
                ranges?.moveX ?? { min: -300, max: 300 },
            )}%`,
            ["--move-Y"]: `${getNumberRandom(
                ranges?.moveY ?? { min: -300, max: 300 },
            )}%`,
            ["--time"]: `${
                getNumberRandom(ranges?.time ?? { min: 30, max: 50 }) / 10
            }s`,
        } as CSSProperties;
    };
    return (
        <>
            <div className={`fenext-lava-lamp ${className} `} style={styles}>
                {new Array(nItems).fill(1).map((e, i) => {
                    return (
                        <>
                            <div
                                key={e * i}
                                className="fenext-lava-lamp-item"
                                style={{
                                    ...stylesElement[
                                        Math.trunc(i % stylesElement.length)
                                    ],
                                    ...getPosRandom(),
                                    ...getVarRandom(),
                                }}
                            ></div>
                        </>
                    );
                })}
            </div>
        </>
    );
};
