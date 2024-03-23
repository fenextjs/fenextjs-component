import { useRender } from "fenextjs-hook";
import { ReactNode, useEffect, useState } from "react";

export interface useModalPosProps {
    id: string;
    tag?: keyof HTMLElementTagNameMap;
    children?: ReactNode;
}

export const useModalPos = <ELEMENT extends HTMLElement>({
    id,
    tag = "div",
    children,
}: useModalPosProps) => {
    const [ref, setRef] = useState<ELEMENT | undefined>(undefined);
    const { uuid } = useRender({
        children,
        ref,
    });

    const onLoadRef = () => {
        const ID = id + "-" + uuid;
        let ele = document.getElementById(ID);
        if (!ele) {
            ele = document.createElement(tag);
            ele.id = ID;
            ele.classList.value = `
                fenext-use-modal-pos
            `;
            const root =
                document?.getElementById?.("__next") ??
                document?.getElementById?.("storybook-root") ??
                document.body;
            root.append(ele);
        }
        ele = document.getElementById(ID);
        if (ele) {
            ele.setAttribute("uuid", uuid);
            setRef(ele as ELEMENT);
        }
    };
    useEffect(onLoadRef, []);

    return {
        ref,
        uuid,
    };
};
