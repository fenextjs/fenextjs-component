import React from "react";
export interface InputSwichClassProps {
    className?: string;
    classNameCicle?: string;
    classNameInactive?: string;
    classNameActive?: string;
}
export interface InputSwichBaseProps {
    name?: string;
    onChange?: (e: boolean) => void;
    defaultValue?: boolean;
    useValue?: boolean;
    value?: boolean;
    disabled?: boolean;
    onValidateCheck?: (data: boolean) => Promise<void | boolean> | void | boolean;
}
export interface InputSwichProps extends InputSwichBaseProps, InputSwichClassProps {
}
export declare const InputSwich: ({ className, classNameActive, classNameInactive, classNameCicle, name, onChange, defaultValue, useValue, value, disabled, onValidateCheck, }: InputSwichProps) => React.JSX.Element;
