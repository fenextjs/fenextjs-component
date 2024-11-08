import React, { useMemo, useState } from "react";
import { SvgStar } from "fenextjs-svg/cjs/Start";
/**
 * Properties for the base InputRate component.
 */
export interface InputRateBaseProps {
    /**
     * Value of component.
     * @default undefined.
     * @min 0
     * @max 5
     */
    value?: number;
    /**
     * Default Value of component.
     * @default 0.
     * @min 0
     * @max 5
     */
    defaultValue?: number;
}

/**
 * Properties for the class of the InputRate component.
 */
export interface InputRateClassProps {
    /**
     * The class name for the component.
     */
    className?: string;
    /**
     * The class name for the content Star.
     */
    classNameContentStar?: string;
    /**
     * The class name for the Star.
     */
    classNameStar?: string;
    /**
     * The class name for the Star active.
     */
    classNameStarActive?: string;
    /**
     * The class name for the Star number.
     */
    classNameNumber?: string;
    /**
     * onChange value.
     */
    onChange?: (star: number) => void;
}

/**
 * Properties for the InputRate component.
 */
export interface InputRateProps
    extends InputRateBaseProps,
        InputRateClassProps {}

export const InputRate = ({
    className = "",
    classNameContentStar = "",
    classNameStar = "",
    classNameStarActive = "",
    classNameNumber = "",

    defaultValue = 0,
    value = undefined,
    onChange,
}: InputRateProps) => {
    const [data, setData] = useState(defaultValue);
    const start = useMemo(
        () => Math.max(0, Math.min(value ?? data ?? 0, 5)),
        [value, data],
    );

    // const elemento = e.currentTarget;
    // const posX = e.nativeEvent.offsetX;
    // const porcentajeX = (posX / elemento.offsetWidth) * 100;

    const onSelectStar = (e: React.ChangeEvent<HTMLInputElement>) => {
        const v = parseFloat(e.target.value);
        onChange?.(v);
        setData(v);
    };

    return (
        <>
            <div
                className={`fenext-input-rate ${className} `}
                style={
                    {
                        ["--start"]: start,
                        ["--startP"]: `${start * 20}%`,
                    } as React.CSSProperties
                }
            >
                <div
                    className={`fenext-input-rate-content-start ${classNameContentStar} `}
                >
                    <SvgStar
                        className={`fenext-input-rate-start ${classNameStar}`}
                    />
                    <SvgStar
                        className={`fenext-input-rate-start ${classNameStar}`}
                    />
                    <SvgStar
                        className={`fenext-input-rate-start ${classNameStar}`}
                    />
                    <SvgStar
                        className={`fenext-input-rate-start ${classNameStar}`}
                    />
                    <SvgStar
                        className={`fenext-input-rate-start ${classNameStar}`}
                    />
                </div>
                <div
                    className={`fenext-input-rate-content-start fenext-input-rate-content-start-active ${classNameContentStar} `}
                >
                    <SvgStar
                        className={`fenext-input-rate-start fenext-input-rate-start-active ${classNameStar} ${classNameStarActive}`}
                    />
                    <SvgStar
                        className={`fenext-input-rate-start fenext-input-rate-start-active ${classNameStar} ${classNameStarActive}`}
                    />
                    <SvgStar
                        className={`fenext-input-rate-start fenext-input-rate-start-active ${classNameStar} ${classNameStarActive}`}
                    />
                    <SvgStar
                        className={`fenext-input-rate-start fenext-input-rate-start-active ${classNameStar} ${classNameStarActive}`}
                    />
                    <SvgStar
                        className={`fenext-input-rate-start fenext-input-rate-start-active ${classNameStar} ${classNameStarActive}`}
                    />
                </div>
                <div
                    className={`fenext-input-rate-content-start fenext-input-rate-cap`}
                >
                    <input
                        type="range"
                        onChange={onSelectStar}
                        min={0}
                        max={5}
                        step={0.1}
                        value={start}
                        className={`fenext-input-rate-cap-input`}
                    />
                </div>
                <div className={`fenext-input-rate-number ${classNameNumber}`}>
                    {start}
                </div>
            </div>
        </>
    );
};
