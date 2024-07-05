import React, { ReactNode, useState } from "react";

import { Check } from "fenextjs-svg/cjs/Check";
import { env_log } from "fenextjs-functions/cjs/env_log";
import { _TProps } from "fenextjs-interface";
import { use_T } from "fenextjs-hook";

/**
 * Interface that defines CSS class properties for a radio input component.
 */
export interface InputRadioClassProps {
    /**
     * CSS class name for content the radio.
     */
    classNameContent?: string;

    /**
     * CSS class name for the radio label.
     */
    classNameLabel?: string;

    /**
     * CSS class name for the active radio label.
     */
    classNameLabelActive?: string;

    /**
     * CSS class name for the inactive radio label.
     */
    classNameLabelInactive?: string;

    /**
     * CSS class name for the text next to the radio.
     */
    classNameText?: string;

    /**
     * CSS class name for the container that holds the radio and its label.
     */
    classNameContentRadio?: string;

    /**
     * CSS class name for the container that holds the radio and its label when the radio is active.
     */
    classNameContentRadioActive?: string;

    /**
     * CSS class name for the container that holds the radio and its label when the radio is inactive.
     */
    classNameContentRadioInactive?: string;

    /**
     * CSS class name for the radio input element.
     */
    classNameRadio?: string;

    /**
     * CSS class name for the radio input element when the radio is active.
     */
    classNameRadioActive?: string;

    /**
     * CSS class name for the radio input element when the radio is inactive.
     */
    classNameRadioInactive?: string;

    /**
     * Icon to display next to the radio.
     */
    icon?: ReactNode;
}

/**
 * Interface that defines base properties for a radio Item.
 */
export interface InputRadioItemProps<T> {
    /**
     * The id to display next to the item radio.
     */
    id: string;
    /**
     * The label to display next to the item radio.
     */
    label?: ReactNode;
    /**
     * The data of the item radio.
     */
    data?: T;
}

/**
 * Interface that defines base properties for a radio input component.
 */
export interface InputRadioBaseProps<T = any> extends _TProps {
    /**
     * Items of Input Radio.
     */
    items?: InputRadioItemProps<T>[];

    /**
     * The position of the label relative to the radio.
     */
    labelPosition?: "right" | "left";

    /**
     * The name attribute of the radio input element.
     */
    name?: string;

    /**
     * A callback function to execute when the radio is toggled.
     * Receives a boolean value indicating whether the radio is checked or not.
     */
    onChange?: (e: InputRadioItemProps<T>) => void;

    /**
     * The default value of the radio when it is first rendered.
     */
    defaultValue?: InputRadioItemProps<T>;

    /**
     * A boolean value indicating whether to use the value attribute of the radio input element or not.
     */
    useValue?: boolean;

    /**
     * The value of the radio input element.
     */
    value?: InputRadioItemProps<T>;

    /**
     * A boolean value indicating whether the radio is disabled or not.
     */
    disabled?: boolean;
}

/**
 * Interface that defines all properties for a radio input component.
 * Extends InputRadioBaseProps and InputRadioClassProps.
 */
export interface InputRadioProps<T>
    extends InputRadioBaseProps<T>,
        InputRadioClassProps {}

/**
 * Component that renders a radio input.
 * Takes an InputRadioProps object as props.
 */
export const InputRadio = <T = any,>({
    classNameContent = "",
    classNameLabel = "",
    classNameLabelActive = "",
    classNameLabelInactive = "",
    classNameText = "",

    classNameContentRadio = "",
    classNameContentRadioActive = "",
    classNameContentRadioInactive = "",

    classNameRadio = "",
    classNameRadioActive = "",
    classNameRadioInactive = "",

    labelPosition = "right",
    name = "",
    onChange = (e) => {
        env_log(e, {
            name: "input radio onchange",
        });
    },
    defaultValue = undefined,
    useValue = false,
    value = undefined,
    disabled = false,
    icon = <Check />,

    items = [],
    ...props
}: InputRadioProps<T>) => {
    const {_t} = use_T({...props})
    const [checked, setChecked] = useState(defaultValue);

    const onChecked = (i: InputRadioItemProps<T>) => () => {
        if (disabled) {
            return;
        }
        setChecked(i);
        onChange(i);
    };

    return (
        <div className={`fenext-content-radio ${classNameContent}`}>
            {items.map((item, i) => {
                const isCheck = (useValue ? value?.id : checked?.id) == item.id;
                return (
                    <label
                        key={i}
                        className={`fenext-input-radio ${labelPosition} ${classNameLabel}  ${
                            isCheck
                                ? classNameLabelActive
                                : classNameLabelInactive
                        }`}
                        onClick={onChecked(item)}
                    >
                        <input
                            type="radio"
                            name={name}
                            defaultChecked={item?.id == defaultValue?.id}
                            className={`fenext-input-radio-input fenext-input-radio-input-id-${item.id}`}
                        />
                        <span
                            className={`fenext-input-radio-box ${classNameContentRadio} ${
                                isCheck
                                    ? classNameContentRadioActive
                                    : classNameContentRadioInactive
                            }`}
                        >
                            <span
                                className={`
                                fenext-input-radio-box-icon
                                ${classNameRadio} ${
                                    isCheck
                                        ? classNameRadioActive
                                        : classNameRadioInactive
                                }`}
                            >
                                {isCheck && icon}
                            </span>
                        </span>
                        <span
                            className={`fenext-input-radio-text ${classNameText}`}
                        >
                            {_t(item.label)}
                        </span>
                    </label>
                );
            })}
        </div>
    );
};
