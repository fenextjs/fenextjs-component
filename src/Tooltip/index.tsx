import { Portal } from "../Portal";
import { use_T } from "fenextjs-hook";
import { _TProps } from "fenextjs-interface";
import React, { ReactNode, useRef, useState } from "react";

export type TooltipPositionX = "center" | "right" | "left";
export type TooltipPositionY = "center" | "top" | "bottom";

/**
 * Properties for the base Tooltip component.
 */
export interface TooltipProps extends _TProps {
    /**
     * The class name for the component.
     */
    className?: string;
    /**
     * The children for the component.
     */
    children?: ReactNode;
    /**
     * The children for the component.
     */
    tooltip?: ReactNode;
    /**
     * The position x for the component.
     */
    positionX?: TooltipPositionX;
    /**
     * The position y for the component.
     */
    positionY?: TooltipPositionY;
}

export const Tooltip = ({
    className = "",
    children,
    tooltip,
    positionX = "center",
    positionY = "top",
    ...props
}: TooltipProps) => {
    const { _t } = use_T({ ...props });
    const ref = useRef<HTMLDivElement>(null);
    const refTooltipContent = useRef<HTMLDivElement>(null);

    type configTooltipType = {
        "--element-width"?: string
        "--element-height"?: string
        "--element-top"?: string
        "--element-left"?: string
        "--element-right"?: string
        "--element-bottom"?: string
        "--element-center-x"?: string
        "--element-center-y"?: string
    }

    const [configTooltip, setConfigTooltip] = useState<configTooltipType | undefined>(undefined);


    const onShowTooltip = () => {
        const target = ref?.current as HTMLElement
        const tooltipElement = refTooltipContent?.current;
        if (tooltipElement) {
            const bounding = target.getBoundingClientRect();
            setConfigTooltip({
                "--element-width": `${tooltipElement.offsetWidth}px`,
                "--element-height": `${tooltipElement.offsetHeight}px`,
                "--element-top": `${bounding.top}px`,
                "--element-left": `${bounding.left}px`,
                "--element-right": `${bounding.right}px`,
                "--element-bottom": `${bounding.bottom}px`,
                "--element-center-x": `${(bounding.right - bounding.left) / 2 + bounding.left}px`,
                "--element-center-y": `${(bounding.bottom - bounding.top) / 2 + bounding.top}px`,
            })
        };
    }

    return (
        <>
            <Portal>
                <div 
                    ref={refTooltipContent}
                    className={`
                        fenext-tooltip-content 
                        fenext-tooltip-content-x-${positionX} 
                        fenext-tooltip-content-y-${positionY} 
                        fenext-tooltip-content-${configTooltip?"active":"inactive"}
                    `}
                    onMouseEnter={onShowTooltip}
                    onMouseLeave={()=>{setConfigTooltip(undefined)}}
                    style={configTooltip as any}
                >
                    {tooltip}
                </div>
            </Portal>
            <div
                ref={ref}
                className={`fenext-tooltip ${className} `}
                onMouseEnter={onShowTooltip}
                onClick={onShowTooltip}
                onMouseLeave={()=>{setConfigTooltip(undefined)}}
            >
                <div className={`fenext-tooltip-children`}>{_t(children)}</div>
            </div>
        </>
    );
}
