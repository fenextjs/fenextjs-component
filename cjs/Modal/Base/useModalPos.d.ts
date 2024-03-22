import { ReactNode } from "react";
export interface useModalPosProps {
    id: string;
    tag?: keyof HTMLElementTagNameMap;
    children?: ReactNode;
}
export declare const useModalPos: <ELEMENT extends HTMLElement>({ id, tag, children, }: useModalPosProps) => {
    ref: ELEMENT | undefined;
    uuid: string;
};
