import { ReactNode } from "react";
export interface useSelectOptionsPosProps {
    id: string;
    tag?: keyof HTMLElementTagNameMap;
    children?: ReactNode;
    target?: HTMLElement | null | undefined;
}
export declare const useSelectOptionsPos: <ELEMENT extends HTMLElement>({ id, tag, children, target, }: useSelectOptionsPosProps) => {
    ref: ELEMENT | undefined;
    uuid: string;
    onLoadPos: () => void;
};
