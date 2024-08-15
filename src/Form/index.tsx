import React, { PropsWithChildren } from "react";

import { useNotification } from "fenextjs-hook/cjs/useNotification";
import {
    RequestProps,
    RequestResultDataProps,
    RequestResultTypeProps,
} from "fenextjs-interface/cjs/Request";
import { _TProps } from "fenextjs-interface";
import { use_T } from "fenextjs-hook";
export type onError = (error: string) => void;
export type onOk = () => Promise<void> | void;

export interface FormProps<
    D = any,
    R = any,
    E = any,
    T = RequestResultTypeProps,
> extends PropsWithChildren,
        _TProps {
    /**
     * The ID of the form
     */
    id?: string;

    /**
     * The initial data of the form
     */
    data: D;

    /**
     * The function to handle the form submission
     */
    onSubmit?: RequestProps<D, R, E, T>;

    /**
     * The function to call after a successful form submission
     */
    onAfterSubmit?: (data: RequestResultDataProps<R, E, T>) => void;

    /**
     * Whether the form is disabled
     */
    disabled?: boolean;

    /**
     * Whether to show a loader while the form is submitting
     */
    loader?: boolean;

    /**
     * The className to apply to the form element
     */
    className?: string;
}

export const Form = <D = any, R = any, E = any>({
    id = "",
    data,
    disabled = true,
    children,
    className = "",
    ...props
}: PropsWithChildren<FormProps<D, R, E>>) => {
    const { _t } = use_T({ ...props });
    const { pop } = useNotification({});
    const onSendForm = async () => {
        try {
            const result = await props?.onSubmit?.(data);
            pop({
                type: result?.type,
                message: _t(result?.message ?? ""),
            });
            if (result?.type == RequestResultTypeProps.OK) {
                if (id != "") {
                    const w: any = window;
                    if (w?.dataLayer?.push) {
                        w.dataLayer?.push?.({
                            event: `form-${id}`,
                        });
                    }
                }
                props?.onAfterSubmit?.(result);
            }
        } catch (error: any) {
            pop({
                type: RequestResultTypeProps.ERROR,
                message: _t(error?.message ?? error ?? ""),
            });
        }
    };

    const onSubmit = async (e: any) => {
        e.preventDefault();
        if (disabled) {
            return;
        }
        onSendForm();
    };

    return (
        <>
            <form className={`fenext-form ${className}`} onSubmit={onSubmit}>
                {_t(children)}
            </form>
        </>
    );
};
