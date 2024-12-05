import React, { PropsWithChildren } from "react";
export interface FormProps extends PropsWithChildren {
    id?: string;
    onSubmit?: () => Promise<void>;
    disabled?: boolean;
    className?: string;
}
export declare const Form: ({ id, disabled, children, className, onSubmit, }: FormProps) => React.JSX.Element;
