import React from "react";
import { _TProps } from "fenextjs-interface";
export interface InputCheckboxClassProps {
    classNameLabel?: string;
    classNameLabelActive?: string;
    classNameLabelInactive?: string;
    classNameText?: string;
    classNameContentCheckbox?: string;
    classNameContentCheckboxActive?: string;
    classNameContentCheckboxInactive?: string;
    classNameCheckbox?: string;
    classNameCheckboxActive?: string;
    classNameCheckboxInactive?: string;
    icon?: any;
}
export interface InputCheckboxBaseProps<VT = any, VF = any> extends _TProps {
    label?: any;
    labelPosition?: "right" | "left";
    name?: string;
    onChange?: (e: boolean) => void;
    onActive?: () => void;
    onInactive?: () => void;
    onActiveValue?: (data?: VT) => void;
    onInactiveValue?: (data?: VF) => void;
    valueActive?: VT;
    valueInactive?: VF;
    defaultValue?: boolean;
    useValue?: boolean;
    value?: boolean;
    disabled?: boolean;
    onValidateCheck?: () => Promise<void> | void;
    optional?: boolean;
    optionalText?: string;
    required?: boolean;
    requiredText?: string;
}
export interface InputCheckboxProps<VT = any, VF = any> extends InputCheckboxBaseProps<VT, VF>, InputCheckboxClassProps {
}
export declare const InputCheckbox: <VT = any, VF = any>({ classNameLabel, classNameLabelActive, classNameLabelInactive, classNameText, classNameContentCheckbox, classNameContentCheckboxActive, classNameContentCheckboxInactive, classNameCheckbox, classNameCheckboxActive, classNameCheckboxInactive, label, labelPosition, name, onChange, defaultValue, useValue, value, disabled, icon, onValidateCheck, optional, optionalText, required, requiredText, onActive, onActiveValue, onInactive, onInactiveValue, valueActive, valueInactive, ...props }: InputCheckboxProps<VT, VF>) => React.JSX.Element;
