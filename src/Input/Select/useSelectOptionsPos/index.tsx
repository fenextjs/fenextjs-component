import React, { ReactNode, useCallback, useEffect, useState } from "react";
import * as ReactDOM from "react-dom";

export interface useSelectOptionsPosProps {
    idSelectOptions?: string;
    children?: ReactNode;
    target?: HTMLElement | null | undefined;
}

export const useSelectOptionsPos = ({
    idSelectOptions,
    children,
    target,
}: useSelectOptionsPosProps) => {
    const [ref, setRef] = useState<HTMLElement | undefined>(undefined);

    const onLoadRef = () => {
        const ID = `fenext-select${idSelectOptions ? `-${idSelectOptions}` : ""}`;
        let ele = document.getElementById(ID);
        if (!ele) {
            ele = document.createElement("div");
            ele.id = ID;
            ele.classList.value = `
                fenext-use-select-options-pos
            `;
            document.body.append(ele);
        }
        ele = document.getElementById(ID);
        if (ele) {
            setRef(ele);
        }
    };
    useEffect(onLoadRef, []);

    const onLoadPos = useCallback(() => {
        if (ref && target) {
            const bounding = target.getBoundingClientRect();
            ReactDOM.render(<>{children}</>, ref);

            ref.style.setProperty("--element-width", `${target.offsetWidth}px`);
            ref.style.setProperty("--element-top", `${bounding.top}px`);
            ref.style.setProperty("--element-left", `${bounding.left}px`);
            ref.style.setProperty("--element-bottom", `${bounding.bottom}px`);

            ref.setAttribute(
                "fenext-direction-pos",
                bounding.top > window?.innerHeight - bounding.bottom
                    ? "top"
                    : "bottom",
            );
        }
    }, [children, target, ref]);

    const onLoadChildren = useCallback(() => {
        if (ref) {
            ReactDOM.render(<>{children}</>, ref);
        }
    }, [children, ref]);

    return {
        ref,
        onLoadPos,
        onLoadChildren,
    };
};
