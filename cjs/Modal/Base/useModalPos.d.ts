import { ReactNode } from "react";
export interface useModalPosProps {
    id: string;
    tag?: keyof HTMLElementTagNameMap;
    children?: ReactNode;
    activeLoad?: boolean;
}
export declare const useModalPos: <ELEMENT extends HTMLElement>({ id, tag, children, activeLoad, }: useModalPosProps) => {
    ref: ELEMENT | undefined;
    uuid: string;
};
