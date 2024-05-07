import type { ObjectSchema, AnyObject } from "yup";
import React, { PropsWithChildren } from "react";
import { RequestProps, RequestResultDataProps, RequestResultTypeProps } from "fenextjs-interface/cjs/Request";
import { _TProps } from "fenextjs-interface";
export type onError = (error: string) => void;
export type onOk = () => Promise<void> | void;
export interface FormProps<D = any, R = any, E = any, T = RequestResultTypeProps> extends PropsWithChildren, _TProps {
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
export declare const Form: <D = any, R = any, E = any>({ id, data, disabled, onChangeDisable, onChangeLoader, children, yup, validateAfterYup, className, _t, ...props }: PropsWithChildren<FormProps<D, R, E>>) => React.JSX.Element;
