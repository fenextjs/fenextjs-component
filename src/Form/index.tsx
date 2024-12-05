import React, { PropsWithChildren } from "react";
import { useDataLayer } from "fenextjs-hook";

export interface FormProps extends PropsWithChildren {
    /**
     * The ID of the form
     */
    id?: string;

    /**
     * The function to handle the form submission
     */
    onSubmit?: () => Promise<void>;

    /**
     * Whether the form is disabled
     */
    disabled?: boolean;

    /**
     * The className to apply to the form element
     */
    className?: string;
}

export const Form = ({
    id = "",
    disabled = true,
    children,
    className = "",
    onSubmit = async () => {},
}: FormProps) => {
    const { push } = useDataLayer({});

    const onSendForm = async (e: any) => {
        e.preventDefault();
        if (disabled) {
            return;
        }
        try {
            await onSubmit?.();
            if (id != "") {
                push({
                    event: `form-${id}`,
                });
            }
        } catch (error) {
            error;
        }
    };

    return (
        <>
            <form className={`fenext-form ${className}`} onSubmit={onSendForm}>
                {children}
            </form>
        </>
    );
};
