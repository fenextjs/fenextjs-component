import { ReactNode } from "react";
export interface useSelectOptionsPosProps {
    children?: ReactNode;
    target?: HTMLElement | null | undefined;
}
export declare const useSelectOptionsPos: ({ children, target, }: useSelectOptionsPosProps) => {
    ref: HTMLElement | undefined;
    onLoadPos: () => void;
    onLoadChildren: () => void;
};
