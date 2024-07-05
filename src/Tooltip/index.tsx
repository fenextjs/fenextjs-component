import { use_T } from "fenextjs-hook";
import { _TProps } from "fenextjs-interface";
import React, { ReactNode, useCallback, useMemo, useRef } from "react";
import * as ReactDOM from "react-dom";

export type TooltipPositionX = "center" | "right" | "left";
export type TooltipPositionY = "center" | "top" | "bottom";

/**
 * Properties for the base Tooltip component.
 */
export interface TooltipBaseProps extends _TProps {
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

/**
 * Properties for the class of the Tooltip component.
 */
export interface TooltipClassProps {
    /**
     * The class name for the component.
     */
    className?: string;
}

/**
 * Properties for the Tooltip component.
 */
export interface TooltipProps extends TooltipBaseProps, TooltipClassProps {}

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
    const uuid = useMemo(
        () => `${Math.ceil(new Date().getTime() * Math.random())}`,
        [],
    );
    const onDefTooltipPos = (target: HTMLElement) => {
        const tooltipElement = document.getElementById("fenext-tooltip");
        if (tooltipElement) {
            const bounding = target.getBoundingClientRect();

            tooltipElement.style.setProperty(
                "--element-width",
                `${tooltipElement.offsetWidth}px`,
            );
            tooltipElement.style.setProperty(
                "--element-height",
                `${tooltipElement.offsetHeight}px`,
            );
            tooltipElement.style.setProperty(
                "--element-top",
                `${bounding.top}px`,
            );
            tooltipElement.style.setProperty(
                "--element-left",
                `${bounding.left}px`,
            );
            tooltipElement.style.setProperty(
                "--element-right",
                `${bounding.right}px`,
            );
            tooltipElement.style.setProperty(
                "--element-bottom",
                `${bounding.bottom}px`,
            );

            tooltipElement.style.setProperty(
                "--element-center-x",
                `${(bounding.right - bounding.left) / 2 + bounding.left}px`,
            );
            tooltipElement.style.setProperty(
                "--element-center-y",
                `${(bounding.bottom - bounding.top) / 2 + bounding.top}px`,
            );
        }
    };

    const onDefTooltip = useCallback(
        (target: HTMLElement) => {
            let tooltipElement = document.getElementById("fenext-tooltip");
            if (!tooltipElement) {
                tooltipElement = document.createElement("div");
                tooltipElement.id = "fenext-tooltip";
                document.body.append(tooltipElement);
            }
            tooltipElement = document.getElementById("fenext-tooltip");
            if (tooltipElement) {
                tooltipElement.classList.value = `fenext-tooltip-content fenext-tooltip-content-x-${positionX} fenext-tooltip-content-y-${positionY}`;
                if (!(`${tooltipElement.getAttribute("uuid") ?? ""}` == uuid)) {
                    tooltipElement.setAttribute("uuid", uuid);
                    ReactDOM.render(<>{tooltip}</>, tooltipElement);
                }
                setTimeout(() => {
                    onDefTooltipPos(target);
                }, 100);
            }
        },
        [positionX, positionY, tooltip],
    );

    const onShowTooltip = () => {
        if (ref.current) {
            onDefTooltip(ref.current);
        }
    };
    return (
        <>
            <div
                ref={ref}
                className={`fenext-tooltip ${className} `}
                onMouseEnter={onShowTooltip}
                onClick={onShowTooltip}
            >
                <div className={`fenext-tooltip-children`}>{_t(children)}</div>
            </div>
        </>
    );
};
