import { ReactNode } from "react";
export interface useSelectOptionsPosProps {
    idSelectOptions?: string;
    children?: ReactNode;
    target?: HTMLElement | null | undefined;
}
export declare const useSelectOptionsPos: ({ idSelectOptions, children, target, }: useSelectOptionsPosProps) => {
    ref: HTMLElement | undefined;
    onLoadPos: () => void;
    onLoadChildren: () => void;
};
