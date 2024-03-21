import React, { ReactNode, useEffect, useMemo, useState } from "react";
import * as ReactDOM from "react-dom";

export interface useSelectOptionsPosProps {
    id: string;
    tag?: keyof HTMLElementTagNameMap;
    children?: ReactNode;
    target?: HTMLElement | null | undefined;
}

export const useSelectOptionsPos = <ELEMENT extends HTMLElement>({
    id,
    tag = "div",
    children,
    target,
}: useSelectOptionsPosProps) => {
    const [ref, setRef] = useState<ELEMENT | undefined>(undefined);
    const uuid = useMemo(
        () => `${Math.ceil(new Date().getTime() * Math.random())}`,
        [],
    );

    const onLoadRef = () => {
        const ID = id + "-" + uuid;
        let ele = document.getElementById(ID);
        if (!ele) {
            ele = document.createElement(tag);
            ele.id = ID;
            ele.classList.value = `
                fenext-use-select-options-pos
            `;
            document.body.append(ele);
        }
        ele = document.getElementById(ID);
        if (ele) {
            ele.setAttribute("uuid", uuid);
            setRef(ele as ELEMENT);
        }
    };
    useEffect(onLoadRef, []);

    const onLoadChildren = () => {
        if (ref) {
            ReactDOM.render(<>{children}</>, ref);
        }
    };
    useEffect(onLoadChildren, [children, ref]);

    const onLoadPos = () => {
        if (ref && target) {
            const bounding = target.getBoundingClientRect();

            ref.style.setProperty("--element-width", `${target.offsetWidth}px`);
            ref.style.setProperty("--element-top", `${bounding.top}px`);
            ref.style.setProperty("--element-left", `${bounding.left}px`);
            ref.style.setProperty("--element-bottom", `${bounding.bottom}px`);

            ref.setAttribute(
                "fenext-direction-pos",
                bounding.top > (window?.innerHeight - bounding.bottom) ? "top" : "bottom",
            );
        }
    };
    useEffect(onLoadPos, [target, ref]);

    return {
        ref,
        uuid,
        onLoadPos,
    };
};
