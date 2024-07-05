import React, { ReactNode, useEffect, useState } from "react";
import { parseNumberCount } from "fenextjs-functions/cjs/parse/NumberCount";
import { _TProps } from "fenextjs-interface";
import {  sleep } from "fenextjs-functions";
import { use_T } from "fenextjs-hook";

/**
 * Properties for the base Counter component.
 */
export interface CounterBaseProps extends _TProps {
    /**
     * Number show.
     */
    number: number;
    /**
     * Text show.
     * @default undefined
     */
    text?: ReactNode;
    /**
     * Time for increment Number.
     * @default 1000
     */
    time?: number;
    /**
     * N decimal show in Number.
     * @default 2
     */
    decimal?: number;
    /**
     * Format Number.
     * @default parseNumberCount
     */
    parseNumber?: (n: number) => ReactNode;
}

/**
 * Properties for the class of the Counter component.
 */
export interface CounterClassProps {
    /**
     * The class name for the component.
     */
    className?: string;
    /**
     * The class name for the Number.
     */
    classNameNumber?: string;
    /**
     * The class name for the Text.
     */
    classNameText?: string;
}

/**
 * Properties for the Counter component.
 */
export interface CounterProps extends CounterBaseProps, CounterClassProps {}

export const Counter = ({
    className = "",
    classNameNumber = "",
    classNameText = "",

    number = 0,
    text = undefined,
    time = 1000,
    decimal = 2,
    parseNumber = parseNumberCount,
    ...props
}: CounterProps) => {
    const {_t} = use_T({...props})
    const [numberShow, setNumberShow] = useState(0);
    const onIncrementeNumber = async () => {
        const dis = number - numberShow;
        const inc = dis / (time / 50);
        for (let i = 0; i < Math.abs(dis); i += Math.abs(inc)) {
            setNumberShow((pre) => pre + inc);
            await sleep(50);
        }
        setNumberShow(number);
    };
    useEffect(() => {
        onIncrementeNumber();
    }, [number]);

    const formatNumber = (n: number) => {
        if (n % 1 === 0) {
            return n;
        }
        return parseFloat(n.toFixed(decimal));
    };

    return (
        <>
            <div className={`fenext-counter ${className} `}>
                {text && (
                    <div className={`fenext-counter-text ${classNameText} `}>
                        {_t(text)}
                    </div>
                )}
                <div className={`fenext-counter-number ${classNameNumber} `}>
                    <span className={`fenext-counter-number-rel `}>
                        {parseNumber(formatNumber(number))}
                    </span>
                    <span className={`fenext-counter-number-abs `}>
                        {parseNumber(formatNumber(numberShow))}
                    </span>
                </div>
            </div>
        </>
    );
};
