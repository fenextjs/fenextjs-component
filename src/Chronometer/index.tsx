import { getTimeToText, getTimeToTextProps } from "fenextjs-functions";
import { useData } from "fenextjs-hook";
import React, { useCallback, useEffect } from "react";

/**
 * Properties for the base Chronometer component.
 */
export interface ChronometerBaseProps {
    /**
     * The time in seconds for the component.
     */
    time?: number;
    /**
     * The change time for the component.
     */
    onChange?: (time: number) => void;
    /**
     * The min in seconds for the component.
     */
    min?: number;
    /**
     * The optionsTimeToText for the component.
     */
    optionsTimeToText?: getTimeToTextProps;
}

/**
 * Properties for the class of the Chronometer component.
 */
export interface ChronometerClassProps {
    /**
     * The class name for the component.
     */
    className?: string;
}

/**
 * Properties for the Chronometer component.
 */
export interface ChronometerProps
    extends ChronometerBaseProps,
    ChronometerClassProps { }

export const Chronometer = ({
    className = "",
    time = 100,
    min = 0,
    onChange,
    optionsTimeToText = {
        days: false,
        hours: true,
        minutes: true,
        seconds: true
    },
}: ChronometerProps) => {
    const { data, setData } = useData<number>(time, {
        onChangeDataAfter: onChange,
    });

    const onReduce = useCallback(() => {
        setData(Math.max(data - 1, min));
    }, [data]);

    useEffect(() => {
        const intervalId = setInterval(onReduce, 1000);
        return () => clearInterval(intervalId);
    }, [data]);

    return (
        <>
            <div className={`fenext-chronometer ${className} `}>
                {getTimeToText(
                    new Date(0, 0, 0, 0, 0, data, 0),
                    optionsTimeToText,
                )}
            </div>
        </>
    );
};
