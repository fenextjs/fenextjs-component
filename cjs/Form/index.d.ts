import React, { PropsWithChildren } from "react";
import { RequestProps, RequestResultDataProps, RequestResultTypeProps } from "fenextjs-interface/cjs/Request";
import { _TProps } from "fenextjs-interface";
export type onError = (error: string) => void;
export type onOk = () => Promise<void> | void;
export interface FormProps<D = any, R = any, E = any, T = RequestResultTypeProps> extends PropsWithChildren, _TProps {
    id?: string;
    data: D;
    onSubmit?: RequestProps<D, R, E, T>;
    onAfterSubmit?: (data: RequestResultDataProps<R, E, T>) => void;
    disabled?: boolean;
    loader?: boolean;
    className?: string;
}
export declare const Form: <D = any, R = any, E = any>({ id, data, disabled, children, className, ...props }: PropsWithChildren<FormProps<D, R, E>>) => React.JSX.Element;
