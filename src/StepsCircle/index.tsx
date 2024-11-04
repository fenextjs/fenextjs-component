import React, { CSSProperties, ReactNode, useMemo, useState } from "react";

/**
 * Properties for the StepsCircleItemProps component.
 */
export interface StepsCircleItemProps {
    children?: ReactNode;
    onClick?: () => void;
}

/**
 * Properties for the class of the StepsCircle component.
 */
export interface StepsCircleProps {
    /**
     * The class name for the component.
     */
    className?: string;

    items?: StepsCircleItemProps[];

    defaultStep?: number;
    valueStep?: number;

    disabled?: boolean;
}

export const StepsCircle = ({
    className = "",
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
                    fenext-steps-circle-${disabled ? "disabled" : ""}
                    ${className} 
                `}
                style={
                    {
                        "--nItems": items?.length,
                        "--step": step,
                    } as CSSProperties
                }
            >
                {items?.map((item, i) => {
                    return (
                        <>
                            <div
                                className={`
                                    fenext-steps-circle-item
                                    fenext-steps-circle-item-${step >= i ? "active" : ""}
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
                                    className={`fenext-steps-circle-item-circle`}
                                >
                                    {i + 1}
                                </div>
                                <div className="fenext-steps-circle-item-content">
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
