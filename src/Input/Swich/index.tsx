import React, { useMemo, useState } from "react";

/**
 * Interface that defines CSS class properties for a swich input component.
 */
export interface InputSwichClassProps {
    /**
     * CSS class name for the swich.
     */
    className?: string;

    /**
     * CSS class name for the circle swich.
     */
    classNameCicle?: string;

    /**
     * CSS class name for the inactive swich.
     */
    classNameInactive?: string;

    /**
     * CSS class name for the active swich.
     */
    classNameActive?: string;
}

/**
 * Interface that defines base properties for a swich input swich.
 */
export interface InputSwichBaseProps {
    /**
     * The name attribute of the swich input element.
     */
    name?: string;

    /**
     * A callback function to execute when the swich is toggled.
     * Receives a boolean value indicating whether the swich is checked or not.
     */
    onChange?: (e: boolean) => void;

    /**
     * The default value of the swich when it is first rendered.
     */
    defaultValue?: boolean;

    /**
     * A boolean value indicating whether to use the value attribute of the swich input element or not.
     */
    useValue?: boolean;

    /**
     * The value of the swich input element.
     */
    value?: boolean;

    /**
     * A boolean value indicating whether the swich is disabled or not.
     */
    disabled?: boolean;

    /**
     * A callback function to execute when the swich is validated.
     * Should return a promise or void.
     */
    onValidateCheck?: (
        data: boolean,
    ) => Promise<void | boolean> | void | boolean;
}

/**
 * Interface that defines all properties for a swich input component.
 * Extends InputSwichBaseProps and InputSwichClassProps.
 */
export interface InputSwichProps
    extends InputSwichBaseProps,
        InputSwichClassProps {}

/**
 * Component that renders a swich input.
 * Takes an InputSwichProps object as props.
 */
export const InputSwich = ({
    className = "",
    classNameActive = "",
    classNameInactive = "",
    classNameCicle = "",

    name = "",
    onChange,
    defaultValue = false,
    useValue = false,
    value = false,
    disabled = false,
    onValidateCheck = async () => {},
}: InputSwichProps) => {
    const [checked_, setChecked] = useState(defaultValue === true);
    const checked = useMemo(
        () => (useValue ? value : checked_),
        [useValue, value, checked_],
    );

    const onChecked = async () => {
        try {
            if (disabled) {
                return;
            }
            const r = await onValidateCheck(checked);
            if (r === false) {
                throw new Error("1");
            }
            setChecked(!checked);
            onChange?.(!checked);
        } catch {
            return;
        }
    };

    return (
        <label
            className={`fenext-input-swich ${className}  ${
                checked ? classNameActive : classNameInactive
            }`}
        >
            <input
                type="checkbox"
                name={name}
                checked={checked}
                onChange={onChecked}
                className="fenext-input-swich-input"
            />
            <span
                className={`fenext-input-swich-circle ${classNameCicle}`}
            ></span>
        </label>
    );
};
