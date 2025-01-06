import { ProgressLine ,ProgressLineClassProps} from "../Progress/Line";
import React, { CSSProperties, ReactNode, useMemo, useState } from "react";

/**
 * Properties for the StepsCircleItemProps component.
 */
export interface StepsCircleItemProps {
    children?: ReactNode;
    onClick?: () => void;
}

export interface StepsCircleClassProps {
    /**
     * The class name for the component.
     */
    className?: string;
    classNameDisabled?: string;
    classNameItem?: string;
    classNameItemCircle?: string;
    classNameItemContent?: string;
    classNameItemActive?: string;
    classNameItemActiveCircle?: string;
    classNameItemActiveContent?: string;
    classNameProgressLine?:ProgressLineClassProps
}

/**
 * Properties for the class of the StepsCircle component.
 */
export interface StepsCircleProps extends StepsCircleClassProps {
    items?: StepsCircleItemProps[];

    defaultStep?: number;
    valueStep?: number;

    disabled?: boolean;
}

export const StepsCircle = ({
    className = "",
    classNameDisabled = "",
    classNameItem = "",
    classNameItemCircle = "",
    classNameItemContent = "",
    classNameItemActive = "",
    classNameItemActiveCircle = "",
    classNameItemActiveContent = "",
    classNameProgressLine={},
    defaultStep = undefined,
    valueStep = undefined,
    disabled = false,
    items = [],
}: StepsCircleProps) => {
    const [step_, setStep] = useState(defaultStep ?? 0);

    const step = useMemo(() => valueStep ?? step_, [step_, valueStep]);

    return (
        <>
            <div
                className={`
                    fenext-steps-circle 
                    fenext-steps-circle-${disabled ? `disabled ${classNameDisabled}` : ""}
                    ${className} 
                `}
                style={
                    {
                        "--nItems": items?.length,
                        "--step": step,
                    } as CSSProperties
                }
            >
                {
                    items?.length &&  items?.length>1&&
                    <ProgressLine p={100 /( items?.length  - 1)* (step)} showP={false} {...classNameProgressLine}  />
                }
                {items?.map((item, i) => {
                    const active = step >= i;
                    return (
                        <>
                            <div
                                className={`
                                    fenext-steps-circle-item
                                    fenext-steps-circle-item-${active ? `active ${classNameItemActive}` : ""}
                                    ${classNameItem}
                                `}
                                onClick={() => {
                                    if (disabled) {
                                        return;
                                    }
                                    item?.onClick?.();
                                    setStep(i);
                                }}
                            >
                                <div
                                    className={`fenext-steps-circle-item-circle ${classNameItemCircle} ${active ? `${classNameItemActiveCircle}` : ""}`}
                                >
                                    {i + 1}
                                </div>
                                <div
                                    className={`fenext-steps-circle-item-content ${classNameItemContent} ${active ? `${classNameItemActiveContent}` : ""}`}
                                >
                                    {item?.children}
                                </div>
                            </div>
                        </>
                    );
                })}
            </div>
        </>
    );
};
