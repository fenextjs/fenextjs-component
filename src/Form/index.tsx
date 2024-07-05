import * as Yup from "yup";
import type { ObjectSchema, AnyObject } from "yup";
import React, { PropsWithChildren, useEffect } from "react";

import { env_log } from "fenextjs-functions/cjs/env_log";

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
     * The function to call when the disabled state of the form changes
     */
    onChangeDisable?: (disabled: boolean) => void;

    /**
     * Whether to show a loader while the form is submitting
     */
    loader?: boolean;

    /**
     * The function to call when the loader state of the form changes
     */
    onChangeLoader?: (disabled: boolean) => void;

    /**
     * The Yup schema to use for form validation
     */
    yup?: ObjectSchema<AnyObject, AnyObject, any, "">;

    /**
     * The function to handle form validation after validating with Yup
     */
    validateAfterYup?: RequestProps<D, R, E, T>;

    /**
     * The className to apply to the form element
     */
    className?: string;
}

export const Form = <D = any, R = any, E = any>({
    id = "",
    data,
    disabled = true,
    onChangeDisable,
    onChangeLoader,
    children,
    yup = Yup.object().shape({}),
    validateAfterYup,
    className = "",
    ...props
}: PropsWithChildren<FormProps<D, R, E>>) => {
    const {_t} = use_T({...props})
    const { pop } = useNotification({});
    const onSendForm = async () => {
        onChangeLoader?.(true);
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
        onChangeLoader?.(false);
    };

    const onSubmit = async (e: any) => {
        e.preventDefault();
        if (disabled) {
            return;
        }
        onValidateData(onSendForm, (error: string) => {
            pop({
                type: RequestResultTypeProps.ERROR,
                message: _t(error),
            });
        });
    };

    const onValidateData = (onOk: onOk | null, onError: onError | null) => {
        yup.validate(data)
            .then(async function () {
                try {
                    if (validateAfterYup) {
                        await validateAfterYup(data);
                    }
                    onChangeDisable?.(false);
                } catch (error: any) {
                    onChangeDisable?.(true);
                    env_log(error, {
                        name: "error",
                    });
                    onError?.(error.message);
                    return;
                }
                onOk?.();
            })
            .catch(function (error: any) {
                onChangeDisable?.(true);
                env_log(error, {
                    name: "onValidateData error",
                });
                onError?.(error.message);

                return;
            });
    };
    useEffect(() => {
        onValidateData(null, null);
    }, [data, yup]);

    return (
        <>
            <form className={`fenext-form ${className}`} onSubmit={onSubmit}>
                {_t(children)}
            </form>
        </>
    );
};
