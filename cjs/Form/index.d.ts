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
     * Whether to show a loader while the form is submitting
     */
    loader?: boolean;
    /**
     * The className to apply to the form element
     */
    className?: string;
}
export declare const Form: <D = any, R = any, E = any>({ id, data, disabled, children, className, ...props }: PropsWithChildren<FormProps<D, R, E>>) => React.JSX.Element;
