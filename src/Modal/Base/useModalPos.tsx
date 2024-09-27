import { useRender } from "fenextjs-hook";
import { ReactNode, useEffect, useState } from "react";

export interface useModalPosProps {
    id: string;
    tag?: keyof HTMLElementTagNameMap;
    children?: ReactNode;
    activeLoad?: boolean;
}

export const useModalPos = <ELEMENT extends HTMLElement>({
    id,
    tag = "div",
    children,
    activeLoad = true,
}: useModalPosProps) => {
    const [ref, setRef] = useState<ELEMENT | undefined>(undefined);

    const { uuid } = useRender({
        children,
        ref,
    });

    const onLoadRef = () => {
        if (!activeLoad) {
            return;
        }
        const ID = id + "-" + uuid;
        let ele = document.getElementById(ID);
        if (!ele) {
            ele = document.createElement(tag);
            ele.id = ID;
            ele.classList.value = `
                fenext-use-modal-pos
            `;
            document.body.append(ele);
        }
        ele = document.getElementById(ID);
        if (ele) {
            ele.setAttribute("uuid", uuid);
            setRef(ele as ELEMENT);
        }
    };
    useEffect(onLoadRef, [activeLoad]);

    return {
        ref,
        uuid,
    };
};
