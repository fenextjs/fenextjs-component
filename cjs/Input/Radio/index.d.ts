import React, { ReactNode } from "react";
import { _TProps } from "fenextjs-interface";
export interface InputRadioClassProps {
    classNameContent?: string;
    classNameLabel?: string;
    classNameLabelActive?: string;
    classNameLabelInactive?: string;
    classNameText?: string;
    classNameContentRadio?: string;
    classNameContentRadioActive?: string;
    classNameContentRadioInactive?: string;
    classNameRadio?: string;
    classNameRadioActive?: string;
    classNameRadioInactive?: string;
    icon?: ReactNode;
}
export interface InputRadioItemProps<T> {
    id: string;
    label?: ReactNode;
    data?: T;
}
export interface InputRadioBaseProps<T = any> extends _TProps {
    items?: InputRadioItemProps<T>[];
    labelPosition?: "right" | "left";
    name?: string;
    onChange?: (e: InputRadioItemProps<T>) => void;
    onChangeData?: (e: T) => void;
    defaultValue?: InputRadioItemProps<T>;
    value?: InputRadioItemProps<T>;
    disabled?: boolean;
}
export interface InputRadioProps<T> extends InputRadioBaseProps<T>, InputRadioClassProps {
}
export declare const InputRadio: <T = any>({ classNameContent, classNameLabel, classNameLabelActive, classNameLabelInactive, classNameText, classNameContentRadio, classNameContentRadioActive, classNameContentRadioInactive, classNameRadio, classNameRadioActive, classNameRadioInactive, labelPosition, name, onChange, onChangeData, defaultValue, value, disabled, icon, items, ...props }: InputRadioProps<T>) => React.JSX.Element;
