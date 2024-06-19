import React, { useMemo } from "react";
import { useData } from "fenextjs-hook";

/**
 * Interface that defines base properties for a swich input swich.
 */
export interface InputColorProps {
    className?: string;

    defaultValue?: string;
    value?: string;
    onChange?: (data: string) => void;

    disabled?: boolean;
}

/**
 * Component that renders a swich input.
 * Takes an InputColorProps object as props.
 */
export const InputColor = ({
    className = "",
    defaultValue,
    value,
    onChange,
    disabled,
}: InputColorProps) => {
    const { data: data_, setData } = useData<string>(defaultValue ?? "", {
        onChangeDataAfter: onChange,
    });

    const data = useMemo(() => value ?? data_, [value, data_]);

    return (
        <label className={`fenext-input-color ${className}`}>
            <input
                type="color"
                className="fenext-input-color-input"
                value={data}
                onChange={(e) => {
                    setData(e.target.value);
                }}
                disabled={disabled}
            />
        </label>
    );
};
